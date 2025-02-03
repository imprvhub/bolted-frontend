import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="bg-black/30 backdrop-blur-md border border-white/20 rounded-b-2xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="/assets/logos/logo512.png" 
                alt="Bolted Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-center text-white">
                Bolted
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#features" 
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <button 
              className="text-sm inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;