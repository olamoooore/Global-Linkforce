import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-orange-200 selection:text-orange-900">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServicePage />} />
          </Routes>
        </main>

        <Footer />
        <AIChatWidget />
      </div>
    </Router>
  );
};

export default App;