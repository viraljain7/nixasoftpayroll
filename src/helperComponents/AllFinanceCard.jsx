import React from "react";
import {
  Send,
  Layers,
  Calculator,
  Receipt,
  CreditCard,
  Users,
  BarChart3,
  FileText,
  RefreshCcw,
  Zap,
  Clock,
  UserCheck,
  Database,
  Wallet,
  Plug,
} from "lucide-react";

import finBg from "@/assets/ctabg.png";

/* -------------------- FEATURES (HOME) -------------------- */

const featuresHome = [
  {
    title: "Smart Payouts",
    desc: "Instant payouts anytime, anywhere",
    icon: Send,
  },
  {
    title: "Bulk Payouts",
    desc: "Execute bulk payouts that are 10× faster and smarter",
    icon: Layers,
  },
  {
    title: "Accounting Integrations",
    desc: "Seamless integrations with the accounting software you already use",
    icon: Calculator,
  },
  {
    title: "Vendor Payments",
    desc: "Add, track, and pay vendor invoices simply by forwarding an email",
    icon: FileText,
  },
  {
    title: "Tax Payments",
    desc: "Pay GST, TDS, and Advance Tax in under 30 seconds",
    icon: Receipt,
  },
  {
    title: "Payroll",
    desc: "Automated payroll, tax filings, and employee benefits in one place",
    icon: Users,
  },
  {
    title: "Payment Gateway",
    desc: "Accept payments seamlessly with the complete Nixapay Payments Suite",
    icon: CreditCard,
  },
];

/* -------------------- FEATURES (ENGAGE) -------------------- */

const featuresEngage = [
  {
    title: "HR Operations Hub",
    desc: "Manage onboarding, attendance, leave, reimbursements, and employee lifecycle from a unified dashboard.",
    icon: Users,
  },
  {
    title: "Advanced Reports & Insights",
    desc: "Access detailed payroll analytics and customized financial reporting.",
    icon: BarChart3,
  },
  {
    title: "Form 16 & Digital Payslips",
    desc: "Generate compliant Form 16s and secure employee payslips instantly.",
    icon: FileText,
  },
  {
    title: "Department & Role Management",
    desc: "Structure teams with granular permissions and role-based controls.",
    icon: Layers,
  },
  {
    title: "Automated Salary Revisions",
    desc: "Handle increments, arrears, and salary updates effortlessly.",
    icon: RefreshCcw,
  },
  {
    title: "One-Click Payroll Execution",
    desc: "Calculate and transfer accurate salaries instantly.",
    icon: Zap,
  },
  {
    title: "Automated Tax Compliance",
    desc: "Auto-calculate and file TDS, PF, PT, and ESIC with challan tracking.",
    icon: Receipt,
  },
  {
    title: "Time & Attendance Tracking",
    desc: "Manage attendance, leaves, and holidays with integrated tools.",
    icon: Clock,
  },
  {
    title: "Contractor Payout Management",
    desc: "Seamlessly process contractor payments with compliance automation.",
    icon: UserCheck,
  },
  {
    title: "Bulk Payroll Operations",
    desc: "Execute bulk salary adjustments and deductions efficiently.",
    icon: Database,
  },
  {
    title: "Instant Reimbursements",
    desc: "Approve and process reimbursements without payroll cycle delays.",
    icon: Wallet,
  },
  {
    title: "Seamless Integrations",
    desc: "Integrate easily with your existing HR and accounting systems.",
    icon: Plug,
  },
];

/* -------------------- COLOR MAP -------------------- */

const colorMap = {
  indigo: "bg-indigo-50 text-indigo-700",
  blue: "bg-blue-50 text-blue-700",
  emerald: "bg-emerald-50 text-emerald-700",
  violet: "bg-violet-50 text-violet-700",
  amber: "bg-amber-50 text-amber-700",
  cyan: "bg-cyan-50 text-cyan-700",
  rose: "bg-rose-50 text-rose-700",
  purple: "bg-purple-50 text-purple-700",
  orange: "bg-orange-50 text-orange-700",
  pink: "bg-pink-50 text-pink-700",
  green: "bg-green-50 text-green-700",
  yellow: "bg-yellow-50 text-yellow-700",
  red: "bg-red-50 text-red-700",
};

const colors = Object.keys(colorMap);

/* -------------------- COMPONENT -------------------- */

const AllFinanceCard = ({ page }) => {
  const features = page === "home" ? featuresHome : featuresEngage;

  return (
    <section className="relative overflow-hidden mb-32 py-24 px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${finBg})` }}
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            A Nixapay account designed for end-to-end financial operations
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
            Manage payouts, payments, payroll, taxes, and accounting from one unified platform.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid gap-6 ${
              page === "home"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              // Stable color per card
              const colorKey = colors[index % colors.length];
              const colorClasses = colorMap[colorKey];

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  {/* Header */}
                  <div className={`flex items-center gap-3 p-6 font-semibold ${colorClasses}`}>
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
