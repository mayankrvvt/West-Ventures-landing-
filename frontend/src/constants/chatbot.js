// Simple keyword-matched FAQ used when no AI backend (VITE_CHAT_ENDPOINT) is
// configured. Keep responses short — this is a chat bubble, not a page.

export const chatFaq = [
  {
    id: "services",

    keywords: [
      "service",
      "services",
      "offer",
      "what do you do",
      "what services",
      "what does west ventures do",
    ],

    response:
      "We provide five core services: Colleges & Co-op Programs, Hospitality, Immigration Consultancy, Winery, and Human Resources. Want details on one of these?",
  },

  // =========================================================
  // COLLEGES & CO-OP PROGRAMS
  // =========================================================

  {
    id: "colleges",

    keywords: [
      "college",
      "colleges",
      "co-op",
      "coop",
      "co op",
      "co-op college",
      "co-op colleges",
      "campus",
      "student",
      "students",
      "graduate",
      "graduates",
      "university",
      "universities",
      "education",
      "employment for students",
    ],

    response:
      "Our Colleges & Co-op Programs service connects students from Canadian co-op colleges with employment opportunities while helping businesses access emerging talent through employer partnerships.",
  },

  // =========================================================
  // HOSPITALITY
  // =========================================================

  {
    id: "hospitality",

    keywords: [
      "hospitality",
      "hotel",
      "hotels",
      "restaurant",
      "restaurants",
      "food service",
      "tourism",
      "hospitality jobs",
      "hotel jobs",
      "restaurant jobs",
    ],

    response:
      "Our Hospitality service supports hospitality businesses with workforce, recruitment, and business solutions designed around the needs of Canada's hospitality industry.",
  },

  // =========================================================
  // IMMIGRATION CONSULTANCY
  // =========================================================

  {
    id: "immigration",

    keywords: [
      "immigration",
      "immigrate",
      "immigration consultancy",
      "immigration consultant",
      "immigration consulting",
      "visa",
      "visas",
      "canada visa",
      "canadian visa",
      "work permit",
      "work permits",
      "study permit",
      "study permits",
      "permanent residence",
      "permanent residency",
      "pr",
      "canada immigration",
    ],

    response:
      "Our Immigration Consultancy provides professional immigration guidance and support for individuals, students, families, and businesses navigating Canadian immigration pathways.",
  },

  // =========================================================
  // WINERY
  // =========================================================

  {
    id: "winery",

    keywords: [
      "winery",
      "wineries",
      "wine",
      "wines",
      "vineyard",
      "vineyards",
      "wine industry",
      "winery jobs",
      "wine industry jobs",
    ],

    response:
      "Our Winery service supports wineries with workforce, recruitment, and business solutions tailored to the needs of the Canadian wine industry.",
  },

  // =========================================================
  // HUMAN RESOURCES
  // =========================================================

  {
    id: "hr",

    keywords: [
      "hr",
      "human resources",
      "human resource",
      "recruitment",
      "recruit",
      "recruiting",
      "hiring",
      "hire",
      "staffing",
      "employees",
      "employee",
      "workforce",
      "talent",
      "talent acquisition",
    ],

    response:
      "Our Human Resources service helps organizations build stronger teams through recruitment, staffing, workforce planning, and practical HR solutions.",
  },

  // =========================================================
  // PRICING
  // =========================================================

  {
    id: "pricing",

    keywords: [
      "price",
      "pricing",
      "cost",
      "how much",
      "budget",
      "quote",
      "fees",
      "service cost",
    ],

    response:
      "Pricing depends on the service and scope of work. The fastest way to discuss pricing is to contact our team for a customized quote.",
  },

  // =========================================================
  // LOCATION
  // =========================================================

  {
    id: "location",

    keywords: [
      "where",
      "location",
      "based",
      "office",
      "where are you",
      "where are you based",
    ],

    response:
      "We're based in BC, Canada, and work with businesses and clients across Canada.",
  },

  // =========================================================
  // CONTACT
  // =========================================================

  {
    id: "contact",

    keywords: [
      "contact",
      "reach",
      "email",
      "phone",
      "phone number",
      "talk to someone",
      "human",
      "representative",
      "get in touch",
      "touch",
      "contact us",
    ],

    response:
      "You can reach us through the contact form on our website or use the contact details provided on our Contact page.",
  },

  // =========================================================
  // CAREERS
  // =========================================================

  {
    id: "careers",

    keywords: [
      "career",
      "careers",
      "job",
      "jobs",
      "opening",
      "openings",
      "vacancy",
      "vacancies",
      "join the team",
      "work with you",
      "employment",
      "hiring",
    ],

    response:
      "We're always open to meeting good people. Check our Careers page for current opportunities or contact us with your resume.",
  },
];

export const chatFallback =
  "I don't have a specific answer for that one — but our team can help. Use the options below to explore our services or contact us directly.";

export const chatWelcome =
  "Hi — I'm the West Ventures assistant. Ask me about our services, or tap a topic below.";

export const chatQuickReplies = [
  {
    id: "services",
    label: "Our Services",
  },

  {
    id: "colleges",
    label: "Colleges & Co-op",
  },

  {
    id: "hospitality",
    label: "Hospitality",
  },

  {
    id: "immigration",
    label: "Immigration",
  },

  {
    id: "winery",
    label: "Winery",
  },

  {
    id: "hr",
    label: "Human Resources",
  },

  {
    id: "pricing",
    label: "Pricing",
  },

  {
    id: "careers",
    label: "Careers",
  },

  {
    id: "contact",
    label: "Contact",
  },
];