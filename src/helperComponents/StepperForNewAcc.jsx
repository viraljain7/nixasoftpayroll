import React from "react";

const steps = [
  {
    id: 1,
    text: "Signup with your phone number, email ID and GSTIN",
  },
  {
    id: 2,
    text: "A RazorpayX representative will contact you to verify your details",
  },
  {
    id: 3,
    text: "A Relationship Manager will visit your office for final verifications",
  },
  {
    id: 4,
    text: "Log in to your RazorpayX Dashboard to get started!",
  },
];

const StepperForNewAcc = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            How to open a RazorpayX powered <br /> Current Account Online?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            RazorpayX Business Banking+ comes with a digital current account that
            can be opened entirely online.
          </p>
        </div>

        {/* Vertical Stepper */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-indigo-200" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex gap-6">
                {/* Step circle */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-indigo-600 bg-white text-indigo-600 font-semibold">
                  {step.id}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-[15px] leading-relaxed max-w-xl pt-1">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepperForNewAcc;
