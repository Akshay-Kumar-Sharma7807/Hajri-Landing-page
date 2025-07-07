import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-transparent">
      <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
      <p className="text-lg text-white mb-2">Welcome to our company! We are dedicated to providing the best services to our customers.</p>
      <p className="text-lg text-white mb-2">Our team is composed of experienced professionals who are passionate about their work.</p>
      <p className="text-lg text-white">We believe in innovation, quality, and customer satisfaction.</p>
    </div>
  );
};

export default AboutUs;
