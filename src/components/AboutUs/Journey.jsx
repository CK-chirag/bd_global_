import React from 'react';

const OurJourney = () => {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to simplify business compliance",
      side: "left"
    },
    {
      year: "2020",
      title: "100+ Clients",
      description: "Reached our first major milestone of happy clients",
      side: "right"
    },
    {
      year: "2021",
      title: "ICAI Partnership",
      description: "Became an official ICAI member firm, ensuring professional excellence",
      side: "left"
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Launched online platform for seamless services",
      side: "right"
    },
    {
      year: "2023",
      title: "500+ Success Stories",
      description: "Helped over 500 businesses achieve compliance",
      side: "left"
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Expanded services to include HR, Payroll & Digital Marketing",
      side: "right"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Milestones that shaped our growth and commitment to excellence
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-950 to-emerald-600"></div>
          
          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  milestone.side === 'left' 
                    ? 'lg:justify-start' 
                    : 'lg:justify-end'
                }`}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:flex w-full items-center">
                  {milestone.side === 'left' ? (
                    <>
                      {/* Content Left */}
                      <div className="w-5/12 pr-8 text-right">
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <h3 className="text-2xl font-bold text-custom-black mb-2">
                            {milestone.year}
                          </h3>
                          <h4 className="text-lg font-semibold text-teal-600 mb-3">
                            {milestone.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Center Dot */}
                      <div className="w-2/12 flex justify-center">
                        <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      </div>
                      
                      {/* Empty Right */}
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      {/* Empty Left */}
                      <div className="w-5/12"></div>
                      
                      {/* Center Dot */}
                      <div className="w-2/12 flex justify-center">
                        <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      </div>
                      
                      {/* Content Right */}
                      <div className="w-5/12 pl-8 text-left">
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <h3 className="text-2xl font-bold text-custom-black mb-2">
                            {milestone.year}
                          </h3>
                          <h4 className="text-lg font-semibold text-teal-600 mb-3">
                            {milestone.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex w-full">
                  {/* Dot */}
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 ml-4">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-custom-black mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-lg font-semibold text-teal-600 mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;