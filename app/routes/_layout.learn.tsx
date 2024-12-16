import * as React from "react";

const Learn: React.FC = () => {
  return (
    <div className="container py-12 fade-in bg-gradient-to-b from-emerald-50 to-white">
      <div className="text-center mb-16 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
          Learn About Medical Cannabis
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Discover evidence-based information about medical cannabis in Australia, including benefits, legal requirements, and safe usage guidelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
          <div className="text-primary/10 text-6xl mb-4">🌿</div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Benefits & Effects</h2>
          <p className="text-gray-600">Learn about the therapeutic benefits and potential effects of medical cannabis treatments.</p>
          <button className="mt-6 text-primary font-medium hover:underline">Learn more →</button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
          <div className="text-primary/10 text-6xl mb-4">⚖️</div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Legal Framework</h2>
          <p className="text-gray-600">Understand the current legal status and requirements for accessing medical cannabis in Australia.</p>
          <button className="mt-6 text-primary font-medium hover:underline">Learn more →</button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
          <div className="text-primary/10 text-6xl mb-4">📖</div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Usage Guidelines</h2>
          <p className="text-gray-600">Get informed about proper usage, dosing, and administration methods for medical cannabis.</p>
          <button className="mt-6 text-primary font-medium hover:underline">Learn more →</button>
        </div>
      </div>

      <div className="mt-16 bg-white p-8 rounded-2xl shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Need More Information?</h2>
            <p className="text-gray-600">Our comprehensive guides and resources are here to help you make informed decisions.</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-xl font-medium shadow-lg hover:shadow-emerald-200 transition-all duration-300 transform hover:scale-105">
            Browse Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;