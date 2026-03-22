export default function StructuredData() {
  const baseUrl = 'https://your-domain.vercel.app'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FinTrack - AI Personal Finance Dashboard",
    "description": "Transform your financial life with AI-powered personal finance management. Track expenses, manage budgets, and get smart insights to achieve your financial goals.",
    "url": baseUrl,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI-powered expense tracking",
      "Smart budget recommendations",
      "Financial insights and analytics",
      "Personal finance dashboard",
      "Transaction management"
    ],
    "author": {
      "@type": "Organization",
      "name": "FinTrack Team"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
