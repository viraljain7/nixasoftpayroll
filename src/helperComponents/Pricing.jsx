import React from "react";

const plans = [
  {
    id: "core",
    badge: null,
    title: "Core Plan",
    subtitle: "For businesses just starting up",
    description: [
      "A seamless starter package with essential banking features like a digital-first Nixapay account to help you build strong business finances.",
      "The Core plan offers a powerful dashboard with smooth payout experiences and mobile app access for banking on the go.",
    ],
    features: [
      "Instant beneficiary addition",
      "Beneficiary payout views",
      "Mobile app access for anytime banking",
    ],
    cta: "Sign Up Now",
    highlighted: false,
  },
  {
    id: "pro",
    badge: "Best Value",
    title: "Pro Plan",
    subtitle: "For mid-sized businesses",
    description: [
      "Streamline your business finances with a reliable and scalable system that gives you complete control.",
      "Along with Core features, the Pro plan supports multi-user access, granular permissions, and bulk as well as API-based payouts.",
    ],
    features: [
      "Smart bulk payouts and API payouts",
      "Payout links and bulk payout links",
      "Multi-user experience with role-based access",
      "Custom access control and workflows",
    ],
    cta: "Sign Up Now",
    highlighted: true,
  },
  {
    id: "advanced",
    badge: null,
    title: "Advanced Plan",
    subtitle: "For scaled-up businesses",
    description: [
      "Our most advanced plan helps automate and digitize every part of your business payments journey.",
      "This full-platform experience includes vendor payments, automated accounting, department-wise controls, and advanced reporting.",
    ],
    features: [
      "Invoice-based payments",
      "Industry-leading OCR experience",
      "Email-based approval workflows",
      "Accounting system integrations",
      "Custom report downloads",
    ],
    cta: "Sign Up Now",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="p-4 my-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Choose the right plan for your business
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Flexible banking plans designed for startups, growing teams, and
            large-scale businesses.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border shadow-sm p-6 flex flex-col justify-between ${
                plan.highlighted ? "border-indigo-600" : "border-gray-200"
              }`}
            >
              {/* Title */}
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {plan.title}
                  </h3>
                  {plan.badge && (
                    <span className="text-xs font-semibold px-2 py-1 rounded-md bg-indigo-600 text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-[15px] mt-1">
                  {plan.subtitle}
                </p>

                {/* Description */}
                <div className="mt-6 space-y-3 text-slate-600 text-[15px]">
                  {plan.description.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] text-slate-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        viewBox="0 0 24 24"
                        className="fill-green-600 mt-1"
                      >
                        <path d="M9.707 19.121a1 1 0 0 1-1.414 0l-5.647-5.647a1.5 1.5 0 0 1 2.121-2.121L9 14.171l9.525-9.525a1.5 1.5 0 1 1 2.121 2.121z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                type="button"
                className={`mt-10 w-full rounded-md px-4 py-2.5 text-[15px] font-medium ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
