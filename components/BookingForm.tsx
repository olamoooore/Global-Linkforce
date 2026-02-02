import React, { useState } from 'react';
import { MapPin, Truck, Package, User, CheckCircle, AlertTriangle } from 'lucide-react';
import { ServiceDetail, BookingFormState, ServiceCategory } from '../types';
import { Button } from './Button';

interface BookingFormProps {
  service: ServiceDetail;
}

export const BookingForm: React.FC<BookingFormProps> = ({ service }) => {
  const [formState, setFormState] = useState<BookingFormState>({
    name: '', email: '', phone: '', serviceType: service.title, notes: '',
    pickupLocation: '', dropoffLocation: '', appointmentTime: '', mobilityNeeds: 'Ambulatory', isRoundTrip: false,
    cargoDescription: '', weightEstimate: '', originAddress: '', destinationAddress: '', freightMode: 'Ground',
    productCategory: '', quantity: '', targetBudget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormState(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting booking for:", service.title, formState);
    setTimeout(() => setIsSubmitted(true), 1500);
  };

  const renderFormFields = () => {
    switch (service.category) {
      case ServiceCategory.TRANSPORTATION:
        return (
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4">
            <h4 className="text-sm font-bold text-orange-900 mb-3 flex items-center"><MapPin className="w-4 h-4 mr-2"/> Trip Details</h4>
            <div className="grid grid-cols-1 gap-4">
              <div><label className="label">Pickup Address</label><input required name="pickupLocation" type="text" className="form-input" onChange={handleInputChange} /></div>
              <div><label className="label">Drop-off Address</label><input required name="dropoffLocation" type="text" className="form-input" onChange={handleInputChange} /></div>
              <div><label className="label">Appointment Time</label><input required name="appointmentTime" type="datetime-local" className="form-input" onChange={handleInputChange} /></div>
              <div>
                 <label className="label">Mobility Requirements</label>
                 <select name="mobilityNeeds" className="form-input" onChange={handleInputChange}>
                   <option value="Ambulatory">Ambulatory (Can Walk)</option>
                   <option value="Wheelchair">Wheelchair Accessible</option>
                   <option value="Stretcher">Stretcher / Gurney</option>
                 </select>
              </div>
            </div>
          </div>
        );
      case ServiceCategory.LOGISTICS:
      case ServiceCategory.SHIPPING:
        return (
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center"><Truck className="w-4 h-4 mr-2"/> Shipment Spec</h4>
            <div className="grid grid-cols-1 gap-4">
              <div><label className="label">Origin</label><input required name="originAddress" type="text" className="form-input" onChange={handleInputChange} /></div>
              <div><label className="label">Destination</label><input required name="destinationAddress" type="text" className="form-input" onChange={handleInputChange} /></div>
              <div><label className="label">Cargo Desc</label><input required name="cargoDescription" type="text" className="form-input" onChange={handleInputChange} /></div>
              <div>
                 <label className="label">Mode</label>
                 <select name="freightMode" className="form-input" onChange={handleInputChange}>
                   <option value="Ground">Ground</option>
                   <option value="Air">Air Freight</option>
                   <option value="Ocean">Ocean</option>
                 </select>
              </div>
            </div>
          </div>
        );
      case ServiceCategory.PROCUREMENT:
        return (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
            <h4 className="text-sm font-bold text-blue-900 mb-3 flex items-center"><Package className="w-4 h-4 mr-2"/> Sourcing Request</h4>
            <div className="grid grid-cols-1 gap-4">
              <div><label className="label">Category</label><input required name="productCategory" type="text" className="form-input" onChange={handleInputChange} /></div>
              <div><label className="label">Quantity</label><input required name="quantity" type="text" className="form-input" onChange={handleInputChange} /></div>
              <div><label className="label">Target Budget</label><input name="targetBudget" type="text" className="form-input" onChange={handleInputChange} /></div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-xl border border-orange-100 flex flex-col items-center justify-center text-center animate-in zoom-in h-full">
         <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
           <CheckCircle className="w-8 h-8" />
         </div>
         <h3 className="text-xl font-bold text-slate-900 mb-2">Received</h3>
         <p className="text-slate-600 mb-6">Ref: #{Math.floor(Math.random() * 10000)}. <br/>A specialized agent will contact you shortly.</p>
         <Button variant="outline" onClick={() => setIsSubmitted(false)}>New Request</Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-slate-200">
      <div className="mb-6 pb-6 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-900">Request {service.title}</h3>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Secure Operational Form</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <style>{`
            .form-input { width: 100%; border: 1px solid #e2e8f0; border-radius: 0.375rem; padding: 0.625rem; font-size: 0.875rem; outline: none; transition: all 0.2s; }
            .form-input:focus { border-color: #ea580c; box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1); }
            .label { display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 0.25rem; text-transform: uppercase; }
        `}</style>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="col-span-1 md:col-span-2"><label className="label">Full Name</label><input required name="name" type="text" className="form-input" onChange={handleInputChange} /></div>
           <div><label className="label">Email</label><input required name="email" type="email" className="form-input" onChange={handleInputChange} /></div>
           <div><label className="label">Phone</label><input required name="phone" type="tel" className="form-input" onChange={handleInputChange} /></div>
        </div>

        {/* Dynamic Fields */}
        {renderFormFields()}

        <div>
          <label className="label">Additional Notes</label>
          <textarea name="notes" rows={3} className="form-input" onChange={handleInputChange}></textarea>
        </div>

        {service.category === ServiceCategory.TRANSPORTATION && (
             <div className="flex items-start gap-2 text-xs text-orange-800 bg-orange-50 p-2 rounded">
               <AlertTriangle className="w-4 h-4 shrink-0" />
               <p>No PHI (Health Records) in this form.</p>
             </div>
        )}

        <Button type="submit" className="w-full h-12 text-base shadow-lg shadow-orange-200">
          Submit Secure Request
        </Button>
      </form>
    </div>
  );
};