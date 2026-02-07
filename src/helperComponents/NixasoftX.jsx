import React from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    id: "business",
    title: "Business Banking+",
    subtitle: "Modern digital account",
    highlight: true,
  },
  {
    id: "traditional",
    title: "Traditional Account",
    subtitle: "Legacy banking setup",
    highlight: false,
  },
];

const features = [
  { label: "Beneficiary setup", business: "Instant addition", traditional: "24–48 hr cooling" },
  { label: "Transfer limits", business: "No transfer limits", traditional: false },
  { label: "User access", business: "Unlimited users", traditional: "Limited users" },
  { label: "Approval workflows", business: "Multi-level approvals", traditional: "Manual maker-checker" },
  { label: "Reports & visibility", business: "Real-time reports", traditional: "Manual statements" },
  { label: "Banking on the go", business: "Mobile-first", traditional: false },
  { label: "Bulk payouts", business: "50,000 payouts", traditional: false },
  { label: "Integrations", business: "ERP & accounting tools", traditional: false },
  { label: "Insights", business: "Smart dashboard", traditional: "Excel downloads" },
  { label: "Support", business: "Priority support", traditional: "Delayed responses" },
  { label: "Core banking features", business: true, traditional: true },
];

function Cell({ value }) {
  if (value === true)
    return <Check className="mx-auto text-indigo-600" size={18} />;
  if (value === false)
    return <X className="mx-auto text-slate-300" size={18} />;
  return <span className="text-sm text-slate-700">{value}</span>;
}

export default function NixasoftX() {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#f5f7ff] via-white to-[#eef2ff]" />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Compare Account Types
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            See how modern business banking compares to traditional accounts
          </p>
        </div>

        {/* Table Card */}
        <div className="relative overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-[900px] w-full border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className=" z-10 bg-slate-50 p-5 text-left text-sm font-semibold text-slate-700 border-r">
                  Features
                </th>

                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className={`p-5 text-center border-r ${
                      plan.highlight
                        ? "bg-indigo-50 text-indigo-900"
                        : "text-slate-900"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-lg font-semibold">
                        {plan.title}
                      </span>
                      <span className="text-sm text-slate-600">
                        {plan.subtitle}
                      </span>
                      {plan.highlight && (
                        <span className="mt-2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                          Recommended
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="border-t hover:bg-slate-50/60 transition"
                >
                  <td className=" z-10 bg-white p-4 font-medium text-slate-900 border-r">
                    {feature.label}
                  </td>

                  <td className="p-4 text-center">
                    <Cell value={feature.business} />
                  </td>

                  <td className="p-4 text-center">
                    <Cell value={feature.traditional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

  
      </div>
    </section>
  );
}
