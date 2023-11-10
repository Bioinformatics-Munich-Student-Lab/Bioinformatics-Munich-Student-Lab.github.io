import React from 'react';
import { Link } from 'react-router-dom';

function HeroHome() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left">
          {/* Main Heading */}
          <h1 className="text-6xl font-bold" data-aos="fade-right">Bioinformatics Munich Student Lab</h1>
          {/* Colorful Subtitle */}
          <p className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" data-aos="fade-right" data-aos-delay="200">
            Research for Students by Students
          </p>
          {/* Separator Line */}
          <hr className="my-6 border-gray-600" data-aos="fade-right" data-aos-delay="300" />
          {/* Buttons */}
          <div className="flex flex-wrap items-center" data-aos="fade-right" data-aos-delay="400">
            <Link to="/join-us" className="btn bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded mr-4 mb-4">
              Join Us
            </Link>
            <Link to="/contact" className="btn border border-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded mb-4">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
