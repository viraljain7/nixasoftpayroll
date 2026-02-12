import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function EmployeeOrganizeCard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl ">
        <h3 className="text-center text-4xl md:text-5xl font-bold text-slate-900 leading-tight my-8">
          Scalable Payroll Solutions for 1,000+ Employee Workforces{" "}
        </h3>
      </div>
      <InfiniteMovingCards items={features} direction="right" speed="slow" />
    </div>
  );
}

const features = [
  {
    title: "100% Automated Tax Filing & Payments",
    text: "India’s only fully automated payroll solution designed to manage multi-state compliance across all 30 states — with zero hidden charges.",
    li: [
      "Get complete visibility into your compliance trail across TDS, PF, ESIC, and more",
      "Automatically file and pay all statutory tax liabilities",
      "Access challans instantly from your self-serve dashboard",
      "Receive real-time alerts to stay updated with regulatory changes",
    ],
  },
  {
    title: "Effortless Enterprise Payroll Processing",
    text: "Simplify payroll operations with secure direct-debit technology that ensures timely and accurate salary transfers.",
    li: [
      "Pay full-time employees, interns, and contractors in just three clicks",
      "Run regular and off-cycle payroll with flexible configurations",
      "Offer advance salaries and instant reimbursement settlements",
      "Manage contractor payouts seamlessly with automated TDS handling",
    ],
  },
  {
    title: "Seamless Integrations Platform",
    text: "Connect RazorpayX Payroll with your existing HRMS and enterprise systems using our powerful and scalable API infrastructure.",
    li: [
      "45+ integration partners across HRMS, attendance, benefits, insurance, and more",
      "Ensure consistency and accuracy with automatic data synchronization",
      "Popular integrations include Darwinbox, SAP SuccessFactors, Oracle HCM, PeopleStrong, Zaggle, and others",
      "Need a different HR software integration? Our team can help",
    ],
  },
  {
    title: "Advanced Payroll Analytics & Insights",
    text: "Make informed decisions with centralized dashboards and powerful reporting tools tailored to your workforce data.",
    li: [
      "Track and analyze payroll data from a unified dashboard",
      "Set up role-based access controls for enhanced security",
      "Visualize complex workforce data with advanced reporting tools",
      "Consolidate multiple data sources into a single reliable system",
    ],
  },
  {
    title: "Dedicated Customer Support",
    text: "Experience the perfect blend of smart technology and expert human assistance to ensure smooth payroll operations.",
    li: [
      "Dedicated Customer Success Manager for personalized support",
      "Quick chat and email assistance from payroll specialists",
      "Guaranteed 30-minute first response time with live chat support",
    ],
  },
  {
    title: "Custom Solutions, Built for You",
    text: "Tailor-made payroll solutions designed to meet your unique business requirements without long implementation cycles.",
    li: [
      "Fully customizable features to match your workflows",
      "Minimal setup time with rapid deployment",
      "Scalable customizations delivered efficiently",
    ],
  },
];
