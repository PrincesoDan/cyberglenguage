import type { ServicesCopy } from '../types';

/** Brand brief §05 (names) and §06 "Servicios" (copy). No prices (web brief). */
export const services: ServicesCopy = {
  eyebrow: 'Services',
  title: 'Choose where to start.',
  intro: 'Everything we do has one goal: more people discovering your business and choosing it.',
  recommended: 'Recommended',
  individualTitle: 'Individual services',
  benefitsLabel: "What's included",
  conditionsLabel: 'Terms',
  wantThis: 'I want this service',
  addOn: {
    title: 'No time to answer messages?',
    body: "Add Community Care and don't miss a single inquiry.",
    cta: '+ Community Care',
  },
  items: {
    redes: {
      name: 'Full Social Media Management',
      summary: "We handle your social media from start to finish, so you don't have to think about it.",
      benefits: [
        'Monthly strategy and content calendar',
        'Photos, videos and designs made for your business',
        'Consistent posting on Facebook and Instagram',
        'A monthly report in plain language',
        'Ongoing adjustments based on what works',
      ],
      conditions:
        'We start with an initial 3-month period — the real time social media takes to show results. Other platforms, like TikTok, are agreed based on your business.',
    },
    anuncios: {
      name: 'Social Media Ads',
      summary: 'We put your business in front of new customers in your area, with ads that are measured and adjusted.',
      benefits: [
        'Ads built for your goal: visits, messages or bookings',
        'Audience defined by area, age and interests',
        'Monitoring and adjustments during the campaign',
        'A report on what each result cost',
      ],
      conditions: 'We quote based on your goal, the content and the length of the campaign.',
    },
    comunidad: {
      name: 'Community Care',
      summary: "A dedicated person answering comments and messages on your business's behalf.",
      benefits: [
        "Fast replies in your brand's voice",
        'Organized messages so no inquiry gets lost',
        'Customers who feel looked after — and come back',
      ],
      conditions: 'Available as an add-on to Full Social Media Management.',
    },
    produccion: {
      name: 'Content Production',
      summary: 'Just need photos, videos or designs? We produce them per project.',
      benefits: [
        'Photo and video sessions at your business',
        'Graphic design for social media, menus, promotions and more',
        'Files ready to use wherever you need them',
      ],
      conditions: null,
    },
  },
  closing: {
    title: 'Not sure which one to pick?',
    body: "Tell us about your business on a 30-minute call and we'll recommend where to start.",
  },
};
