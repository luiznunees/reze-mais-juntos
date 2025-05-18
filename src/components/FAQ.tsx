
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O app vai ser gratuito?",
    answer: "Sim! O Reze+ será gratuito pra todo mundo que quiser rezar com a gente."
  },
  {
    question: "Preciso estar online?",
    answer: "Não! O modo offline vai permitir que você acesse o evangelho do dia e suas orações onde estiver."
  },
  {
    question: "Vai ter chat com amigos?",
    answer: "Sim! Vai dar pra criar propósitos em grupo e acompanhar o foguinho da oração com os amigos."
  },
  {
    question: "Preciso me cadastrar?",
    answer: "Sim, mas será simples. Só pra manter seu progresso salvo e ativar as funções em grupo."
  },
  {
    question: "Tem idade certa pra usar?",
    answer: "Não! Qualquer pessoa pode usar, mas o estilo é mais voltado pra galera jovem."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">❓ Perguntas Frequentes</span>
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
