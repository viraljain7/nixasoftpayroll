import Layout from "@/masterLayout/Layout";
import React from "react";
import heroImg from "@/assets/hero-banner.png";
import { MoveRightIcon } from "@/components/MoveRightIcon";

export default function Hero() {
  return (
<section className="relative isolate overflow-hidden">
  {/* Morphic background */}
  <div className="absolute inset-0 bg-linear-to-br from-[#f5f7ff] via-[#eef2ff] to-white" />

  {/* Content */}
  <Layout className="relative">
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-12">
      
      {/* Left Content */}
      <div className="flex flex-col gap-6 varela-font max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-gray-900">
          Manage business finances <br className="hidden sm:block" />
          from one simple dashboard
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Track balances, approve expenses, and monitor cash flow in real time,
          built to scale with your business.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 transition py-3 px-6 text-white rounded-md w-fit flex items-center gap-3 cursor-pointer">
            Get Started <MoveRightIcon />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <aside className="relative flex justify-center">
        <img
          src={heroImg}
          alt="Dashboard preview"
          className="w-full max-w-md md:max-w-xl relative z-10"
        />
      </aside>
    </section>
  </Layout>
</section>

  );
}
