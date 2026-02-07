import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "What is a Nixapay account?",
    answer:
      "A Nixapay account is a business-focused bank account used to manage daily transactions and cash flow. It supports high transaction volumes and offers features like payroll processing, vendor payments, and bulk transfers.",
  },
  {
    id: "q2",
    question: "What are digital Nixapay accounts?",
    answer:
      "Digital Nixapay accounts allow businesses to manage their finances completely online using mobile apps or web dashboards, making banking faster and more convenient.",
  },
  {
    id: "q3",
    question: "What are the uses of a Nixapay account?",
    answer:
      "A Nixapay account is used for receiving and making business payments, handling payroll, managing vendors, performing bulk payouts, and maintaining smooth cash flow.",
  },
  {
    id: "q4",
    question: "What are the benefits of a Nixapay account?",
    answer:
      "Nixapay accounts offer unlimited transactions, faster settlements, overdraft facilities, and business banking tools that help manage operations efficiently.",
  },
  {
    id: "q5",
    question: "What are the benefits of opening a Nixapay account online?",
    answer:
      "Opening a Nixapay account online is quicker and easier, requires minimal paperwork, removes the need for branch visits, and provides instant access to digital banking services.",
  },
  {
    id: "q6",
    question: "What are the different types of Nixapay accounts?",
    answer:
      "Banks offer different types of Nixapay accounts based on business size, transaction needs, minimum balance requirements, and additional features.",
  },
  {
    id: "q7",
    question: "What is the eligibility criteria to open a Nixapay account?",
    answer:
      "To open a Nixapay account, you must have a valid business or professional setup and submit the required identity, address, and business documents as per bank guidelines.",
  },
  {
    id: "q8",
    question: "What are the steps to open a Nixapay account online?",
    answer:
      "The process includes filling out an online application, submitting KYC and business details, uploading documents, completing verification, and activating the account.",
  },
  {
    id: "q9",
    question: "What documents are required to open a Nixapay account online?",
    answer:
      "You generally need identity proof, address proof, PAN card, and business registration documents, depending on your business type and bank requirements.",
  },
  {
    id: "q10",
    question: "What is Average Monthly Balance (AMB) in a Nixapay account?",
    answer:
      "Average Monthly Balance is the minimum balance that must be maintained in a Nixapay account during a month and is calculated using daily closing balances.",
  },
  {
    id: "q11",
    question: "Is GST required to open a Nixapay account online?",
    answer:
      "No, GST registration is not mandatory to open a Nixapay account. In fact, having a Nixapay account is often required before applying for GST registration.",
  },
  {
    id: "q12",
    question: "Can a sole proprietor open a Nixapay account online?",
    answer:
      "Yes, sole proprietors can open a Nixapay account online by submitting valid KYC and business-related documents.",
  },
  {
    id: "q13",
    question:
      "What factors should you consider while opening a Nixapay account?",
    answer:
      "You should consider minimum balance requirements, transaction limits, banking fees, digital features, and business support services before choosing a Nixapay account.",
  },
  {
    id: "q14",
    question: "Is there any interest paid on a Nixapay account?",
    answer:
      "No, Nixapay accounts do not earn interest because they are designed for frequent transactions rather than savings.",
  },
  {
    id: "q15",
    question: "Is a Nixapay account taxable?",
    answer:
      "No, the balance in a Nixapay account is not taxable since it does not earn interest.",
  },
  {
    id: "q16",
    question: "How can you transfer money via a Nixapay account?",
    answer:
      "Money can be transferred through NEFT, RTGS, IMPS, UPI, cheques, or online banking platforms provided by the bank.",
  },
  {
    id: "q17",
    question:
      "What is the difference between a Nixapay account and a savings account?",
    answer:
      "A Nixapay account is meant for business transactions with high volume and no interest, while a savings account is designed for personal savings and earns interest.",
  },
  {
    id: "q18",
    question: "What is the minimum balance requirement for a Nixapay account?",
    answer:
      "Minimum balance requirements vary by bank and account type. Accounts with higher balance requirements usually provide more advanced business features.",
  },
];

export default function Faq() {
  return (
    <>
      <div className="text-center my-32 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-slate-600 text-lg">
          Explore our FAQ section to find answers about Nixasoft's business
          financial solutions{" "}
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue="q1"
        className="max-w-7xl mx-auto mb-32 p-8 md:p-0"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className={"text-xl"}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className={"text-lg"}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
