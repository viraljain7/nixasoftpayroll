import React from "react";
import {
  TrendingUp,
  Cpu,
  LayoutDashboard,
  ShieldCheck,
  Settings,
} from "lucide-react";

function WhyChooseUs({ page }) {
  const itemsHome = [
    {
      title: "Built for Growth",
      desc: "Scale payouts, settlements, and approvals without worrying about performance limits.",
      icon: TrendingUp,
    },
    {
      title: "Automation First",
      desc: "Design workflows that automate payouts, payroll, and reconciliations end-to-end.",
      icon: Cpu,
    },
    {
      title: "Unified Dashboard",
      desc: "One intelligent view for balances, approvals, reports, and real-time activity.",
      icon: LayoutDashboard,
    },
    {
      title: "Control & Security",
      desc: "Granular roles, approval layers, and audit-ready access across your organisation.",
      icon: ShieldCheck,
    },
  ];

  const itemsEngage = [
    {
      icon: Cpu,

      title: "End-to-End Statutory Automation",
      desc:
        "Automate payroll compliance across all states with accurate TDS, PF, PT, and ESIC filings. Reduce risks, eliminate penalties, and stay fully compliant with evolving regulations.",
    },
    {
      icon: LayoutDashboard,

      title: "Connected Payroll Ecosystem",
      desc:
        "Integrate effortlessly with leading HRMS, ERP, and accounting systems. Ensure real-time data synchronization and eliminate manual reconciliation errors.",
    },
    {
      icon: Settings,

      title: "Configurable for Enterprise Scale",
      desc:
        "Customize workflows, salary structures, approval hierarchies, and reporting modules to match your organization’s unique operational needs.",
    },
  ];

  const items = page === "home" ? itemsHome : itemsEngage;
  return (
    <section className="relative isolate overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#f5f7ff] via-white to-[#eef2ff]" />
      <div className="absolute -top-40 -right-40 h-112 w-md rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-112 w-md rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl ">
        {/* Heading */}
        <div className="mb-20 max-w-7xl">
          <h3 className="text-center text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Why choose us
          </h3>

          <p className="mt-5  text-slate-600 text-lg text-center">
            Built with reliability, automation, and control at its core—so your
            operations grow without friction.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-10 ${
            items.length === 3
              ? "lg:grid-cols-3"
              : items.length === 4
                ? "lg:grid-cols-4"
                : "lg:grid-cols-3"
          }`}
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-7
                bg-white/25 backdrop-blur-7xl
                border border-white/40
                shadow-[0_30px_60px_-25px_rgba(0,0,0,0.15)]
                transition-all duration-300
                hover:-translate-y-2 hover:bg-white/40"
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl
                  bg-linear-to-br from-blue-500/20 to-indigo-500/20 text-blue-700
                  transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* glass edge */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
