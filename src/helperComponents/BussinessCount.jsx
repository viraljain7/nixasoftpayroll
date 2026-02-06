import React from "react";
import Layout from "@/masterLayout/Layout";
import { NumberTicker } from "@/components/ui/number-ticker";

function BusinessCount() {
  return (
    <Layout>
      <section className="bg-white py-8 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <h3 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">
            Trusted by businesses across India
          </h3>

          {/* Counters */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            
            {/* Counter 1 */}
            <div>
              <div className="flex items-baseline justify-center gap-1">
                <NumberTicker
                  value={10000}
                  className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900"
                />
                <span className="text-4xl font-bold text-gray-900">+</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Businesses onboarded
              </p>
            </div>

            {/* Counter 2 */}
            <div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900">₹</span>
                <NumberTicker
                  value={1300000}
                  className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900"
                />
                <span className="text-4xl font-bold text-gray-900">+</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Crores processed annually
              </p>
            </div>

            {/* Counter 3 */}
            <div>
              <div className="flex items-baseline justify-center gap-1">
                <NumberTicker
                  value={99.9}
                  className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900"
                />
                <span className="text-4xl font-bold text-gray-900">%</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Payment success rate
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BusinessCount;
