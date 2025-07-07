import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Education",
      description: "Track student attendance across campus with geofencing technology. Reduce administrative burden and increase accuracy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      features: [
        "Automated class attendance tracking",
        "Custom geofences for each classroom or building",
        "Real-time attendance reports for faculty",
        "Integration with student information systems"
      ]
    },
    {
      title: "Corporate",
      description: "Streamline workplace attendance tracking for remote and in-office employees. Ensure compliance and improve productivity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Flexible work location verification",
        "Time and attendance automation",
        "Compliance with labor regulations",
        "Integration with HR and payroll systems"
      ]
    },
    {
      title: "Events",
      description: "Manage attendee check-ins for conferences, concerts, and other events. Eliminate lines and improve the attendee experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Contactless check-in process",
        "Real-time attendance monitoring",
        "Crowd management insights",
        "Post-event analytics and reporting"
      ]
    },
    {
      title: "Healthcare",
      description: "Track staff and patient movements within healthcare facilities. Ensure proper staffing and improve resource allocation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Staff shift verification",
        "Patient location tracking",
        "Resource utilization optimization",
        "Compliance with healthcare regulations"
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-24 bg-transparent">
      <h1 className="text-4xl font-bold text-white mb-4">Solutions</h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl">Our geolocation attendance tracking system adapts to various industries and use cases.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
            <div className="text-primary-500 mb-6">{solution.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-3">{solution.title}</h2>
            <p className="text-gray-300 mb-6">{solution.description}</p>
            
            <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <a href="#" className="inline-block bg-primary-500 text-white px-6 py-2.5 rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-glow text-sm font-medium">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;