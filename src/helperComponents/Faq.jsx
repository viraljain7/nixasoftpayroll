import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export default function Faq({faqs}) {
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
