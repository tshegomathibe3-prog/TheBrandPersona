import Image from "next/image";
import {
  PenTool,
  Feather,
 ShieldCheck,
  Compass,
  ArrowUpRight, 
} from "lucide-react";
import { title } from "process";
export default function Home() {
  return (
    <main className="bg-[#F8F5F1] min-h-screen">

{/* ==========================
        NAVIGATION
========================== */}

<header className="fixed top-0 left-0 w-full z-50 bg-[#F8F5F1]/95 backdrop-blur-lg border-b border-[#E7DED2]">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">

    {/* Logo */}

    <a href="#" className="flex items-center">

      <Image
        src="/logo.png"
        alt="The Brand Persona"
        width={135}
        height={135}
        priority
        className="w-auto h-16 object-contain"
      />

    </a>

    {/* Navigation */}

    <nav className="hidden lg:flex items-center gap-9">

      <a
        href="#"
        className="uppercase text-[12px] tracking-[0.22em] text-[#2C2A28] hover:text-[#264E46] transition duration-300"
      >
        Home
      </a>

      <a
        href="#services"
        className="uppercase text-[12px] tracking-[0.22em] text-[#2C2A28] hover:text-[#264E46] transition duration-300"
      >
        Services
      </a>

      <a
        href="#work"
        className="uppercase text-[12px] tracking-[0.22em] text-[#2C2A28] hover:text-[#264E46] transition duration-300"
      >
        Work
      </a>

      <a
        href="#process"
        className="uppercase text-[12px] tracking-[0.22em] text-[#2C2A28] hover:text-[#264E46] transition duration-300"
      >
        Process
      </a>

      <a
        href="#about"
        className="uppercase text-[12px] tracking-[0.22em] text-[#2C2A28] hover:text-[#264E46] transition duration-300"
      >
        About
      </a>

      <a
        href="#contact"
        className="uppercase text-[12px] tracking-[0.22em] text-[#2C2A28] hover:text-[#264E46] transition duration-300"
      >
        Contact
      </a>

    </nav>

    {/* Button */}

    <button className="bg-[#264E46] text-white text-sm px-7 py-3 rounded-full hover:bg-[#1D3C36] transition-all duration-300 hover:scale-105 shadow-md">

      Book Discovery Call

    </button>

  </div>

</header>

{/* ==========================
        HERO
========================== */}

<section className="min-h-screen bg-[#F8F5F1] pt-32 flex items-center">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 px-8 items-center">

    {/* Left Side */}

    <div>

      <p className="uppercase tracking-[0.35em] text-[#B8945A] text-sm mb-6">
        Boutique Web Studio
      </p>

      <h1
        className="font-serif text-6xl lg:text-8xl leading-[0.92] text-[#2A2623]"
      >
        Your business
        <br />
        deserves{" "}
        <span className="italic text-[#B8945A]">
          more
        </span>
        <br />
        than just
        <br />
        a website.
      </h1>

      <p className="mt-10 max-w-xl text-lg leading-9 text-[#66615C]">
        We create elegant websites and thoughtful branding that help
        businesses build trust, attract customers and leave lasting
        first impressions.
      </p>

      <div className="flex flex-wrap gap-5 mt-12">

        <button className="bg-[#214437] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#18342D] transition-all duration-300 hover:scale-105">
          Explore Our Work
        </button>

        <button className="border-2 border-[#214437] text-[#214437] px-8 py-4 rounded-full hover:bg-[#214437] hover:text-white transition-all duration-300">
          Request a Brand Snapshot
        </button>

      </div>

      <div className="flex flex-wrap gap-8 mt-12 text-sm text-[#6B625D]">

        <div>✓ Mobile Friendly</div>

        <div>✓ SEO Ready</div>

        <div>✓ Built with Care</div>

      </div>

    </div>

    {/* Right Side */}

    <div className="flex justify-center">

      <div className="bg-white rounded-[30px] shadow-2xl overflow-hidden w-full max-w-xl">

        {/* Browser Bar */}

        <div className="bg-[#EEE6DD] h-12 flex items-center px-5 gap-2">

          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>

        </div>

        <div className="p-10">

          <p className="uppercase tracking-[0.3em] text-xs text-[#B8945A] mb-4">
            Featured Project
          </p>

          <h3 className="font-serif text-4xl text-[#2A2623] mb-8">
            Foundation for Dementia
          </h3>

          <div className="space-y-5">

            <div className="h-8 bg-[#F3EEE7] rounded w-3/4"></div>

            <div className="h-4 bg-[#E6DED1] rounded"></div>

            <div className="h-4 bg-[#E6DED1] rounded"></div>

            <div className="h-4 bg-[#E6DED1] rounded w-4/5"></div>

          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-[#F8F5F1] h-40 rounded-2xl"></div>

            <div className="bg-[#F8F5F1] h-40 rounded-2xl"></div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<section className="py-28 bg-[#F8F5F1]">

  <div className="max-w-6xl mx-auto px-8">


    
</div>

</section>
  

{/* ==========================
        SERVICES
========================== */}

<section className="py-32 bg-[#FBF8F3]">

  <div className="max-w-7xl mx-auto px-8">

    {/* Decorative Divider */}

    <div className="flex items-center justify-center mb-16">
      <div className="h-px w-56 bg-[#D9C7A3]"></div>

      <span className="mx-6 text-[#B8945A] text-xl">
        ✦
      </span>

      <div className="h-px w-56 bg-[#D9C7A3]"></div>
    </div>

    <p className="uppercase tracking-[0.35em] text-[#C5A46D] text-center text-sm mb-4">
      WE DESIGN WITH PURPOSE
    </p>

    <h2
      className="text-5xl md:text-6xl text-center text-[#2A2623] leading-tight"
      style={{ fontFamily: "var(--font-cormorant)" }}
    >
      Services That Elevate
      <br />
      Your Brand Online
    </h2>

    <p className="max-w-3xl mx-auto text-center mt-8 text-[#66615C] leading-8">
      Every website we create is carefully designed to help ambitious
      businesses build credibility, attract customers and grow with
      confidence.
    </p>

   <div className="mt-24 max-w-5xl mx-auto">

  {/* Website Design */}

  <div className="group flex items-start gap-8 py-10 border-b border-[#E8DDCF] transition-all duration-500 hover:translate-x-2">

<div className="w-14 h-14 rounded-full border border-[#D8C7A4] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#214437] group-hover:border-[#214437]">
      <PenTool
        size={22}
        strokeWidth={1.5}
        className="text-[#C5A46D] group-hover:text-white transition-colors duration-500"
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

  <div className="group flex items-start gap-8 py-10 border-b border-[#E8DDCF] transition-all duration-500 hover:translate-x-2">

    <div className="w-14 h-14 rounded-full border border-[#D8C7A4] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#214437] group-hover:border-[#214437]">

      <Feather
        size={22}
        strokeWidth={1.5}
        className="text-[#C5A46D] group-hover:text-white transition-colors duration-500"
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

  <div className="group flex items-start gap-8 py-10 border-b border-[#E8DDCF] transition-all duration-500 hover:translate-x-2">

    <div className="w-14 h-14 rounded-full border border-[#D8C7A4] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#214437] group-hover:border-[#214437]">

      <ShieldCheck
        size={22}
        strokeWidth={1.5}
        className="text-[#C5A46D] group-hover:text-white transition-colors duration-500"
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

  <div className="group flex items-start gap-8 py-10 transition-all duration-500 hover:translate-x-2">

    <div className="w-14 h-14 rounded-full border border-[#D8C7A4] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#214437] group-hover:border-[#214437]">

      <Compass
        size={22}
        strokeWidth={1.5}
        className="text-[#C5A46D] group-hover:text-white transition-colors duration-500"
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

    <div className="flex items-center justify-center mt-24">
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

<section className="py-28 bg-[#F8F5F1]">

  <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

    <div>

      <p className="uppercase tracking-[0.3em] text-sm text-[#B8945A] mb-5">
        FEATURED PROJECT
      </p>

      <h2 className="text-5xl font-semibold mb-8 text-[#2F2825]">
        Foundation for Dementia
      </h2>

      <p className="text-gray-600 leading-8 mb-10">
        A calm, welcoming website concept created for an organisation
        supporting individuals and families affected by dementia.
        Designed with accessibility, warmth and trust at its core.
      </p>

      <button className="bg-[#2F4F46] text-white px-8 py-4 rounded-full hover:bg-[#223A34] transition">
        View Project
      </button>

    </div>

    <div>

      {/* We'll replace this with your website screenshot */}

      <div className="bg-white rounded-[30px] shadow-2xl h-[450px] flex items-center justify-center">

        <p className="text-[#B8945A] uppercase tracking-[0.3em]">
          Foundation for Dementia Website Preview
        </p>

      </div>

    </div>

  </div>

</section>
{/* ==========================
        OUR PROCESS
========================== */}

<section id="process" className="py-28 bg-[#F8F5F1]">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.3em] text-[#B8945A] text-sm mb-4">
        OUR PROCESS
      </p>

      <h2 className="text-5xl font-semibold text-[#2F2825]">
        From idea to launch.
      </h2>

    </div>

    <div className="grid md:grid-cols-5 gap-8">

      {[
        ["01","Discover"],
        ["02","Plan"],
        ["03","Design"],
        ["04","Develop"],
        ["05","Launch"],
      ].map(([number,title])=>(
        <div
          key={number}
          className="bg-white rounded-3xl p-8 text-center shadow-sm transition-all duration-500 group-hover:translate-x-2"
        >
          <p className="text-[#B8945A] text-3xl mb-6">{number}</p>

          <h3 className="text-2xl font-semibold mb-4 text-[#2F2825]">
            {title}
          </h3>

          <p className="text-gray-600">
            Every project is carefully planned to ensure a smooth experience.
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
{/* ==========================
      WHY CHOOSE US
========================== */}

<section id="about" className="py-28 bg-white">

<div className="max-w-6xl mx-auto px-8">

<div className="text-center mb-20">

<p className="uppercase tracking-[0.3em] text-[#B8945A] mb-4">
WHY THE BRAND PERSONA
</p>

<h2 className="text-5xl font-semibold text-[#2F2825]">
Built for growing businesses.
</h2>

</div>

<div className="grid md:grid-cols-2 gap-12">

<div>

<h3 className="text-3xl font-semibold mb-6">
A personal approach.
</h3>

<p className="text-gray-600 leading-8">
You'll work directly with me throughout your project, ensuring clear communication, thoughtful design decisions and a website tailored specifically to your business goals.
</p>

</div>

<div>

<h3 className="text-3xl font-semibold mb-6">
Designed with purpose.
</h3>

<p className="text-gray-600 leading-8">
Every colour, font and layout is chosen intentionally to help your business create a professional first impression and build trust with potential customers.
</p>

</div>

</div>

</div>

</section>
{/* ==========================
        PRICING
========================== */}

<section id="pricing" className="py-28 bg-[#F8F5F1]">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center mb-20">

<p className="uppercase tracking-[0.3em] text-[#B8945A]">
PRICING
</p>

<h2 className="text-5xl font-semibold text-[#2F2825] mt-4">
Choose your package.
</h2>

</div>

<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-10 shadow">

<h3 className="text-3xl font-semibold mb-4">
Starter
</h3>

<p className="text-5xl font-bold mb-8">
From R3 500
</p>

<ul className="space-y-4 text-gray-600">
<li>✓ One-page website</li>
<li>✓ Mobile responsive</li>
<li>✓ Contact form</li>
<li>✓ Basic SEO</li>
</ul>

</div>

<div className="bg-[#2F4F46] text-white rounded-3xl p-10 shadow-xl">

<h3 className="text-3xl font-semibold mb-4">
Business
</h3>

<p className="text-5xl font-bold mb-8">
From R6 500
</p>

<ul className="space-y-4">
<li>✓ Multi-page website</li>
<li>✓ SEO Ready</li>
<li>✓ Google Maps</li>
<li>✓ Contact Forms</li>
<li>✓ Gallery</li>
</ul>

</div>

<div className="bg-white rounded-3xl p-10 shadow">

<h3 className="text-3xl font-semibold mb-4">
Premium
</h3>

<p className="text-5xl font-bold mb-8">
Custom Quote
</p>

<ul className="space-y-4 text-gray-600">
<li>✓ Everything in Business</li>
<li>✓ Custom Features</li>
<li>✓ Advanced Integrations</li>
<li>✓ Ongoing Support</li>
</ul>

</div>

</div>

</div>

</section>
{/* ==========================
        FAQ
========================== */}

<section className="py-28 bg-white">

<div className="max-w-4xl mx-auto px-8">

<div className="text-center mb-16">

<p className="uppercase tracking-[0.3em] text-[#B8945A]">
FAQ
</p>

<h2 className="text-5xl font-semibold text-[#2F2825] mt-4">
Frequently Asked Questions
</h2>

</div>

<div className="space-y-8">

<div>
<h3 className="font-semibold text-2xl mb-3">
How long does a website take?
</h3>

<p className="text-gray-600">
Most projects are completed within 2–4 weeks depending on the scope.
</p>
</div>

<div>
<h3 className="font-semibold text-2xl mb-3">
Do you provide hosting?
</h3>

<p className="text-gray-600">
Yes. I'll help you choose reliable hosting and can manage it for you if you'd like ongoing support.
</p>
</div>

<div>
<h3 className="font-semibold text-2xl mb-3">
Can you redesign my existing website?
</h3>

<p className="text-gray-600">
Absolutely. I can modernise your current website while keeping your existing branding where appropriate.
</p>
</div>

</div>

</div>

</section>
{/* ==========================
        CONTACT
========================== */}

<section id="contact" className="py-28 bg-[#2F4F46] text-white">

<div className="max-w-5xl mx-auto text-center px-8">

<p className="uppercase tracking-[0.3em] text-[#D8C19A]">
LET'S BUILD YOUR BRAND
</p>

<h2 className="text-6xl font-semibold mt-6 mb-8">
Ready to get started?
</h2>

<p className="max-w-2xl mx-auto text-lg leading-8 mb-12">
Whether you're launching a new business or refreshing an existing one, I'd love to help you create a professional online presence.
</p>

<button className="bg-white text-[#2F4F46] px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
Book Your Discovery Call
</button>

</div>

</section>
<footer className="bg-[#233831] text-white py-10">

<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

<p>
© 2026 The Brand Persona. All Rights Reserved.
</p>

<p className="text-[#D8C19A] mt-4 md:mt-0">
Designing Brands That People Remember.
</p>

</div>

</footer>

    </main>
  
  );
}