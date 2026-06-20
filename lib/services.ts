export const services = [
  {
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    shortTitle: 'Custom Websites',
    metaTitle: 'Custom Website Development Agency in India | BittsTech',
    metaDescription:
      'BittsTech builds fast, mobile-first custom websites for Indian businesses that need clear messaging, SEO foundations, and conversion-focused design.',
    description:
      'Designed to convert visitors. Fast, mobile-first, built with clean technical SEO foundations and clear calls to action.',
    h1: 'Custom Website Development Agency in India',
    intro:
      'BittsTech designs and builds custom business websites that load fast, explain your offer clearly, and give visitors a simple path to contact you.',
    outcomes: [
      'Mobile-first pages with clean information architecture',
      'SEO-ready metadata, headings, internal links, and schema',
      'Conversion-focused sections for services, proof, FAQs, and contact',
    ],
    faqs: [
      {
        q: 'How long does a custom website take?',
        a: 'Most standard business websites take 2-4 weeks depending on content, number of pages, and approval speed.',
      },
      {
        q: 'Will the website be SEO-friendly?',
        a: 'Yes. We build clear page structure, metadata, performance-conscious layouts, and crawlable content from the start.',
      },
    ],
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    shortTitle: 'Web Applications',
    metaTitle: 'Web App Development Company in India | BittsTech',
    metaDescription:
      'Build custom web applications for operations, teams, dashboards, workflows, and customer portals with BittsTech.',
    description:
      'Complex workflows turned into clean, usable software built around your business process.',
    h1: 'Web App Development Company in India',
    intro:
      'We build web applications for businesses that need more than a website: dashboards, portals, workflow tools, and internal systems.',
    outcomes: [
      'Custom user flows for your team and customers',
      'Role-based dashboards and operational views',
      'Scalable architecture for future modules and integrations',
    ],
    faqs: [
      {
        q: 'What kinds of web apps can BittsTech build?',
        a: 'We build dashboards, booking systems, CRM-style tools, portals, workflow systems, and custom operational platforms.',
      },
      {
        q: 'Do I own the web application code?',
        a: 'Yes. You receive ownership of the source code, deployment access, and business data.',
      },
    ],
  },
  {
    slug: 'business-automation',
    title: 'Business Automation',
    shortTitle: 'Business Automation',
    metaTitle: 'Business Automation Software in India | BittsTech',
    metaDescription:
      'Automate repetitive business workflows, lead handling, reminders, reporting, and tool-to-tool data movement with BittsTech.',
    description:
      'Automated communication, data flows, and operations that reduce manual coordination.',
    h1: 'Business Automation Software in India',
    intro:
      'BittsTech helps teams replace repetitive manual work with automation across leads, follow-ups, reporting, notifications, and internal handoffs.',
    outcomes: [
      'Automated lead routing and follow-up workflows',
      'Reduced spreadsheet and manual reminder dependency',
      'Connected data flows between the tools your team already uses',
    ],
    faqs: [
      {
        q: 'What business processes can be automated?',
        a: 'Lead follow-ups, booking updates, internal alerts, reporting, invoice reminders, data syncing, and approval flows are common starting points.',
      },
      {
        q: 'Can automation work with my current tools?',
        a: 'Usually yes. We review your existing tools first, then connect APIs or build custom workflows where needed.',
      },
    ],
  },
  {
    slug: 'website-revamp',
    title: 'Website Revamp',
    shortTitle: 'Website Revamps',
    metaTitle: 'Website Revamp Services in India | BittsTech',
    metaDescription:
      'Improve an outdated business website with better speed, SEO structure, messaging, responsive design, and conversion paths.',
    description:
      'We take your existing website and rebuild it into a stronger growth channel.',
    h1: 'Website Revamp Services in India',
    intro:
      'If your current website feels outdated, slow, unclear, or hard to update, we rebuild it with stronger UX, content structure, and technical foundations.',
    outcomes: [
      'Clearer service messaging and calls to action',
      'Improved mobile layout and page speed discipline',
      'Better metadata, headings, internal links, and content structure',
    ],
    faqs: [
      {
        q: 'Can you revamp my existing website without changing my brand?',
        a: 'Yes. We can preserve your brand direction while improving layout, speed, content clarity, and SEO structure.',
      },
      {
        q: 'Do you migrate old pages safely?',
        a: 'We plan redirects and URL structure so important pages keep a clear path after the revamp.',
      },
    ],
  },
  {
    slug: 'api-integrations',
    title: 'API Integrations',
    shortTitle: 'API & Integrations',
    metaTitle: 'API Integration Services in India | BittsTech',
    metaDescription:
      'Connect CRMs, payment tools, WhatsApp workflows, dashboards, forms, and business systems with custom API integrations.',
    description:
      'Connect every tool you use. Fill operational gaps with custom-built integrations.',
    h1: 'API Integration Services in India',
    intro:
      'We connect business tools so your data can move between forms, CRMs, dashboards, payment tools, notifications, and internal systems.',
    outcomes: [
      'Tool-to-tool data sync with fewer manual entries',
      'Custom middleware for workflows your current tools cannot handle',
      'More reliable reporting and operational visibility',
    ],
    faqs: [
      {
        q: 'Which tools can you integrate?',
        a: 'We can integrate tools with accessible APIs, webhooks, forms, databases, payment providers, CRMs, and notification platforms.',
      },
      {
        q: 'Can you build a custom API if my tool does not have one?',
        a: 'Yes. We can build custom backend endpoints or middleware when a direct integration is not available.',
      },
    ],
  },
  {
    slug: 'business-management-system',
    title: 'Business Management System',
    shortTitle: 'Management Systems',
    metaTitle: 'Business Management System Development in India | BittsTech',
    metaDescription:
      'Build custom business management systems for teams, workflows, customers, vendors, documents, reporting, and operations.',
    description:
      'Multi-user software covering the full operational lifecycle of your business.',
    h1: 'Business Management System Development in India',
    intro:
      'BittsTech builds custom management systems for businesses that need one reliable place to manage teams, customers, vendors, workflows, documents, and reports.',
    outcomes: [
      'Role-based access for teams and admins',
      'Centralized workflows, records, and business data',
      'Dashboards that make operations easier to monitor',
    ],
    faqs: [
      {
        q: 'Is a custom management system better than spreadsheets?',
        a: 'For growing teams, yes. A custom system reduces scattered data, manual updates, and unclear ownership across workflows.',
      },
      {
        q: 'Can the system grow over time?',
        a: 'Yes. We can start with the core workflow and add modules as the business process matures.',
      },
    ],
  },
] as const

export type Service = (typeof services)[number]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
