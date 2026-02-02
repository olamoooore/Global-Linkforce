import React, { useEffect } from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
         <div className="absolute inset-0 z-0">
             <div className="absolute top-0 left-1/2 -ml-[40rem] -mt-20 w-[80rem] h-[80rem] bg-orange-600 rounded-full mix-blend-overlay filter blur-[120px] opacity-10"></div>
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
                 Who We Are
             </h1>
             <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
                 Global Linkforce Inc. is a technology-first operations partner. We bridge the gap between complex logistical requirements and seamless execution.
             </p>
         </div>
      </div>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                      <div className="w-20 h-1 bg-orange-600 mb-8"></div>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          At Global Linkforce, our mission is to empower organizations by simplifying their most critical operational challenges. Whether it's moving a patient safely to dialysis, shipping urgent freight across the ocean, or sourcing vital materials, we provide the infrastructure and intelligence to make it happen.
                      </p>
                      <p className="text-lg text-slate-600 leading-relaxed">
                          We were founded on the belief that logistics shouldn't be a bottleneck—it should be a competitive advantage. By integrating advanced AI with a human-centric approach to service, we are redefining what it means to be a corporate services partner.
                      </p>
                  </div>
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-600 rounded-2xl transform translate-x-4 translate-y-4"></div>
                      <img 
                          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                          alt="Team meeting" 
                          className="relative rounded-2xl shadow-xl z-10"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
                  <p className="text-slate-500 mt-4 max-w-2xl mx-auto">The principles that guide every pickup, every delivery, and every interaction.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                          <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity & Safety</h3>
                      <p className="text-slate-600 text-sm">We operate with unwavering adherence to compliance standards (HIPAA, DOT) and ethical practices.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                          <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Precision</h3>
                      <p className="text-slate-600 text-sm">Logistics is a game of inches and minutes. We utilize technology to ensure accuracy in every transaction.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 text-teal-600">
                          <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Centricity</h3>
                      <p className="text-slate-600 text-sm">We are humans serving humans. Technology aids us, but our commitment to people drives us.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                          <Award className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
                      <p className="text-slate-600 text-sm">We don't just meet expectations; we aim to set the industry benchmark for reliability.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to work with a partner who understands your needs?</h2>
              <p className="text-orange-100 text-lg mb-8">
                  Whether you are a hospital administrator, a supply chain manager, or a business owner, Global Linkforce is ready to serve.
              </p>
              <div className="flex justify-center gap-4">
                  <a href="/#/services/transport-nemt" className="bg-white text-orange-600 px-8 py-3 rounded-md font-bold hover:bg-slate-100 transition-colors">View Services</a>
                  <a href={`tel:+18005550199`} className="bg-orange-700 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-800 transition-colors border border-orange-500">Contact Us</a>
              </div>
          </div>
      </section>
    </div>
  );
};