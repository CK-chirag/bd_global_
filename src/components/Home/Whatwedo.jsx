import React from 'react';

const Whatwedo = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          <path d="M14 2v6h6"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <path d="M10 9H8"/>
        </svg>
      ),
      title: "Startup Services",
      description: "Complete business setup from registration to compliance, tailored for new entrepreneurs.",
      features: [
        "Company Registration",
        "GST Registration", 
        "FSSAI License",
        "Initial Bookkeeping"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
        </svg>
      ),
      title: "Compliance",
      description: "Stay compliant with all regulatory requirements through our expert guidance.",
      features: [
        "ROC Filings",
        "GST Returns",
        "TDS Returns",
        "Annual Compliance"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "HR & Payroll",
      description: "Streamlined HR solutions and accurate payroll management for growing businesses.",
      features: [
        "Payroll Processing",
        "PF & ESC",
        "HR Policies",
        "Employee Management"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: "Branding & Web Presence",
      description: "Build your brand identity and establish a strong online presence.",
      features: [
        "Logo Design",
        "Website Development",
        "Digital Marketing",
        "Brand Strategy"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to support your growth at every stage
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-custom-black text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;