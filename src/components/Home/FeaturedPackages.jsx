import React from 'react';
import Button from '../commonComponents/Button/Button';

const FeaturedPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Startup Success Kit",
      price: "₹29,999",
      originalPrice: "₹45,000",
      badge: "Most Popular",
      description: "Everything you need to start your business legally and efficiently",
      features: [
        "Company Registration (Pvt Ltd/LLP)",
        "GST Registration",
        "FSSAI License (if applicable)",
        "Udyam Registration",
        "3 Months Bookkeeping",
        "Basic Website + Domain",
        "Logo Design",
        "Bank Account Opening Support",
        "Initial Legal Documents"
      ],
      highlighted: true
    },
    {
      id: 2,
      title: "Switch & Streamline Package",
      price: "₹34,999",
      originalPrice: "₹60,000",
      badge: "Best Value",
      description: "Perfect for existing businesses looking to optimize their operations",
      features: [
        "Complete Books Cleanup",
        "Migration Support",
        "6 Months Accounting",
        "All Compliance Filings",
        "GST & TDS Returns",
        "ROC Filing Support",
        "Payroll Setup",
        "Monthly MIS Reports",
        "Dedicated Account Manager"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Featured Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to meet your specific business needs
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                pkg.highlighted ? 'border-2 border-teal-400' : 'border border-gray-200'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className={`px-4 py-1 rounded-full text-sm font-medium text-white ${
                  pkg.highlighted ? 'bg-green-500' : 'bg-blue-500'
                }`}>
                  {pkg.badge}
                </span>
              </div>

              {/* Package Title */}
              <h3 className="text-2xl font-bold text-custom-black mb-4 mt-4">
                {pkg.title}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-custom-black">{pkg.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-3">{pkg.originalPrice}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button onClick={() => window.location.href = `/pricing?package=${pkg.id}`} children="Get Started" className='w-full'/>
                <button className="w-full border border-gray-300 text-custom-black hover:bg-gray-50 px-6 py-3 rounded-md text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center">
          <Button onClick={() => window.location.href = '/pricing'} children="View All Packages" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;