// Team member images
import jamesHartley from "../assets/team/james-hartley.jpg";
import sarahNdlovu from "../assets/team/sarah-ndlovu.jpg";
import michaelChen from "../assets/team/michael-chen.jpg";
import leratoMolefe from "../assets/team/lerato-molefe.jpg";
import davidKruger from "../assets/team/david-kruger.jpg";
import amaraOsei from "../assets/team/amara-osei.jpg";
import thomasVanDerBerg from "../assets/team/thomas-van-der-berg.jpg";
import priyaNaidoo from "../assets/team/priya-naidoo.jpg";
import lucasFerrara from "../assets/team/lucas-ferrara.jpg";
import enrico from "../assets/team/enrico.png";
import patrick from "../assets/team/patrick.png";
import robert from "../assets/team/robert.png";
import marlon from "../assets/team/marlon.png";
import sly from "../assets/team/Slyvester.png";


export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  division: string;
  divisionPath: string;
  fullBio: string[];

  // NEW FIELDS
  expertise: string[];
  achievements: string[];
  stats: {
    value: number;
    label: string;
    suffix?: string;
  }[];
}


export const parequityTeam: TeamMember[] = [
  {
    slug: "patrick-parring",
    name: "Patrick Parring",
    role: "Managing Partner",
    bio: "20+ years in private equity and corporate finance.",
    image: patrick,
    division: "ParEquity",
    divisionPath: "/parequity",
    fullBio: [
      "James Hartley is the Managing Partner of ParEquity, bringing over two decades of experience in private equity, corporate finance, and strategic advisory. He has led investments across industrials, financial services, and consumer sectors, with a consistent focus on long-term value creation.",
      "Prior to founding ParEquity, James held senior positions at leading investment firms where he was responsible for deal origination, structuring, and portfolio management. He holds an MBA from London Business School and a BCom from the University of Cape Town.",
      "James is deeply committed to partnership-driven investing, working closely with management teams to build businesses that endure. He serves on multiple portfolio company boards and is an active contributor to industry thought leadership.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
  {
    slug: "robert-parring",
    name: "Robert Parring",
    role: "Investment Director",
    bio: "Leads deal origination and portfolio strategy.",
    image: robert,
    division: "ParEquity",
    divisionPath: "/parequity",
    fullBio: [
      "Sarah Ndlovu is the Investment Director at ParEquity, responsible for leading deal origination, due diligence, and portfolio strategy across the fund's investments. She brings a sharp analytical lens and a deep understanding of emerging market dynamics.",
      "Before joining ParEquity, Sarah worked at a top-tier management consulting firm and later transitioned into principal investing, where she developed expertise in financial modelling, sector analysis, and stakeholder management.",
      "Sarah holds a Master's in Finance from the University of the Witwatersrand and is a CFA Charterholder. She is passionate about backing founders who are building sustainable, high-impact businesses.",
    ], expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
  {
    slug: "marlon-parring",
    name: "Marlon Parring",
    role: "Partner",
    bio: "Focused on operational value creation across the portfolio.",
    image: marlon,
    division: "ParEquity",
    divisionPath: "/parequity",
    fullBio: [
      "Michael Chen is a Partner at ParEquity, where he leads operational value creation initiatives across the portfolio. His focus is on helping management teams implement strategic improvements that drive growth and operational efficiency.",
      "Michael has extensive experience in operations management, having previously served as COO at a mid-market industrial group. He brings hands-on expertise in supply chain optimisation, digital transformation, and organisational design.",
      "He holds an MBA from INSEAD and a degree in Industrial Engineering from the University of Hong Kong. Michael believes that the best investments are built on strong operational foundations and aligned incentives.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
];

export const anthuriTeam: TeamMember[] = [
  {
    slug: "patrick-parring",
    name: "Patrick Parring",
    role: "Fund Manager",
    bio: "Specialist in sustainable infrastructure and energy transition.",
    image: patrick,
    division: "Anthuri Fund",
    divisionPath: "/anthuri-fund",
    fullBio: [
      "Lerato Molefe is the Fund Manager of Anthuri Fund, overseeing the fund's investment strategy and portfolio of sustainable infrastructure assets. She is a recognised leader in impact investing and energy transition finance.",
      "Lerato has spent over 15 years working at the intersection of infrastructure development and sustainable finance. She previously led the infrastructure desk at a major development finance institution, where she structured and executed investments in renewable energy, water, and transport.",
      "She holds a Master's in Development Finance from the University of Stellenbosch and is a regular speaker at industry conferences on the role of private capital in Africa's energy transition.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
  {
    slug: "robert-parring",
    name: "Robert Parring",
    role: "Investment Analyst",
    bio: "Focused on impact measurement and ESG integration.",
    image: robert,
    division: "Anthuri Fund",
    divisionPath: "/anthuri-fund",
    fullBio: [
      "David Kruger is an Investment Analyst at Anthuri Fund, where he supports the investment process with a particular focus on impact measurement, ESG integration, and financial analysis. He plays a key role in evaluating new opportunities and monitoring portfolio performance.",
      "David has a background in environmental science and finance, giving him a unique perspective on the intersection of sustainability and investment returns. He is skilled in building impact frameworks that align with international reporting standards.",
      "He holds a BCom (Honours) in Financial Analysis from the University of Pretoria and is currently pursuing his CFA designation. David is passionate about deploying capital into projects that deliver measurable environmental and social outcomes.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
  {
    slug: "enrico-cupido",
    name: "Enrico Cupido",
    role: "Investment Analyst",
    bio: "Focused on impact measurement and ESG integration.",
    image: enrico,
    division: "Anthuri Fund",
    divisionPath: "/anthuri-fund",
    fullBio: [
      "David Kruger is an Investment Analyst at Anthuri Fund, where he supports the investment process with a particular focus on impact measurement, ESG integration, and financial analysis. He plays a key role in evaluating new opportunities and monitoring portfolio performance.",
      "David has a background in environmental science and finance, giving him a unique perspective on the intersection of sustainability and investment returns. He is skilled in building impact frameworks that align with international reporting standards.",
      "He holds a BCom (Honours) in Financial Analysis from the University of Pretoria and is currently pursuing his CFA designation. David is passionate about deploying capital into projects that deliver measurable environmental and social outcomes.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
  {
    slug: "sylvester-albanie",
    name: "Sylvester Albanie",
    role: "Portfolio Manager",
    bio: "Oversees asset management and stakeholder engagement.",
    image: sly,
    division: "Anthuri Fund",
    divisionPath: "/anthuri-fund",
    fullBio: [
      "Amara Osei is the Portfolio Manager at Anthuri Fund, responsible for overseeing asset management, performance reporting, and stakeholder engagement across the fund's portfolio of sustainable infrastructure investments.",
      "With a background in project finance and asset management, Amara brings deep operational expertise to Anthuri's portfolio companies. She previously managed a portfolio of renewable energy assets across West and Southern Africa.",
      "Amara holds an MSc in Finance from the London School of Economics and a BA in Economics from the University of Ghana. She is committed to building transparent, high-performing portfolios that generate lasting impact.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
];

export const parvestTeam: TeamMember[] = [
  {
    slug: "patrick-parring",
    name: "Patrick Parring",
    role: "Managing Partner",
    bio: "Serial investor focused on technology and growth equity.",
    image: patrick,
    division: "Parvest",
    divisionPath: "/parvest",
    fullBio: [
      "Thomas van der Berg is the Managing Partner of Parvest, leading the fund's growth equity strategy with a focus on technology-enabled businesses. He has backed multiple category-defining companies from growth stage through to exit.",
      "Thomas has over 18 years of experience in venture capital and growth equity, with a track record spanning fintech, enterprise software, and digital health. Prior to Parvest, he was a Partner at a leading European growth fund.",
      "He holds an MBA from Stanford Graduate School of Business and a BSc in Computer Science from Delft University of Technology. Thomas is passionate about partnering with ambitious founders and helping them build global businesses.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
  {
    slug: "robert-parring",
    name: "Robert Parring",
    role: "Principal",
    bio: "Leads venture investments across fintech and healthtech.",
    image: robert,
    division: "Parvest",
    divisionPath: "/parvest",
    fullBio: [
      "Priya Naidoo is a Principal at Parvest, where she leads venture and growth-stage investments across fintech, healthtech, and digital platforms. She is known for her rigorous approach to market analysis and her ability to identify emerging category leaders.",
      "Before joining Parvest, Priya worked in investment banking and later moved into venture capital, where she developed a deep network across the African and Asian startup ecosystems. She has been involved in numerous successful growth-stage transactions.",
      "Priya holds a Master's in Business Administration from the Indian Institute of Management Bangalore and a BCom from the University of KwaZulu-Natal. She is a mentor to early-stage founders and an advocate for diversity in the venture industry.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
  {
    slug: "marlon-parring",
    name: "Marlon Parring",
    role: "Associate",
    bio: "Supports deal execution and portfolio monitoring.",
    image: marlon,
    division: "Parvest",
    divisionPath: "/parvest",
    fullBio: [
      "Lucas Ferrara is an Associate at Parvest, supporting deal execution, financial modelling, and portfolio monitoring across the fund's growth equity investments. He brings strong quantitative skills and a keen eye for emerging trends.",
      "Lucas joined Parvest after completing his studies, having previously interned at a leading investment bank and a venture capital fund. He is skilled in financial analysis, market research, and competitive benchmarking.",
      "He holds a Master's in Finance from Bocconi University in Milan. Lucas is passionate about technology-driven innovation and the role of private capital in scaling transformative businesses.",
    ],
     expertise: [
    "Deal Origination",
    "Cross-Border Transactions",
    "Portfolio Strategy",
    "Regulatory Structuring",
    "Financial Modelling",
    "Capital Allocation"
  ],

  achievements: [
    "Led transactions exceeding $2 billion in aggregate value",
    "Expanded fund presence into 3 new markets",
    "Implemented institutional investment committee framework",
    "Recognized industry thought leader in emerging market PE"
  ],

  stats: [
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 45, label: "Transactions Led", suffix: "+" },
    { value: 6, label: "Core Competencies" }
  ]

  },
];

export const allTeamMembers: TeamMember[] = [
  ...parequityTeam,
  ...anthuriTeam,
  ...parvestTeam,
];
