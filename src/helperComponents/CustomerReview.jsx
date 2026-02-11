import React from "react";

const Testimonials = ({ testimonials }) => {
  return (
    <section className=" relative  py-20 px-4">
      <div className="absolute inset-0 bg-linear-to-br from-[#f5f7ff] via-white to-[#eef2ff]" />
      <div className="absolute -bottom-40 -left-40 h-112 w-md rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            What our clients say
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Trusted by businesses across industries to simplify finance
            operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.id || index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              {item.logo && (
                <div className="mb-4">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-6 max-w-25 object-contain"
                  />
                </div>
              )}

              <p className="text-slate-700 text-[15px] leading-relaxed">
                “{item.review}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
