import React from "react"
import ctaBg from "@/assets/ctabg.png"
import { MoveRightIcon } from "@/components/MoveRightIcon"

const CTASection = () => {
  return (
    <section className="relative overflow-hidden mb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />

      {/* Light overlay to match theme */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Heading */}
        <h2 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight">
          One current account. Total control over  <br className="hidden sm:block" />
          your business finances?
        </h2>

        {/* Sub text */}
        <p className="mt-4 text-slate-600 text-lg">
          Join our platform today and see immediate results.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary */}
          <button
            type="button"
            className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-[15px] hover:bg-indigo-700 transition w-1/3 flex justify-center items-center gap-4"
          >
            Get Started <MoveRightIcon />
          </button>

        
        </div>
      </div>
    </section>
  )
}

export default CTASection
