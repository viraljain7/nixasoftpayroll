import React from "react";

/* -------------------- HOME STEPS -------------------- */

const stepsHome = [
  {
    id: 1,
    title: "Signup with your phone number, email ID and GSTIN",
  },
  {
    id: 2,
    title: "A NixapayX representative will contact you to verify your details",
  },
  {
    id: 3,
    title: "A Relationship Manager will visit your office for final verifications",
  },
  {
    id: 4,
    title: "Log in to your NixapayX Dashboard to get started!",
  },
];

/* -------------------- PAYROLL STEPS -------------------- */

const stepsEngage = [
  {
    id: 1,
    title: "Create an Account",
    text: "Sign up and add your company details to set up your payroll workspace in minutes.",
  },
  {
    id: 2,
    title: "Onboard Your Workforce",
    text: "Add employee details individually or in bulk, or allow employees to self-onboard securely.",
  },
  {
    id: 3,
    title: "Run Payroll",
    text: "Review compliance, approve salaries, and process payroll seamlessly with just a few clicks.",
  },
    {
    id: "✓",
    title: "Done",

    },
];

/* -------------------- COMPONENT -------------------- */

const StepperForNewAcc = ({ page, className = "" }) => {
  const steps = page === "home" ? stepsHome : stepsEngage;

  return (
    <section className={`py-20 pt-1 px-4 max-w-7xl mx-auto ${className}`}>
      <div className="max-w-7xl mx-auto">

        {/* -------------------- HEADER -------------------- */}
        <div className="max-w-4xl mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            {page === "home" ? (
              <>
                How to open a NixapayX powered <br />
                Nixapay account Online?
              </>
            ) : (
              "Running a Smart Payroll is Simple"
            )}
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            {page === "home"
              ? "NixapayX Business Banking+ comes with a digital Nixapay account that can be opened entirely online."
              : "Set up, onboard employees, and run payroll effortlessly in just a few simple steps."}
          </p>

        </div>

        {/* -------------------- VERTICAL STEPPER -------------------- */}
        <div className="relative max-w-3xl">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-indigo-200" />

          <div className="space-y-16">

            {steps.map((step) => (
              <div key={step.id} className="relative flex gap-6">

                {/* Step Circle */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-indigo-600 bg-white text-indigo-600 font-semibold">
                  {step.id}
                </div>

                {/* Step Content */}
                <div className="max-w-xl pt-1">

                  {step.title && (
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                  )}

                  <p className="text-slate-700 text-[15px] leading-relaxed">
                    {step.text}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default StepperForNewAcc;
