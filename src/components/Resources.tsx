import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-24 bg-transparent">
      <h1 className="text-4xl font-bold text-white mb-8">Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Resource Card 1 */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
          <div className="text-primary-500 text-lg font-semibold mb-2">Guide</div>
          <h3 className="text-white text-xl font-bold mb-3">Getting Started with Hajri</h3>
          <p className="text-gray-300 mb-4">Learn the basics of setting up and using our geolocation attendance system.</p>
          <a href="#" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Resource Card 2 */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
          <div className="text-primary-500 text-lg font-semibold mb-2">Whitepaper</div>
          <h3 className="text-white text-xl font-bold mb-3">The Future of Attendance Tracking</h3>
          <p className="text-gray-300 mb-4">Explore how geolocation technology is transforming attendance management.</p>
          <a href="#" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
            Download PDF
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Resource Card 3 */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
          <div className="text-primary-500 text-lg font-semibold mb-2">Tutorial</div>
          <h3 className="text-white text-xl font-bold mb-3">Advanced Geofencing Techniques</h3>
          <p className="text-gray-300 mb-4">Master the advanced features of our geofencing technology for better accuracy.</p>
          <a href="#" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
            Watch Video
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Resource Card 4 */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
          <div className="text-primary-500 text-lg font-semibold mb-2">Case Study</div>
          <h3 className="text-white text-xl font-bold mb-3">How XYZ Corp Improved Attendance by 45%</h3>
          <p className="text-gray-300 mb-4">Learn how a leading corporation transformed their attendance management.</p>
          <a href="#" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
            Read Case Study
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Resource Card 5 */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
          <div className="text-primary-500 text-lg font-semibold mb-2">FAQ</div>
          <h3 className="text-white text-xl font-bold mb-3">Frequently Asked Questions</h3>
          <p className="text-gray-300 mb-4">Find answers to common questions about our geolocation attendance system.</p>
          <a href="#" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
            View FAQs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Resource Card 6 */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
          <div className="text-primary-500 text-lg font-semibold mb-2">API Docs</div>
          <h3 className="text-white text-xl font-bold mb-3">Developer Documentation</h3>
          <p className="text-gray-300 mb-4">Comprehensive API documentation for developers integrating our system.</p>
          <a href="#" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
            Explore API
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;