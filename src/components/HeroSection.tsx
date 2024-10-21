import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Gaming Setup"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-4 text-primary">PERFORMANCE FIRST</h1>
        <p className="text-2xl max-w-2xl text-center">
          Unlock your team's full potential and discover future talents.
        </p>
        <button className="mt-8 bg-primary text-white px-8 py-3 rounded-md hover-primary button-transition text-lg">
          Commencer maintenant
        </button>
      </div>
    </section>
  );
};

export default HeroSection;