import type { WorkCopy } from '../types';

/** "Our work", translated from the team's "Cómo trabajamos" proposal (2026-10-30). */
export const work: WorkCopy = {
  eyebrow: 'How we work',
  title: 'What we do, in plain sight.',
  lead: 'Strategy, content and clear numbers. We show you every step and what you get from each one, with no inflated promises.',
  processTitle: 'From the first call to the monthly report',
  processBody: 'Six steps. The last two repeat every month, so your content improves with data, not hunches.',
  monthlyTag: 'Every month',
  deliverableLabel: 'What you get',
  steps: {
    diagnosis: {
      title: 'Diagnosis',
      body: 'We review your current social media, what you sell, your competitors and who buys from you.',
      deliverable: "a diagnosis of what works, what doesn't and where to start.",
    },
    strategy: {
      title: 'Strategy',
      body: 'We define what you want to achieve (more sales, more customers, more visibility), what we will talk about and in what tone.',
      deliverable: 'a content plan you approve before anything is produced.',
    },
    production: {
      title: 'Production',
      body: 'We design the pieces, write the copy and coordinate photo and video shoots.',
      deliverable: 'a calendar with pieces ready for your approval.',
    },
    publishing: {
      title: 'Publishing',
      body: "We post on the agreed days and times and answer your customers' comments and messages.",
      deliverable: 'active social media without you having to think about it.',
    },
    measurement: {
      title: 'Measurement',
      body: "We review which posts drew people in, which ones generated messages or sales and which ones didn't.",
      deliverable: 'a monthly report in plain language, no jargon.',
    },
    adjustment: {
      title: 'Adjustment',
      body: 'We use that data to decide what to repeat and what to change the following month.',
      deliverable: "a review meeting and next month's plan.",
    },
  },
  reportTitle: 'What you get every month',
  reportBody: 'A one-page report in plain English.',
  reportIncludes: [
    'What we posted and how each piece performed',
    'How many people saw you, messaged you or clicked',
    'What we learned and what changes next month',
  ],
  reportSample: {
    heading: 'Sample Brand · March report',
    badge: 'Illustrative data',
    metrics: [
      { label: 'Reach', value: '18,400', change: '+22% vs. February' },
      { label: 'Interactions', value: '1,250', change: '+15%' },
      { label: 'New followers', value: '+310', change: '+9%' },
      { label: 'Messages', value: '86', change: '+31%' },
    ],
    chartLabel: 'Reach per week, illustrative data',
    weekLabels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'],
    bestTitle: 'What worked best',
    best: ['Behind-the-scenes reel (wk 4)', 'FAQ carousel'],
    nextTitle: 'Next month',
    next: ['2 more reels per week', 'Reply to messages in under 2 h'],
    footnote: 'Example with illustrative data. It does not belong to a real client.',
  },
  resultsTitle: 'Results',
  resultsBody: 'Real cases: the challenge, what we did and what changed.',
  challengeLabel: 'The challenge',
  whatWeDidLabel: 'What we did',
  resultLabel: 'The result',
  closingTitle: 'What would this look like for your brand?',
  closingBody: "Tell us about your business and we'll tell you where we would start.",
};
