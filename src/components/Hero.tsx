import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { FeatureGrid } from './FeatureGrid';

export function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signing up for the waiting list
    console.log(`Signing up ${email} for the waiting list...`);
    setSubmitted(true);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="animate-slide-up">
        <div className="inline-block px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/30 text-primary-400 text-xs font-semibold mb-6">
          NEW FEATURE: GEOFENCING TECHNOLOGY
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-white">
          Real-Time
          <span className="block gradient-text">Attendance Tracking</span>
          Made Simple
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-xl">
          Track attendance with precision using advanced geolocation. Perfect for schools, businesses, and organizations of any size.
        </p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              required
            />
            <button type="submit" className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-all duration-200 flex items-center justify-center shadow-glow font-medium">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        ) : (
          <div className="bg-primary-900/30 border border-primary-700/30 rounded-lg p-4 mb-8 animate-fade-in">
            <p className="text-white text-lg">Thank you for signing up! We'll be in touch soon.</p>
          </div>
        )}

        <div className="flex items-center space-x-8">
          <div className="flex -space-x-4">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-gray-800 hover:scale-110 transition-transform duration-200" alt="User" />
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-gray-800 hover:scale-110 transition-transform duration-200" alt="User" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-gray-800 hover:scale-110 transition-transform duration-200" alt="User" />
          </div>
          <p className="text-gray-400">
            <span className="text-white font-bold">1000+</span> companies trust us
          </p>
        </div>
        
        <div className="mt-8 flex items-center">
          <a href="#features" className="text-primary-400 hover:text-primary-300 flex items-center text-sm font-medium group">
            Explore features
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

      <div className="relative animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-600/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
        <div className="relative bg-gray-800/50 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm shadow-xl hover:border-primary-700/50 transition-all duration-500">
          <FeatureGrid />
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary-700/20 rounded-full blur-xl animate-pulse-slow delay-700"></div>
      </div>
    </div>
  );
}

export default Hero;
