import React from "react";
import Hero from "@/helperComponents/Hero";
import { Logos } from "@/helperComponents/Logos";
import WhyChooseUs from "@/helperComponents/WhyChooseUs";
import BussinessCount from "@/helperComponents/BussinessCount";
import Section from "@/helperComponents/Section";
import PricingSection from "@/helperComponents/Pricing";
import NixasoftX from "@/helperComponents/NixasoftX";
import Faq from "@/helperComponents/Faq";
import CustomerReview from "@/helperComponents/CustomerReview";
import CTASection from "@/helperComponents/CTASection";
import StepperForNewAcc from "@/helperComponents/StepperForNewAcc";
import AllFinanceCard from "@/helperComponents/AllFinanceCard";

export default function HeroPage() {
  return (

    
    <div>
      <Hero />
      <BussinessCount />
      <Logos />
      <WhyChooseUs />
      <NixasoftX/>
      <AllFinanceCard/>
      <StepperForNewAcc/>
      <Section/>
      <PricingSection/>
      <CustomerReview/>
      <CTASection/>
      <Faq/>
    </div>
  );
}
