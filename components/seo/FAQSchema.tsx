// components/seo/FAQSchema.tsx

type FAQItem = {
  question: string
  answer: string
}

type FAQSchemaProps = {
  faqs: FAQItem[]
}

export default function FAQSchema({
  faqs,
}: FAQSchemaProps) {

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      }}
    />
  )
}