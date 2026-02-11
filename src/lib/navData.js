/* -------------------- NAV DATA (SCALABLE) -------------------- */

import {
  HiGlobeAlt,
  HiLink,
  HiDocumentText,
  HiQrcode,
  HiDeviceMobile,
  HiLightningBolt,
  HiRefresh,
  HiPuzzle,
  HiCurrencyDollar,

  HiBookOpen,
  HiAcademicCap,
  HiCalendar,
  HiDocumentReport,
  HiUserGroup,
  HiCode,
  HiTerminal,
  HiPlay,
  HiBriefcase,
  HiShoppingCart,
  
  HiOfficeBuilding,
  HiUser,
  HiCalculator,
  HiSearch,
  HiBadgeCheck,
  HiTrendingUp,
  HiChartBar,
} from "react-icons/hi";



import {

} from "react-icons/hi";

/* -------- AWARENESS -------- */
const awareness = {
  title: "AWARENESS",
  items: [
    { title: "Blog", icon: HiBookOpen },
    { title: "Learn", icon: HiAcademicCap },
    { title: "Events", icon: HiCalendar },
    { title: "White Papers", icon: HiDocumentReport },
    { title: "Customer Stories", icon: HiUserGroup },
  ],
};

/* -------- DEVELOPERS -------- */
const developers = {
  title: "DEVELOPERS",
  items: [
    { title: "Developer Docs", icon: HiCode },
    { title: "Integrations", icon: HiPuzzle },
    { title: "API Reference", icon: HiTerminal },
    { title: "API Playground", icon: HiPlay },
    { title: "Onboarding APIs", icon: HiBriefcase },
  ],
};

/* -------- SOLUTIONS -------- */
const solutions = {
  title: "SOLUTIONS",
  items: [
    { title: "SaaS", icon: HiBriefcase },
    { title: "E-Commerce", icon: HiShoppingCart },
    { title: "Education", icon:HiShoppingCart  },
    { title: "BFSI", icon: HiOfficeBuilding },
    { title: "Freelance", icon: HiUser },
  ],
};

/* -------- FREE TOOLS -------- */
const freeTools = {
  title: "FREE TOOLS",
  items: [
    { title: "GST Calculator", icon: HiCalculator },
    { title: "Online TDS Payment", icon: HiCalculator },
    { title: "GST Number Search", icon: HiSearch },
    { title: "GST Search by PAN", icon: HiBadgeCheck },
    { title: "ROI Calculator",  icon: HiTrendingUp },
    { title: "CAGR Calculator",  icon: HiTrendingUp },
    { title: "EBITDA Calculator",  icon: HiChartBar },
  ],
};


const acceptPaymentsOnline = {
  title: "ACCEPT PAYMENTS ONLINE",
  items: [
  
    {
      title: "Payment Links",
      desc: "Create & send links",
      icon: HiLink,
    },
    {
      title: "Payment Pages",
      desc: "Get paid with personalized page",
      icon: HiDocumentText,
    },
    {
      title: "QR Codes",
      desc: "Multi-feature QR",
      icon: HiQrcode,
    },
    {
      title: "UPI Payments",
      badge: "NEW",
      desc: "Complete UPI stack",
      icon: HiDeviceMobile,
    },
  ],
};

const paymentsAndSettlements = {
  title: "PAYMENTS & SETTLEMENTS",
  items: [
    {
      title: "Magic Checkout",
      badge: "NEW",
      desc: "Improve conversions",
      icon: HiLightningBolt,
    },
    {
      title: "Subscriptions",
      desc: "Recurring payments",
      icon: HiRefresh,
    },
    {
      title: "Instant Settlement",
      desc: "Payments settled faster",
      icon: HiLightningBolt,
    },
    {
      title: "Optimizer",
      desc: "Manage gateways",
      icon: HiPuzzle,
    },
  ],
};

const offlinePayments = {
  title: "ACCEPT PAYMENTS OFFLINE",
  items: [
    {
      title: "Nixapay POS",
      desc: "Accept Payments In-Store",
      icon: HiOfficeBuilding,
    },
  ],
};

const internationalPayments = {
  title: "ACCEPT INTERNATIONAL PAYMENTS",
  items: [
    {
      title: "International Payments",
      desc: "Accept payments globally",
      icon: HiGlobeAlt,
    },
    {
      title: "International Bank Transfers",
      desc: "USD, GBP, EUR payments",
      icon: HiCurrencyDollar,
    },
  ],
};

const navigation = [


  {
    name: "Solution",
    mega: true,
    columns: [
      { sections: [acceptPaymentsOnline] },
      { sections: [paymentsAndSettlements] },
      { sections: [offlinePayments] },
    ],
  },


  {
    name: "Payroll",
    href:"payroll-enterprise"
  },

  {
    name: "Engage",
    href: "engage",

  },

  {
    name: "Partner",
  },
    {
    name: "Resources",
    mega: true,
    columns: [
    { sections: [awareness] },
    { sections: [developers] },
    { sections: [solutions] },
    { sections: [freeTools] },

    ],
  },
  
  {
    name: "About us",
    href: "about",
  },

  {
    name: "Contact us",
    href: "contact",
  },
];

const FOOTER_COLUMNS = [
  /* ---------------- COLUMN 1 ---------------- */
  {
    sections: [
      {
        title: "ACCEPT PAYMENTS",
        links: [
          
          "Payment Pages",
          "Payment Links",
          "Nixapay POS",
          "QR Codes",
          "Subscriptions",
          "Smart Collect",
          "Optimizer",
          "Instant Settlements",
        ],
      },
      {
        title: "PAYROLL",
        links: ["NixapayX Payroll"],
      },
      {
        title: "BECOME A PARTNER",
        links: ["Refer and Earn", "Onboarding APIs"],
      },
      {
        title: "MORE",
        links: [
          "Route",
          "Invoices",
          "Freelancer Payments",
          "International Payments",
          "Flash Checkout",
          "UPI",
          "ePOS",
          "Checkout Demo",
        ],
      },
    ],
  },

  /* ---------------- COLUMN 2 ---------------- */
  {
    sections: [
      {
        title: "BANKING PLUS",
        links: [
          "NixapayX",
          "Source to Pay",
          "Nixapay accounts",
          "Payouts",
          "Payout Links",
          "Corporate Credit Card",
        ],
      },
      {
        title: "DEVELOPERS",
        links: ["Docs", "Integrations", "API Reference"],
      },
      {
        title: "RESOURCES",
        links: [
          "Blog",
          "Learn",
          "Customer Stories",
          "Events",
          "Chargeback Guide",
          "Settlement Guide",
        ],
      },
      {
        title: "SOLUTIONS",
        links: ["Education", "E-commerce", "SaaS", "BFSI"],
      },
      {
        title: "FREE TOOLS",
        links: [
          "GST Calculator",
          "GST Number Search",
          "GST Search by PAN",
          "ROI Calculator",
          "CAGR Calculator",
          "EBITDA Calculator",
        ],
      },
    ],
  },

  /* ---------------- COLUMN 3 ---------------- */
  {
    sections: [
      {
        title: "COMPANY",
        links: [
          "About Us",
          "Careers",
          "Website Terms",
          "Terms of Use",
          "Privacy Policy",
          "Grievance Redressal",
          "Responsible Disclosure",
          "Partners",
          "White Papers",
          "Corporate Information",
        ],
      },
      {
        title: "HELP & SUPPORT",
        links: ["Support", "Knowledge Base"],
      },

      {
        title: "REGD. OFFICE ADDRESS",
        links: [
          "NIXASOFT FINTECH PRIVATE LIMITED",
          "TF OFFICE NO 19,20,21",
          "SHREE SIDDHESHWAR PLAZA, Waghodia Road",
          "Vadodara, Vadodara- 390025, Gujarat, India",
        ],
      },
    ],
  },
];

export { navigation, FOOTER_COLUMNS };
