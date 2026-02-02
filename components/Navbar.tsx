import React, { useState } from 'react';
import { Menu, X, Phone, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { PHONE_NUMBER } from '../constants';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
               <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-extrabold text-xl">G</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-orange-600 transition-colors">Global Linkforce</span>
                 <span className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase mt-1">International Inc.</span>
               </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/#services" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-wide">Services</Link>
              <Link to="/#testimonials" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-wide">Success Stories</Link>
              <Link to="/#faq" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-wide">FAQ</Link>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Technology Portfolio coming soon'); }} className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors flex items-center gap-1 uppercase tracking-wide">
                Tech <Cpu className="w-3 h-3" />
              </a>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <Button size="sm" className="shadow-lg shadow-orange-100">
                <Phone className="w-3 h-3 mr-2" /> {PHONE_NUMBER}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600 hover:text-orange-600 transition-colors" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-5">
            <div className="px-4 pt-4 pb-8 space-y-3">
              <Link to="/#services" className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors" onClick={toggleMobileMenu}>Services</Link>
              <Link to="/#testimonials" className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors" onClick={toggleMobileMenu}>Testimonials</Link>
              <Link to="/#faq" className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors" onClick={toggleMobileMenu}>FAQ</Link>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Button className="w-full justify-center h-12 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> Call Agent
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
  );
};