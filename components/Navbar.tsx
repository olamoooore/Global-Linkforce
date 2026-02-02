import React, { useState } from 'react';
import { Menu, X, Phone, Cpu, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { PHONE_NUMBER, SERVICES } from '../constants';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const handleServiceClick = (id: string) => {
    navigate(`/services/${id}`);
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
  };

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
            <nav className="hidden md:flex space-x-8 items-center h-full">
              {/* Services Dropdown */}
              <div 
                className="relative h-full flex items-center group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-wide flex items-center gap-1 focus:outline-none h-full">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-b-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-2">
                      {SERVICES.map((service) => (
                        <Link 
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-700 border-l-4 border-transparent hover:border-orange-500 transition-all"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-wide">About Us</Link>
              <Link to="/#testimonials" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-wide">Stories</Link>
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
          <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-4 pb-8 space-y-3">
              <div className="space-y-2">
                <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Our Services</div>
                {SERVICES.map((service) => (
                   <button 
                     key={service.id}
                     onClick={() => handleServiceClick(service.id)}
                     className="block w-full text-left px-4 py-2 text-base font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors pl-6 border-l-2 border-slate-100 hover:border-orange-500"
                   >
                     {service.title}
                   </button>
                ))}
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <Link to="/about" className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors" onClick={toggleMobileMenu}>About Us</Link>
              <Link to="/#testimonials" className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors" onClick={toggleMobileMenu}>Success Stories</Link>
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