import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, Calendar, MapPin, Truck, Package, DollarSign, User } from 'lucide-react';
import { ServiceDetail, BookingFormState, ServiceCategory } from '../types';
import { Button } from './Button';

interface ServiceModalProps {
  service: ServiceDetail;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'book'>('overview');
  const [formState, setFormState] = useState<BookingFormState>({
    name: '',
    email: '',
    phone: '',
    serviceType: service.title,
    notes: '',
    pickupLocation: '',
    dropoffLocation: '',
    appointmentTime: '',
    mobilityNeeds: 'Ambulatory',
    isRoundTrip: false,
    cargoDescription: '',
    weightEstimate: '',
    originAddress: '',
    destinationAddress: '',
    freightMode: 'Ground',
    productCategory: '',
    quantity: '',
    targetBudget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormState(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting detailed booking for:", service.title, formState);
    setTimeout(() => setIsSubmitted(true), 1500);
  };

  const renderFormFields = () => {
    switch (service.category) {
      case ServiceCategory.TRANSPORTATION:
        return (
          <>
            <div className="col-span-1 md:col-span-2 bg-orange-50 p-4 rounded-lg border border-orange-100 mb-2">
              <h4 className="text-sm font-bold text-orange-900 mb-3 flex items-center"><MapPin className="w-4 h-4 mr-2"/> Trip Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Pickup Address</label>
                   <input required name="pickupLocation" type="text" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Drop-off Address</label>
                   <input required name="dropoffLocation" type="text" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Appointment Time</label>
                   <input required name="appointmentTime" type="datetime-local" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Mobility Requirements</label>
                   <select name="mobilityNeeds" className="w-full form-input" onChange={handleInputChange}>
                     <option value="Ambulatory">Ambulatory (Can Walk)</option>
                     <option value="Wheelchair">Wheelchair Accessible</option>
                     <option value="Stretcher">Stretcher / Gurney</option>
                   </select>
                </div>
              </div>
            </div>
          </>
        );
      case ServiceCategory.LOGISTICS:
      case ServiceCategory.SHIPPING:
        return (
          <>
            <div className="col-span-1 md:col-span-2 bg-slate-50 p-4 rounded-lg border border-slate-200 mb-2">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center"><Truck className="w-4 h-4 mr-2"/> Shipment Specification</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Origin</label>
                   <input required name="originAddress" type="text" placeholder="City, Zip, or Facility" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Destination</label>
                   <input required name="destinationAddress" type="text" placeholder="City, Zip, or Facility" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Cargo Description</label>
                   <input required name="cargoDescription" type="text" placeholder="e.g. Pallets, Documents" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Mode</label>
                   <select name="freightMode" className="w-full form-input" onChange={handleInputChange}>
                     <option value="Ground">Ground (Standard)</option>
                     <option value="Air">Air Freight (Expedited)</option>
                     <option value="Ocean">Ocean (International)</option>
                   </select>
                </div>
              </div>
            </div>
          </>
        );
      case ServiceCategory.PROCUREMENT:
        return (
          <>
             <div className="col-span-1 md:col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-100 mb-2">
              <h4 className="text-sm font-bold text-blue-900 mb-3 flex items-center"><Package className="w-4 h-4 mr-2"/> Sourcing Request</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Product Category</label>
                   <input required name="productCategory" type="text" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Quantity Required</label>
                   <input required name="quantity" type="text" className="w-full form-input" onChange={handleInputChange} />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Target Budget (USD)</label>
                   <input name="targetBudget" type="text" className="w-full form-input" onChange={handleInputChange} />
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{service.title}</h2>
            <div className="flex items-center mt-1">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">{service.category} DIVISION</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50/50">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-4 text-sm font-bold tracking-wide uppercase transition-all ${activeTab === 'overview' ? 'text-orange-600 border-b-2 border-orange-600 bg-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`}
          >
            Service Overview
          </button>
          <button 
            onClick={() => setActiveTab('book')}
            className={`flex-1 py-4 text-sm font-bold tracking-wide uppercase transition-all ${activeTab === 'book' ? 'text-orange-600 border-b-2 border-orange-600 bg-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`}
          >
            Request Service
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          <style>{`
            .form-input {
                width: 100%;
                border: 1px solid #e2e8f0;
                border-radius: 0.375rem;
                padding: 0.625rem 0.875rem;
                font-size: 0.875rem;
                color: #1e293b;
                outline: none;
                transition: all 0.2s;
            }
            .form-input:focus {
                border-color: #ea580c;
                box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
            }
          `}</style>

          {activeTab === 'overview' ? (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="prose prose-slate max-w-none">
                 <p className="text-lg text-slate-700 leading-relaxed font-light">
                   {service.fullDescription}
                 </p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-4 border-orange-500 pl-3">Operational Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-orange-200 transition-colors">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {service.category === ServiceCategory.TRANSPORTATION && (
                 <div className="bg-orange-50/50 border border-orange-200 p-4 rounded-lg flex items-start gap-3">
                   <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                   <div>
                       <h5 className="text-sm font-bold text-orange-900">Compliance Notice</h5>
                       <p className="text-xs text-orange-800 mt-1">
                         We strictly adhere to HIPAA regulations. Please use this digital form for logistics scheduling only. Do not transmit sensitive patient health records (PHI) through this channel.
                       </p>
                   </div>
                 </div>
              )}

              <div className="pt-4 flex justify-end">
                 <Button onClick={() => setActiveTab('book')} size="lg" className="w-full sm:w-auto shadow-xl shadow-orange-200">
                   Start Booking Process
                 </Button>
              </div>
            </div>
          ) : (
            <div className="h-full">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center animate-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Logged Successfully</h3>
                  <p className="text-slate-600 max-w-md mb-8">
                    Your reference ID is <span className="font-mono text-slate-900 font-bold">#{Math.floor(Math.random() * 10000)}</span>. <br/>
                    Our operations team or AI agent will review your specifics and contact you within 15 minutes.
                  </p>
                  <Button variant="outline" onClick={onClose}>Return to Gateway</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 animate-in slide-in-from-right-4 duration-300">
                  
                  {/* Common Fields */}
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center"><User className="w-4 h-4 mr-2"/> Contact Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Full Name</label>
                          <input 
                            required name="name" type="text" 
                            className="form-input"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Company / Organization</label>
                          <input 
                            name="company" type="text" 
                            className="form-input"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Email Address</label>
                          <input 
                            required name="email" type="email" 
                            className="form-input"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Direct Phone</label>
                          <input 
                            required name="phone" type="tel" 
                            className="form-input"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                  </div>

                  {/* Dynamic Fields */}
                  {renderFormFields()}

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Additional Instructions / Notes</label>
                    <textarea 
                      name="notes" rows={3}
                      placeholder="Any special access codes, gate instructions, or priority handling notes..."
                      className="form-input"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full shadow-lg shadow-orange-200">
                      Confirm Request
                    </Button>
                    <p className="text-[10px] text-slate-400 text-center mt-3">
                      By submitting this secure form, you agree to Global Linkforce's Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};