"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PenTool,
  Feather,
 ShieldCheck,
  Compass,
  ArrowUpRight, 
} from "lucide-react";
import { div } from "framer-motion/m";
export default function Home() {
 const navLink = `
relative
uppercase
text-[13px]
tracking-[0.18em]
text-[#262321]
transition-colors
duration-300
hover:text-[#C8A46A]

after:absolute
after:left-1/2
after:-translate-x-1/2
after:-bottom-1
after:h-[1.5px]
after:w-0
after:bg-[#C8A46A]
after:transition-all
after:duration-300
hover:after:w-[90%]
`;

  return (
    <main className="bg-[#FCFAF7] min-h-screen">

{/* ==========================
        NAVIGATION
========================== */}

<header className="fixed top-0 left-0 w-full z-50 bg-[#FCFAF7]/95 backdrop-blur-lg border-b border-[#E7DDD1]">

  <div className="max-w-6xl mx-auto px-6 lg:px-12">

    {/* DESKTOP NAVIGATION */}

    <nav className="hidden lg:flex items-center justify-center gap-10 py-6">

      <a href="#" className={navLink}>
        Home
      </a>

      <a href="#services" className={navLink}>
        Services
      </a>

      <a href="#Work" className={navLink}>
        Work
      </a>

      {/* Logo */}

      <a href="#" className="mx-8">
        <Image
          src="/logo.png"
          alt="The Brand Persona"
          width={220}
          height={220}
          priority
          className="h-[90px] w-auto object-contain"
        />
      </a>

      <a href="#process" className={navLink}>
        Process
      </a>

      <a href="#pricing" className={navLink}>
        Pricing
      </a>

      <a href="#contact" className={navLink}>
        Contact
      </a>

    </nav>


    {/* MOBILE NAVIGATION */}

    <div className="flex lg:hidden items-center justify-between py-4">

      {/* Mobile Logo */}

      <a href="#" className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="The Brand Persona"
          width={160}
          height={160}
          priority
          className="h-[62px] w-auto object-contain"
        />
      </a>


      {/* Mobile Menu */}

      <div className="flex items-center gap-5">

        <a
          href="#services"
          className="text-[11px] uppercase tracking-[0.15em] text-[#6F6962] hover:text-[#C8A46A] transition"
        >
          Services
        </a>

        <a
          href="#pricing"
          className="text-[11px] uppercase tracking-[0.15em] text-[#6F6962] hover:text-[#C8A46A] transition"
        >
          Pricing
        </a>

        <a
          href="#contact"
          className="text-[11px] uppercase tracking-[0.15em] text-[#6F6962] hover:text-[#C8A46A] transition"
        >
          Contact
        </a>

      </div>

    </div>

  </div>

</header>

{/* ==========================
        HERO
========================== */}

<section className="relative bg-[#FCFAF7] pt-40 pb-0 overflow-hidden">
 
  <div className="max-w-7xl mx-auto px-8 text-center">
</div>

    <div className="text-center">
    {/* Eyebrow */}

     <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="uppercase tracking-[0.25em] text-[10px] text-[#C8A46A] mb-3"
>
        Boutique Web Design Studio for Growing Businesses
     </motion.p>

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  className="
    mx-auto
    max-w-4xl
    text-center
    leading-[0.9]
    md:leading-[0.95]
  "
>
  <span
    className="
      font-heading
      font-normal
      text-[#262321]
      block
      text-[3rem]
      sm:text-[3.5rem]
      md:inline
      md:text-[clamp(2.8rem,5vw,4.8rem)]
    "
  >
    Creating
  </span>

  {" "}

  <span
    className="
      font-script
      text-[#C8A46A]
      inline-block
      leading-none
      mx-1
      sm:mx-2
      relative
      top-0
      md:-top-2
      text-[4.2rem]
      sm:text-[4.8rem]
      md:text-[clamp(4rem,7vw,6.4rem)]
    "
  >
    lasting
  </span>

  {" "}

  <span
    className="
      font-heading
      font-normal
      text-[#262321]
      block
      text-[3rem]
      sm:text-[3.5rem]
      md:inline
      md:text-[clamp(2.8rem,5vw,4.8rem)]
    "
  >
    Impressions
  </span>
</motion.h1>
<div className="max-w-3xl mx-auto"></div>
      {/* Accent Line */}

<motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35, duration: 0.8 }}
  className="
    mt-5
    mx-auto
    max-w-[320px]
    sm:max-w-xl
    md:max-w-2xl
    text-[12px]
    sm:text-[13px]
    md:text-[12px]
    leading-6
    md:leading-7
    text-[#7A746D]
    font-normal
    text-center
  "
>
  Thoughtfully designed websites that build trust, elevate your brand,
  and create a lasting impression from the very first click.
</motion.p>

      {/* Buttons */}

<div className="flex justify-center gap-4 mt-1">
 <a
  href="#Work"
  className="
    inline-block
    bg-[#44342D]
    text-white
    px-9
    py-3
    rounded-full
    uppercase
    tracking-[0.2em]
    text-[11px]
    font-medium
    shadow-md
    transition-all
    duration-300
    hover:bg-[#2E231F]
    hover:-translate-y-1
    hover:shadow-xl
  "
>
  Explore Our Work
</a>
</div>
      

      {/* Trust */}

<div
  className="
    mx-auto
    mt-6
    grid
    w-full
    max-w-[340px]
    grid-cols-3
    items-start
    text-center
    text-[9px]
    sm:max-w-md
    sm:text-[10px]
    md:flex
    md:max-w-none
    md:items-center
    md:justify-center
    md:gap-8
    md:text-[12px]
    uppercase
    tracking-[0.12em]
    md:tracking-[0.15em]
    text-[#7C746D]
  "
>

  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
    <span className="text-[#C8A46A]">
      ✦
    </span>

    <span>
      Mobile Responsive
    </span>
  </div>


  <div className="hidden h-4 w-px bg-[#D9D2CB] md:block" />


  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
    <span className="text-[#C8A46A]">
      ✦
    </span>

    <span>
      SEO Ready
    </span>
  </div>


  <div className="hidden h-4 w-px bg-[#D9D2CB] md:block" />


  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
    <span className="text-[#C8A46A]">
      ✦
    </span>

    <span>
      Built to Grow
    </span>
  </div>

</div>
</div>
   {/* Hero Image */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="
    relative
    w-screen
    left-1/2
    right-1/2
    -ml-[50vw]
    -mr-[50vw]
    mt-4
  "
>
 <div
  className="
    w-full
    h-[230px]
    sm:h-[310px]
    lg:h-[355px]
    xl:h-[330px]
    overflow-hidden
  "
>
    <Image
  src="/hero-img.png"
  alt="Luxury workspace"
  fill
  priority
  className="object-cover"
  style={{ objectPosition: "center 80%" }}
/>
</div>
</motion.div>
</section>


{/* ==========================
        SERVICES
========================== */}

<section
  id="services" className="py-10 bg-[#FCFAF7]">

  <div className="max-w-7xl mx-auto px-8">

    {/* Decorative Divider */}

    <div className="flex items-center justify-center mb-16-mt-4 ">
      <div className="h-px w-56 bg-[#E7DDD1]"></div>

<span className="mx-6 text-[#C8A46A] text-xl">
  ✦
</span>

<div className="h-px w-56 bg-[#E7DDD1]"></div>
    </div>

    <p className="uppercase tracking-[0.35em] text-[#C8A46A] text-center text-sm mb-4">
      WE DESIGN WITH PURPOSE
    </p>

    <h2
  className="text-4xl md:text-6xl text-center text-[#262321] leading-tight"
  style={{ fontFamily: "var(--font-cormorant)" }}
>
      Services That Elevate
      <br />
      Your Brand Online
    </h2>

    <p className="max-w-3xl mx-auto text-center mt-8 text-[#7A746D] leading-8">
      Every website we create is carefully designed to help ambitious
      businesses build credibility, attract customers and grow with
      confidence.
    </p>

   <div className="mt-10 max-w-5xl mx-auto">

  {/* Website Design */}

  <div className="group flex items-start gap-8 py-4 border-b border-[#E8DDCF] transition-all duration-500 hover:translate-x-2">

<div className="w-14 h-14 rounded-full border border-[#E7DDD1] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:border-[#C8A46A]">
     <PenTool
  size={22}
  strokeWidth={1.5}
  className="text-[#C8A46A] group-hover:text-white transition-colors duration-500"
/>
    </div>

    <div>

      <h3
className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"        style={{ fontFamily: "var(--font-cormorant)" }}
      >
      </h3>
<div className="flex items-center gap-3">

<h3
  className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"
  style={{ fontFamily: "var(--font-cormorant)" }}
>
  Website Design
</h3>

<ArrowUpRight
  size={24}
  className="text-[#C5A46D] transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
/>

</div>
      <p className="mt-5 text-[#66615C] leading-8 max-w-2xl">
        Elegant, responsive websites thoughtfully designed to inspire confidence,
        build trust and convert visitors into loyal customers.
      </p>

    </div>

  </div>

  {/* Brand */}

  <div className="group flex items-start gap-8 py-4 border-b border-[#E8DDCF] transition-all duration-500 hover:translate-x-2">

    <div className="w-14 h-14 rounded-full border border-[#E7DDD1] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:border-[#C8A46A]">

      <Feather
        size={22}
        strokeWidth={1.5}
        className="text-[#C8A46A] group-hover:text-white transition-colors duration-500"
      />

    </div>

    <div>

      <h3
        className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
      </h3>
<div className="flex items-center gap-3">

<h3
  className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"
  style={{ fontFamily: "var(--font-cormorant)" }}
>
  Brand Identity
</h3>

<ArrowUpRight
  size={24}
  className="text-[#C5A46D] transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
/>

</div>
      <p className="mt-5 text-[#66615C] leading-8 max-w-2xl">
        Refined logos, typography and colour palettes that create a memorable
        identity your customers instantly recognise.
      </p>

    </div>

  </div>

  {/* Website Care */}

  <div className="group flex items-start gap-8 py-4 border-b border-[#E8DDCF] transition-all duration-500 hover:translate-x-2">

    <div className="w-14 h-14 rounded-full border border-[#E7DDD1] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:border-[#C8A46A]">
      <ShieldCheck
        size={22}
        strokeWidth={1.5}
        className="text-[#C8A46A] group-hover:text-white transition-colors duration-500"
      />

    </div>

    <div>

      <h3
        className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
      </h3>
<div className="flex items-center gap-3">

<h3
  className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"
  style={{ fontFamily: "var(--font-cormorant)" }}
>
  Website Care
</h3>

<ArrowUpRight
  size={24}
  className="text-[#C5A46D] transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
/>

</div>
      <p className="mt-5 text-[#66615C] leading-8 max-w-2xl">
        Ongoing maintenance, updates and guidance to keep your website secure,
        reliable and performing beautifully.
      </p>

    </div>

  </div>

  {/* Digital */}

  <div className="group flex items-start gap-8 py-4 transition-all duration-500 hover:translate-x-2">

    <div className="w-14 h-14 rounded-full border border-[#E7DDD1] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:border-[#C8A46A]">

      <Compass
        size={22}
        strokeWidth={1.5}
        className="text-[#C8A46A] group-hover:text-white transition-colors duration-500"
      />

    </div>

    <div>

      <h3
        className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
      </h3>
<div className="flex items-center gap-3">

<h3
  className="text-5xl text-[#2A2623] transition-colors duration-500 group-hover:text-[#214437]"
  style={{ fontFamily: "var(--font-cormorant)" }}
>
        Digital Presence
</h3>

<ArrowUpRight
  size={24}
  className="text-[#C5A46D] transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
/>

</div>
      <p className="mt-5 text-[#66615C] leading-8 max-w-2xl">
        Google Business, SEO foundations and digital tools that help your
        business become visible, credible and easy to find.
      </p>

    </div>

  </div>

</div>
    {/* Bottom Divider */}

    <div className="flex items-center justify-center mt-10">
      <div className="h-px w-56 bg-[#D9C7A3]"></div>

      <span className="mx-6 text-[#B8945A] text-xl">
        ✦
      </span>

      <div className="h-px w-56 bg-[#D9C7A3]"></div>
    </div>

  </div>

</section>
{/* ==========================
      FEATURED PROJECT
========================== */}

<section
  id="Work"
  className="py-20 bg-[#FCFAF7] overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-8">


    {/* ==========================
          DECORATIVE DIVIDER
    ========================== */}

    <motion.div
      initial={{ opacity: 0, scaleX: 0.7 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="flex items-center justify-center mb-10"
    >

      <div className="h-px w-60 bg-[#E7DDD1]" />

      <span className="mx-8 text-[#C8A46A] text-xl">
        ✦
      </span>

      <div className="h-px w-60 bg-[#E7DDD1]" />

    </motion.div>



    {/* ==========================
          SECTION HEADING
    ========================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center mb-16"
    >

      <p className="uppercase tracking-[0.35em] text-[#C8A46A] text-sm mb-4">
        SELECTED WORK
      </p>

      <h2
        className="text-6xl leading-tight text-[#262321]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Crafted with purpose.
      </h2>

      <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-8">
        A thoughtful digital experience created to give a meaningful
        organisation a presence that feels warm, trustworthy and
        professionally established.
      </p>

    </motion.div>



    {/* ==========================
          PROJECT CARD
    ========================== */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[2rem] bg-[#DCC9A7] shadow-[0_25px_70px_rgba(38,35,33,0.10)]"
    >


      {/* ==========================
            DECORATIVE ELEMENTS
      ========================== */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/20"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/15"
      />


      {/* ==========================
            MAIN GRID
      ========================== */}

      <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">


    <div className="relative min-h-[560px] overflow-hidden p-5 md:p-8 lg:min-h-[680px] lg:p-10">

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 1,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative h-[520px] overflow-hidden rounded-2xl bg-[#FCFAF7] shadow-[0_20px_50px_rgba(38,35,33,0.15)] md:h-[620px]"
  >

    {/* Browser bar */}

    <div className="relative z-20 flex h-12 items-center gap-2 border-b border-[#E7DDD1] bg-white px-4">

      <span className="h-2.5 w-2.5 rounded-full bg-[#DCC9A7]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#DCC9A7]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#DCC9A7]" />

      <div className="ml-3 flex-1 rounded-full bg-[#F4F1ED] px-4 py-1.5 text-[9px] tracking-wide text-gray-400">
        thefoundationfordementia.netlify.app
      </div>

    </div>


    {/* Desktop website viewport */}

    <div className="relative h-[calc(100%-48px)] overflow-hidden bg-[#F7F5F0]">

      <div
  className="
    absolute
    left-1/2
    top-0
    origin-top
    -translate-x-1/2
    scale-[0.36]
    sm:scale-[0.65]
    md:scale-[0.45]
    lg:scale-[0.62]
    xl:scale-[0.72]
  "
  style={{
    width: "800px",
    height: "100%",
  }}
>

        <iframe
          src="https://thefoundationfordementia.netlify.app/"
          title="Foundation for Dementia website preview"
          className="h-[1000px] w-[800px] border-0"
          loading="lazy"
        />

      </div>

    </div>

  </motion.div>


  {/* Floating label */}

  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: 0.7,
    }}
    className="absolute bottom-8 left-8 rounded-full border border-white/30 bg-[#FCFAF7]/85 px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-[#262321] shadow-sm backdrop-blur-md"
  >
    Digital Experience
  </motion.div>

</div>



        {/* ==========================
              PROJECT INFORMATION
        ========================== */}

        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8C6F3F]">
              Foundation for Dementia
            </p>


            <h3
              className="max-w-xl text-5xl leading-tight text-[#262321]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A calming digital experience
              <br />
              built for trust.
            </h3>


            <p className="mt-7 max-w-xl text-gray-700 leading-8">
              Designed for a non-profit organisation supporting people
              and families affected by dementia. The experience combines
              storytelling, accessibility and clarity to create a digital
              presence that feels both professional and human.
            </p>

          </motion.div>



          {/* ==========================
                PROJECT DETAILS
          ========================== */}

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-[#BFAE8D] py-8">

            {[
              {
                label: "Industry",
                value: "Non-Profit",
              },
              {
                label: "Services",
                value: "Website + Branding",
              },
              {
                label: "Focus",
                value: "Accessibility",
              },
              {
                label: "Style",
                value: "Elegant & Calm",
              },
            ].map((item, index) => (

              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.1,
                }}
              >

                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#8C6F3F]">
                  {item.label}
                </p>

                <p className="text-lg text-[#262321]">
                  {item.value}
                </p>

              </motion.div>

            ))}

          </div>



          {/* ==========================
                PROJECT TASKBAR
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-10"
          >

            <div className="inline-flex items-center rounded-full border border-[#BFAE8D] bg-[#FCFAF7]/60 p-1.5 shadow-sm backdrop-blur-md">


              {/* LIVE WEBSITE */}

              <a
                href="https://thefoundationfordementia.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-[#262321] px-5 py-3 text-sm text-white transition-all duration-300 hover:bg-[#3A3531]"
              >

                <motion.span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10"
                  whileHover={{
                    x: 3,
                    y: -3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  ↗
                </motion.span>

                <span>
                  Live Website
                </span>

              </a>


              {/* Divider */}

              <div className="mx-1 h-6 w-px bg-[#BFAE8D]" />


              {/* CASE STUDY */}

              <button
                type="button"
                className="group flex items-center gap-3 rounded-full px-5 py-3 text-sm text-[#262321] transition-all duration-300 hover:bg-white/50"
              >

                <motion.span
                  className="text-lg text-[#8C6F3F]"
                  whileHover={{
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  +
                </motion.span>

                <span>
                  Case Study
                </span>

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.div>



    {/* ==========================
          PROJECT FOOTER
    ========================== */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      className="mt-7 flex flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.25em] text-gray-400 sm:flex-row"
    >

      <span>
        Foundation for Dementia
      </span>

      <span>
        Digital Presence / Web Design / Brand Experience
      </span>

    </motion.div>

  </div>
</section>

{/* ==========================
      OUR PROCESS
========================== */}

<section
  id="process"
  className="py-16 md:py-10 bg-[#F8F5F1] overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 md:px-8">


    {/* ==========================
          DECORATIVE DIVIDER
    ========================== */}

    <motion.div
      initial={{ opacity: 0, scaleX: 0.8 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center mb-10"
    >

      <div className="h-px w-16 sm:w-32 md:w-60 bg-[#E7DDD1]" />

      <span className="mx-5 sm:mx-8 text-[#C8A46A] text-xl">
        ✦
      </span>

      <div className="h-px w-16 sm:w-32 md:w-60 bg-[#E7DDD1]" />

    </motion.div>



    {/* ==========================
          HEADING
    ========================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      <p className="uppercase tracking-[0.3em] md:tracking-[0.35em] text-[#C8A46A] text-xs md:text-sm mb-4">
        OUR PROCESS
      </p>

      <h2
        className="text-5xl md:text-6xl leading-tight text-[#262321]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        From idea to launch.
      </h2>

      <p className="mt-5 md:mt-6 max-w-2xl mx-auto text-[#66615C] leading-7 md:leading-8 text-sm md:text-base">
        Every project follows a thoughtful process, balancing strategy,
        creativity and intention to create a digital presence that feels
        as good as it performs.
      </p>

    </motion.div>



    {/* =====================================================
          DESKTOP PROCESS
          Hidden on mobile
    ===================================================== */}

    <div className="hidden md:block mt-12">

      <div className="grid grid-cols-5 gap-10">


        {/* STEP 1 */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="group text-center"
        >

          <div className="text-[#C8A46A] text-3xl font-light mb-5">
            01
          </div>

          <div className="h-px bg-[#E7DDD1] mb-6 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:h-[2px]" />

          <h3
            className="text-3xl text-[#262321] mb-5 transition-colors duration-300 group-hover:text-[#C8A46A]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Discover
          </h3>

          <p className="text-[#7A746D] leading-7 text-sm opacity-70 group-hover:opacity-100 transition-all duration-300">
            We learn about your business, audience and long-term goals.
          </p>

        </motion.div>



        {/* STEP 2 */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group text-center"
        >

          <div className="text-[#C8A46A] text-3xl font-light mb-5">
            02
          </div>

          <div className="h-px bg-[#E7DDD1] mb-6 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:h-[2px]" />

          <h3
            className="text-3xl text-[#262321] mb-5 transition-colors duration-300 group-hover:text-[#C8A46A]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Strategy
          </h3>

          <p className="text-[#7A746D] leading-7 text-sm opacity-70 group-hover:opacity-100 transition-all duration-300">
            Together we map the structure, content and user experience.
          </p>

        </motion.div>



        {/* STEP 3 */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group text-center"
        >

          <div className="text-[#C8A46A] text-3xl font-light mb-5">
            03
          </div>

          <div className="h-px bg-[#E7DDD1] mb-6 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:h-[2px]" />

          <h3
            className="text-3xl text-[#262321] mb-5 transition-colors duration-300 group-hover:text-[#C8A46A]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Design
          </h3>

          <p className="text-[#7A746D] leading-7 text-sm opacity-70 group-hover:opacity-100 transition-all duration-300">
            Every detail is crafted to feel elegant, modern and timeless.
          </p>

        </motion.div>



        {/* STEP 4 */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group text-center"
        >

          <div className="text-[#C8A46A] text-3xl font-light mb-5">
            04
          </div>

          <div className="h-px bg-[#E7DDD1] mb-6 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:h-[2px]" />

          <h3
            className="text-3xl text-[#262321] mb-5 transition-colors duration-300 group-hover:text-[#C8A46A]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Develop
          </h3>

          <p className="text-[#7A746D] leading-7 text-sm opacity-70 group-hover:opacity-100 transition-all duration-300">
            We build a fast, responsive website using modern technology.
          </p>

        </motion.div>



        {/* STEP 5 */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group text-center"
        >

          <div className="text-[#C8A46A] text-3xl font-light mb-5">
            05
          </div>

          <div className="h-px bg-[#E7DDD1] mb-6 transition-all duration-500 group-hover:bg-[#C8A46A] group-hover:h-[2px]" />

          <h3
            className="text-3xl text-[#262321] mb-5 transition-colors duration-300 group-hover:text-[#C8A46A]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Launch
          </h3>

          <p className="text-[#7A746D] leading-7 text-sm opacity-70 group-hover:opacity-100 transition-all duration-300">
            After testing, your website goes live with ongoing support.
          </p>

        </motion.div>

      </div>

    </div>



    {/* =====================================================
      MOBILE PROCESS
      Animated editorial timeline
===================================================== */}

<div className="md:hidden mt-12 relative">

  {/* Animated timeline */}

  <motion.div
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      absolute
      left-[21px]
      top-4
      bottom-4
      w-px
      origin-top
      bg-gradient-to-b
      from-[#C8A46A]
      via-[#D8C39B]
      to-[#E7DDD1]
    "
  />


  <div className="space-y-10">


    {/* =================================================
          STEP 01
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-5"
    >

      {/* Number */}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          h-[43px]
          w-[43px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#C8A46A]
          bg-[#F8F5F1]
          text-[11px]
          font-medium
          tracking-wide
          text-[#C8A46A]
          shadow-[0_0_0_5px_#F8F5F1]
        "
      >
        01
      </motion.div>


      {/* Card */}

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          flex-1
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7DDD1]
          bg-white/60
          p-6
          shadow-[0_10px_30px_rgba(38,35,33,0.04)]
        "
      >

       <div
  className="
    absolute
    left-0
    top-0
    h-full
    w-[3px]
    bg-[#C8A46A]
  "
/>

        <p className="text-[9px] uppercase tracking-[0.28em] text-[#C8A46A]">
          First step
        </p>

        <h3
          className="mt-2 text-[2.1rem] leading-none text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Discover
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-[#7A746D]">
          We learn about your business, audience and long-term goals.
        </p>

      </motion.div>

    </motion.div>



    {/* =================================================
          STEP 02
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-5"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          h-[43px]
          w-[43px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#C8A46A]
          bg-[#F8F5F1]
          text-[11px]
          font-medium
          tracking-wide
          text-[#C8A46A]
          shadow-[0_0_0_5px_#F8F5F1]
        "
      >
        02
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          flex-1
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7DDD1]
          bg-white/60
          p-6
          shadow-[0_10px_30px_rgba(38,35,33,0.04)]
        "
      >

        <div
  className="
    absolute
    left-0
    top-0
    h-full
    w-[3px]
    bg-[#C8A46A]
  "
/>

           <div
  className="
    absolute
    left-0
    top-0
    h-full
    w-[3px]
    bg-[#C8A46A]
  "
/>
    

        <p className="text-[9px] uppercase tracking-[0.28em] text-[#C8A46A]">
          Second step
        </p>

        <h3
          className="mt-2 text-[2.1rem] leading-none text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Strategy
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-[#7A746D]">
          Together we map the structure, content and user experience.
        </p>

      </motion.div>

    </motion.div>



    {/* =================================================
          STEP 03
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-5"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          h-[43px]
          w-[43px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#C8A46A]
          bg-[#F8F5F1]
          text-[11px]
          font-medium
          tracking-wide
          text-[#C8A46A]
          shadow-[0_0_0_5px_#F8F5F1]
        "
      >
        03
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          flex-1
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7DDD1]
          bg-white/60
          p-6
          shadow-[0_10px_30px_rgba(38,35,33,0.04)]
        "
      >

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="
            absolute
            left-0
            top-0
            h-full
            w-[3px]
            origin-top
            bg-[#C8A46A]
          "
        />

        <p className="text-[9px] uppercase tracking-[0.28em] text-[#C8A46A]">
          Third step
        </p>

        <h3
          className="mt-2 text-[2.1rem] leading-none text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Design
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-[#7A746D]">
          Every detail is crafted to feel elegant, modern and timeless.
        </p>

      </motion.div>

    </motion.div>



    {/* =================================================
          STEP 04
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-5"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          h-[43px]
          w-[43px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#C8A46A]
          bg-[#F8F5F1]
          text-[11px]
          font-medium
          tracking-wide
          text-[#C8A46A]
          shadow-[0_0_0_5px_#F8F5F1]
        "
      >
        04
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          flex-1
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7DDD1]
          bg-white/60
          p-6
          shadow-[0_10px_30px_rgba(38,35,33,0.04)]
        "
      >

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="
            absolute
            left-0
            top-0
            h-full
            w-[3px]
            origin-top
            bg-[#C8A46A]
          "
        />

        <p className="text-[9px] uppercase tracking-[0.28em] text-[#C8A46A]">
          Fourth step
        </p>

        <h3
          className="mt-2 text-[2.1rem] leading-none text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Develop
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-[#7A746D]">
          We build a fast, responsive website using modern technology.
        </p>

      </motion.div>

    </motion.div>



    {/* =================================================
          STEP 05
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-5"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          h-[43px]
          w-[43px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#C8A46A]
          bg-[#F8F5F1]
          text-[11px]
          font-medium
          tracking-wide
          text-[#C8A46A]
          shadow-[0_0_0_5px_#F8F5F1]
        "
      >
        05
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          flex-1
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7DDD1]
          bg-white/60
          p-6
          shadow-[0_10px_30px_rgba(38,35,33,0.04)]
        "
      >

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="
            absolute
            left-0
            top-0
            h-full
            w-[3px]
            origin-top
            bg-[#C8A46A]
          "
        />

        <p className="text-[9px] uppercase tracking-[0.28em] text-[#C8A46A]">
          Final step
        </p>

        <h3
          className="mt-2 text-[2.1rem] leading-none text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Launch
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-[#7A746D]">
          After testing, your website goes live with ongoing support.
        </p>

      </motion.div>

    </motion.div>

  </div>
  </div>

</div>
</section>
{/* ==========================
        INVESTMENT
========================== */}

<section
  id="pricing"
  className="py-16 md:py-20 bg-[#FCFAF7] overflow-hidden"
>

  <div className="max-w-7xl mx-auto px-6 md:px-8">


    {/* ==========================
          DECORATIVE DIVIDER
    ========================== */}

    <motion.div
      initial={{ opacity: 0, scaleX: 0.7 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center mb-9 md:mb-10"
    >

      <div className="h-px w-16 sm:w-28 md:w-60 bg-[#E7DDD1]" />

      <span className="mx-5 md:mx-8 text-[#C8A46A] text-lg md:text-xl">
        ✦
      </span>

      <div className="h-px w-16 sm:w-28 md:w-60 bg-[#E7DDD1]" />

    </motion.div>



    {/* ==========================
          HEADING
    ========================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 md:mb-16"
    >

      <p className="
        uppercase
        tracking-[0.28em]
        md:tracking-[0.35em]
        text-[#C8A46A]
        text-xs
        md:text-sm
        mb-4
      ">
        INVESTMENT
      </p>

      <h2
        className="
          text-[2.8rem]
          sm:text-5xl
          md:text-6xl
          leading-[1.05]
          md:leading-tight
          text-[#262321]
        "
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        <span className="md:hidden">
          A considered investment
          <br />
          in your digital presence.
        </span>

        <span className="hidden md:inline">
          A considered investment
          <br />
          in your digital presence.
        </span>
      </h2>

      <p className="
        max-w-xl
        md:max-w-2xl
        mx-auto
        mt-5
        md:mt-6
        text-[#7A746D]
        text-sm
        md:text-base
        leading-7
        md:leading-8
      ">
        Thoughtfully designed packages for businesses at different stages,
        with room to grow as your digital presence evolves.
      </p>

    </motion.div>



    {/* =====================================================
          DESKTOP PRICING
          Original desktop design
    ===================================================== */}

    <div className="hidden md:grid lg:grid-cols-3 gap-8 items-stretch">


      {/* ==========================
            STARTER
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="
          group
          bg-white
          rounded-[30px]
          border
          border-[#E7DDD1]
          p-9
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >

        <p className="uppercase tracking-[0.25em] text-[#C8A46A] text-sm mb-4">
          STARTER
        </p>

        <h3
          className="text-5xl text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          From R3 500
        </h3>

        <p className="text-[#7A746D] mt-5 leading-7">
          A refined starting point for startups, professionals and
          small businesses ready to establish a credible online presence.
        </p>

        <div className="h-px bg-[#E7DDD1] my-8" />

        <ul className="space-y-3 text-[#66615C] text-sm">
          <li>✓ One scrolling website</li>
          <li>✓ Up to 8 custom sections</li>
          <li>✓ Mobile responsive design</li>
          <li>✓ Contact form</li>
          <li>✓ WhatsApp integration</li>
          <li>✓ Google Maps integration</li>
          <li>✓ Social media links</li>
          <li>✓ Basic SEO setup</li>
          <li>✓ One revision</li>
          <li>✓ 2 weeks of post-launch support</li>
        </ul>

        <button className="
          mt-10
          w-full
          border
          border-[#C8A46A]
          text-[#6F5832]
          py-4
          rounded-full
          hover:bg-[#C8A46A]
          hover:text-white
          transition-all
          duration-300
        ">
          Start Your Project
        </button>

      </motion.div>



      {/* ==========================
            BUSINESS
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="
          relative
          bg-[#F3EBDD]
          rounded-[30px]
          p-9
          border
          border-[#DCC9A7]
          shadow-[0_20px_50px_rgba(110,88,50,0.10)]
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >

        <div className="
          absolute
          -top-4
          left-1/2
          -translate-x-1/2
          bg-[#C8A46A]
          text-white
          px-6
          py-2
          rounded-full
          uppercase
          tracking-[0.2em]
          text-xs
          font-medium
          whitespace-nowrap
        ">
          Most Popular
        </div>

        <p className="uppercase tracking-[0.25em] text-[#9A773F] text-sm mb-4 mt-4">
          BUSINESS
        </p>

        <h3
          className="text-5xl text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          From R6 500
        </h3>

        <p className="text-[#6F675E] mt-5 leading-7">
          For growing businesses ready for a more established,
          feature-rich website that reflects the quality of their brand.
        </p>

        <div className="h-px bg-[#DCC9A7] my-8" />

        <ul className="space-y-3 text-[#5F584F] text-sm">
          <li>✓ Everything in Starter</li>
          <li>✓ Up to 5 pages</li>
          <li>✓ Image gallery</li>
          <li>✓ Testimonials</li>
          <li>✓ Google Business Profile integration</li>
          <li>✓ Professional email setup guidance</li>
          <li>✓ Enhanced SEO setup</li>
          <li>✓ Brand styling</li>
          <li>✓ 30 days of post-launch support</li>
        </ul>

        <button className="
          mt-10
          w-full
          bg-[#262321]
          text-white
          py-4
          rounded-full
          hover:bg-[#403A35]
          transition-all
          duration-300
        ">
          Start Your Project
        </button>

      </motion.div>



      {/* ==========================
            PREMIUM
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
          group
          bg-white
          rounded-[30px]
          border
          border-[#E7DDD1]
          p-9
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >

        <p className="uppercase tracking-[0.25em] text-[#C8A46A] text-sm mb-4">
          PREMIUM
        </p>

        <h3
          className="text-5xl text-[#262321]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Custom Quote
        </h3>

        <p className="text-[#7A746D] mt-5 leading-7">
          Bespoke digital solutions for businesses requiring advanced
          functionality, integrations or a more tailored experience.
        </p>

        <div className="h-px bg-[#E7DDD1] my-8" />

        <ul className="space-y-3 text-[#7A746D] text-sm">
          <li>✓ Everything in Business</li>
          <li>✓ Booking system integration*</li>
          <li>✓ Advanced forms</li>
          <li>✓ Blog setup</li>
          <li>✓ Ecommerce*</li>
          <li>✓ Custom functionality*</li>
          <li>✓ Custom page layouts</li>
          <li>✓ Additional revision rounds</li>
          <li>✓ Priority project turnaround</li>
          <li>✓ Priority support</li>
        </ul>

        <button className="
          mt-10
          w-full
          border
          border-[#C8A46A]
          text-[#6F5832]
          py-4
          rounded-full
          hover:bg-[#C8A46A]
          hover:text-white
          transition-all
          duration-300
        ">
          Request a Custom Quote
        </button>

      </motion.div>

    </div>



    {/* =====================================================
          MOBILE PRICING
          Completely redesigned for phones
    ===================================================== */}

    <div className="md:hidden space-y-6">


      {/* ==========================
            MOBILE STARTER
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          bg-white
          rounded-[24px]
          border
          border-[#E7DDD1]
          p-6
        "
      >

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="
              uppercase
              tracking-[0.25em]
              text-[#C8A46A]
              text-[10px]
              mb-2
            ">
              STARTER
            </p>

            <h3
              className="text-[2.35rem] leading-none text-[#262321]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              From R3 500
            </h3>

          </div>

          <span className="text-[#DCC9A7] text-lg">
            ✦
          </span>

        </div>


        <p className="text-[#7A746D] mt-5 text-sm leading-6">
          A refined starting point for startups, professionals and
          small businesses ready to establish a credible online presence.
        </p>


        <div className="h-px bg-[#E7DDD1] my-6" />


        <p className="
          uppercase
          tracking-[0.2em]
          text-[9px]
          text-[#A89D91]
          mb-3
        ">
          Includes
        </p>


        <ul className="grid grid-cols-1 gap-2 text-[#66615C] text-[13px]">
          <li>✓ One scrolling website</li>
          <li>✓ Up to 8 custom sections</li>
          <li>✓ Mobile responsive design</li>
          <li>✓ Contact form</li>
          <li>✓ WhatsApp integration</li>
          <li>✓ Google Maps integration</li>
          <li>✓ Social media links</li>
          <li>✓ Basic SEO setup</li>
          <li>✓ One revision</li>
          <li>✓ 2 weeks of post-launch support</li>
        </ul>


        <motion.button
          whileTap={{ scale: 0.97 }}
          className="
            mt-7
            w-full
            border
            border-[#C8A46A]
            text-[#6F5832]
            py-3.5
            rounded-full
            text-sm
            transition-all
          "
        >
          Start Your Project
        </motion.button>

      </motion.div>



      {/* ==========================
            MOBILE BUSINESS
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          bg-[#F3EBDD]
          rounded-[24px]
          border
          border-[#DCC9A7]
          p-6
          shadow-[0_15px_40px_rgba(110,88,50,0.10)]
        "
      >

        {/* Mobile Popular Badge */}

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            absolute
            top-0
            right-5
            -translate-y-1/2
            bg-[#C8A46A]
            text-white
            px-4
            py-1.5
            rounded-full
            uppercase
            tracking-[0.18em]
            text-[9px]
            font-medium
          "
        >
          Most Popular
        </motion.div>


        <div className="pt-2">

          <p className="
            uppercase
            tracking-[0.25em]
            text-[#9A773F]
            text-[10px]
            mb-2
          ">
            BUSINESS
          </p>

          <h3
            className="text-[2.35rem] leading-none text-[#262321]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            From R6 500
          </h3>

        </div>


        <p className="text-[#6F675E] mt-5 text-sm leading-6">
          For growing businesses ready for a more established,
          feature-rich website that reflects the quality of their brand.
        </p>


        <div className="h-px bg-[#DCC9A7] my-6" />


        <p className="
          uppercase
          tracking-[0.2em]
          text-[9px]
          text-[#9A773F]
          mb-3
        ">
          Includes
        </p>


        <ul className="space-y-2 text-[#5F584F] text-[13px]">
          <li>✓ Everything in Starter</li>
          <li>✓ Up to 5 pages</li>
          <li>✓ Image gallery</li>
          <li>✓ Testimonials</li>
          <li>✓ Google Business Profile integration</li>
          <li>✓ Professional email setup guidance</li>
          <li>✓ Enhanced SEO setup</li>
          <li>✓ Brand styling</li>
          <li>✓ 30 days of post-launch support</li>
        </ul>


        <motion.button
          whileTap={{ scale: 0.97 }}
          className="
            mt-7
            w-full
            bg-[#262321]
            text-white
            py-3.5
            rounded-full
            text-sm
            transition-all
          "
        >
          Start Your Project
        </motion.button>

      </motion.div>



      {/* ==========================
            MOBILE PREMIUM
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          bg-white
          rounded-[24px]
          border
          border-[#E7DDD1]
          p-6
        "
      >

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="
              uppercase
              tracking-[0.25em]
              text-[#C8A46A]
              text-[10px]
              mb-2
            ">
              PREMIUM
            </p>

            <h3
              className="text-[2.35rem] leading-none text-[#262321]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Custom Quote
            </h3>

          </div>

          <span className="text-[#DCC9A7] text-lg">
            ✦
          </span>

        </div>


        <p className="text-[#7A746D] mt-5 text-sm leading-6">
          Bespoke digital solutions for businesses requiring advanced
          functionality, integrations or a more tailored experience.
        </p>


        <div className="h-px bg-[#E7DDD1] my-6" />


        <p className="
          uppercase
          tracking-[0.2em]
          text-[9px]
          text-[#A89D91]
          mb-3
        ">
          Includes
        </p>


        <ul className="space-y-2 text-[#7A746D] text-[13px]">
          <li>✓ Everything in Business</li>
          <li>✓ Booking system integration*</li>
          <li>✓ Advanced forms</li>
          <li>✓ Blog setup</li>
          <li>✓ Ecommerce*</li>
          <li>✓ Custom functionality*</li>
          <li>✓ Custom page layouts</li>
          <li>✓ Additional revision rounds</li>
          <li>✓ Priority project turnaround</li>
          <li>✓ Priority support</li>
        </ul>


        <motion.button
          whileTap={{ scale: 0.97 }}
          className="
            mt-7
            w-full
            border
            border-[#C8A46A]
            text-[#6F5832]
            py-3.5
            rounded-full
            text-sm
            transition-all
          "
        >
          Request a Custom Quote
        </motion.button>

      </motion.div>

    </div>



    {/* ==========================
          FOOTER NOTE
    ========================== */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="
        mt-10
        md:mt-12
        text-center
        max-w-3xl
        mx-auto
      "
    >

      <p className="
        text-[#7A746D]
        text-xs
        md:text-sm
        leading-6
        md:leading-7
      ">

        <strong className="text-[#4F4943]">
          Good to know:
        </strong>{" "}
        Domain registration, hosting and third-party services such as
        booking platforms or email providers are quoted separately where
        applicable. We'll guide you through the options best suited to
        your business.

      </p>

    </motion.div>

  </div>

</section>
{/* ==========================
        CONTACT
========================== */}

<section
  id="contact"
  className="py-10 md:py-16 bg-[#FBF8F3] overflow-hidden"
>
  <div className="max-w-6xl mx-auto px-8">

    {/* Decorative Divider */}

    <motion.div
      initial={{ opacity: 0, scaleX: 0.7 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center mb-12"
    >
      <div className="h-px w-48 md:w-60 bg-[#D9C7A3]" />

      <span className="mx-6 md:mx-8 text-[#C5A46D] text-lg">
        ✦
      </span>

      <div className="h-px w-48 md:w-60 bg-[#D9C7A3]" />
    </motion.div>


    {/* Intro */}

    <div className="text-center">

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="uppercase tracking-[0.35em] text-[#C5A46D] text-xs md:text-sm"
      >
        LET'S BUILD SOMETHING BEAUTIFUL
      </motion.p>


      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#2A2623] mt-5"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Your next chapter
        <br />
        starts here.
      </motion.h2>


      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto mt-7 text-[#7A746D] leading-8"
      >
        Tell me a little about your business, what you're hoping to build
        and where you'd like to go next. I'll review your enquiry and
        recommend the right website package for you.
      </motion.p>

    </div>


    {/* Contact Cards */}

    <div className="grid md:grid-cols-3 gap-6 mt-16">


      {/* EMAIL */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="group bg-white rounded-[28px] p-8 md:p-9 border border-[#E8DED0] hover:-translate-y-2 transition-all duration-500"
      >

        <p className="uppercase tracking-[0.25em] text-xs text-[#C5A46D] mb-4">
          EMAIL
        </p>

        <h3
          className="text-3xl text-[#2A2623]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Let's talk.
        </h3>

        <p className="text-[#7A746D] mt-4 leading-7">
          Send through your enquiry whenever you're ready.
        </p>

        <a
          href="mailto:YOURGMAIL@gmail.com?subject=Website%20Enquiry"
          className="inline-block mt-6 text-sm text-[#2A2623] border-b border-[#C5A46D] pb-1 hover:text-[#C5A46D] transition-colors duration-300"
        >
          YOURGMAIL@gmail.com
        </a>

      </motion.div>


      {/* RESPONSE */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="group bg-white rounded-[28px] p-8 md:p-9 border border-[#E8DED0] hover:-translate-y-2 transition-all duration-500"
      >

        <p className="uppercase tracking-[0.25em] text-xs text-[#C5A46D] mb-4">
          RESPONSE
        </p>

        <h3
          className="text-3xl text-[#2A2623]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Within 24 hours.
        </h3>

        <p className="text-[#7A746D] mt-4 leading-7">
          I personally review every enquiry and respond during business hours.
        </p>

        <p className="text-xs uppercase tracking-[0.18em] text-[#A49B91] mt-6">
          MONDAY — FRIDAY
        </p>

      </motion.div>


      {/* START HERE */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="group bg-white rounded-[28px] p-8 md:p-9 border border-[#E8DED0] hover:-translate-y-2 transition-all duration-500"
      >

        <p className="uppercase tracking-[0.25em] text-xs text-[#C5A46D] mb-4">
          START HERE
        </p>

        <h3
          className="text-3xl text-[#2A2623]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Tell me about it.
        </h3>

        <p className="text-[#7A746D] mt-4 leading-7">
          Share your business, your goals and the kind of website you're
          looking for.
        </p>

      </motion.div>

    </div>


    {/* Main CTA */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="text-center mt-14"
    >

      <a
        href="mailto:YOURGMAIL@gmail.com?subject=Website%20Enquiry"
        className="
          inline-flex
          items-center
          justify-center
          bg-[#2A2623]
          hover:bg-[#403832]
          text-white
          px-12
          py-5
          rounded-full
          tracking-[0.12em]
          text-sm
          shadow-lg
          hover:-translate-y-1
          hover:shadow-xl
          transition-all
          duration-300
        "
      >
        Start Your Project
      </a>

      <p className="text-xs text-[#A49B91] mt-5">
        No pressure. Just a conversation about what you need.
      </p>

    </motion.div>


    {/* Bottom Divider */}

    <div className="flex items-center justify-center mt-20">
      <div className="h-px w-40 md:w-56 bg-[#E3D8C9]" />

      <span className="mx-6 text-[#C5A46D]">
        ✦
      </span>

      <div className="h-px w-40 md:w-56 bg-[#E3D8C9]" />
    </div>

  </div>

</section>

{/* ==========================
        PROJECT ENQUIRY
========================== */}

<section
  id="enquiry"
  className="py-14 md:py-20 bg-[#F8F5F1]"
>
  <div className="max-w-3xl mx-auto px-6 md:px-8">

    {/* Intro */}

    <div className="text-center mb-16">

     <div className="flex items-center justify-center mb-16">
  <div className="h-px w-60 bg-[#D9C7A3]" />

  <span className="mx-8 text-[#B8945A]">
    ✦
  </span>

  <div className="h-px w-60 bg-[#D9C7A3]" />
</div>
      <p className="uppercase tracking-[0.35em] text-[#C5A46D] text-xs md:text-sm mb-5">
        PROJECT ENQUIRY
      </p>

      <h2
        className="text-5xl md:text-6xl leading-tight text-[#2B2B2B]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Tell us about
        <br />
        your project.
      </h2>

      <p className="max-w-2xl mx-auto mt-7 text-[#7A746D] leading-8">
        A few details will help us understand your business,
        your goals and the kind of website you need. We'll
        review your enquiry and recommend the most suitable
        approach.
      </p>

      <p className="text-sm text-[#A09A93] mt-5">
        No pressure. No obligation. Just a conversation about your project.
      </p>

    </div>


    {/* Form */}

    <form
      action="https://formsubmit.co/YOURPERSONALGMAIL@gmail.com"
      method="POST"
      className="bg-white rounded-[32px] border border-[#E7DDD1] p-7 md:p-12 shadow-sm"
    >

      {/* Form settings */}

      <input
        type="hidden"
        name="_subject"
        value="New Website Enquiry — The Brand Persona"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />

      <input
        type="hidden"
        name="_captcha"
        value="true"
      />


      {/* ==================
          ABOUT YOU
      ================== */}

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          ABOUT YOU
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-8"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Let's start with the basics.
        </h3>


        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm text-[#5F5A55] mb-2">
              Your name *
            </label>

            <input
              type="text"
              name="Name"
              required
              placeholder="Your full name"
              className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition"
            />
          </div>


          <div>
            <label className="block text-sm text-[#5F5A55] mb-2">
              Business name *
            </label>

            <input
              type="text"
              name="Business Name"
              required
              placeholder="Your business name"
              className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition"
            />
          </div>


          <div>
            <label className="block text-sm text-[#5F5A55] mb-2">
              Email address *
            </label>

            <input
              type="email"
              name="Email"
              required
              placeholder="info.thebrandpersona@gmail.com"
              className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition"
            />
          </div>


          <div>
            <label className="block text-sm text-[#5F5A55] mb-2">
              WhatsApp number
            </label>

            <input
              type="tel"
              name="WhatsApp"
              placeholder="+27 ..."
              className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition"
            />
          </div>

        </div>

      </div>


      {/* ==================
          BUSINESS
      ================== */}

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          YOUR BUSINESS
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-8"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Where are you in your journey?
        </h3>


        <label className="block text-sm text-[#5F5A55] mb-3">
          Which best describes your business? *
        </label>

        <div className="grid md:grid-cols-2 gap-3">

          {[
            "I'm starting a new business",
            "I'm an established business",
            "I'm rebranding my existing business",
            "I'm not sure yet"
          ].map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 border border-[#E4DCCF] rounded-2xl px-5 py-4 cursor-pointer hover:border-[#C5A46D] transition"
            >
              <input
                type="radio"
                name="Business Stage"
                value={option}
                required
                className="accent-[#B8945A]"
              />

              <span className="text-sm text-[#5F5A55]">
                {option}
              </span>
            </label>
          ))}

        </div>


        <label className="block text-sm text-[#5F5A55] mt-8 mb-2">
          Tell us a little about your business *
        </label>

        <textarea
          name="About Business"
          required
          rows={4}
          placeholder="What do you do, who do you serve and what would you like people to know about your business?"
          className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition resize-none"
        />

      </div>


      {/* ==================
          WEBSITE
      ================== */}

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          YOUR WEBSITE
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-8"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What are you looking to create?
        </h3>


        <label className="block text-sm text-[#5F5A55] mb-3">
          What type of website do you need? *
        </label>

        <div className="grid md:grid-cols-2 gap-3">

          {[
            "One-page website",
            "Multi-page business website",
            "Online store / e-commerce",
            "I'm not sure yet"
          ].map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 border border-[#E4DCCF] rounded-2xl px-5 py-4 cursor-pointer hover:border-[#C5A46D] transition"
            >
              <input
                type="radio"
                name="Website Type"
                value={option}
                required
                className="accent-[#B8945A]"
              />

              <span className="text-sm text-[#5F5A55]">
                {option}
              </span>
            </label>
          ))}

        </div>


        <label className="block text-sm text-[#5F5A55] mt-8 mb-3">
          What would you like your website to help you achieve?
        </label>

        <textarea
          name="Website Goals"
          rows={3}
          placeholder="For example: attract new customers, showcase my services, sell products, build credibility..."
          className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition resize-none"
        />

      </div>


      {/* ==================
          WHAT YOU ALREADY HAVE
      ================== */}

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          WHAT YOU ALREADY HAVE
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-8"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          We'll meet you where you are.
        </h3>


        <div className="space-y-7">

          {[
            ["Logo", "Do you already have a logo?"],
            ["Brand Colours", "Do you already have brand colours?"],
            ["Domain", "Do you already have a domain name?"],
            ["Hosting", "Do you already have website hosting?"],
            ["Content", "Do you already have your website content ready?"]
          ].map(([name, question]) => (

            <div key={name}>

              <p className="text-sm text-[#5F5A55] mb-3">
                {question}
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  "Yes",
                  "No",
                  "I'm not sure"
                ].map((option) => (

                  <label
                    key={option}
                    className="flex items-center gap-2 border border-[#E4DCCF] rounded-full px-5 py-2.5 cursor-pointer hover:border-[#C5A46D] transition"
                  >

                    <input
                      type="radio"
                      name={name}
                      value={option}
                      required
                      className="accent-[#B8945A]"
                    />

                    <span className="text-sm text-[#5F5A55]">
                      {option}
                    </span>

                  </label>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ==================
          FEATURES
      ================== */}

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          FEATURES
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-8"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What would you like your website to include?
        </h3>


        <div className="grid sm:grid-cols-2 gap-3">

          {[
            "Contact form",
            "WhatsApp",
            "Google Maps",
            "Image gallery",
            "Testimonials",
            "Booking system",
            "Blog",
            "Online payments",
            "E-commerce",
            "Something else"
          ].map((feature) => (

            <label
              key={feature}
              className="flex items-center gap-3 border border-[#E4DCCF] rounded-2xl px-5 py-4 cursor-pointer hover:border-[#C5A46D] transition"
            >

              <input
                type="checkbox"
                name="Requested Features"
                value={feature}
                className="accent-[#B8945A] w-4 h-4"
              />

              <span className="text-sm text-[#5F5A55]">
                {feature}
              </span>

            </label>

          ))}

        </div>

      </div>


      {/* ==================
          INSPIRATION
      ================== */}

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          INSPIRATION
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Show us what you love.
        </h3>

        <p className="text-sm text-[#7A746D] mb-6">
          If there are websites, colours or styles you love,
          share them with us below.
        </p>

        <textarea
          name="Website Inspiration"
          rows={3}
          placeholder="Paste website links or describe the style you're drawn to..."
          className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition resize-none"
        />

      </div>


      {/* ==================
          BUDGET
      ================== */}

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          INVESTMENT
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Let's find the right fit.
        </h3>

        <p className="text-sm text-[#7A746D] mb-6">
          This simply helps us understand what you're looking for.
          It isn't a commitment.
        </p>


        <div className="grid sm:grid-cols-2 gap-3">

          {[
            "R3,500 – R5,000",
            "R5,000 – R8,000",
            "R8,000+",
            "I'm not sure yet"
          ].map((option) => (

            <label
              key={option}
              className="flex items-center gap-3 border border-[#E4DCCF] rounded-2xl px-5 py-4 cursor-pointer hover:border-[#C5A46D] transition"
            >

              <input
                type="radio"
                name="Budget"
                value={option}
                required
                className="accent-[#B8945A]"
              />

              <span className="text-sm text-[#5F5A55]">
                {option}
              </span>

            </label>

          ))}

        </div>

      </div>


      {/* ==================
          FINAL MESSAGE
      ================== */}

      <div>

        <p className="uppercase tracking-[0.3em] text-[#B8945A] text-xs mb-3">
          ONE LAST THING
        </p>

        <h3
          className="text-3xl text-[#2B2B2B] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Anything else you'd like us to know?
        </h3>

        <textarea
          name="Additional Information"
          rows={4}
          placeholder="Tell us anything else that might help us understand your project..."
          className="w-full border border-[#E4DCCF] rounded-2xl px-5 py-4 outline-none focus:border-[#C5A46D] transition resize-none"
        />

      </div>


      {/* Submit */}

      <div className="text-center mt-12 pt-10 border-t border-[#EEE4D4]">

        <button
          type="submit"
          className="bg-[#2B2724] hover:bg-[#3A342F] text-white px-12 py-5 rounded-full shadow-lg transition-all duration-300"
        >
          Send Project Enquiry
        </button>

        <p className="text-xs text-[#9A938B] mt-5">
          We'll review your enquiry and get back to you with the next steps.
        </p>

      </div>

    </form>

  </div>

</section>
{/* ==========================
        FOOTER
========================== */}

<footer className="bg-[#F6F1EA] border-t border-[#E8DED0] py-10">

  <div className="max-w-7xl mx-auto px-8">

    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

      <p className="text-sm text-[#8A8178]">
        © 2026 The Brand Persona. All rights reserved.
      </p>

      <div className="flex items-center gap-8">

        <a
  href="https://www.instagram.com/thebrandpersona/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-[#8A8178] hover:text-[#2A2623] transition-colors duration-300"
>
  Instagram
</a>

        <a
          href="https://wa.me/+27823378768"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#8A8178] hover:text-[#2A2623] transition-colors duration-300"
        >
          Whatsapp
        </a>

        <a
          href="info.thebrandpersona@gmail.com"
          className="text-sm text-[#8A8178] hover:text-[#2A2623] transition-colors duration-300"
        >
          Email
        </a>

      </div>

    </div>

  </div>

</footer>
 </main> 
  );
}