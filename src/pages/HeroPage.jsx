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
import {   faqs, plans, testimonials } from "@/lib/home";

export default function HeroPage() {


  return (
    <div>
      <Hero />
      <BussinessCount />
      <Logos  />
      <WhyChooseUs page={"home"}/>
      <NixasoftX />
      <AllFinanceCard page="home" />
      <StepperForNewAcc page={"home"} />
      <Section />
      <PricingSection
        plans={plans}
        text="Choose the right plan for your business"
        para="    Flexible banking plans designed for startups, growing teams, and
            large-scale businesses."
      />
      <CustomerReview testimonials={testimonials} />
      <CTASection
        headingPartOne="One Nixapay account. Total control over"
        headingPartTwo="your business finances?"
        subText="Join our platform today and see immediate results."
        btnText="Get Started"
      />
      <Faq faqs={faqs}/>
    </div>
  );
}
