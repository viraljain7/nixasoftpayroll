import BusinessCount from "@/helperComponents/BussinessCount";
import React from "react";

function AboutPage() {
  return (
    <div class="bg-base-200 py-8 sm:py-16 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-12 md:gap-16 lg:gap-24">
          {/* <!-- Header section --> */}
          <div class="space-y-4 text-center">
            <h2 class="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
              About Us
            </h2>
        <section className="py-24 ">
  <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8  ">
    
    {/* Heading */}
    <div className="mb-14  ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Building financial infrastructure for modern businesses
      </h2>

      <p className="text-xl text-gray-600 leading-relaxed">
        Financial operations should accelerate growth — not slow it down.
      </p>
    </div>

    {/* Content */}
    <div className="max-w-7xl mx-auto space-y-6 text-left ">
      <p className="text-lg text-gray-700 leading-relaxed ">
        For years, digital businesses have struggled with fragmented financial workflows.
        Payments, banking, payouts, compliance, and reconciliation often live in silos —
        creating friction where speed, reliability, and control matter most.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed font-medium">
        We set out to fix that.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Founded by engineers with strong academic and technical backgrounds, Nixasoft is
        building modern financial infrastructure designed for scale. Our mission is simple:
        remove complexity from financial operations while maintaining the highest standards
        of security, compliance, and reliability.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        We take a developer-first approach — clean APIs, predictable integrations, and
        transparent documentation — so teams can launch faster and scale with confidence.
        From accepting payments to managing payouts, business accounts, and treasury
        workflows, our platform supports digital-first companies at every stage.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Today, Nixasoft helps startups, enterprises, marketplaces, and educational
        institutions:
      </p>

      {/* Bullet points */}
      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
        <li>Accept and disburse payments efficiently</li>
        <li>Manage funds through a fully digital business account</li>
        <li>Automate reconciliation and financial reporting</li>
        <li>Access working capital solutions to support growth</li>
      </ul>

      <p className="text-lg text-gray-700 leading-relaxed">
        Our infrastructure is built for performance, affordability, and security —
        allowing businesses to focus on growth while we handle the complexity of money
        movement behind the scenes.
      </p>
    </div>

  </div>
</section>

            <a href="#" class="btn btn-primary btn-lg btn-gradient">
              Read More
              <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </a>
          </div>

          {/* <!-- Video player and stats --> */}
          <div class="relative mb-8 h-full w-full rounded-xl max-lg:space-y-6 sm:mb-16 lg:mb-24 lg:h-161">
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-9.png"
              class="h-full w-full rounded-xl object-cover"
            />

            {/* <!-- Stats card overlapping the video section --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
