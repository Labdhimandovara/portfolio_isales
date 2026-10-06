export interface PersonalData {
  name: string;
  role: string;
  organizationFocus: string;
  headline: string;
  subtitle: string;
  secondaryPositioning: string;
  email: string;
  linkedin: string;
  github: string;
  aboutIntro: string;
  education: Array<{
    degree: string;
    institute: string;
    year: string;
    score: string;
  }>;
}

export const personalData: PersonalData = {
  name: "Labdhi Mandovara",
  role: "Inside Sales Specialist",
  organizationFocus: "Client Growth & BD",
  headline: "Turning Conversations Into Opportunities.",
  subtitle: "Inside Sales and Business Development professional focused on building relationships, understanding customer needs and creating meaningful growth opportunities.",
  secondaryPositioning: "Communication • Outreach • Relationship Building • Business Growth",
  email: "mandowaralabdhi@gmail.com",
  linkedin: "https://www.linkedin.com/in/labdhi-mandovara-047561278/",
  github: "https://github.com/Labdhimandovara",
  aboutIntro: "From student outreach and marketing initiatives to event coordination and team leadership, I have consistently worked at the intersection of communication, people and execution.",
  education: [
    {
      degree: "B.Tech in Information Technology",
      institute: "Symbiosis Institute of Technology, Pune",
      year: "2023 - 2027",
      score: "8.4 CGPA"
    },
    {
      degree: "Senior Secondary (Class XII)",
      institute: "National Public School, Indore",
      year: "2022 - 2023",
      score: "8.1 CGPA"
    },
    {
      degree: "Secondary School (Class X)",
      institute: "National Public School, Indore",
      year: "2020 - 2021",
      score: "9.5 CGPA"
    }
  ]
};

export interface Strength {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const strengthsData: Strength[] = [
  {
    number: "01",
    title: "Lead Generation",
    description: "Identifying prospects, initiating conversations and creating qualified opportunities through structured research and discovery.",
    icon: "Target"
  },
  {
    number: "02",
    title: "Client Communication",
    description: "Understanding needs, communicating value clearly and maintaining meaningful multi-channel business conversations.",
    icon: "MessageSquareText"
  },
  {
    number: "03",
    title: "Outreach & Campaigns",
    description: "Experience with structured outreach campaigns and participant/customer engagement across multiple cohorts.",
    icon: "Send"
  },
  {
    number: "04",
    title: "Relationship Building",
    description: "Building trust through consistent, authentic communication, stakeholder empathy, and prompt follow-up.",
    icon: "HeartHandshake"
  },
  {
    number: "05",
    title: "Pitching & Presentation",
    description: "Presenting concepts clearly, articulating ROI and value propositions to diverse audiences under competitive settings.",
    icon: "Presentation"
  },
  {
    number: "06",
    title: "Event & Community Engagement",
    description: "Coordinating events, campaigns and engagement initiatives that turn initial curiosity into lasting brand advocacy.",
    icon: "Users"
  }
];

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  tag: string;
  year: string;
  tagColor: string;
  description: string[];
  metrics?: string;
  featured?: boolean;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "social-house-learning",
    title: "Education & Skill Development Initiative",
    organization: "Social House Learning",
    role: "Intern — Outreach & Program Management",
    period: "Nov'25 – Feb'26",
    tag: "Best Pitch Winner",
    year: "2026",
    tagColor: "#007500",
    featured: true,
    description: [
      "Coordinated education and skill-development initiatives through event execution, student outreach and program management.",
      "Pitched an event concept with the team and won Best Pitch, demonstrating ideation, communication and presentation skills.",
      "Translated program curriculum into compelling outreach messaging that drove participant attendance and positive engagement."
    ],
    metrics: "Won Best Pitch Award"
  },
  {
    id: "aiesec-marketing",
    title: "Participant Outreach & Campaign Management",
    organization: "AIESEC",
    role: "Junior Marketing Manager",
    period: "Feb'24 – Jul'24",
    tag: "Campaign Outreach",
    year: "2024",
    tagColor: "#b83061",
    description: [
      "Contributed to 3+ technology-focused outreach initiatives and multi-channel engagement campaigns.",
      "Analyzed 200+ participant feedback responses to evaluate campaign reception and improve outreach outcomes.",
      "Facilitated clear communication touchpoints between global student prospects and local exchange teams."
    ],
    metrics: "3+ Outreach Campaigns • 200+ Feedback Evaluated"
  },
  {
    id: "akshar-bharati",
    title: "Community Outreach & Corporate Partnerships",
    organization: "Akshar Bharati NGO",
    role: "Outreach & Engagement Volunteer",
    period: "Jan'25 – Apr'25",
    tag: "Community & Partnerships",
    year: "2025",
    tagColor: "#02768b",
    description: [
      "Participated in 10+ school visits focused on interactive reading sessions and scientific toy-based learning activities.",
      "Supported 3+ fundraising events and contributed to corporate partnership outreach to sustain educational initiatives.",
      "Engaged diverse audiences—from elementary educators to corporate CSR representatives—to communicate the NGO's mission."
    ],
    metrics: "10+ School Visits • 3+ Fundraising Events"
  },
  {
    id: "tech-fluency",
    title: "Tech-Fluent Sales Advantage (SaaS & B2B Acumen)",
    organization: "Technical Foundation",
    role: "Domain Fluency & Product Storytelling",
    period: "2024 – Present",
    tag: "B2B Domain Literacy",
    year: "2026",
    tagColor: "#936011",
    description: [
      "Leverages an engineering background to speak the language of technical prospects, architects, and engineering decision makers.",
      "Translates complex technical capabilities (commerce layers, fintech APIs, conversational AI) into plain-English business ROI.",
      "Acts as a seamless bridge between client expectations, engineering constraints, and product value."
    ],
    metrics: "Technical Empathy for Enterprise Buyers"
  }
];

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  bulletPoints: string[];
  transferableSalesSkill: string;
}

export const leadershipData: LeadershipItem[] = [
  {
    role: "Department Magazine Head",
    organization: "College Magazine Editorial",
    period: "Aug'25 – Jul'26",
    transferableSalesSkill: "Stakeholder Management & Team Alignment",
    bulletPoints: [
      "Led the magazine team, overseeing content curation, design, layout and final publication.",
      "Directed cross-functional coordination between writers, designers and faculty to meet strict publishing deadlines."
    ]
  },
  {
    role: "Design Head",
    organization: "Creative & Layout Committee",
    period: "Jul'25 – Aug'25",
    transferableSalesSkill: "Brand Storytelling & Visual Communication",
    bulletPoints: [
      "Directed magazine design, managing layouts, visual content and creative direction across the publication.",
      "Coordinated with the editorial team to maintain visual consistency and streamline the review workflow."
    ]
  },
  {
    role: "Cultural Head",
    organization: "Cultural Affairs Council",
    period: "Aug'21 – Mar'22",
    transferableSalesSkill: "Event Execution & External Partner Relations",
    bulletPoints: [
      "Led planning and execution of 5+ cultural events, coordinating students, faculty and external partners.",
      "Managed logistics, scheduling, and on-ground stakeholder communication to deliver seamless event experiences."
    ]
  },
  {
    role: "Principal Representative",
    organization: "Student Council",
    period: "Aug'20 – Mar'21",
    transferableSalesSkill: "Client Advocacy & High-Level Negotiation",
    bulletPoints: [
      "Represented students directly before academic administration, addressing concerns with diplomatic advocacy.",
      "Coordinated active communication across 20+ faculty and peer representatives to build consensus."
    ]
  }
];

export interface AchievementItem {
  title: string;
  badge: string;
  context: string;
  date: string;
  transferableStrengths: string;
  description: string;
}

export const achievementsData: AchievementItem[] = [
  {
    title: "Nomura KakushIN 10.0",
    badge: "FINALIST",
    context: "1,000+ participating teams",
    date: "Jul'26",
    transferableStrengths: "Competitive Selection • Pitching • Value Communication",
    description: "Recognized as a Finalist from 1,000+ participating teams across multiple rounds. Presented Dhan-Saarthi with articulate business value positioning, clear market problem definition, and confident live pitch delivery."
  },
  {
    title: "LaserHacks 2025",
    badge: "DAY-2 GLOBAL FINALIST",
    context: "Global Hackathon by SCRS & Lasell University, USA",
    date: "Nov'25",
    transferableStrengths: "Global Evaluation • High-Pressure Collaboration • Execution",
    description: "Advanced to Day-2 Finals after competitive international evaluation. Spearheaded presentation structuring and solution framing, ensuring the project's clinical and user benefits resonated with global evaluators."
  },
  {
    title: "Razorpay Buildathon 2026",
    badge: "PARTICIPANT",
    context: "Agentic Merchant Commerce Layer",
    date: "2026",
    transferableStrengths: "Product Ideation • B2B Commerce Understanding • Teamwork",
    description: "Collaborated under intense sprint conditions to craft solution positioning for 12M+ merchant ecosystem, sharpening grasp of fintech workflows, merchant pain points, and payment rails."
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  quote: string;
  badge: string;
  centerColor: string;
  edgeColor: string;
  height: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Social House Learning Team",
    title: "Program Evaluation & Judging Panel",
    quote: "Labdhi's presentation during our concept pitch was a standout. She had a rare knack for distilling a complex program into an inspiring, actionable story that captured the room immediately—which earned her team the Best Pitch award.",
    badge: "Pitching",
    centerColor: "#fff3d0",
    edgeColor: "#ffacc0",
    height: "480px"
  },
  {
    id: "test-2",
    name: "AIESEC Engagement Cohort",
    title: "Marketing & Outreach Team",
    quote: "Working with Labdhi on student outreach was incredibly smooth. She actively evaluated over 200 feedback responses with genuine care, transforming raw comments into actionable campaign refinements that drove measurable participation.",
    badge: "Outreach",
    centerColor: "#c2ffdd",
    edgeColor: "#afdbff",
    height: "440px"
  },
  {
    id: "test-3",
    name: "Department Faculty Advisor",
    title: "Academic & Editorial Board",
    quote: "As Magazine Head, Labdhi was the vital connective tissue across faculty members, student writers, and design teams. She handled conflicting viewpoints with poise and ensured every publication deadline was met without friction.",
    badge: "Leadership",
    centerColor: "#ffb8b5",
    edgeColor: "#fff184",
    height: "460px"
  },
  {
    id: "test-4",
    name: "Nomura KakushIN Peer Lead",
    title: "Hackathon Co-Presenter",
    quote: "When we were pitching among 1,000+ teams, Labdhi brought calm authority to our presentation. She anticipated the judges' questions, articulated our platform's value proposition effortlessly, and kept our team completely focused.",
    badge: "Presenting",
    centerColor: "#fff1a4",
    edgeColor: "#acedff",
    height: "430px"
  },
  {
    id: "test-5",
    name: "Akshar Bharati Coordinator",
    title: "Community Outreach Director",
    quote: "Her natural empathy and enthusiasm during school visits and corporate fundraising events were infectious. Labdhi knows how to connect with different audiences and represent an organization with true dedication.",
    badge: "Community",
    centerColor: "#ffb4b5",
    edgeColor: "#acd0ff",
    height: "450px"
  },
  {
    id: "test-6",
    name: "Student Administration Council",
    title: "Peer Representative Liaison",
    quote: "Representing 20+ faculty and students requires active listening and persistent follow-through. Labdhi was always the person who followed up, kept everybody informed, and turned conversations into concrete outcomes.",
    badge: "Advocacy",
    centerColor: "#b3ffed",
    edgeColor: "#58a6ff",
    height: "440px"
  }
];

export const workingPrinciples = [
  {
    number: "01",
    keyword: "LISTEN",
    tagline: "Understand people before proposing solutions.",
    description: "Every successful sales engagement begins with active listening. Rather than pitching immediately, I identify pain points, underlying motivations, and unspoken priorities."
  },
  {
    number: "02",
    keyword: "CONNECT",
    tagline: "Build genuine and professional relationships.",
    description: "People buy from people they trust. I prioritize long-term rapport, genuine curiosity about the client's business, and respectful, authentic rapport over transactional pressure."
  },
  {
    number: "03",
    keyword: "COMMUNICATE",
    tagline: "Make ideas and value easy to understand.",
    description: "Clarity wins deals. I distill technical intricacies and features into straightforward, compelling business outcomes and measurable return on investment."
  },
  {
    number: "04",
    keyword: "FOLLOW THROUGH",
    tagline: "Turn conversations into action.",
    description: "A conversation without execution is a missed opportunity. I maintain structured touchpoints, rigorous tracking, and dependable follow-ups that turn prospects into partners."
  }
];

export const metricsData = [
  {
    stat: "3+",
    label: "Outreach Initiatives",
    subtext: "Technology-focused campaigns executed at AIESEC"
  },
  {
    stat: "200+",
    label: "Feedback Responses Analyzed",
    subtext: "Evaluated to optimize engagement & participant outcomes"
  },
  {
    stat: "10+",
    label: "Interactive School Visits",
    subtext: "Hands-on reading & science engagement via Akshar Bharati"
  },
  {
    stat: "3+",
    label: "Fundraising & Corporate Drives",
    subtext: "Organized to support community and non-profit initiatives"
  },
  {
    stat: "5+",
    label: "Cultural Events Led",
    subtext: "Managed cross-functional student & partner logistics"
  },
  {
    stat: "1,000+",
    label: "Hackathon Teams Competed",
    subtext: "Finalist in Nomura KakushIN 10.0 through multiple pitch rounds"
  }
];
