import React from "react";
import {
  Send,
  Layers,
  Calculator,
  FileText,
  Receipt,
  Users,
  CreditCard,
} from "lucide-react";
import finBg from "@/assets/ctabg.png";

const features = [
  {
    title: "Smart Payouts",
    desc: "Instant payouts anytime, anywhere",
    icon: Send,
    color: "indigo",
  },
  {
    title: "Bulk Payouts",
    desc: "Execute bulk payouts that are 10× faster and smarter",
    icon: Layers,
    color: "blue",
  },
  {
    title: "Accounting Integrations",
    desc: "Seamless integrations with the accounting software you already use",
    icon: Calculator,
    color: "emerald",
  },
  {
    title: "Vendor Payments",
    desc: "Add, track, and pay vendor invoices simply by forwarding an email",
    icon: FileText,
    color: "violet",
  },
  {
    title: "Tax Payments",
    desc: "Pay GST, TDS, and Advance Tax in under 30 seconds",
    icon: Receipt,
    color: "amber",
  },
  {
    title: "Payroll",
    desc: "Automated payroll, tax filings, and employee benefits in one place",
    icon: Users,
    color: "cyan",
  },
  {
    title: "Payment Gateway",
    desc: "Accept payments seamlessly with the complete Razorpay Payments Suite",
    icon: CreditCard,
    color: "rose",
  },
];

const colorMap = {
  indigo: "bg-indigo-50 text-indigo-700",
  blue: "bg-blue-50 text-blue-700",
  emerald: "bg-emerald-50 text-emerald-700",
  violet: "bg-violet-50 text-violet-700",
  amber: "bg-amber-50 text-amber-700",
  cyan: "bg-cyan-50 text-cyan-700",
  rose: "bg-rose-50 text-rose-700",
};

const AllFinanceCard = () => {
  return (
    <section className="relative overflow-hidden mb-32 py-24 px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${finBg})` }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            A current account designed for end-to-end financial operations
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
            Manage payouts, payments, payroll, taxes, and accounting from one
            unified digital current account.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden ${
                    index < 4
                      ? "col-span-12 sm:col-span-6 lg:col-span-3"
                      : "col-span-12 md:col-span-4"
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`flex items-center gap-3 p-6 font-semibold ${colorMap[feature.color]}`}
                  >
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span>{feature.title}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFinanceCard;
