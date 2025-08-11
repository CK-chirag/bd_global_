import React from 'react';

const ForNewBusinesses = () => {
  const services = [
    {
      id: 1,
      title: "Company Registration",
      description: "Pvt Ltd, LLP, Partnership, Sole Proprietorship registration with complete documentation",
      features: [
        "Name Approval",
        "MOA & AOA Drafting",
        "Government Filing",
        "Certificate Delivery"
      ],
      price: "₹6,999",
      buttonText: "Get Quote"
    },
    {
      id: 2,
      title: "GST Registration",
      description: "Fast and hassle-free GST registration for all business types",
      features: [
        "Document Preparation",
        "Online Filing",
        "GST Certificate",
        "Login Credentials"
      ],
      price: "₹2,999",
      buttonText: "Get Quote"
    },
    {
      id: 3,
      title: "FSSAI License",
      description: "Food business license for manufacturing, trading, and restaurant businesses",
      features: [
        "State & Central License",
        "Documentation Support",
        "Quick Processing",
        "Renewal Support"
      ],
      price: "₹3,999",
      buttonText: "Get Quote"
    },
    {
      id: 4,
      title: "Udyam Registration",
      description: "MSME registration for government benefits and subsidies",
      features: [
        "Online Registration",
        "Certificate Download",
        "Udyam Number",
        "Government Benefits"
      ],
      price: "₹1,999",
      buttonText: "Get Quote"
    },
    {
      id: 5,
      title: "Professional Bookkeeping",
      description: "Complete bookkeeping setup with monthly financial reports",
      features: [
        "Chart of Accounts",
        "Monthly Books",
        "Financial Reports",
        "Tally/QuickBooks Setup"
      ],
      price: "₹5,999/month",
      buttonText: "Get Quote"
    },
    {
      id: 6,
      title: "Website + Branding",
      description: "Professional website with logo design and brand identity",
      features: [
        "5-Page Website",
        "Logo Design",
        "Domain & Hosting",
        "Mobile Responsive"
      ],
      price: "₹15,999",
      buttonText: "Get Quote"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-50 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black">
              For New Businesses
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to start your business legally and efficiently
          </p>

          {/* Complete Package CTA */}
          <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Complete Startup Success Kit - ₹29,999
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-custom-black mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and CTA - Aligned in same line */}
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-custom-black">Starting</span>
                  <span className="text-lg font-bold text-custom-black">
                    {service.price}
                  </span>
                </div>
                <button className="bg-transparent border-2 border-blue-950 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-gray-700 font-semibold px-6 py-2 rounded-lg transition-all duration-300">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForNewBusinesses;