import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Landmark,
  BriefcaseBusiness,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay,
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const platformCards = [
  {
    category: "PRIVATE EQUITY",
    year: "Core Platform",
    title: "ParEquity",
    description:
      "A disciplined private markets platform focused on structured opportunities, active stewardship, and durable long-term value creation.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    href: "/parequity",
  },
  {
    category: "IMPACT & GROWTH",
    year: "Strategic Mandate",
    title: "Anthuri",
    description:
      "A growth capital platform backing scalable businesses across priority sectors through responsible investment and measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    href: "/anthuri",
  },
  {
    category: "REAL ASSETS",
    year: "Long-Term Capital",
    title: "ParVest",
    description:
      "Patient capital invested into responsibly governed, income-generating industrial and commercial real estate assets.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    href: "/parvest",
  },
];

const philosophyItems = [
  {
    icon: Landmark,
    title: "Disciplined Capital Allocation",
    text: "We deploy capital selectively, with a focus on downside protection, durability of cash flow, and long-term risk-adjusted returns.",
  },
  {
    icon: Building2,
    title: "Active Stewardship",
    text: "We work alongside management teams, partners, and stakeholders to strengthen governance, execution, and strategic outcomes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Enduring Value Creation",
    text: "We favour resilient sectors, responsible structures, and platforms capable of compounding value across cycles.",
  },
];

const leadership = [
  {
    name: "Robert Parring",
    role: "Leadership",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Enrico Cupido",
    role: "Leadership",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Investment Team",
    role: "Group Platform",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ParEquityGroupPage() {
  return (
    <div className="bg-[#f4f4f1] text-[#0d1b2a]">
      {/* Top Platform Nav */}
      <div className="bg-[#06142d] text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-5 lg:px-16">
          <div className="flex items-center gap-8 text-[12px] uppercase tracking-[0.22em] text-white/70">
            <a
              href="/parequity-group"
              className="border-b border-white pb-1 text-white"
            >
              ParEquity Group
            </a>
            <a href="/parequity" className="transition hover:text-white">
              ParEquity
            </a>
            <a href="/anthuri" className="transition hover:text-white">
              Anthuri
            </a>
            <a href="/parvest" className="transition hover:text-white">
              ParVest
            </a>
          </div>

          <div className="hidden items-center gap-10 text-[12px] uppercase tracking-[0.22em] text-white/60 lg:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#platforms" className="transition hover:text-white">
              Platforms
            </a>
            <a href="#philosophy" className="transition hover:text-white">
              Philosophy
            </a>
            <a href="#team" className="transition hover:text-white">
              Team
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-[#d7dbe2] bg-[#f4f4f1]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-8 lg:px-16 lg:py-10">
          <a
            href="/parequity-group"
            className="text-[28px] font-light tracking-[-0.03em] text-[#0b1730]"
          >
            ParEquity Group
          </a>

          <nav className="hidden items-center gap-12 text-[13px] uppercase tracking-[0.2em] text-[#71809a] lg:flex">
            <a href="#about" className="transition hover:text-[#0b1730]">
              About
            </a>
            <a href="#platforms" className="transition hover:text-[#0b1730]">
              Platforms
            </a>
            <a href="#portfolio" className="transition hover:text-[#0b1730]">
              Portfolio
            </a>
            <a href="#team" className="transition hover:text-[#0b1730]">
              Team
            </a>
            <a href="#contact" className="transition hover:text-[#0b1730]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,40,0.88)_0%,rgba(4,16,40,0.72)_38%,rgba(4,16,40,0.38)_68%,rgba(4,16,40,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[#08214a]/30" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1440px] items-end px-8 pb-24 pt-28 lg:px-16 lg:pb-28 lg:pt-36">
          <div className="max-w-[720px]">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 text-[12px] uppercase tracking-[0.28em] text-white/65"
            >
              PAREQUITY GROUP
            </motion.p>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-[900px] text-[54px] font-light leading-[0.98] tracking-[-0.045em] text-white sm:text-[72px] lg:text-[96px]"
            >
              Building enduring platforms across capital, property and growth.
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 max-w-[620px] text-[19px] leading-[1.75] text-white/82 lg:text-[21px]"
            >
              ParEquity Group is a diversified investment platform with interests
              across private markets, real assets, and growth-focused mandates —
              built on disciplined capital allocation, responsible stewardship,
              and long-term value creation.
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#platforms"
                className="inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-4 text-[13px] uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#07142d]"
              >
                Explore the Group
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section
        id="about"
        className="bg-[#f4f4f1] px-8 py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          <div>
            <p className="mb-8 text-[12px] uppercase tracking-[0.24em] text-[#71809a]">
              ABOUT
            </p>
            <h2 className="max-w-[720px] text-[44px] font-light leading-[1.08] tracking-[-0.04em] text-[#102038] md:text-[58px] lg:text-[70px]">
              A diversified platform for disciplined long-term capital.
            </h2>
          </div>

          <div className="lg:pt-6">
            <div className="mb-10 h-px w-full bg-[#d7dbe2]" />
            <p className="max-w-[620px] text-[20px] font-light leading-[1.7] text-[#65738a]">
              We build and steward investment platforms designed for resilience,
              durability, and responsible growth across multiple sectors and
              asset classes. Our group structure enables focused mandates while
              preserving a shared approach to governance, stewardship, and
              capital discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section
        id="platforms"
        className="bg-[#f4f4f1] px-8 pb-28 lg:px-16 lg:pb-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-end">
            <div>
              <p className="mb-8 text-[12px] uppercase tracking-[0.24em] text-[#71809a]">
                OUR PLATFORMS
              </p>
              <h2 className="max-w-[760px] text-[42px] font-light leading-[1.08] tracking-[-0.04em] text-[#102038] md:text-[56px] lg:text-[68px]">
                A group structure built to deploy capital across distinct
                mandates.
              </h2>
            </div>

            <p className="max-w-[580px] text-[19px] leading-[1.75] text-[#65738a]">
              ParEquity Group brings together complementary platforms across
              private equity, impact-led growth capital, and real asset
              investment — each operating with clear focus while benefiting from
              shared long-term stewardship.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-3">
            {platformCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.href}
                custom={index * 0.08}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-[30px] bg-[#081a39] shadow-[0_30px_80px_rgba(5,16,40,0.12)]"
              >
                <div className="grid min-h-[360px] md:grid-cols-[1.05fr_1fr] xl:grid-cols-1 2xl:grid-cols-[1.02fr_1fr]">
                  <div className="relative flex flex-col justify-between bg-[linear-gradient(180deg,#0b1c3d_0%,#07142d_100%)] p-8 text-white lg:p-10">
                    <div>
                      <div className="mb-8 flex items-center justify-between gap-4 text-[12px] uppercase tracking-[0.22em] text-white/70">
                        <span>{card.category}</span>
                        <span>{card.year}</span>
                      </div>

                      <h3 className="text-[28px] font-light tracking-[-0.03em] text-white md:text-[34px]">
                        {card.title}
                      </h3>

                      <p className="mt-4 max-w-[28ch] text-[17px] leading-[1.7] text-white/75">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <span className="text-[12px] uppercase tracking-[0.24em] text-white/85">
                        View Details
                      </span>
                      <span className="rounded-full border border-white/20 p-3 transition duration-300 group-hover:translate-x-1 group-hover:border-white/45">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-[260px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,45,0.16)_0%,rgba(7,20,45,0)_100%)]" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Snapshot */}
      <section
        id="portfolio"
        className="border-t border-[#d7dbe2] bg-[#eef0f3] px-8 py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div>
            <p className="mb-8 text-[12px] uppercase tracking-[0.24em] text-[#71809a]">
              PORTFOLIO SNAPSHOT
            </p>
            <h2 className="max-w-[620px] text-[42px] font-light leading-[1.08] tracking-[-0.04em] text-[#102038] md:text-[56px] lg:text-[66px]">
              Selected exposure across our investment ecosystem.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Commercial real estate and industrial property",
              "Private market operating businesses",
              "Growth-stage and impact-oriented platforms",
              "Long-duration, cash-flow focused opportunities",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[26px] border border-[#d8dce3] bg-white/70 p-7 backdrop-blur-sm"
              >
                <p className="text-[17px] leading-[1.75] text-[#5f6f86]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="bg-[#f4f4f1] px-8 py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 max-w-[860px]">
            <p className="mb-8 text-[12px] uppercase tracking-[0.24em] text-[#71809a]">
              INVESTMENT PHILOSOPHY
            </p>
            <h2 className="text-[42px] font-light leading-[1.08] tracking-[-0.04em] text-[#102038] md:text-[56px] lg:text-[68px]">
              Defined by discipline. Built for durability.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {philosophyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  custom={index * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-[30px] border border-[#dde1e8] bg-white/70 p-8 shadow-[0_18px_60px_rgba(10,22,44,0.05)] backdrop-blur-sm lg:p-10"
                >
                  <div className="mb-8 inline-flex rounded-full border border-[#d8dee8] p-3 text-[#102038]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-[28px] font-light leading-[1.15] tracking-[-0.03em] text-[#102038]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-[1.8] text-[#65738a]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="border-t border-[#d7dbe2] bg-[#eef0f3] px-8 py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-8 text-[12px] uppercase tracking-[0.24em] text-[#71809a]">
                LEADERSHIP
              </p>
              <h2 className="max-w-[620px] text-[42px] font-light leading-[1.08] tracking-[-0.04em] text-[#102038] md:text-[56px] lg:text-[66px]">
                Experienced operators and investment stewards.
              </h2>
            </div>

            <p className="max-w-[620px] pt-2 text-[19px] leading-[1.75] text-[#65738a]">
              The group is guided by a leadership team committed to disciplined
              execution, prudent governance, and long-term value creation across
              our platforms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                custom={index * 0.08}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-[420px] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>

                <div className="pt-6">
                  <h3 className="text-[26px] font-light tracking-[-0.03em] text-[#102038]">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.22em] text-[#71809a]">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#07142d] px-8 py-24 text-white lg:px-16 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <p className="mb-8 text-[12px] uppercase tracking-[0.24em] text-white/55">
              CONTACT
            </p>
            <h2 className="max-w-[620px] text-[42px] font-light leading-[1.05] tracking-[-0.04em] text-white md:text-[54px] lg:text-[64px]">
              Connect with the ParEquity Group platform.
            </h2>
            <p className="mt-6 max-w-[560px] text-[18px] leading-[1.8] text-white/72">
              For partnership discussions, investment enquiries, or platform
              information, our team would be pleased to hear from you.
            </p>
          </div>

          <div className="grid gap-5 self-end">
            <div className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/5 px-6 py-5">
              <Mail className="h-5 w-5 text-white/70" />
              <span className="text-[16px] text-white/82">info@parequitygroup.com</span>
            </div>

            <div className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/5 px-6 py-5">
              <Phone className="h-5 w-5 text-white/70" />
              <span className="text-[16px] text-white/82">+27 21 000 0000</span>
            </div>

            <div className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/5 px-6 py-5">
              <MapPin className="h-5 w-5 text-white/70" />
              <span className="text-[16px] text-white/82">Cape Town, South Africa</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 flex max-w-[1440px] flex-col gap-4 border-t border-white/10 pt-8 text-[12px] uppercase tracking-[0.2em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© ParEquity Group</p>
          <div className="flex gap-8">
            <a href="/parequity" className="transition hover:text-white/75">
              ParEquity
            </a>
            <a href="/anthuri" className="transition hover:text-white/75">
              Anthuri
            </a>
            <a href="/parvest" className="transition hover:text-white/75">
              ParVest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ParEquityGroupPage;