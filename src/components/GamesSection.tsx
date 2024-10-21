import React from 'react';

const GamesSection = () => {
  return (
    <section id="games-section" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Les jeux disponibles</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center">
            <img src="/cs2-logo.png" alt="CS2" className="h-32 w-auto mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary">CS2</h3>
          </div>
          <div className="text-center">
            <img src="/valorant-logo.png" alt="Valorant" className="h-32 w-auto mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary">Valorant</h3>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#join-us"
            className="bg-primary text-white px-8 py-3 rounded-md hover-primary button-transition inline-block"
          >
            Nous rejoindre
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;