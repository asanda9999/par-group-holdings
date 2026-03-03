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

export interface BaseTeamMember {
  slug: string;
  name: string;
  bio: string;
  image: string;
  fullBio: string[];
  expertise: string[];
  achievements: string[];
  stats: {
    value: number;
    label: string;
    suffix?: string;
  }[];
}

export interface DivisionRole {
  role: string;
  division: string;
  divisionPath: string;
}


// Base team members with consistent information across divisions
export const baseTeamMembers: BaseTeamMember[] = [
  {
    slug: "patrick-parring",
    name: "Patrick Parring",
    bio: "Seasoned entrepreneur, investor, and visionary leader",
    image: patrick,
    fullBio: [
      "Patrick Parring is a seasoned entrepreneur, investor, and visionary leader with over four decades of experience in infrastructure, property development, private equity, and professional services. His journey began humbly as a labourer and welder at Cape Gate Fence and Wire Works",
      "His dedication and talent saw him rise rapidly through the ranks at Nedsteel, becoming Contracts Manger and then Director despite apartheid-era barriers that limited advancement for people of colour. He left Nedsteel and founded his own business in 1989.",
      "In a remarkable milestone, Patrick bought Nedsteel in 1994—the same year South Africa held its first democratic elections. Since then, he has built and led numerous ventures under the ParEquity brand, expanding into key sectors and laying the groundwork for pan-African growth.",
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
      "Loerie Award for Achievement",
      "ABSA/Cape Times Emerging Business Person of the Year.",
      "National Winner, IMM Institute of Marketing Manager's Emerging Business Marketer of the Year (twice)",
      " Chairperson of \"AVPA\" Africa Venture Philanthropy Alliance.",
    ],
    stats: [
      { value: 40, label: "Years Experience", suffix: "+" },
      { value: 45, label: "Transactions Led", suffix: "+" },
      { value: 6, label: "Core Competencies" }
    ]
  },
  {
    slug: "robert-parring",
    name: "Robert Parring",
    bio: "Leads corporate strategy, M&A, and ICT compliance across the ParEquity group.",
    image: robert,
    fullBio: [
      "Robert Parring is a commercial lawyer and corporate strategist, bringing a rare blend of legal mastery, ICT expertise, and business acumen to high-stakes corporate transactions. He leads strategy, mergers & acquisitions, and regulatory compliance across the ParEquity group.",
      "Previously, Robert held senior legal roles at Dentons and Bowmans, advancing from Candidate Attorney to Partner in under eight years. His work spans complex cross-border transactions, corporate restructuring, and ICT regulatory compliance for major clients including Amazon, SITA, and AliExpress.",
      "Robert began his career in operational leadership roles at NTI Security Solutions before transitioning into law, gaining global exposure and strategic insight. He holds dual degrees in Commerce (BCom Information Systems) and Law (LLB), reflecting his multidisciplinary expertise."
    ],
    expertise: [
      "Mergers & Acquisitions",
      "Corporate & Commercial Law",
      "Technology & Telecommunications Compliance",
      "Cross-Border Transactions",
      "Strategic Project Management",
      "Regulatory Compliance"
    ],
    achievements: [
      "Led transactions exceeding $4 billion in aggregate value",
      "Managed high-profile ICT and corporate acquisitions, including Draslovka, Old Mutual, and WIOCC",
      "Implemented regulatory compliance frameworks for Amazon, SITA, and AliExpress",
      "Rapidly advanced to Partner at a global law firm in under eight years"
    ],
    stats: [
      { value: 18, label: "Years Experience", suffix: "+" },
      { value: 45, label: "Transactions Led", suffix: "+" },
      { value: 6, label: "Core Competencies" }
    ]
  }
];

// Division-specific roles for team members
export const divisionRoles: { [key: string]: DivisionRole[] } = {
  "patrick-parring": [
    { role: "Founder", division: "ParEquity", divisionPath: "/parequity" },
    { role: "Chairperson", division: "Anthuri Fund", divisionPath: "/anthuri-fund" },
    { role: "Director", division: "Parvest", divisionPath: "/parvest" }
  ],
  "robert-parring": [
    { role: "Group CEO", division: "ParEquity", divisionPath: "/parequity" },
    { role: "CEO", division: "Anthuri Fund", divisionPath: "/anthuri-fund" },
    { role: "Director", division: "Parvest", divisionPath: "/parvest" }
  ]
};

// Helper function to create team member with division-specific role
function createTeamMember(base: BaseTeamMember, role: DivisionRole): TeamMember {
  return {
    ...base,
    role: role.role,
    division: role.division,
    divisionPath: role.divisionPath
  };
}

export const parequityTeam: TeamMember[] = [
  createTeamMember(
    baseTeamMembers.find(m => m.slug === "patrick-parring")!,
    divisionRoles["patrick-parring"].find(r => r.division === "ParEquity")!
  ),
  createTeamMember(
    baseTeamMembers.find(m => m.slug === "robert-parring")!,
    divisionRoles["robert-parring"].find(r => r.division === "ParEquity")!
  )
];

export const anthuriTeam: TeamMember[] = [
  createTeamMember(
    baseTeamMembers.find(m => m.slug === "patrick-parring")!,
    divisionRoles["patrick-parring"].find(r => r.division === "Anthuri Fund")!
  ),
  createTeamMember(
    baseTeamMembers.find(m => m.slug === "robert-parring")!,
    divisionRoles["robert-parring"].find(r => r.division === "Anthuri Fund")!
  ),
  {
    slug: "enrico-cupido",
    name: "Enrico Cupido",
    role: "Investment Analyst",
    bio: "Leads strategic advisory, stakeholder engagement, and business transformation",
    image: enrico,
    division: "Anthuri Fund",
    divisionPath: "/anthuri-fund",
    fullBio: [
      "Enrico Cupido is the Managing Director at EJC Consulting, where he leads strategic advisory, stakeholder engagement, and business transformation initiatives for a variety of clients across finance, banking, and SME sectors.",
    "He has extensive experience in business development, communications, and organisational optimisation, providing guidance on strategic growth, operational efficiency, and sustainable business practices.",
    "Enrico holds a Middle Management Program certification from GIBS, a National Diploma in Education, and multiple financial qualifications including RE5, Banking, and Wealth Management certifications. He is also an accredited business advisor with SAIPA and IBASA."
    ],
    expertise: [
    "Strategic Advisory",
    "Stakeholder Engagement",
    "Business Development",
    "Operational Optimisation",
    "Financial & Regulatory Compliance",
    "SME Mentorship"
    ],
    achievements: [
    "Led strategic transformation projects for multiple SME and corporate clients",
    "Accredited Business Advisor with SAIPA and IBASA",
    "Facilitated growth and market expansion initiatives for financial services clients",
    "Established EJC Consulting as a trusted national consulting firm"
    ],
    stats: [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 50, label: "Clients Advised", suffix: "+" },
    { value: 6, label: "Core Competencies" }
    ]
  },
  {
  slug: "sylvester-albanie",
  name: "Sylvester Albanie",
  role: "Investment Analyst",
  bio: "Leads fundraising, dealmaking, and post-investment value creation across private and listed markets.",
  image: sly,
  division: "Anthuri Fund",
  divisionPath: "/anthuri-fund",
  fullBio: [
    "Sylvester Albanie is an Investment Principal at Anthuri Fund, with extensive experience across banking, private equity, fund management, and listed-market transactions. His work spans the full investment lifecycle, from origination and structuring to execution and post-investment oversight.",
    "He has invested across start-ups, SMEs, property, and mid-market transactions, and has led mergers, acquisitions, and disposals in the listed space. Sylvester has also served as a pension fund trustee and brings strong governance and risk oversight to portfolio companies.",
    "At Anthuri, Sylvester is responsible for fundraising, operational oversight, and deal execution, with active board-level involvement post-investment. In his personal capacity, he manages listed equity investments for his family and serves on the Boland Cricket Board."
  ],
  expertise: [
    "Private Equity",
    "Fundraising",
    "Deal Origination & Execution",
    "Mergers & Acquisitions",
    "Listed Market Transactions",
    "Board & Governance Oversight",
    "SME & Mid-Market Investing"
  ],
  achievements: [
    "Led and executed private and listed-market M&A transactions",
    "Managed investments across start-ups, SMEs, property, and mid-market assets",
    "Served as pension fund trustee with fiduciary oversight responsibilities",
    "Active board participation across portfolio companies",
    "Contributed to governance and strategy as a Boland Cricket Board member"
  ],
  stats: [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 20, label: "Transactions & Investments" },
    { value: 7, label: "Core Investment Areas" }
  ]
}
];

export const parvestTeam: TeamMember[] = [
  createTeamMember(
    baseTeamMembers.find(m => m.slug === "patrick-parring")!,
    divisionRoles["patrick-parring"].find(r => r.division === "Parvest")!
  ),
  createTeamMember(
    baseTeamMembers.find(m => m.slug === "robert-parring")!,
    divisionRoles["robert-parring"].find(r => r.division === "Parvest")!
  ),
 {
  slug: "marlon-parring",
  name: "Marlon Parring",
  role: "Director",
  bio: "Leads strategic growth, operations and business development across technology, property and infrastructure sectors.",
  image: marlon,
  division: "Parvest",
  divisionPath: "/parvest",
  fullBio: [
    "Marlon Parring is a seasoned commercial leader with experience driving growth, operations, and business development in technology, property and infrastructure sectors. He currently serves as Commercial Director at NTI Solutions, where he has led strategic expansion and enhanced service offerings across building automation and electronic solutions.",
    "Previously, Marlon held executive operational leadership roles including Chief Operating Officer at Par Equity, where he oversaw group-wide operations and helped strengthen the firm’s presence in the investment community. His leadership has bridged corporate strategy with hands-on execution.",
    "Beyond corporate leadership, Marlon has been active in the commercial property sector, including brokerage and directorial roles, and has contributed through industry associations like the South African Property Owners Association (SAPOA). He is also known for mentoring emerging business leaders and advocating for youth in business through roles with organisations like Young Business South Africa."
  ],
  expertise: [
    "Strategic Growth & Business Development",
    "Operations Leadership",
    "Technology & Commercial Solutions",
    "Infrastructure & Property Sector Expertise",
    "Corporate Strategy",
    "Client & Stakeholder Engagement",
    "Mentorship & Leadership Development"
  ],
  achievements: [
    "Steered company growth and expansion initiatives at NTI Solutions",
    "Oversaw operations and commercial strategy as COO at Par Equity",
    "Contributed to property sector leadership through SAPOA roles",
    "Mentored young professionals through Young Business South Africa leadership involvement",
    "Built strategic partnerships across investment, technology and property markets"
  ],
  stats: [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 3, label: "Sector Domains" },
    { value: 7, label: "Core Competencies" }
  ]
}
];

export const allTeamMembers: TeamMember[] = [
  ...parequityTeam,
  ...anthuriTeam,
  ...parvestTeam,
];
