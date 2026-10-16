"use strict";
// Approved public-reference examples only. Never insert private corpus content here.
// Add documents and questions below; the renderer in assets/demo.js needs no changes.
window.CORIPEX_DEMO_CONTENT = Object.freeze({
  finance: {
    title: "Finance research",
    description: "Examine a published monetary policy summary from the Bank of Israel.",
    documents: [
      { id: "boi-h1-2026", title: "Bank of Israel — Monetary Policy Report, First Half of 2026", location: "Executive summary · page 1", url: "https://www.boi.org.il/publications/pressreleases/20-7-2026/" }
    ],
    questions: [
      {
        id: "finance-h1-rate",
        documentId: "boi-h1-2026",
        question: "What policy rate and inflation figures were reported for the end of H1 2026?",
        answer: "The Bank of Israel's first-half 2026 monetary policy summary reports a policy rate of 3.5% at the end of the period and annual inflation of 1.9% based on the May reading. These are historical figures for that reporting period, not current market data.",
        evidence: "The first-half 2026 report summarizes the policy-rate level at the end of the period and reports annual inflation based on the May reading. The figure and date are tied to this historical report.",
        caveat: "Illustrative research summary; not financial advice or a current market quote."
      }
    ]
  },
  biology: {
    title: "Biology research",
    description: "Explore the relationship between DNA-repair genes and inherited cancer risk.",
    documents: [
      { id: "nci-brca", title: "National Cancer Institute — BRCA Gene Changes: Cancer Risk and Genetic Testing", location: "Fact sheet · BRCA gene function and inherited risk", url: "https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet" }
    ],
    questions: [
      {
        id: "biology-brca-repair",
        documentId: "nci-brca",
        question: "How are BRCA1 and BRCA2 involved in DNA repair and cancer risk?",
        answer: "BRCA1 and BRCA2 are genes associated with proteins that help repair damaged DNA. Inherited harmful variants can impair this repair function and are associated with increased risks of certain cancers, including breast and ovarian cancer. The degree of risk varies by gene, variant, and individual circumstances.",
        evidence: "The NCI fact sheet explains how BRCA1 and BRCA2 help maintain DNA integrity, and discusses how inherited harmful changes affect the risk of specific cancers.",
        caveat: "Illustrative research summary; not medical or genetic counseling."
      }
    ]
  },
  ai: {
    title: "Artificial intelligence research",
    description: "Inspect an official framework for trustworthy AI risk management.",
    documents: [
      { id: "nist-ai-rmf", title: "NIST — AI Risk Management Framework 1.0, Core", location: "AI RMF Core · four functions", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" }
    ],
    questions: [
      {
        id: "ai-rmf-functions",
        documentId: "nist-ai-rmf",
        question: "What are the four functions in the NIST AI Risk Management Framework Core?",
        answer: "The NIST AI Risk Management Framework Core is organized around four functions: Govern, Map, Measure, and Manage. Govern provides cross-cutting oversight, while the other functions help teams understand context, assess risks, and respond to identified risks across the AI lifecycle.",
        evidence: "NIST identifies Govern, Map, Measure, and Manage as the four high-level functions, with governance informing the others and risk management continuing across the lifecycle.",
        caveat: "A curated summary of the 2023 framework edition; its updates may change over time."
      }
    ]
  },
  legal: {
    title: "Legal research",
    description: "Explore the difference between prohibited AI practices and high-risk AI systems in EU law.",
    documents: [
      { id: "eu-ai-act", title: "European Union — Regulation (EU) 2024/1689 (AI Act)", location: "Article 5 · Article 6 · Annex III", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" }
    ],
    questions: [
      {
        id: "legal-ai-act-risk",
        documentId: "eu-ai-act",
        question: "How does the EU AI Act distinguish prohibited and high-risk AI systems?",
        answer: "The EU AI Act uses different rules for prohibited practices and high-risk systems. Article 5 lists specific AI practices that are prohibited. Article 6, together with the relevant annexes, establishes how certain AI systems are classified as high-risk. Classification depends on the system's intended use and applicable criteria; not every use of AI is high-risk.",
        evidence: "Article 5 defines prohibited practices. Article 6 sets classification rules for high-risk AI systems, including references to specified products and Annex III use cases, subject to conditions and exclusions.",
        caveat: "Illustrative summary of legal text, not legal advice; effective dates and amendments must be checked separately."
      }
    ]
  }
});
