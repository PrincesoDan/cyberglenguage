import type { HomeCopy } from '../types';

/** Brand brief §06 "Inicio". The GEO block is derived from the CyberLanguage copy. */
export const home: HomeCopy = {
  hero: {
    eyebrow: 'Digital marketing agency · Puerto Rico',
    title: 'You focus on your passion. We make sure the world sees it.',
    subtitle:
      'We run your social media from start to finish — strategy, content, ads and customer care — so you get your time back.',
  },
  pains: {
    title: 'Sound familiar?',
    items: [
      "You know you should post more, but there aren't enough hours in the day.",
      'You paid for an ad and never found out if it worked.',
      'Messages pile up, and some never get an answer.',
    ],
    closing: "You don't need more hours. You need a team.",
  },
  services: {
    eyebrow: 'Services',
    title: 'Choose where to start.',
    cards: {
      redes: 'We run your social media end to end: what to post, when, and with what results. You approve, we execute.',
      anuncios: "We reach people in your area who don't know you yet, with a budget you decide.",
      comunidad: 'We answer comments and messages on time and in your voice, so no customer is left waiting.',
      produccion: 'Photos, videos and designs that show your business as it really is — with professional quality.',
    },
    cardCta: "See what's included",
  },
  geo: {
    eyebrow: 'CyberLanguage · AI visibility',
    title: 'Get recommended by AI, too.',
    body: 'Your customers already ask AI for recommendations. With CyberLanguage, our GEO practice, we work so that when they ask about what you offer, the answer names you.',
    cta: 'Discover CyberLanguage',
  },
  why: {
    eyebrow: 'Why us',
    title: 'Why Cyber Positioning',
    items: [
      { title: 'Strategy first.', body: 'Before we post, we understand your business and your customers.' },
      { title: 'One team.', body: 'Content, ads and community, coordinated by the same people.' },
      { title: 'Direct contact.', body: 'You talk to the partners, not a ticketing system.' },
      { title: 'Monthly clarity.', body: "A simple report on what worked and what we'll adjust." },
    ],
  },
  work: {
    eyebrow: 'Our work',
    title: 'What we do, in plain sight.',
    body: 'Photos, videos and designs created for businesses like yours.',
    cta: 'See our work',
  },
  closing: {
    title: "Your next post shouldn't depend on having spare time.",
    body: "Tell us about your business on a 30-minute call. We'll tell you where your strategy would start.",
  },
};
