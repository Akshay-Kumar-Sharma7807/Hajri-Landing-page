import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const Pricing = () => {
  return (
    // Add at the beginning of the Pricing component return statement
    <section id="pricing" className="pricing-section py-20">
      <h2 className="text-4xl font-bold text-center gradient-text mb-4">Simple, Transparent Pricing</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">Choose the plan that works best for your organization's needs</p>
      
      <div className="pricing-cards flex flex-col md:flex-row justify-center md:space-x-6 space-y-8 md:space-y-0">
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-xl p-8 w-full md:w-80 transform transition-transform hover:scale-105 border border-gray-700 hover:border-primary-500/50 hover:shadow-glow">
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-400">STARTER</span>
            <h3 className="text-2xl font-semibold text-white mt-2 mb-4">Basic Plan</h3>
            <p className="text-3xl font-bold text-white mb-4">$10<span className="text-lg text-gray-400 font-normal">/month</span></p>
            <p className="text-gray-400 mb-6">Perfect for small teams and startups</p>
          </div>
          <ul className="text-white space-y-3 mb-8">
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-primary-500" />Up to 10 employees</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-primary-500" />Basic reporting</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-primary-500" />Email support</li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-white/10 text-white hover:bg-primary-500 transition-all duration-300">Get Started</button>
        </div>
        
        <div className="card relative bg-gradient-to-br from-primary-900 to-gray-900 shadow-xl rounded-xl p-8 w-full md:w-80 transform transition-transform hover:scale-105 border border-primary-700 hover:border-primary-500 hover:shadow-glow-lg">
          <div className="absolute -top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
          <div className="mb-6">
            <span className="text-sm font-medium text-primary-300">PROFESSIONAL</span>
            <h3 className="text-2xl font-semibold text-white mt-2 mb-4">Pro Plan</h3>
            <p className="text-3xl font-bold text-white mb-4">$20<span className="text-lg text-primary-300 font-normal">/month</span></p>
            <p className="text-gray-300 mb-6">For growing businesses</p>
          </div>
          <ul className="text-white space-y-3 mb-8">
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-primary-400" />Up to 50 employees</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-primary-400" />Advanced reporting</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-primary-400" />Priority support</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-primary-400" />API access</li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300">Get Started</button>
        </div>
        
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-xl p-8 w-full md:w-80 transform transition-transform hover:scale-105 border border-gray-700 hover:border-secondary-500/50 hover:shadow-glow">
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-400">ENTERPRISE</span>
            <h3 className="text-2xl font-semibold text-white mt-2 mb-4">Enterprise Plan</h3>
            <p className="text-3xl font-bold text-white mb-4">Custom</p>
            <p className="text-gray-400 mb-6">For large organizations</p>
          </div>
          <ul className="text-white space-y-3 mb-8">
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-secondary-500" />Unlimited employees</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-secondary-500" />Custom reporting</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-secondary-500" />24/7 dedicated support</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-secondary-500" />Custom integrations</li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-white/10 text-white hover:bg-secondary-500 transition-all duration-300">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
