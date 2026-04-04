export const adTiers = [
  {
    id: 'shout-out',
    name: 'Shout-Out',
    price: 149,
    billingPeriod: 'month',
    spotsAvailable: 3,
    description:
      'Get your business in front of thousands of trades workers each month with a brief mention at the bottom of every issue.',
    perks: [
      'Single-line mention with your business name and URL',
      'Included in every issue that month (4 sends)',
      'Direct reach to HVAC techs, roofers, landscapers, and pressure washers',
      'Clickable link in the email footer',
    ],
    badge: null,
    popular: false,
  },
  {
    id: 'sponsored-section',
    name: 'Sponsored Section',
    price: 349,
    billingPeriod: 'month',
    spotsAvailable: 2,
    description:
      'Own a dedicated section inside the newsletter — enough room to actually say something worth reading.',
    perks: [
      'Dedicated ~100-word sponsored section per issue',
      'Your logo description and business URL prominently placed',
      'Call-to-action line of your choosing',
      'Included in every issue that month (4 sends)',
      'Positioned mid-newsletter where engagement is highest',
    ],
    badge: 'Most Popular',
    popular: true,
  },
  {
    id: 'title-sponsor',
    name: 'Title Sponsor',
    price: 749,
    billingPeriod: 'month',
    spotsAvailable: 1,
    description:
      'Maximum visibility. Your brand in the subject line, top of the issue, and on social — you own the month.',
    perks: [
      'Your business name in the email subject line',
      'Top-of-issue placement before any editorial content',
      'Dedicated social media shout-out to our audience',
      'Up to 150-word sponsored section with custom CTA',
      'Only one sponsor at this tier — no competition in the issue',
    ],
    badge: null,
    popular: false,
  },
]
