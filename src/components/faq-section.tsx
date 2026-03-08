import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как Мак генерирует идеи?",
      answer:
        "Мак использует современные языковые модели ИИ. Вы описываете задачу или запрос — и сервис мгновенно предлагает релевантные идеи, учитывая ваш контекст и предпочтения.",
    },
    {
      question: "Мак подходит только для одной сферы?",
      answer:
        "Нет, Мак работает в любой сфере: бизнес-идеи, контент для соцсетей, названия продуктов, маркетинговые концепции, стартап-гипотезы и многое другое.",
    },
    {
      question: "Насколько идеи уникальны?",
      answer:
        "Каждый запрос обрабатывается индивидуально. Мак учитывает ваши параметры и генерирует свежие идеи, а не копирует шаблоны.",
    },
    {
      question: "Можно ли сохранить понравившиеся идеи?",
      answer:
        "Да, все идеи автоматически сохраняются в вашей истории. Вы можете вернуться к ним в любое время, отметить лучшие и развить их дальше.",
    },
    {
      question: "Как начать пользоваться Маком?",
      answer:
        "Просто зарегистрируйтесь и опишите свою задачу в свободной форме. Мак не требует обучения — он понимает запросы на естественном русском языке.",
    },
    {
      question: "Есть ли бесплатный тариф?",
      answer:
        "Да, Мак доступен для пробного использования бесплатно. Вы сразу оцените качество идей, а затем выберете подходящий тарифный план.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о сервисе Мак и его возможностях.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}