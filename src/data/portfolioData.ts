import meridianImg from "@/assets/portfolio/meridian-logistics.jpg";
import ashwoodImg from "@/assets/portfolio/ashwood-healthcare.jpg";
import capeAgriImg from "@/assets/portfolio/cape-agri.jpg";
import solarisImg from "@/assets/portfolio/solaris-energy.jpg";
import greenloopImg from "@/assets/portfolio/greenloop-water.jpg";
import biomassImg from "@/assets/portfolio/biomass-one.jpg";
import neobankImg from "@/assets/portfolio/neobank-africa.jpg";
import cargochainImg from "@/assets/portfolio/cargochain.jpg";
import eduvaultImg from "@/assets/portfolio/eduvault.jpg";

export interface PortfolioInvestment {
  slug: string;
  name: string;
  sector: string;
  description: string;
  fullDescription: string[];
  divisionPath: string;
  yearInvested: number;
  status: "Active" | "Exited";
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const parequityPortfolio: PortfolioInvestment[] = [
  {
    slug: "meridian-logistics",
    name: "Meridian Logistics",
    sector: "Supply Chain & Logistics",
    description: "A leading last-mile distribution platform serving Southern Africa's FMCG sector.",
    image: meridianImg,
    fullDescription: [
      "Meridian Logistics operates a technology-enabled last-mile distribution network spanning six provinces in South Africa. The company connects FMCG manufacturers with independent retailers through a proprietary route-optimisation platform.",
      "ParEquity partnered with the founder-led team in 2019 to accelerate geographic expansion and invest in fleet modernisation. Since investment, revenue has grown at 28% CAGR while maintaining best-in-class delivery reliability metrics.",
    ],
    divisionPath: "/parequity",
    yearInvested: 2019,
    status: "Active",
    stats: [
      { label: "Revenue CAGR", value: "28%" },
      { label: "EBITDA Margin", value: "18.5%" },
      { label: "Employees", value: "1,200+" },
      { label: "Provinces Covered", value: "6" },
    ],
  },
  {
    slug: "ashwood-healthcare",
    name: "Ashwood Healthcare",
    sector: "Healthcare Services",
    description: "A private hospital group focused on specialised surgical care in underserved markets.",
    image: ashwoodImg,
    fullDescription: [
      "Ashwood Healthcare operates four specialist surgical hospitals across Gauteng and KwaZulu-Natal. The group focuses on orthopaedic, ophthalmic, and day-case procedures, serving both medical aid and private-pay patients.",
      "Since ParEquity's investment in 2021, the group has opened two new facilities and doubled its theatre capacity. The management team continues to drive operational excellence with industry-leading patient satisfaction scores.",
    ],
    divisionPath: "/parequity",
    yearInvested: 2021,
    status: "Active",
    stats: [
      { label: "Facilities", value: "4" },
      { label: "Procedures / Year", value: "22,000+" },
      { label: "Patient Satisfaction", value: "94%" },
      { label: "Revenue Growth", value: "35% YoY" },
    ],
  },
  {
    slug: "cape-agri-holdings",
    name: "Cape Agri Holdings",
    sector: "Agriculture & Food",
    description: "An integrated farming and food processing business exporting premium produce to global markets.",
    image: capeAgriImg,
    fullDescription: [
      "Cape Agri Holdings is a vertically integrated agricultural business producing citrus, table grapes, and stone fruit across the Western Cape. The company controls the full value chain from farm to port.",
      "ParEquity invested in 2018 to support the company's expansion into new export markets and fund cold-chain infrastructure upgrades. The business has since achieved a 40% increase in export volumes and secured long-term supply agreements with European retailers.",
    ],
    divisionPath: "/parequity",
    yearInvested: 2018,
    status: "Active",
    stats: [
      { label: "Hectares Farmed", value: "3,500" },
      { label: "Export Growth", value: "40%" },
      { label: "Markets Served", value: "12" },
      { label: "Seasonal Workers", value: "4,000+" },
    ],
  },
];

export const anthuriPortfolio: PortfolioInvestment[] = [
  {
    slug: "solaris-energy",
    name: "Solaris Energy",
    sector: "Renewable Energy",
    description: "Utility-scale solar developer with 450MW of installed capacity across sub-Saharan Africa.",
    image: solarisImg,
    fullDescription: [
      "Solaris Energy develops, builds, and operates utility-scale solar photovoltaic plants across South Africa, Kenya, and Mozambique. The company has a 450MW operational portfolio and a 1.2GW development pipeline.",
      "Anthuri Fund led the Series B in 2020 to fund the expansion into East Africa. Solaris has since commissioned three new plants and secured long-term power purchase agreements with national utilities.",
    ],
    divisionPath: "/anthuri-fund",
    yearInvested: 2020,
    status: "Active",
    stats: [
      { label: "Installed Capacity", value: "450 MW" },
      { label: "Development Pipeline", value: "1.2 GW" },
      { label: "CO₂ Avoided / Year", value: "380,000 t" },
      { label: "Countries", value: "3" },
    ],
  },
  {
    slug: "greenloop-water",
    name: "GreenLoop Water",
    sector: "Water Infrastructure",
    description: "Industrial water recycling and treatment solutions reducing freshwater dependency.",
    image: greenloopImg,
    fullDescription: [
      "GreenLoop Water designs and operates closed-loop water treatment systems for mining, manufacturing, and municipal clients. Their modular treatment plants recover up to 95% of process water for reuse.",
      "Anthuri Fund invested in 2021 to scale the company's municipal partnerships and fund R&D into membrane filtration technology. The business now serves 18 industrial clients and three municipalities.",
    ],
    divisionPath: "/anthuri-fund",
    yearInvested: 2021,
    status: "Active",
    stats: [
      { label: "Water Recycled", value: "12M litres/day" },
      { label: "Recovery Rate", value: "95%" },
      { label: "Clients", value: "21" },
      { label: "Revenue CAGR", value: "42%" },
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
    slug: "neobank-africa",
    name: "NeoBank Africa",
    sector: "Fintech",
    description: "A digital-first banking platform serving SMEs across three African markets.",
    image: neobankImg,
    fullDescription: [
      "NeoBank Africa provides digital banking, lending, and payments infrastructure to small and medium enterprises in South Africa, Nigeria, and Kenya. The platform processes over R2 billion in monthly transaction volume.",
      "Parvest led the Series A in 2021 and followed on in the Series B. The company has grown its merchant base from 5,000 to 85,000 and recently launched an embedded lending product with strong early traction.",
    ],
    divisionPath: "/parvest",
    yearInvested: 2021,
    status: "Active",
    stats: [
      { label: "Monthly Volume", value: "R2B+" },
      { label: "Merchants", value: "85,000" },
      { label: "Markets", value: "3" },
      { label: "YoY Growth", value: "180%" },
    ],
  },
  {
    slug: "cargochain",
    name: "CargoChain",
    sector: "Supply Chain Tech",
    description: "AI-powered freight management platform digitising Africa's trucking industry.",
    image: cargochainImg,
    fullDescription: [
      "CargoChain is a logistics technology company that connects shippers with carriers through an AI-powered marketplace. The platform optimises route planning, load matching, and real-time tracking across Southern and East Africa.",
      "Parvest invested in the seed round in 2022. Since then, CargoChain has scaled to 3,000 registered carriers and reduced average empty-mile rates by 35% for its shipper clients.",
    ],
    divisionPath: "/parvest",
    yearInvested: 2022,
    status: "Active",
    stats: [
      { label: "Registered Carriers", value: "3,000" },
      { label: "Loads Matched / Month", value: "12,000" },
      { label: "Empty-Mile Reduction", value: "35%" },
      { label: "Revenue CAGR", value: "220%" },
    ],
  },
  {
    slug: "eduvault",
    name: "EduVault",
    sector: "EdTech",
    description: "A credentialing and skills verification platform for Africa's emerging workforce.",
    image: eduvaultImg,
    fullDescription: [
      "EduVault provides blockchain-verified digital credentials and skills assessments for job seekers, universities, and employers. The platform has verified over 500,000 credentials and partners with 40 tertiary institutions.",
      "Parvest invested in 2023 to support EduVault's expansion into corporate upskilling and government employment programmes. The company is now the preferred verification partner for three national qualification authorities.",
    ],
    divisionPath: "/parvest",
    yearInvested: 2023,
    status: "Active",
    stats: [
      { label: "Credentials Verified", value: "500,000+" },
      { label: "Partner Institutions", value: "40" },
      { label: "Employers Using", value: "250+" },
      { label: "Verification Time", value: "<30 sec" },
    ],
  },
];
