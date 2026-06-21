const processSteps = {
  discover: {
    label: '01',
    title: 'Discover',
  },
  define: {
    label: '02',
    title: 'Define',
  },
  design: {
    label: '03',
    title: 'Design',
  },
  build: {
    label: '04',
    title: 'Build',
  },
  support: {
    label: '05',
    title: 'Support',
  },
} as const

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
      'BittsTech designs and builds custom business websites that load fast, explain your offer clearly, and give visitors a simple path to contact you. This service is for growing businesses that need more than a template page: a site with clear positioning, mobile-first layouts, SEO-ready structure, and conversion-focused sections. We plan the pages around how your customers search, compare, trust, and finally contact you.',
    included: [
      {
        title: 'Mobile-first pages with clean information architecture',
        paragraphs: [
          // TODO: confirm typical website page-count/package size with Sourav.
          'We structure the website around the pages and sections your buyers actually need: homepage, service pages, proof sections, FAQs, contact paths, and any supporting pages needed for trust and clarity. The exact page count depends on the business and must be confirmed during scope, but the goal is always to make navigation simple and keep the user journey obvious.',
          'Mobile layout is treated as the primary experience, not an afterthought. We plan readable content blocks, clear calls to action, fast-loading sections, and page hierarchy that works for visitors coming from search, ads, social links, WhatsApp, or referrals.',
        ],
      },
      {
        title: 'SEO-ready metadata, headings, internal links, and schema',
        paragraphs: [
          'Each key page is prepared with a focused title, meta description, clean heading structure, and internal links that help search engines and users understand what the page is about. We avoid stuffing keywords and instead make the service, location, audience, and next step clear.',
          'Where it fits the page, we add structured data such as organization, service, breadcrumb, and FAQ schema. This gives the website a stronger technical foundation before ongoing SEO or content work begins.',
        ],
      },
      {
        title: 'Conversion-focused sections for services, proof, FAQs, and contact',
        paragraphs: [
          'A custom website needs to answer the questions a serious buyer has before they enquire. We include sections that explain what you do, who it is for, what the process looks like, what objections need answering, and how a visitor can contact you without friction.',
          'The page copy and layout are built to support a real sales conversation. That means service clarity, trust signals, useful FAQs, related internal links, and contact prompts that feel natural rather than forced.',
        ],
      },
    ],
    process: [
      {
        ...processSteps.discover,
        description:
          'We review your business, audience, current online presence, offers, competitors, and the actions visitors should take. This gives the website a practical direction before design begins.',
      },
      {
        ...processSteps.define,
        description:
          'We define the page structure, core messages, required sections, SEO targets, timeline, and content responsibilities. Any exact page count or special feature needs to be agreed here before build.',
      },
      {
        ...processSteps.design,
        description:
          'We turn the structure into mobile-first page layouts with clear hierarchy, calls to action, and content blocks. The design phase focuses on clarity and usability, not decorative clutter.',
      },
      {
        ...processSteps.build,
        description:
          'We develop the website with responsive components, clean metadata, crawlable content, and performance-conscious implementation. Progress updates keep the work visible before launch.',
      },
      {
        ...processSteps.support,
        description:
          'After launch, we help with handoff, basic support, and improvements that become clear once the site is live. Larger ongoing SEO, content, or maintenance plans should be scoped separately.',
      },
    ],
    technology: [
      'For custom websites, we use the same modern web foundation shown in the BittsTech case studies where it fits the project: Next.js and TypeScript for fast, maintainable interfaces. When a website needs dynamic data, forms, portals, or future app features, the stack can extend toward Node.js, PostgreSQL, and Cloud Storage as required.',
      'The exact stack is selected after discovery rather than forced onto every project. A simple marketing website should stay simple, while a website that will later become a portal, booking flow, or dashboard needs stronger architecture from the beginning.',
    ],
    whoFor: [
      'This is a fit for service businesses, professional services, clinics, education providers, retail brands, hospitality teams, and other growing businesses that need their website to explain the offer clearly and generate qualified enquiries.',
      'It is especially useful when the current site is missing service clarity, has weak mobile experience, depends too much on social media profiles, or does not give buyers enough confidence to contact the business.',
    ],
    faqs: [
      {
        q: 'How long does a custom website take?',
        a: 'Most standard business websites take 2-4 weeks depending on content, number of pages, and approval speed.',
      },
      {
        q: 'Will the website be SEO-friendly?',
        a: 'Yes. We build clear page structure, metadata, performance-conscious layouts, crawlable content, internal links, and relevant schema from the start.',
      },
      {
        q: 'What does a custom website typically cost?',
        // TODO: confirm real pricing range with Sourav.
        a: 'Pricing should be confirmed after scope because page count, content needs, design depth, forms, integrations, and launch support can change the work. We do not publish a fixed range until the real commercial range is confirmed.',
      },
      {
        q: 'What happens if requirements change mid-project?',
        a: 'Small clarifications can usually be handled inside the agreed scope. New pages, new features, major copy changes, or integrations are reviewed separately so timeline and cost stay transparent.',
      },
      {
        q: 'What is not included by default?',
        a: 'Ongoing SEO campaigns, paid ads, large brand identity work, professional photography, long-term content writing, and advanced third-party integrations are not assumed by default unless they are included in the project scope.',
      },
      {
        q: 'How do revisions, ownership, and handoff work?',
        a: 'Revisions are handled against the agreed structure and design direction before launch. After delivery, you receive ownership of the website code, deployment access, and core assets needed to operate the site.',
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
      'We build custom web applications for businesses that need more than a website: dashboards, portals, workflow tools, booking systems, and internal operating platforms. This service is for teams that have a process worth systemizing, data that needs to stay organized, or users who need a clear place to log in and get work done. The goal is usable software that matches the way the business operates instead of forcing the team into disconnected tools.',
    included: [
      {
        title: 'Custom user flows for your team and customers',
        paragraphs: [
          'We map the real steps users need to complete, such as submitting enquiries, managing records, approving work, updating statuses, or viewing dashboards. The application is shaped around these flows so users are not left guessing where to click next.',
          'Customer-facing and internal workflows can be separated where needed. That allows a business to give customers a clean portal while the team manages operations, updates, and records behind the scenes.',
        ],
      },
      {
        title: 'Role-based dashboards and operational views',
        paragraphs: [
          'Many web apps need different views for admins, team members, operations users, and customers. We plan role-based screens so each user sees the actions and information relevant to their responsibilities.',
          'Dashboards are built to make work visible, not just to look impressive. They can summarize records, statuses, pending actions, payments, bookings, documents, or other workflow data once those requirements are confirmed.',
        ],
      },
      {
        title: 'Scalable architecture for future modules and integrations',
        paragraphs: [
          'A useful web app often grows after the first version. We structure the application so new modules, reports, forms, integrations, and user roles can be added with less rework.',
          'The first release focuses on the core workflow that matters most. Future improvements can then be planned around real usage instead of trying to predict every possible feature on day one.',
        ],
      },
    ],
    process: [
      {
        ...processSteps.discover,
        description:
          'We study the business process, users, data, bottlenecks, and current tools before suggesting screens or features. This prevents the app from becoming a pile of disconnected requests.',
      },
      {
        ...processSteps.define,
        description:
          'We document the core modules, user roles, workflows, data structure, timeline, and first-release priorities. Anything outside the first release is separated so the project can move without scope confusion.',
      },
      {
        ...processSteps.design,
        description:
          'We convert requirements into user flows, dashboard layouts, forms, and development-ready screens. Design decisions are tied to speed, clarity, and day-to-day usability.',
      },
      {
        ...processSteps.build,
        description:
          'We build the application with responsive interfaces, secure routes, database-backed features, and regular progress updates. Testing focuses on whether the workflow works in realistic use, not just whether screens load.',
      },
      {
        ...processSteps.support,
        description:
          'After launch, we support handoff, fixes, and improvements based on actual team usage. New modules or deeper automation can be scoped as the product matures.',
      },
    ],
    technology: [
      'The existing BittsTech web application case studies use Next.js, TypeScript, PostgreSQL, Node.js, and Cloud Storage where those tools fit the product. For web apps, that stack supports structured interfaces, role-based workflows, database records, file storage, and future integrations.',
      'We do not choose technology only because it sounds advanced. The stack is matched to the workflow, data model, permissions, performance needs, and long-term ownership requirements of the application.',
    ],
    whoFor: [
      'This service fits growing teams in travel, construction, professional services, education, healthcare, retail, hospitality, manufacturing, and any business with repeated operational steps.',
      'It is strongest when spreadsheets, chat threads, manual reminders, or disconnected SaaS tools are starting to slow the team down and leadership needs better visibility into the work.',
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
      {
        q: 'What does a custom web application typically cost?',
        // TODO: confirm real pricing range with Sourav.
        a: 'Cost depends on modules, user roles, data complexity, integrations, dashboards, and launch support. A real range should be confirmed after scoping rather than guessed on the page.',
      },
      {
        q: 'What happens if requirements change during development?',
        a: 'We review the requested change against the agreed first-release scope. If it changes the data model, user roles, integrations, or timeline, it is estimated separately before implementation.',
      },
      {
        q: 'What is not included by default?',
        a: 'Large third-party subscription costs, paid external APIs, ongoing feature development, long-term hosting fees, content creation, and business process consulting beyond the scoped product are not included unless agreed.',
      },
      {
        q: 'How do revisions and handoff work?',
        a: 'Feedback is handled through planned review points for flows, screens, and working features. At handoff, you receive access to the code, deployment, and the business data structure needed to operate the app.',
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
      'BittsTech helps teams replace repetitive manual work with automation across leads, follow-ups, reporting, notifications, approvals, and internal handoffs. This service is for businesses where people spend too much time copying data, sending reminders, updating sheets, or checking whether the next step happened. We focus on practical automation that reduces coordination work without hiding the process from the team.',
    included: [
      {
        title: 'Automated lead routing and follow-up workflows',
        paragraphs: [
          'We identify where enquiries arrive, who needs to respond, what details should be captured, and which follow-up actions are repeated. From there, we can design workflows that move lead information to the right place and trigger the next step more consistently.',
          'The goal is not to remove the human relationship from sales or service. It is to reduce missed handoffs, forgotten follow-ups, and manual status tracking so the team can spend more time on conversations that matter.',
        ],
      },
      {
        title: 'Reduced spreadsheet and manual reminder dependency',
        paragraphs: [
          'Many businesses run on spreadsheets because they are flexible, but they become fragile when several people need to update them at the same time. We review which records, reminders, approvals, and reports are repeated enough to justify automation.',
          'Depending on scope, this can include structured forms, status changes, notifications, recurring checks, or dashboards. Exact deliverables depend on the tools already used by the business.',
        ],
      },
      {
        title: 'Connected data flows between the tools your team already uses',
        paragraphs: [
          'Automation often works best when it connects existing tools instead of replacing everything at once. We look at forms, CRMs, payment tools, WhatsApp workflows, spreadsheets, dashboards, and internal systems to understand where data should move.',
          'When a tool has an accessible API, webhook, export, or integration path, we can plan a more reliable data flow. If a tool has no useful connection point, we flag that limitation early instead of promising a shortcut that may not exist.',
        ],
      },
    ],
    process: [
      {
        ...processSteps.discover,
        description:
          'We review the current workflow, tools, repeated tasks, handoff points, and places where work gets delayed or missed. This helps separate automation opportunities from tasks that still need human judgment.',
      },
      {
        ...processSteps.define,
        description:
          'We define the trigger, action, data fields, notifications, owner, exception cases, and success criteria for each workflow. The scope stays clear so automation does not become a confusing hidden system.',
      },
      {
        ...processSteps.design,
        description:
          'We design the flow of data and decisions before building. For team-facing workflows, we also plan simple views or messages that make the automation understandable to users.',
      },
      {
        ...processSteps.build,
        description:
          'We implement the agreed workflows, integrations, forms, or internal tools and test them against realistic scenarios. The build includes checks for common failure points where a required field, status, or response is missing.',
      },
      {
        ...processSteps.support,
        description:
          'After launch, we help monitor the workflow, fix edge cases, and refine steps as the team starts using it. Larger workflow changes should be scoped separately once real usage is clear.',
      },
    ],
    technology: [
      // TODO: confirm real automation project stack/examples with Sourav.
      'This page needs confirmed project-specific technology examples before naming a stack as standard for business automation. The implementation may involve APIs, webhooks, forms, dashboards, databases, or custom backend logic depending on the tools already used by the business.',
      'The practical capability is tool-to-tool data movement, workflow logic, notifications, and operational visibility. The final stack should be chosen only after the existing systems and integration options are reviewed.',
    ],
    whoFor: [
      'This is useful for businesses in travel, construction, retail, clinics, education, hospitality, professional services, manufacturing, and any team that repeats the same operational steps every day.',
      'It is especially relevant when leads are missed, follow-ups depend on memory, reports take too long to prepare, or data is copied between tools by hand.',
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
      {
        q: 'What does business automation typically cost?',
        // TODO: confirm real pricing range with Sourav.
        a: 'Pricing depends on the number of workflows, tools involved, integration access, data complexity, testing needs, and support expectations. A real range needs confirmation before publishing.',
      },
      {
        q: 'What happens if requirements change after we see the workflow?',
        a: 'Small adjustments to wording, fields, or notification timing can often be handled during review. New triggers, extra tools, approval layers, or reporting needs are scoped separately.',
      },
      {
        q: 'What is not included by default?',
        a: 'Third-party tool subscriptions, paid API usage, replacing an entire business system, long-term monitoring, and major process redesign are not included unless they are part of the agreed scope.',
      },
      {
        q: 'Who owns the automation after delivery?',
        a: 'You own the custom code, workflow documentation, and business data created for the project. Any third-party accounts remain under your business ownership wherever the provider allows it.',
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
      'If your current website feels outdated, slow, unclear, or hard to update, BittsTech rebuilds it with stronger UX, content structure, mobile performance, and SEO foundations. This service is for businesses that already have an online presence but know the website is no longer helping buyers understand, trust, or contact them. A revamp keeps what is still useful and fixes the parts that block growth.',
    included: [
      {
        title: 'Clearer service messaging and calls to action',
        paragraphs: [
          'We review the current pages to understand what the site says, what it leaves unclear, and where visitors may lose confidence. Then we reorganize messaging so the services, audience, benefits, process, and contact steps are easier to understand.',
          'Calls to action are placed where they support the buyer journey. Instead of repeating generic buttons everywhere, the revamp gives visitors logical next steps after they understand the offer.',
        ],
      },
      {
        title: 'Improved mobile layout and page speed discipline',
        paragraphs: [
          'Many older sites technically load on mobile but are difficult to read, tap, or navigate. We rebuild layouts around mobile-first spacing, hierarchy, readable sections, and components that do not depend on heavy effects to communicate the message.',
          'Performance is treated as part of the user experience. We avoid unnecessary page weight, keep sections focused, and structure the build so pages feel faster and easier to browse.',
        ],
      },
      {
        title: 'Better metadata, headings, internal links, and content structure',
        paragraphs: [
          'A revamp is also a chance to fix the technical and content signals that search engines rely on. We improve page titles, descriptions, heading hierarchy, internal linking, and schema where relevant.',
          'If existing URLs already matter for search or referrals, we plan the new structure carefully. Redirect needs and URL changes should be identified before launch so useful pages do not disappear without a path.',
        ],
      },
    ],
    process: [
      {
        ...processSteps.discover,
        description:
          'We audit the current website, page structure, messaging, mobile experience, SEO basics, and contact flow. This shows what should be kept, changed, merged, or removed.',
      },
      {
        ...processSteps.define,
        description:
          'We define the revised page structure, content priorities, redirect considerations, design direction, and launch checklist. Any new pages or features are separated from simple revamp work.',
      },
      {
        ...processSteps.design,
        description:
          'We redesign the key pages with clearer hierarchy, stronger service sections, better mobile layout, and more useful trust-building content. The aim is improvement, not change for its own sake.',
      },
      {
        ...processSteps.build,
        description:
          'We rebuild the approved pages with responsive components, clean metadata, performance-conscious implementation, and crawlable content. The launch process includes checks for important links and page basics.',
      },
      {
        ...processSteps.support,
        description:
          'After launch, we help handle immediate fixes and improvements noticed during real use. Ongoing SEO, content publishing, or maintenance can be scoped separately.',
      },
    ],
    technology: [
      // TODO: confirm real website revamp project stack/examples with Sourav.
      'This page needs confirmed project-specific technology examples before listing a standard revamp stack. Some revamps may involve rebuilding in Next.js and TypeScript, while others may depend on the current platform, content needs, hosting, and future maintenance plan.',
      'The practical focus is better structure, speed, mobile usability, metadata, and conversion paths. The technology should be chosen after reviewing the existing website and deciding whether to rebuild, migrate, or improve in place.',
    ],
    whoFor: [
      'This service fits businesses that already have a website but are not confident sending prospects to it. It is relevant for service providers, clinics, education businesses, retail brands, hospitality teams, and professional services.',
      'It is especially useful when the site looks dated, loads slowly, has unclear service pages, lacks SEO structure, or does not explain why a visitor should trust the business.',
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
      {
        q: 'What does a website revamp typically cost?',
        // TODO: confirm real pricing range with Sourav.
        a: 'Cost depends on how many pages need redesign, how much content needs rewriting, whether URLs change, and whether new functionality is added. A confirmed pricing range should be added after business approval.',
      },
      {
        q: 'What happens if we add new requirements during the revamp?',
        a: 'New pages, forms, integrations, copywriting needs, or platform migration tasks are reviewed separately. This keeps the revamp timeline and original scope clear.',
      },
      {
        q: 'What is not included by default?',
        a: 'Full rebranding, logo design, professional photography, paid advertising setup, ongoing SEO campaigns, and advanced integrations are not included unless they are added to the scope.',
      },
      {
        q: 'How do revisions and ownership work?',
        a: 'Revisions are handled around the approved page structure and design direction. After launch, you own the revamped website code, deployment access, and content assets created for the project.',
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
      'We connect business tools so data can move between forms, CRMs, dashboards, payment tools, notifications, and internal systems with less manual work. This service is for teams that already use useful software but still rely on copy-paste, duplicate entry, or scattered updates between platforms. A good integration reduces operational gaps while respecting the limits of each tool involved.',
    included: [
      {
        title: 'Tool-to-tool data sync with fewer manual entries',
        paragraphs: [
          'We review where data is created, where it needs to go, which fields matter, and who depends on the update. Then we design a sync or handoff that reduces repeated manual entry and keeps the right system updated.',
          'This can include form submissions, lead records, payment status, booking updates, customer details, reports, or document references depending on the tools and API access available.',
        ],
      },
      {
        title: 'Custom middleware for workflows your current tools cannot handle',
        paragraphs: [
          'Sometimes two tools do not speak to each other cleanly, or the workflow needs extra logic between them. In those cases, we can plan custom middleware that validates data, transforms fields, checks conditions, or routes information before sending it forward.',
          'Middleware is useful when the business process has rules that off-the-shelf integrations cannot represent. The exact logic is documented so the integration is understandable after handoff.',
        ],
      },
      {
        title: 'More reliable reporting and operational visibility',
        paragraphs: [
          'Integrations should make information easier to trust. We help connect operational data so dashboards, records, or internal views reflect what is happening across tools instead of depending on delayed manual updates.',
          'Where possible, we also plan basic failure handling so missing fields, failed requests, or unavailable third-party services do not silently break the workflow.',
        ],
      },
    ],
    process: [
      {
        ...processSteps.discover,
        description:
          'We identify the tools, data sources, API access, webhooks, permissions, and manual handoffs involved. This step also reveals whether a requested integration is technically realistic.',
      },
      {
        ...processSteps.define,
        description:
          'We document the systems to connect, data fields, triggers, conditions, expected outputs, failure cases, and ownership. Clear definitions are especially important because integrations depend on external platform limits.',
      },
      {
        ...processSteps.design,
        description:
          'We design the data flow before writing code, including what happens when data is incomplete or an external service responds differently than expected. This keeps the integration easier to maintain.',
      },
      {
        ...processSteps.build,
        description:
          'We build and test the agreed API connection, webhook, middleware, or internal endpoint against realistic inputs. The work includes checking data mapping and basic error scenarios.',
      },
      {
        ...processSteps.support,
        description:
          'After launch, we help monitor early usage and adjust edge cases. Changes caused by third-party API updates or new business rules should be scoped as follow-up work.',
      },
    ],
    technology: [
      // TODO: confirm real API integration project stack/examples with Sourav.
      'This page needs confirmed project-specific technology examples before naming a standard integration stack. API work may involve backend endpoints, webhooks, databases, authentication, dashboards, or third-party SDKs depending on the systems being connected.',
      'The capability is connecting accessible systems through documented APIs, webhooks, or custom middleware. If a third-party tool has no API, limited permissions, or paid access restrictions, that limitation has to be handled honestly during discovery.',
    ],
    whoFor: [
      'This service fits businesses using multiple tools for sales, finance, operations, bookings, customer communication, documents, or reporting. It can apply across travel, construction, retail, healthcare, education, hospitality, professional services, and manufacturing.',
      'It is most useful when the current tools are valuable but disconnected, causing duplicate data entry, delayed updates, inconsistent reports, or missed handoffs.',
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
      {
        q: 'What does an API integration typically cost?',
        // TODO: confirm real pricing range with Sourav.
        a: 'Cost depends on the number of tools, API complexity, authentication, data mapping, testing needs, and error handling. A real range should be confirmed before publishing.',
      },
      {
        q: 'What happens if the API requirements change?',
        a: 'If field mappings, tools, authentication, or workflow rules change, we review the impact before updating the integration. Third-party API changes may also require separate maintenance work.',
      },
      {
        q: 'What is not included by default?',
        a: 'Third-party subscription fees, paid API access, provider approval delays, long-term monitoring, and fixing limitations inside external platforms are not included unless agreed.',
      },
      {
        q: 'Who owns the integration after handoff?',
        a: 'You own the custom integration code and related documentation. Third-party accounts, API keys, and data should remain under your business control wherever the provider allows it.',
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
      'BittsTech builds custom business management systems for companies that need one reliable place to manage teams, customers, vendors, workflows, documents, reporting, and daily operations. This service is for businesses where the process has outgrown spreadsheets, scattered chats, and disconnected tools. A management system creates a shared operational source of truth so the team can see what is happening, who owns it, and what needs attention.',
    included: [
      {
        title: 'Role-based access for teams and admins',
        paragraphs: [
          'We plan different access levels for admins, managers, team members, and other users based on what each role needs to do. This keeps sensitive or irrelevant information away from users who do not need it while still giving them the tools required for their work.',
          'Role-based access is especially important when the system covers multiple departments, locations, sites, or operational responsibilities. It helps the platform stay usable as the business adds more users.',
        ],
      },
      {
        title: 'Centralized workflows, records, and business data',
        paragraphs: [
          'A management system brings repeated operational work into one structured platform. Depending on the business, that can include leads, bookings, projects, materials, vendors, workforce, documents, customers, payments, approvals, or status updates.',
          'The goal is to reduce scattered information and create clearer ownership. Users should know where to update records, where to find history, and which steps are pending.',
        ],
      },
      {
        title: 'Dashboards that make operations easier to monitor',
        paragraphs: [
          'Dashboards are planned around operational questions, not vanity metrics. They can show active work, pending approvals, live costs, bookings, payments, document status, or other business-specific views once the data model is defined.',
          'Good dashboards help leadership and teams spot movement earlier. They also reduce the need to ask for updates across calls, messages, and separate files.',
        ],
      },
    ],
    process: [
      {
        ...processSteps.discover,
        description:
          'We study the full operational lifecycle, users, records, departments, current tools, and reporting needs. This helps identify the core system the business actually needs first.',
      },
      {
        ...processSteps.define,
        description:
          'We define modules, permissions, data relationships, workflows, reports, and first-release priorities. Complex systems need clear boundaries so the first version is useful and buildable.',
      },
      {
        ...processSteps.design,
        description:
          'We design dashboards, forms, tables, user flows, and admin screens around daily usage. The system should be easy for teams to adopt, not just complete on paper.',
      },
      {
        ...processSteps.build,
        description:
          'We develop the platform with database-backed modules, role-aware interfaces, file or document handling where required, and regular progress reviews. Testing focuses on realistic workflows across user roles.',
      },
      {
        ...processSteps.support,
        description:
          'After launch, we help with handoff, fixes, user feedback, and planning future modules. A management system often improves over time as the team learns which views and automations matter most.',
      },
    ],
    technology: [
      'The BittsTech construction management case study shows a real management-system stack using Next.js, Node.js, PostgreSQL, and Cloud Storage. The travel agency platform also uses Next.js, TypeScript, and PostgreSQL for a multi-role operational workflow.',
      'For management systems, these technologies support structured records, user roles, dashboards, file handling, and operational workflows. The exact architecture still depends on modules, permissions, reporting, integrations, and data ownership requirements.',
    ],
    whoFor: [
      'This service fits growing businesses in construction, travel, professional services, education, healthcare, hospitality, retail, manufacturing, and any business with multi-step operations.',
      'It is strongest when several people need to coordinate around the same records, when leadership needs live visibility, or when separate spreadsheets and tools are creating mistakes.',
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
      {
        q: 'What does a business management system typically cost?',
        // TODO: confirm real pricing range with Sourav.
        a: 'Cost depends on modules, user roles, reports, document handling, integrations, and support needs. A real commercial range should be confirmed before publishing.',
      },
      {
        q: 'What happens if requirements change mid-project?',
        a: 'We review changes against the defined first-release scope. New modules, permission rules, reports, or integrations are estimated separately before they are added.',
      },
      {
        q: 'What is not included by default?',
        a: 'Ongoing feature development, third-party subscription fees, major process consulting, data cleanup at scale, and long-term hosting or support are not included unless agreed.',
      },
      {
        q: 'How do revisions, ownership, and handoff work?',
        a: 'Revisions are handled at planned review points for workflows, screens, and working modules. You receive ownership of the source code, deployment access, and business data created for the system.',
      },
    ],
  },
] as const

export type Service = (typeof services)[number]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
