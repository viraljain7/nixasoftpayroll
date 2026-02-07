import Layout from "@/masterLayout/Layout";
import React from "react";
import upi from "@/assets/upi-pay.png";
import bank from "@/assets/bank-pay.png";
import otp from "@/assets/otp.png";


function Section() {
    const features = [
  {
    title: "Payments in Seconds",
    points: [
      "Make up to 50,000 payouts in a few taps",
      "Lightning-fast smart payouts",
      "Real-time status tracking",
    ],
    cta: "Explore payouts →",
    img:upi
  },
  {
    title: "Pay Without Bank Details",
    points: [
      "No bank details required",
      "Instant transfers using contact info",
      "Seamless and secure payments",
    ],
    cta: "See how it works →",
    img:bank

  },
  {
    title: "Built for Teams & Control",
    points: [
      "Role-based user access",
      "OTP-free approval workflows",
      "Complete audit trail for all actions",
    ],
    cta: "Manage teams →",
    img:otp
  },
];

  return (
    <section className={"my-16 relative isolate overflow-hidden py-28 mb-0"}>
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#f5f7ff] via-white to-[#eef2ff]" />
      <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl ">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 my-8">
            Powering seamless money <br/> movement for modern businesses.
       </h3>
      </div>

      {/* Cards */}
      <section className=" relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition flex flex-col m-2 md:m-0"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left flex-1 border-t">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {item.title}
              </h4>

              {/* UL > LI */}
              <ul className="space-y-3 mb-5">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button className="text-blue-600 text-sm font-medium hover:underline">
                {item.cta}
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Section;
