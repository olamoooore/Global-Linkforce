import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { BookingForm } from '../components/BookingForm';
import { ArrowLeft, CheckCircle, Shield } from 'lucide-react';
import * as Icons from 'lucide-react';

export const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Service Not Found</h2>
            <Link to="/" className="text-orange-600 hover:underline mt-4 block">Return Home</Link>
        </div>
      </div>
    );
  }

  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-slate-900 pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Gateway
           </Link>
           <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                {renderIcon(service.iconName, "w-6 h-6 text-white")}
             </div>
             <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">{service.category} Division</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{service.title}</h1>
           <p className="text-xl text-slate-300 max-w-3xl font-light">{service.shortDescription}</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Overview</h2>
                    <p className="text-slate-600 leading-relaxed text-lg mb-8">
                        {service.fullDescription}
                    </p>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Core Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.capabilities.map((cap, idx) => (
                            <div key={idx} className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                                <span className="font-medium text-slate-700">{cap}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-900 rounded-xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                    <div className="relative z-10 flex items-start gap-4">
                        <Shield className="w-10 h-10 text-orange-400 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Enterprise Grade Security</h3>
                            <p className="text-blue-100">
                                Every request processed through this portal is encrypted and handled according to strict corporate compliance standards.
                                {service.category === 'Transportation' && ' Full HIPAA compliance protocols enabled for all medical transport requests.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Sticky Booking Form */}
            <div className="lg:col-span-1">
                <div className="sticky top-28">
                    <BookingForm service={service} />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};