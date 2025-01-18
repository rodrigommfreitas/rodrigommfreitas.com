import { useTranslations, type Lang } from "../i18n/utils";
import { FAQItem } from "./FAQItem";

function FAQ({ lang }: { lang: string }) {
  const t = useTranslations(lang);

  const title = t({
    pt: "Perguntas Mais Frequentes ",
    en: "Frequently Asked Questions ",
  });

  const q1 = t({
    pt: "Como posso começar um projeto?",
    en: "How can I get started with a project?",
  });

  const a1 = t({
    pt: "Pode começar um projeto enviando-me um email. Entrarei em contato o mais breve possível para discutir o seu projeto.",
    en: "You can get started with a project by sending me an email. I'll get back to you as soon as possible to discuss your project.",
  });

  const q2 = t({
    pt: "Qual é o custo dos seus serviços?",
    en: "What is the cost of your services?",
  });

  const a2 = t({
    pt: "O custo dos meus serviços depende da complexidade do projeto. Eu ofereço uma consulta gratuita para discutir o seu projeto e fornecer um orçamento.",
    en: "The cost of my services depends on the complexity of the project. I offer a free consultation to discuss your project and provide you with a quote.",
  });

  const q3 = t({
    pt: "Quanto tempo leva para concluir um projeto?",
    en: "How long does it take to complete a project?",
  });

  const a3 = t({
    pt: "O tempo que leva para concluir um projeto depende da escala e da complexidade do projeto. Forneço um cronograma estimado durante a fase de planeamento.",
    en: "The time it takes to complete a project depends on the scale and complexity of the project. I'll provide you with a timeline during our consultation.",
  });

  const q4 = t({
    pt: "Oferece suporte após a conclusão do projeto?",
    en: "Do you offer support after a project is completed?",
  });

  const a4 = t({
    pt: "Sim, ofereço suporte após a conclusão do projeto. Se tiver algum problema ou dúvida, estou disponível para ajudá-lo.",
    en: "Yes, I offer support after the project is completed. If you have any issues or questions, I'm available to help you.",
  });

  const q5 = t({
    pt: "Pode ajudar-me a melhorar o meu site existente?",
    en: "I already have a website, can you help me improve it?",
  });

  const a5 = t({
    pt: "Sim, posso ajudá-lo a melhorar o seu site já existente. Se precisa de uma reformulação, de novos recursos ou de otimização, estou aqui para ajudar.",
    en: "Yes, I can help you improve your existing website. Whether you need a redesign, new features, or optimization, I'm here to help.",
  });

  const faqs = [
    {
      question: q1,
      answer: a1,
    },
    {
      question: q2,
      answer: a2,
    },
    {
      question: q3,
      answer: a3,
    },
    {
      question: q4,
      answer: a4,
    },
    {
      question: q5,
      answer: a5,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-4 xl:px-0">
      <h2 className="heading !mb-12">
        {title} <span className="text-gradient">(FAQ)</span>
      </h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
