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
        <section className="flex items-center justify-between flex-col md:flex-row py-1">
          <div className="flex flex-col gap-4 lg:-mt-20 varela-font max-w-xl">
            <h1 className="text-4xl font-semibold leading-tight text-gray-900">
              Manage business finances <br />
              from one simple dashboard
            </h1>

            <p className="text-gray-600">
              Track balances, approve expenses, and monitor cash flow in real
              time <br />
              built to scale with your business.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition py-2 px-4 text-white rounded-md w-fit flex items-center cursor-pointer">
              Get Started <MoveRightIcon className="ml-4" />
            </button>
          </div>

          <aside className="relative mt-12 md:mt-0">
            <img
              src={heroImg}
              alt="Dashboard preview"
              className="w-full max-w-xl relative z-10"
            />
          </aside>
        </section>
      </Layout>
    </section>
  );
}
