import React from 'react';
import { Users, Clock, MapPin, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Employee Tracking",
    description: "Real-time location-based attendance monitoring"
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Automated time tracking and reporting"
  },
  {
    icon: MapPin,
    title: "Geofencing",
    description: "Set location boundaries for accurate tracking"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Detailed insights and attendance reports"
  }
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-primary-600/50 transition-all duration-300 card-hover">
          <feature.icon className="h-8 w-8 text-primary-500 mb-4" />
          <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureGrid;