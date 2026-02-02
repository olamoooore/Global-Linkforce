import React, { useState } from 'react';
import { ChevronRight, Phone, ArrowRight, Quote, ChevronDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, FAQS, PHONE_NUMBER } from '../constants';
import { Button } from '../components/Button';
import * as Icons from 'lucide-react';

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  }

  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-36">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15] grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            Operational Intelligence Online
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Strategic <span className="text-orange-500">Global</span> Operations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">Simplified by AI.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed font-light">
            The central nervous system for your Transportation, Logistics, and Procurement needs. 
            Powered by next-generation AI for instant booking, routing, and supply chain visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="shadow-2xl shadow-orange-600/20 ring-4 ring-orange-500/10">
               Interact with AI Agent
            </Button>
            <a href="#services">
                <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white">
                Explore Capabilities
                </Button>
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-500 border-t border-slate-800 pt-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                 <span className="text-2xl font-bold text-white">99.9%</span>
                 <span className="text-xs uppercase tracking-wider mt-1">Uptime Reliability</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-2xl font-bold text-white">24/7</span>
                 <span className="text-xs uppercase tracking-wider mt-1">AI & Human Support</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-2xl font-bold text-white">HIPAA</span>
                 <span className="text-xs uppercase tracking-wider mt-1">Compliant Services</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-2xl font-bold text-white">Global</span>
                 <span className="text-xs uppercase tracking-wider mt-1">Logistics Network</span>
              </div>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Our Ecosystem</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-6">Core Operational Divisions</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Integrated service verticals managed through a single corporate dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <Link 
                to={`/services/${service.id}`}
                key={service.id} 
                className="group relative bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-900/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  {renderIcon(service.iconName, "w-7 h-7")}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {service.shortDescription}
                </p>
                
                <div className="mt-auto flex items-center text-orange-600 font-bold text-sm tracking-wide group-hover:gap-2 transition-all">
                  BOOK SERVICE <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- Voice Agent Promo --- */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
             <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="p-10 sm:p-16 flex flex-col justify-center">
                 <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-slate-700 border border-slate-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Phone className="w-3 h-3 text-orange-400" /> Live Intelligence
                 </div>
                 <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                   Speak directly to <br />
                   <span className="text-orange-500">The Network.</span>
                 </h2>
                 <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                   No keypads. No hold music. Our advanced Voice AI understands complex logistics requests, schedules NEMT rides, and tracks freight in real-time. 
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-white text-slate-900 font-bold hover:bg-orange-50 transition-colors shadow-lg">
                     <Phone className="w-5 h-5 mr-2 text-orange-600" /> Call {PHONE_NUMBER}
                   </a>
                 </div>
               </div>
               <div className="bg-slate-800 relative min-h-[400px] flex items-center justify-center border-l border-slate-700">
                  <div className="relative w-full max-w-sm mx-auto p-6">
                      {/* Audio Wave Visual */}
                      <div className="flex justify-center items-end gap-1 h-24 mb-8">
                         {[...Array(20)].map((_, i) => (
                             <div key={i} className="w-2 bg-gradient-to-t from-orange-600 to-orange-400 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }}></div>
                         ))}
                      </div>
                      <div className="text-center space-y-2">
                          <p className="text-white font-medium text-lg">"Status of shipment #9921?"</p>
                          <p className="text-orange-400 font-medium">"Your shipment is out for delivery, arriving by 2:00 PM."</p>
                      </div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Trust & Reliability</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Client Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
                  <Quote className="w-10 h-10 text-orange-100 absolute top-6 right-6" />
                  <div className="flex text-orange-400 mb-4">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                     <p className="font-bold text-slate-900">{t.author}</p>
                     <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{t.role}</p>
                     <p className="text-xs text-orange-600 font-bold">{t.company}</p>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-2">Common questions about our AI-integrated services.</p>
           </div>
           
           <div className="space-y-4">
             {FAQS.map((faq, idx) => (
               <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-orange-200">
                 <button 
                   onClick={() => toggleFaq(idx)}
                   className="w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-orange-50/50 transition-colors"
                 >
                   <span className="font-bold text-slate-800">{faq.question}</span>
                   <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-orange-600' : ''}`} />
                 </button>
                 {openFaq === idx && (
                   <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in slide-in-from-top-2">
                     {faq.answer}
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </section>
    </>
  );
};