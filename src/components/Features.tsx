import React from 'react';
import { Smartphone, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access attendance data from any device with our responsive mobile app"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption for all location data"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Instant notifications and live attendance status updates"
  }
];

export function Features() {
  return (
    // Add at the beginning of the Features component return statement
    <section id="features" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Powerful Features for Modern Workforce
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need to manage attendance efficiently and effectively
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
          >
            <div className="bg-primary-900/30 p-3 rounded-lg inline-block mb-6 group-hover:bg-primary-800/40 transition-all duration-300">
              <feature.icon className="h-8 w-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;