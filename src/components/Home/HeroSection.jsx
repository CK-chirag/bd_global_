import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../commonComponents/Navbar/Navbar';
import { Assets } from '../../assets/assets';
import Button from '../commonComponents/Button/Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-800 via-teal-700 to-emerald-400">
      {/* Background overlay with business people silhouette effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0">
        <img src={Assets.BgImgae} alt="Background" className="object-cover w-full h-full opacity-70" />
      </div>

      {/* Header integrated within Home */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
          Your One-Stop Partner for{' '}
          <span className="text-orange-400">Business</span>
          <br />
          <span className="text-orange-400">Compliance</span>, <span className="text-orange-400">Accounting</span> & <span className="text-orange-400">Growth</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-200 mb-12 max-w-2xl leading-relaxed font-light">
          From startup registration to ongoing compliance, we provide end-to-end
          business solutions backed by ICAI professionals. Start your business
          journey with confidence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <Button children="Get Started Now" onClick={() => window.location.href = "/contact"} />

          <Link
            to="/pricing"
            className="border border-white text-white px-6 py-3 rounded-md text-sm font-semibold 
               hover:bg-white hover:text-black transition-all duration-300 ease-in-out 
               flex items-center justify-center shadow-lg"
          >
            View Pricing
          </Link>

          <Link
            to="/contact"
            className="border border-white text-white px-6 py-3 rounded-md text-sm font-semibold 
               hover:bg-white hover:text-black transition-all duration-300 ease-in-out 
               flex items-center justify-center shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>


        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Happy Clients</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">5+</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">ICAI Backed</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">WhatsApp Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;