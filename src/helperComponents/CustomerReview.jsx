import React from "react"

const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    role: "Founder, SaaS Startup",
    review:
      "With RazorpayX, our entire finance workflow became seamless. From automated payouts to compliance handling, everything works reliably at scale. It has significantly reduced operational friction for our team.",
  },
  {
    id: 2,
    name: "Neha Sharma",
    role: "Finance Lead, E-commerce Company",
    review:
      "RazorpayX helped us centralize all our business payments and approvals in one place. The transparency and control it provides has made our finance operations far more efficient and audit-ready.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "COO, Fintech Firm",
    review:
      "What truly stands out is the level of automation RazorpayX offers. Payroll, vendor payments, and compliance management now run smoothly with minimal manual intervention, saving us hundreds of hours every quarter.",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Operations Head, Logistics Company",
    review:
      "The ability to manage multi-user access and approval workflows has been a game changer for us. RazorpayX gives us complete visibility and control without slowing down daily operations.",
  },
  {
    id: 5,
    name: "Kunal Shah",
    role: "Founder, Digital Agency",
    review:
      "We onboarded RazorpayX and set up our complete payouts and payroll system within a few hours. The platform helped us reduce finance overhead by over 35%.",
  },
  {
    id: 6,
    name: "Sneha Iyer",
    role: "HR Manager, Tech Company",
    review:
      "RazorpayX has transformed how we manage vendor payments and employee salaries. Timely payouts, automated compliance, and clear reporting make it extremely reliable.",
  },
  {
    id: 7,
    name: "Arjun Malhotra",
    role: "CFO, Growth-stage Startup",
    review:
      "From invoice uploads to approvals and automated accounting, RazorpayX covers every aspect of our payment workflow. It has helped us scale confidently without compliance concerns.",
  },
  {
    id: 8,
    name: "Pooja Desai",
    role: "Finance Director, Manufacturing Firm",
    review:
      "Switching to RazorpayX resulted in significant cost savings and better cash flow visibility. The platform’s reliability has made it a trusted finance partner for us.",
  },
  {
    id: 9,
    name: "Siddharth Kapoor",
    role: "Managing Partner, Consulting Firm",
    review:
      "RazorpayX enables us to deliver faster and more reliable financial solutions to our clients. The automation and reporting features have strengthened our credibility.",
  },
]

const Testimonials = () => {
  return (
    <section className=" relative  py-20 px-4">
          <div className="absolute inset-0 bg-linear-to-br from-[#f5f7ff] via-white to-[#eef2ff]" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />

      <div  className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            What our clients say
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Trusted by businesses across industries to simplify finance operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-slate-700 text-[15px] leading-relaxed">
                “{item.review}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
