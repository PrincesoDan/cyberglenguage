import type { Copy } from './types';

/**
 * Copy en inglés. El brief solo entrega el tagline y sus alternativas en inglés
 * (§01); el resto es traducción del copy en español y NO está validada por la
 * consultora. TODO: revisión de copy EN antes de publicar.
 */
export const en: Copy = {
  brand: {
    name: 'CyberLanguage',
    descriptor: 'AI visibility consultancy · GEO / AEO',
  },

  nav: {
    problem: 'The problem',
    method: 'How we work',
    services: 'Services',
    contact: 'Contact',
    scheduleCta: 'Book a call',
    languageSwitchLabel: 'Switch language to Spanish',
  },

  hero: {
    badge: 'AI visibility consultancy · GEO / AEO',
    titleLine1: 'Paste your URL.',
    // §01 — Tagline principal (EN), literal del brief.
    titleLine2: 'Get recommended by AI.',
    valueProp:
      'Your customers no longer ask a friend for recommendations — they ask AI. We make sure that when they ask for what you offer, AI recommends you.',
    secondaryCta: 'Book a call',
  },

  audit: {
    cardLabel: 'cyberlanguage · geo-audit',

    fields: {
      url: {
        label: 'Your website URL',
        placeholder: 'e.g. yoursite.com',
        error: 'Enter a valid address, for example yoursite.com',
      },
      email: {
        label: 'Email',
        placeholder: 'name@company.com',
        error: 'Enter a valid email',
      },
      organization: {
        label: 'Organization',
        placeholder: 'Your company name',
        error: 'Enter your organization name',
      },
    },

    submit: 'Analyze my site',

    consent: 'I agree to my email being used to send me the report.',
    marketingConsent: 'Also send me content about AI visibility. (Optional)',
    privacyLink: 'Privacy policy',

    analyzingTitle: 'Analyzing your site',
    steps: [
      'Checking your homepage…',
      'Looking for structured data…',
      'Assessing whether your content is citable…',
    ],
    demoNotice:
      'Interface demo: this result is an example and does not reflect a real analysis of your site.',
    scoreLabel: 'GEO score',
    teaser: 'We found 3 critical issues and 7 opportunities.',
    lockedTitle: 'The details are locked',
    lockedBody:
      'The full audit, with findings and prioritized recommendations, is not connected yet. In the meantime, let us walk you through it on a call.',
    reset: 'Analyze another site',
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

  contact: {
    eyebrow: 'Contact',
    title: 'Let us talk about your AI visibility.',
    body: 'Half an hour to review your case and tell you, straight up, what can be done.',
    cta: 'Book a call',
    schedulingPending: 'Scheduling link not configured yet.',
  },

  footer: {
    descriptor: 'AI visibility consultancy · GEO / AEO',
    rights: 'All rights reserved.',
    privacy: 'Privacy policy',
  },

  /*
   * Traducción de cortesía de la política en español. NO es la versión que
   * manda: `languageNote` lo dice explícitamente y así se evita que una
   * diferencia de traducción genere una obligación distinta.
   * TODO: revisión legal junto con la versión en español.
   */
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    intro:
      'This explains what data we ask you for, what we use it for, and what you can require from us. Each section starts with a one-line summary; the detail is below it.',
    lastUpdated: 'Last updated: 4 September 2026',
    controllerPending:
      'Pending: identification of the data controller (full name or registered company name and tax ID). Must be completed before the site goes live with data capture enabled.',
    contactPending:
      'Pending: contact address for exercising your rights. Without it, this policy does not offer a valid channel.',
    languageNote:
      'This is a courtesy translation. The Spanish version is the official one and prevails in case of any discrepancy.',
    backToSite: 'Back to the site',

    sections: [
      {
        title: '1. Who processes your data',
        summary: 'We do, not a third party, and we answer for what happens to it.',
        body: [
          'The controller of your personal data is the individual operating CyberLanguage, an AI visibility consultancy (GEO / AEO).',
          'That same person is responsible for this data being processed lawfully, and is who you should address any question or complaint to, through the contact channel given in section 7.',
        ],
      },
      {
        title: '2. What data we collect',
        summary: 'What you type into the form, and what your browser leaves behind when you visit.',
        body: [
          'Data you give us directly: your name, your email address, your organisation name and the address of the website you want analysed. We only collect this when you complete the audit form.',
          'Data generated by your visit: IP address, browser and device type, pages visited and time spent. This is collected through analytics tools and only if you accept non-essential cookies.',
          'We do not ask for or want sensitive data. We do not request national ID numbers, health data, socioeconomic status, political affiliation or any other data the law classifies as sensitive. Please do not include any of it in the form fields.',
        ],
      },
      {
        title: '3. What we use it for',
        summary: 'For three separate things, and each one needs your permission separately.',
        body: [
          'To deliver the audit you asked for. We use the URL to analyse your site and your email to send you the report. We cannot provide the service without this, so this consent is required to use the tool.',
          'To contact you about a consultancy. We use your name, email and organisation to follow up commercially on your request.',
          'To send you content by email. If you authorise it by ticking the corresponding box, we send you a sequence of emails with recommendations and content about AI visibility. This authorisation is optional, separate from the ones above, and does not condition delivery of the report: you can receive your audit without accepting it.',
          'To measure and improve the site. We use aggregated navigation data to understand what works and what does not. This only happens if you accept analytics cookies.',
          'We do not make automated decisions producing legal effects on you, and we do not build profiles from your data beyond what is described here.',
        ],
      },
      {
        title: '4. Who we share it with',
        summary: 'With the providers we need in order to operate. We do not sell it to anyone.',
        body: [
          'We do not sell, rent or transfer your personal data to third parties for commercial purposes.',
          'We do share it with providers who deliver services to us and who may only process it under our instructions: the site hosting service, the email delivery platform, the analytics tool and the meeting scheduling platform.',
          'International transfer: several of these providers run servers outside Chile, mainly in the United States and the European Union. This means your data may be stored or processed abroad. By using the form you accept that transfer; we require these providers to give contractual guarantees of protection equivalent to our own.',
          'We may also hand over your data when a competent authority lawfully requires it.',
        ],
      },
      {
        title: '5. How long we keep it',
        summary: 'As long as each purpose needs, then we delete it.',
        body: [
          'Audit data (URL, score and results): up to 12 months from the analysis, so we can compare if you run your site again.',
          'Contact data for commercial follow-up: up to 24 months from your last contact with us.',
          'Data for the email sequence: until you withdraw your authorisation. Every email includes an unsubscribe link, and once you use it we stop using your data for that purpose.',
          'Analytics data: up to 14 months, in aggregated form.',
          'Once these periods elapse we delete the data or anonymise it irreversibly, unless a legal obligation requires us to keep it longer.',
        ],
      },
      {
        title: '6. Cookies',
        summary: 'The essential ones always run; the measurement ones only if you accept them.',
        body: [
          'Essential cookies: needed for the site to work, for example to remember the language you chose. They do not require your consent because the site cannot operate without them.',
          'Analytics cookies: they tell us how the site is used. They require your prior consent and you can refuse them without losing any functionality.',
          'You can change your decision at any time from the cookie settings on the site, or delete already-installed cookies from your browser.',
        ],
      },
      {
        title: '7. Your rights',
        summary: 'You can see, correct, delete and take your data whenever you want. It is free.',
        body: [
          'Access: ask us what data of yours we hold and what we do with it.',
          'Rectification: correct it if it is wrong or incomplete.',
          'Erasure: ask us to delete it, unless we must keep it under a legal obligation.',
          'Objection: ask us to stop processing it for a given purpose.',
          'Portability: receive your data in a structured, commonly used format, or ask us to hand it to another controller.',
          'Blocking: ask for processing to be suspended temporarily while a request of yours is resolved.',
          'Exercising any of these rights is free. Write to the contact address given below and we will reply within the legal deadline. If your request is unclear we may ask you to be more specific, and we may need to verify your identity before answering.',
          'Withdrawing your consent is as easy as giving it: you can do so at any time, and it does not affect the validity of processing carried out before the withdrawal.',
        ],
      },
      {
        title: '8. Security and breaches',
        summary: 'We protect your data, and if something goes wrong we tell you.',
        body: [
          'We apply reasonable technical and organisational measures to protect your data: encryption in transit, access restricted to those who need it, and providers meeting recognised security standards.',
          'No measure is infallible. If a security breach affecting your personal data occurs, we will notify the Chilean Data Protection Agency without undue delay and, where the breach involves a high risk to your rights, we will tell you directly as well.',
        ],
      },
      {
        title: '9. Minors',
        summary: 'This service is for adults.',
        body: [
          'CyberLanguage is aimed at business owners and website managers over 18. We do not knowingly collect data from minors.',
          'If we find we have received a minor\'s data without the required authorisation, we will delete it. If you believe this has happened, write to us and we will sort it out.',
        ],
      },
      {
        title: '10. Changes to this policy',
        summary: 'If something material changes, we tell you before it applies.',
        body: [
          'We may update this policy when our services or the applicable regulations change. The last updated date is always at the top of the document.',
          'If the change substantially affects how we process your data, we will tell you by email before it takes effect, and where the law requires it we will ask for fresh consent.',
        ],
      },
      {
        title: '11. Complaints',
        summary: 'If you think we got something wrong, you can complain to us or to the authority.',
        body: [
          'Write to us first: most problems get resolved directly and quickly.',
          'If you are not satisfied with our answer, or we do not answer, you can file a complaint with the Chilean Data Protection Agency, the body responsible for enforcing Law 21.719 in Chile.',
        ],
      },
    ],
  },
};
