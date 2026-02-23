import meridianImg from "@/assets/portfolio/meridian-logistics.jpg";
import ashwoodImg from "@/assets/portfolio/ashwood-healthcare.jpg";
import capeAgriImg from "@/assets/portfolio/cape-agri.jpg";
import solarisImg from "@/assets/portfolio/solaris-energy.jpg";
import greenloopImg from "@/assets/portfolio/greenloop-water.jpg";
import biomassImg from "@/assets/portfolio/biomass-one.jpg";
import neobankImg from "@/assets/portfolio/neobank-africa.jpg";
import cargochainImg from "@/assets/portfolio/cargochain.jpg";
import eduvaultImg from "@/assets/portfolio/eduvault.jpg";
import tolcon from "@/assets/portfolio/tolcon-office.jpg";
import terrasan from "@/assets/portfolio/terrasan.jpg";
import cape from "@/assets/portfolio/cape-lime.png";
import ardin from "@/assets/portfolio/ardin.jpg";
import dmite from "@/assets/portfolio/dmite.jpeg";
import abbotts from "@/assets/portfolio/ab.jpg";
import mh from "@/assets/portfolio/mint-honey.png";
import ap from "@/assets/portfolio/a2p.jpg";

export interface PortfolioInvestment {
  slug: string;
  name: string;
  sector: string;
  description: string;
  fullDescription: string[];
  divisionPath: string;
  yearInvested: number;
  status: "Active" | "Exited" | "Pending";
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const parequityPortfolio: PortfolioInvestment[] = [
  {
    slug: "tolcon-group",
    name: "Tolcon Group",
    sector: "Transport Infrastructure, Tourism & Energy",
    description: "Integrated transport infrastructure and toll management group delivering operational excellence, innovation, and socioeconomic impact across Southern Africa.",
    image: tolcon,
    fullDescription: [
     "Tolcon Group is a leading South African transport infrastructure management provider with over three decades of operational experience. Through its portfolio of operating companies, the Group delivers toll operations and maintenance, freeway management systems, route patrols, routine road maintenance, traffic management, renewable energy solutions, and specialist electrical infrastructure services.",
    "The Group also maintains strategic exposure to tourism infrastructure assets, including destination-based operations, enhancing revenue diversification. With long-term concession contracts and government partnerships, Tolcon benefits from structured cash flows, operational resilience, and recurring infrastructure-linked revenue streams.",
    "Guided by a strong transformation and community development mandate, the Group supports job creation, skills development, and local enterprise participation across the regions in which it operates.",
    ],
    divisionPath: "/parequity",
    yearInvested: 2014,
    status: "Active",
    stats: [
  { label: "Direct Employment", value: "1,200+ Jobs Sustained" },
  { label: "Indirect Jobs Supported", value: "3,000+ (Subcontractors & SMMEs)" },
  { label: "B-BBEE Status", value: "Level 1 & Level 4 (Across Subsidiaries)" },
  { label: "Local Procurement Spend", value: "60%+ Directed to Local & Black-Owned Suppliers" },
  { label: "Skills Development Programs", value: "Ongoing Technical & Safety Training Initiatives" },
  { label: "Community Investment", value: "Enterprise & Community Upliftment Projects" }
    ],
  },
  {
  slug: "terrasan",
  name: "Terrasan",
  sector: "Aquaculture, Fishing & Property",
  description: "Diversified investment group with strategic exposure to pelagic fishing, aquaculture, seafood processing, and property assets.",
  image: terrasan,
  fullDescription: [
    "Founded in 1963 and headquartered in Cape Town, Terrasan is a diversified investment holding company with long-standing exposure to South Africa’s pelagic fishing, aquaculture, and seafood processing sectors. The Group operates across the marine protein value chain, including fishing, abalone farming, mussel cultivation, fish meal production, and canned seafood processing.",
    "Terrasan provides centralised corporate services across its portfolio, enabling operational efficiencies, governance oversight, and capital allocation discipline. Its vertically integrated structure supports export-oriented revenue streams and participation in global seafood markets.",
    "The Group maintains a strong sustainability mandate, focused on responsible resource management, environmental stewardship, and long-term value creation within the blue economy.",
  ],
  divisionPath: "/parequity",
  yearInvested: 2012,
  status: "Active",
  stats: [
  { label: "Direct Employment", value: "1,500+ Coastal & Processing Jobs" },
  { label: "Indirect Jobs Supported", value: "3,000+ (Fishing Crews, Logistics & Suppliers)" },
  { label: "B-BBEE Status", value: "Level 1–4 Across Operating Entities" },
  { label: "Export Revenue Contribution", value: "Significant FX Earnings from Global Seafood Markets" },
  { label: "Sustainably Managed Fisheries", value: "Compliance with SA Quota & Marine Regulations" },
  { label: "Community Investment", value: "Coastal Education & Skills Development Initiatives" }
  ],
},
  {
  slug: "cape-lime",
  name: "Cape Lime",
  sector: "Mining",
  description: "Cape Lime / Afrimat is a South African lime-producing business and part of the Afrimat Group.",
  image: cape,
  fullDescription: [
    "Cape Lime, part of Afrimat, is a leading South African producer of high-quality lime and mineral products. We serve the construction, industrial, agricultural, and specialised manufacturing sectors, combining technical expertise with consistent product quality.",
    "Operating in the Western Cape, Cape Lime is committed to sustainable practices, reliable supply, and delivering value-added solutions that enhance customer productivity and long-term growth."
  ],
  divisionPath: "/parequity",
  yearInvested: 2018,
  status: "Exited",
  stats: [
     { label: "Industrial Minerals Operating Profit Growth (Group)", value: "↑ 325.7%" },
  { label: "Export Shipment Count (2025 data)", value: "97 shipments to 6+ countries" },
  { label: "Established Operations Since", value: "1946" },
  { label: "Remaining Resource Life", value: ">30 years at key sites" },
  ],
},
];

export const anthuriPortfolio: PortfolioInvestment[] = [
  {
    slug: "mint-honey",
    name: "Mint and Honey",
    sector: "Food Manufacturing & Nutrition",
    description: "South African nutritional food manufacturer producing fortified cereals and blends to combat malnutrition and improve food security.",
    image: mh,
    fullDescription: [
      "Mint & Honey (Pty) Ltd manufactures fortified cereals and nutrient-rich food products designed to address malnutrition, particularly among young children and vulnerable communities. Based in Atlantis Industrial, Western Cape, the company focuses on producing high-quality, non-GMO grain products aligned with food security goals.",
    "Its product range includes Super Cereal Plus and other fortified maize and soy blends supplied to NGOs, school feeding schemes, and institutional feeding programmes. The company supports local agricultural value chains while contributing to socio-economic development and improved childhood nutrition outcomes.",
    ],
    divisionPath: "/anthuri-fund",
    yearInvested: 2026,
    status: "Pending",
    stats: [
  { label: "Employees", value: "2–10 (Core Team)" },
  { label: "Production Capacity", value: "2,500–15,000 MT / Year" },
  { label: "Primary Markets", value: "NGOs & Feeding Programmes" },
  { label: "Export Regions", value: "Africa, Middle East & SE Asia" },
    ],
  },
  {
    slug: "a2-pay",
    name: "A2 Pay",
    sector: "Fintech",
    description: "Township-focused fintech platform enabling digital payments, POS systems, and trade finance for informal retailers.",
    image: ap,
    fullDescription: [
       "A2 Pay is a South African fintech platform focused on digitising informal and township retail markets. The company provides point-of-sale (POS) systems, bill payment solutions, airtime and voucher services, and inventory management tools to spaza shops and independent retailers.",
    "By leveraging transaction data and merchant insights, A2 Pay enables access to trade finance and working capital, helping small retailers formalise operations and scale sustainably. The platform also provides FMCG suppliers with real-time sales analytics, pricing intelligence, and route-to-market optimisation across underserved communities.",
    ],
    divisionPath: "/anthuri-fund",
    yearInvested: 2026,
    status: "Pending",
    stats: [
  { label: "Jobs Supported", value: "40,000+ (via SME & Jobs Fund programs)" },
  { label: "Merchants Digitised", value: "6,000+" },
  { label: "Annual Transaction Value", value: "R2B+" },
  { label: "Local Ownership", value: "South African-founded & led" },
  { label: "Training Hours Delivered", value: "Thousands+ via A2Pay Business School" }
    ],
  },
  {
    slug: "biomass-one",
    name: "Biomass One",
    sector: "Waste-to-Energy",
    description: "Converting agricultural waste into clean baseload energy for rural communities.",
    image: biomassImg,
    fullDescription: [
      "Biomass One operates three waste-to-energy plants in Mpumalanga and Limpopo, converting sugarcane bagasse and forestry waste into reliable baseload electricity. The plants supply power to rural municipalities under long-term contracts.",
      "Anthuri Fund's investment in 2022 funded the construction of the third plant and enabled the company to secure carbon credits under the Verified Carbon Standard.",
    ],
    divisionPath: "/anthuri-fund",
    yearInvested: 2022,
    status: "Active",
    stats: [
      { label: "Plants Operational", value: "3" },
      { label: "Capacity", value: "45 MW" },
      { label: "Homes Powered", value: "60,000+" },
      { label: "Carbon Credits / Year", value: "120,000" },
    ],
  },
];

export const parvestPortfolio: PortfolioInvestment[] = [
  {
    slug: "arden-grove",
    name: "Arden Grove",
    sector: "Commercial Real Estate",
    description: "Secure Montague Gardens office park with flexible workspace",
    image: ardin,
    fullDescription: [
      "Arden Grove Business Park is a secure, professionally managed office park located in Montague Gardens, Cape Town. It offers flexible, modern office spaces suited to small and medium-sized businesses across various industries.",
      "It’s a strategic commercial investment in a well-located, income-producing office property in the business node of Cape Town. Montague Gardens is a sought-after commercial and industrial hub with strong connectivity and demand from tenants.",
    ],
    divisionPath: "/parvest",
    yearInvested: 2023,
    status: "Active",
   stats: [
  { label: "Occupancy Rate", value: "95%" },
  { label: "Tenants", value: "50+" },
  { label: "Units Available", value: "40" },
  { label: "Annual Yield", value: "8%+" }
],
  },
  {
    slug: "designamite",
    name: "Designamite",
    sector: "Industrial Real Estate",
    description: "Designamite is an Atlantis Industrial–based manufacturing company producing precision plastic and semi-finished products for display, merchandising, and industrial applications.",
    image: dmite,
    fullDescription: [
      "Designamite is a manufacturing business based in Atlantis Industrial, Cape Town, producing precision plastic and semi‑manufactured products for display, merchandising, and industrial applications. Its long history and operational footprint in the industrial sector support steady demand and diversified client relationships.",
      "The investment thesis focuses on durable manufacturing capabilities, local industrial demand, and exposure to structured production revenue streams within a growing manufacturing hub",
    ],
    divisionPath: "/parvest",
    yearInvested: 2022,
    status: "Active",
 stats: [
  { label: "Years in Operation", value: "25+" },
  { label: "Products Manufactured / Year", value: "50,000+" },
  { label: "Client Retention Rate", value: "90%" },
  { label: "Revenue CAGR", value: "15%" },
],
  },
  {
    slug: "abbotts",
    name: "Abbotts College",
    sector: "Education",
    description: "A credentialing and skills verification platform for Africa's emerging workforce.",
    image: abbotts,
    fullDescription: [
      "Abbott’s College represents strategic exposure to South Africa’s private education sector, a resilient industry supported by consistent demand for quality secondary schooling and university preparation.",
      "The investment thesis is anchored in recurring tuition revenue, strong brand positioning, and long-term demographic growth. This holding aligns with a defensive growth strategy focused on stable cash flows and essential-service sector exposure.",
    ],
    divisionPath: "/parvest",
    yearInvested: 2023,
    status: "Active",
  stats: [
  { label: "Years in Operation", value: "30+" },
  { label: "Students Enrolled / Year", value: "500+" },
  { label: "Matric Pass Rate", value: "98%" },
  { label: "Revenue CAGR", value: "12%" },
],
  },
];
