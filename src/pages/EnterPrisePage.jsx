import AllFinanceCard from "@/helperComponents/AllFinanceCard";
import BusinessCount from "@/helperComponents/BussinessCount";
import Testimonials from "@/helperComponents/CustomerReview";
import EnterPriseHero from "@/helperComponents/EnterPriseHero";
import Faq from "@/helperComponents/Faq";
import { Logos } from "@/helperComponents/Logos";
import StepperForNewAcc from "@/helperComponents/StepperForNewAcc";
import WhyChooseUs from "@/helperComponents/WhyChooseUs";
import { enterprisePayrollFaqs, testimonials } from "@/lib/engage";
import React from "react";

function EnterPrisePage() {
  return (
    <>
      <EnterPriseHero />
      <WhyChooseUs items="engage" />

      <BusinessCount />
      <Logos />
      <AllFinanceCard page="engage"/>
      <StepperForNewAcc page="engage" className="mt-16" />
      <Testimonials testimonials={testimonials} />
      <Faq faqs={enterprisePayrollFaqs} />
    </>
  );
}

export default EnterPrisePage;
