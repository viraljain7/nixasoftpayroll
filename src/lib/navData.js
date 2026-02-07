/* -------------------- NAV DATA (SCALABLE) -------------------- */

import {
  HiCreditCard,
  HiGlobeAlt,
  HiLink,
  HiDocumentText,
  HiQrcode,
  HiDeviceMobile,
  HiLightningBolt,
  HiRefresh,
  HiPuzzle,
  HiOfficeBuilding,
  HiCurrencyDollar,
} from "react-icons/hi";

const acceptPaymentsOnline = {
  title: "ACCEPT PAYMENTS ONLINE",
  items: [
    {
      title: "Payment Aggregator",
      desc: "Accepting payments made easy",
      icon: HiCreditCard,
    },
    {
      title: "Payment Gateway",
      desc: "Payments on Website & App",
      icon: HiGlobeAlt,
    },
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
    name: "Payments",
  },

  {
    name: "Banking+",
    mega: true,
    columns: [
      { sections: [acceptPaymentsOnline] },
      { sections: [paymentsAndSettlements] },
      { sections: [offlinePayments] },
      { sections: [internationalPayments] },
    ],
  },

  {
    name: "Payroll",
  },

  {
    name: "Engage",
  },

  {
    name: "Partner",
  },

  {
    name: "About us",
    href:"about"
  },

  {
    name: "Contact us",
    href:"contact"

  },
];

const FOOTER_COLUMNS = [
  /* ---------------- COLUMN 1 ---------------- */
  {
    sections: [
      {
        title: "ACCEPT PAYMENTS",
        links: [
          "Payment Aggregator",
          "Payment Gateway",
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
          "NIXASOFT Fintech Private Limated",
          "1st Floor",
          "Vadodara, Gujarat, India",
          "CIN: XXXXXXXXXX",
        ],
      },
    ],
  },
];

export { navigation, FOOTER_COLUMNS };
