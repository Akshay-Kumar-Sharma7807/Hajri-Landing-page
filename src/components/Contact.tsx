import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tally: any;
  }
}

const Contact: React.FC = () => {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-24 bg-transparent">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
      
      <div className="w-full max-w-4xl bg-gray-800/50 rounded-xl p-8 border border-gray-700">
        <p className="text-gray-300 mb-6 text-center">Have questions or need assistance? Fill out the form below and our team will get back to you as soon as possible.</p>
        <iframe data-tally-src="https://tally.so/embed/3xbDo5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="276" frameBorder="0" marginHeight="0" marginWidth="0" title="Contact form"></iframe>
      </div>
      
      <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-white font-bold mb-2">Email Us</h3>
          <p className="text-gray-300">support@hajri.com</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-white font-bold mb-2">Call Us</h3>
          <p className="text-gray-300">+1 (555) 123-4567</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-white font-bold mb-2">Visit Us</h3>
          <p className="text-gray-300">123 Tech Street, San Francisco, CA 94107</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;