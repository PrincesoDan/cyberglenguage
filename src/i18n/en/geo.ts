import type { GeoCopy } from '../types';

/**
 * GEO practice (CyberLanguage) copy, moved verbatim from the previous landing
 * (`src/i18n/en.ts` at 55a7e4e). The methodology and services TODOs still apply.
 */
export const geo: GeoCopy = {
  hero: {
    badge: 'AI visibility consultancy · GEO / AEO',
    titleLine1: 'Your customers are asking AI.',
    // §01 — Tagline principal (EN), literal del brief.
    titleLine2: 'Get recommended by AI.',
    valueProp:
      'Your customers no longer ask a friend for recommendations — they ask AI. We make sure that when they ask for what you offer, AI recommends you.',
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Recommendations changed hands.',
    positioning:
      'CyberLanguage is a consultancy that helps brands show up and get cited inside AI assistants (ChatGPT, Claude, Perplexity, Gemini) through GEO and AEO. AI is the tool and the channel; the product is expert judgment. We are not software: we are advisory.',
    messages: [
      {
        title: 'The best recommendation no longer comes from a friend — it comes from AI.',
        body: 'You always knew a trusted recommendation sells more than any campaign. Today that recommendation comes from ChatGPT — and it speaks directly to your customer at the moment they are deciding.',
      },
      {
        title: 'Being named by AI is the new prime location.',
        body: 'You do not arrive once the customer has already chosen; you arrive inside the question, while they are still deciding. That is where the booking is won or lost.',
      },
    ],
  },

  method: {
    eyebrow: 'How we work',
    title: 'Three steps, no smoke.',
    // TODO: los tres pasos son un ejemplo del brief (§06), pendiente de confirmar.
    steps: [
      {
        title: 'Audit',
        body: 'We review your whole site: technical SEO, content structure and GEO signals. The result is a 0–100 score broken down by category.',
      },
      {
        title: 'Optimize',
        body: 'We work on content, reputation and structured data to teach AI why you are the right answer. Done by experts, not by a plugin.',
      },
      {
        title: 'Measure citations',
        body: 'We track whether AI assistants are naming you and adjust the work based on what the results show.',
      },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'What you get.',
    items: [
      {
        title: 'AI visibility audit',
        body: 'A 0–100 score with per-category breakdowns and prioritized recommendations, in plain language and free of jargon.',
      },
      {
        title: 'Content',
        body: 'Clear, citable content: question-and-answer formats, factual density, and authorship and authority signals (E-E-A-T).',
      },
      {
        title: 'Structured data',
        body: 'Schema.org, semantic HTML, sitemap, robots.txt and an llms.txt file: the foundations that let AI find and understand you.',
      },
      {
        title: 'Citation tracking',
        body: 'We check whether AI assistants are already citing you and how that presence evolves over time.',
      },
    ],
  },

  strategy: {
    title: 'It is not a tool, it is strategy.',
    body: 'Getting recommended by AI is not luck, and it is not a trick you install. It is content, reputation and structured data that teach AI why you are the right answer — done by experts, not by a plugin.',
  },

  closing: {
    eyebrow: 'Contact',
    title: 'Let us talk about your AI visibility.',
    body: 'Half an hour to review your case and tell you, straight up, what can be done.',
  },
};
