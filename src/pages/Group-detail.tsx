import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-group.png";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
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

const mandates = [
  {
    eyebrow: "ParEquity",
    title: "Private Equity",
    description:
      "Investing in established businesses with strong fundamentals and long-term growth potential, with a focus on active partnership and value creation.",
    href: "/parequity",
    accent: "from-white/14 to-white/4",
  },
  {
    eyebrow: "Anthuri Fund",
    title: "Impact & Growth Capital",
    description:
      "Backing scalable businesses that combine commercial viability with meaningful developmental and economic impact.",
    href: "/anthuri-fund",
    accent: "from-[#6d8fd8]/30 to-white/5",
    featured: true,
  },
  {
    eyebrow: "ParVest",
    title: "Real Assets & Property",
    description:
      "Investing in income-generating real assets and property opportunities with a focus on stability, stewardship, and long-term appreciation.",
    href: "/parvest",
    accent: "from-white/14 to-white/4",
  },
];

const principles = [
  {
    number: "01",
    title: "Long-Term Stewardship",
    text: "We invest with patience, seeking to preserve and grow value through thoughtful ownership and enduring partnerships.",
  },
  {
    number: "02",
    title: "Disciplined Capital Allocation",
    text: "We pursue opportunities selectively, guided by rigorous analysis, prudent risk management, and long-horizon conviction.",
  },
  {
    number: "03",
    title: "Responsible Growth",
    text: "We support businesses and assets that can scale sustainably while contributing positively to the broader economy.",
  },
];

const platforms = [
  {
    name: "ParEquity",
    text: "Established businesses with long-term value creation potential.",
  },
  {
    name: "Anthuri Fund",
    text: "Impact and growth capital for scalable African opportunities.",
  },
  {
    name: "ParVest",
    text: "Real assets and property with resilient income characteristics.",
  },
];

export default function ParEquityGroupPage() {
  return (
    <Layout>
      <main className="bg-[#071120] text-[#0b1324]">
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden bg-[#071120] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Abstract premium ParEquity Group hero background"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,11,24,0.92)_0%,rgba(4,11,24,0.76)_34%,rgba(4,11,24,0.34)_64%,rgba(4,11,24,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_22%),radial-gradient(circle_at_22%_28%,rgba(110,147,220,0.20),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.08),transparent_18%)]" />

          <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 pt-28 sm:px-8 md:pb-20 md:pt-32 lg:px-12">
            <div className="grid w-full grid-cols-1 items-end gap-12 lg:grid-cols-[1.08fr_0.52fr] lg:gap-10">
              <div className="max-w-5xl">
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeUp}
                  custom={0}
                  className="mb-6 text-[11px] font-semibold uppercase tracking-[0.36em] text-white/70 sm:text-xs"
                >
                  ParEquity Group
                </motion.p>

                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={0.08}
                  className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] text-white sm:text-6xl md:text-7xl lg:text-[7.25rem]"
                >
                  A family investment group built for the long term.
                </motion.h1>

                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={0.16}
                  className="mt-8 max-w-3xl text-base leading-8 text-white/78 sm:text-lg md:text-[1.16rem]"
                >
                  ParEquity Group is a privately held family investment group
                  focused on building and stewarding enduring businesses,
                  investment platforms, and real assets through disciplined
                  capital allocation, responsible ownership, and long-term
                  partnership.
                </motion.p>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={0.24}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="#philosophy"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#071120] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92"
                  >
                    Our Philosophy
                  </a>
                  <a
                    href="#mandates"
                    className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/12"
                  >
                    Explore Our Mandates
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                custom={0.28}
                className="hidden self-end justify-self-end lg:block"
              >
                <div className="relative w-[320px] overflow-hidden rounded-[32px] border border-white/12 bg-white/10 p-7 text-white backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_100%)]" />
                  <div className="relative">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/56">
                      Investment Approach
                    </p>
                    <div className="mt-8 space-y-6">
                      <div>
                        <p className="text-4xl font-medium tracking-[-0.06em]">3</p>
                        <p className="mt-1 text-sm text-white/70">Focused mandates</p>
                      </div>
                      <div className="h-px w-full bg-white/10" />
                      <div>
                        <p className="text-4xl font-medium tracking-[-0.06em]">Long</p>
                        <p className="mt-1 max-w-[14rem] text-sm leading-6 text-white/70">
                          Term horizon and stewardship-led capital allocation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Positioning statement */}
        <section className="relative overflow-hidden border-t border-white/5 bg-[linear-gradient(180deg,#eef3fb_0%,#f7f9fc_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,32,96,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(8,24,51,0.05),transparent_24%)]" />
          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:px-8 md:py-32 lg:px-12">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              custom={0}
              className="mx-auto max-w-4xl text-2xl leading-[1.7] tracking-[-0.03em] text-[#1e293b] md:text-[2rem]"
            >
              We take a long-term view of capital, relationships, and
              responsibility — investing with patience where strong governance,
              strategic support, and aligned ownership can create enduring
              value.
            </motion.p>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="relative overflow-hidden bg-[#f4f7fb]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,32,96,0.06),transparent_22%),radial-gradient(circle_at_90%_20%,rgba(120,149,208,0.10),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={0}
                  className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#002060]/66 sm:text-xs"
                >
                  Our Philosophy
                </motion.p>

                <motion.h2
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={fadeUp}
                  custom={0.08}
                  className="mt-5 max-w-md text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-[#0b1324] sm:text-5xl md:text-6xl"
                >
                  Built for generations, not quarters.
                </motion.h2>

                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={fadeUp}
                  custom={0.14}
                  className="mt-8 max-w-md text-base leading-8 text-[#475569] sm:text-lg"
                >
                  Our philosophy reflects a multi-generational approach to
                  investment. We focus on resilience over hype, substance over
                  noise, and stewardship over short-termism.
                </motion.p>
              </div>

              <div>
                <div className="overflow-hidden rounded-[38px] border border-white/70 bg-white/60 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
                  {principles.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.35 }}
                      variants={fadeUp}
                      custom={0.16 + index * 0.08}
                      className="group relative px-7 py-8 sm:px-10 sm:py-10"
                    >
                      {index !== 0 && (
                        <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-[#002060]/12 to-transparent sm:left-10 sm:right-10" />
                      )}

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr] md:items-start">
                        <div className="flex items-center gap-4 md:block">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#002060]/52">
                            {item.number}
                          </span>
                          <div className="hidden h-px flex-1 bg-[#002060]/10 md:hidden" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] text-[#0b1324] sm:text-[2rem]">
                            {item.title}
                          </h3>
                          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#475569] sm:text-[1rem] sm:leading-8">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mandates */}
        <section
          id="mandates"
          className="relative overflow-hidden bg-[#071120] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(109,143,216,0.16),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(135deg,transparent_0%,transparent_52%,rgba(255,255,255,0.06)_52.2%,transparent_68%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              variants={fadeUp}
              custom={0}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/56 sm:text-xs">
                Our Mandates
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl">
                Three mandates. One investment philosophy.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Our capital is deployed through three focused mandates, each
                aligned to a distinct opportunity set while remaining anchored
                in the same long-term principles.
              </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {mandates.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={fadeUp}
                  custom={0.08 + index * 0.08}
                  className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/18 hover:bg-white/[0.08] hover:shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:p-9"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071120]/40 to-transparent" />

                  <div className="relative flex h-full flex-col">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/56">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-5 max-w-[14rem] text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.2rem]">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-[19rem] flex-1 text-sm leading-7 text-white/72 sm:text-[1rem] sm:leading-8">
                      {item.description}
                    </p>

                    <Link
                      to={item.href}
                      className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      Explore mandate <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Family perspective */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#edf3fb_0%,#f7f9fc_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,32,96,0.08),transparent_22%),linear-gradient(135deg,transparent_0%,transparent_62%,rgba(0,32,96,0.04)_62.1%,transparent_78%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={0}
                  className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#002060]/64 sm:text-xs"
                >
                  Family Perspective
                </motion.p>
                <motion.h2
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={fadeUp}
                  custom={0.08}
                  className="mt-5 max-w-md text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-[#0b1324] sm:text-5xl md:text-6xl"
                >
                  A long-term family perspective.
                </motion.h2>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                variants={fadeUp}
                custom={0.16}
                className="overflow-hidden rounded-[36px] border border-white/70 bg-white/60 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-10"
              >
                <div className="space-y-6 text-base leading-8 text-[#334155] sm:text-lg">
                  <p>
                    As a Family investment group, we are able to think
                    independently, act patiently, and invest with a horizon that
                    extends beyond immediate market cycles.
                  </p>
                  <p>
                    This long-term perspective allows us to build enduring
                    partnerships, allocate capital responsibly, and support
                    opportunities where true value takes time to emerge.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Group structure */}
        <section className="relative overflow-hidden bg-[#071120] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(109,143,216,0.18),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_16%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={0}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/56 sm:text-xs">
                Group Structure
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl">
                One group. Three focused platforms.
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                ParEquity Group serves as the overarching platform through which
                our investment activities are structured, governed, and
                stewarded across private equity, impact capital, and real
                assets.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              custom={0.12}
              className="mt-18 mx-auto max-w-6xl"
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full border border-white/12 bg-white/10 px-9 py-5 text-center backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/56">
                    Holding Platform
                  </p>
                  <h3 className="mt-1 text-2xl font-medium tracking-[-0.04em] text-white">
                    ParEquity Group
                  </h3>
                </div>

                <div className="relative h-20 w-full max-w-4xl">
                  <div className="absolute left-1/2 top-0 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-white/25 to-white/5" />
                  <div className="absolute left-1/2 top-12 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/16 to-transparent" />
                </div>

                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                  {platforms.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeUp}
                      custom={0.18 + index * 0.08}
                      className="relative"
                    >
                      <div className="absolute left-1/2 top-[-28px] hidden h-7 w-px -translate-x-1/2 bg-white/14 md:block" />
                      <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                        <p className="text-2xl font-medium tracking-[-0.04em] text-white">
                          {item.name}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-white/68 sm:text-[1rem]">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Closing */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f3f7fc_0%,#eef3fb_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,32,96,0.06),transparent_22%),linear-gradient(135deg,transparent_0%,transparent_68%,rgba(0,32,96,0.04)_68.2%,transparent_84%)]" />
          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:px-8 md:py-32 lg:px-12">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              variants={fadeUp}
              custom={0}
              className="text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-[#0b1324] sm:text-5xl md:text-6xl"
            >
              Enduring value, responsibly built.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              variants={fadeUp}
              custom={0.1}
              className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#475569] sm:text-lg"
            >
              We believe the strongest investment platforms are built on trust,
              discipline, and long-term alignment. Across each of our mandates,
              ParEquity Group remains committed to thoughtful ownership and
              lasting value creation.
            </motion.p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
