import React from 'react';
import { useModal } from '../contexts/ModalContext';

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer className="fixed bottom-0 w-full z-50">
      <div className="mb-0 bg-black/20 backdrop-blur-md border border-white/10 rounded-t-2xl shadow-lg">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
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
              <p className="text-white/80 text-sm max-w-md">
                The spark behind lightning-fast URLs.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/90 tracking-wider uppercase mb-4">
                Connect
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://ivanluna.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white"
                >
                  <img src="/assets/icons/ivanlunadev.png" alt="Portfolio" className="h-6 w-6 rounded" />
                </a>
                <a
                  href="https://github.com/imprvhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <img src="/assets/icons/github-icon.png" alt="GitHub" className="h-6 w-6 rounded" />
                </a>
                <a
                  href="https://linkedin.com/in/ivanluna-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white"
                >
                  <img src="/assets/icons/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6 rounded" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/90 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={openModal}
                    className="text-sm px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white"
                  >
                    Terms & Privacy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-sm text-white/60">
              © 2025 Iván Luna. Software Developer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;