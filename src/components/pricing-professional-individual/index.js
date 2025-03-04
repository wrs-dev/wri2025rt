import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PricingProfessionalIndividual() {
  return (
    <section className="px-0 lg:px-12">
      <div className="mb-4 overflow-hidden bg-white shadow-md rounded-3xl">
        <div className="px-8 py-4 bg-blue-950">
          <h1 className="text-xl font-bold text-white">
            Professional Registration - Individual Event Pricing
          </h1>
        </div>
        <div className="px-8 pt-6 pb-8">
          {/* Principles Course */}
          <div className="mb-4">
            <h2 className="font-semibold text-md text-blue-950">
              Principles Course (1 Day)
            </h2>
            <h2 className="text-md text-wri-blue">
              Cost: $540 Early Bird
            </h2>
            <p className="text-gray-500 text-md">
              August 26, 2025
            </p>
          </div>

          {/* Rail Transit Seminar */}
          <div className="mb-4">
            <h2 className="font-semibold text-md text-blue-950">
              Rail Transit Seminar (2 Days)
            </h2>
            <h2 className="text-md text-wri-blue">
              Cost: $1,080 Early Bird
            </h2>
            <p className="text-gray-500 text-md">
              August 27–28, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}