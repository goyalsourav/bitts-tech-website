export const workProjects = [
  {
    slug: 'travel-suite',
    category: 'Travel & Tourism',
    title: 'Travel Agency Management Platform',
    cardTitle: 'End-to-End Travel Agency Platform',
    summary:
      'A full-stack operating system for travel agencies handling leads, bookings, and invoices in one place.',
    cardDescription:
      'Travel agencies were managing leads, bookings, and follow-ups manually across disconnected tools.',
    industry: 'Travel & Tourism',
    platform: 'Web App',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    problem:
      'Travel teams were trying to manage fast-moving customer conversations, bookings, invoices, and follow-ups across disconnected tools. That made it hard to know which leads were active, which trips needed attention, and which payments were still pending.',
    need:
      'The business needed one reliable platform that could reduce manual coordination, keep customer information organized, and give leadership visibility into day-to-day performance.',
    painPoints: [
      'Lead details scattered across chats and spreadsheets',
      'Manual booking updates and itinerary tracking',
      'Invoices created separately from payment records',
      'Follow-ups dependent on memory and reminders',
    ],
    solution:
      'We built a centralized travel agency platform that connects lead management, booking workflows, and invoicing into a single operational system.',
    features: [
      {
        title: 'Lead Management',
        description:
          'Capture inquiries, track pipeline stages, assign follow-ups, and keep every traveler conversation tied to a clear business outcome.',
      },
      {
        title: 'Booking System',
        description:
          'Manage trip details, itinerary status, customer requirements, and operational handoffs in one connected workflow.',
      },
      {
        title: 'Invoice Generator',
        description:
          'Create invoices and connect payment tracking to the booking record, reducing scattered finance updates.',
      },
    ],
    results: [
      { value: '100%', label: 'Centralized lead and booking workflow' },
      { value: 'Multi-role', label: 'Access for sales, operations, and admin' },
      { value: 'Live', label: 'Booking and payment visibility' },
    ],
  },
  {
    slug: 'construction-suite',
    category: 'Construction & Infrastructure',
    title: 'Construction Management Software',
    cardTitle: 'Multi-Site Construction Management System',
    summary:
      'A multi-site construction ERP for materials, vendors, workforce, budgets, documents, and payroll visibility.',
    cardDescription:
      'Construction businesses had no unified way to track materials, workforce, and finances across multiple sites.',
    industry: 'Construction & Infrastructure',
    platform: 'Web App',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Cloud Storage'],
    problem:
      'Construction teams were coordinating site progress, material procurement, vendor updates, labor attendance, and budgets through manual records and fragmented communication.',
    need:
      'As projects scaled across multiple sites, the business needed one system to track what was happening, what it cost, who was responsible, and which actions needed attention.',
    painPoints: [
      'Material requests managed manually across vendors',
      'Site progress updates buried in calls and messages',
      'Budget changes tracked after the fact',
      'Attendance and payroll handled in separate records',
      'Documents and compliance files hard to locate',
    ],
    solution:
      'We designed a construction management suite that brings procurement, project tracking, budgets, attendance, payroll, vendors, and documents into one multi-role platform.',
    features: [
      {
        title: 'Material Procurement',
        description:
          'Track material requests, vendor quotes, approvals, deliveries, and site-level consumption from one workflow.',
      },
      {
        title: 'Site Management',
        description:
          'Keep project progress, workforce updates, and site responsibilities visible across active locations.',
      },
      {
        title: 'Budget Tracking',
        description:
          'Monitor planned budgets, real-time expenses, and cost movement before problems become invisible.',
      },
      {
        title: 'Attendance & Payroll',
        description:
          'Connect employee attendance and payroll processing to the same operational source of truth.',
      },
    ],
    results: [
      { value: 'Multi-site', label: 'Operational tracking across projects' },
      { value: 'Live Costs', label: 'Budget and expense visibility' },
      { value: 'Unified', label: 'Procurement, payroll, and documents' },
    ],
  },
] as const

export type WorkProject = (typeof workProjects)[number]

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug)
}
