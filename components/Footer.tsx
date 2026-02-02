import React from 'react';
import { Phone, MapPin, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                </div>
                <span className="text-lg font-bold text-white tracking-wide">Global Linkforce Inc.</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Empowering businesses and healthcare providers with intelligent logistics, secure transportation, and strategic procurement solutions.
              </p>
              <div className="mt-6 flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"><span className="sr-only">LinkedIn</span>in</div>
                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"><span className="sr-only">Twitter</span>x</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/services/transport-nemt" className="hover:text-orange-500 transition-colors">Transportation & NEMT</Link></li>
                <li><Link to="/services/logistics-local" className="hover:text-orange-500 transition-colors">Advanced Logistics</Link></li>
                <li><Link to="/services/shipping-freight" className="hover:text-orange-500 transition-colors">Global Freight</Link></li>
                <li><Link to="/services/procurement-sourcing" className="hover:text-orange-500 transition-colors">Procurement</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-orange-500"/> {PHONE_NUMBER}</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-orange-500"/> Corporate HQ, New York</li>
                <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-green-500"/> HIPAA Compliant</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Global Linkforce Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
    </footer>
  );
};