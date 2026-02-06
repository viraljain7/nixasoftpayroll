import React from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    id: "business",
    title: "Business Banking+",
    subtitle: "Modern digital account",
    cta: "Get Started",
    highlight: true,
  },
  {
    id: "traditional",
    title: "Traditional Account",
    subtitle: "Legacy banking setup",
    cta: "Compare",
    highlight: false,
  },
];

const features = [
  {
    label: "Beneficiary setup",
    business: "Instant addition",
    traditional: "24–48 hour cooling period",
  },
  {
    label: "Transfer limits",
    business: "No transfer limits",
    traditional: false,
  },
  {
    label: "User access",
    business: "Unlimited users",
    traditional: "Limited users",
  },
  {
    label: "Approval workflows",
    business: "Easy multi-level approvals",
    traditional: "Manual maker-checker",
  },
  {
    label: "Reports & visibility",
    business: "Self-serve reports",
    traditional: "Manual statements",
  },
  {
    label: "Banking on the go",
    business: "Mobile-first experience",
    traditional: false,
  },
  {
    label: "Bulk payouts",
    business: "50,000 payouts in one go",
    traditional: false,
  },
  {
    label: "Integrations",
    business: "Accounting & ERP tools",
    traditional: false,
  },
  {
    label: "Insights",
    business: "Smart dashboard",
    traditional: "Excel downloads",
  },
  {
    label: "Support",
    business: "Priority support",
    traditional: "Delayed responses",
  },
  {
    label: "Core banking features",
    business: true,
    traditional: true,
  },
];

function Cell({ value }) {
  if (value === true)
    return <Check className="text-blue-600 mx-auto" size={18} />;
  if (value === false)
    return <X className="text-red-500 mx-auto" size={18} />;
  return <span className="text-sm text-slate-700">{value}</span>;
}

function NixasoftX() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Compare Account Types
          </h2>
          <p className="text-slate-600 mt-3">
            See how modern business banking compares to traditional accounts
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-slate-200 min-w-[900px]">
            <thead>
              <tr>
                <th className="p-4 text-left border">Features</th>

                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className={`p-4 text-center border ${
                      plan.highlight ? "bg-blue-50" : ""
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {plan.subtitle}
                    </p>
                    <button
                      className={`mt-4 px-4 py-2 rounded-md text-sm font-medium ${
                        plan.highlight
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-white"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-4 text-slate-900 font-medium border">
                    {feature.label}
                  </td>

                  <td className="p-4 text-center border">
                    <Cell value={feature.business} />
                  </td>

                  <td className="p-4 text-center border">
                    <Cell value={feature.traditional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NixasoftX;
