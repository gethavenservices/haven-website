import React, { useState } from 'react';
import { ArrowRight, Menu, X, Wrench, Zap, Hammer, PaintRoller, Sparkles, Fan, Settings, Droplets } from 'lucide-react';

const LogoIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
  </svg>
);

const serviceMarquee = [
  { name: 'Plumbing', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
  { name: 'Electrical', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' } },
  { name: 'Carpentry', style: { fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' } },
  { name: 'Painting', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' } },
  { name: 'Cleaning & Janitorial', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
  { name: 'AC Repair', style: { fontFamily: 'Impact, "Arial Narrow", sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
  { name: 'Appliance Maintenance', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } },
];

const backerBrands = [
  { name: 'Samsung', style: { fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '16px' } },
  { name: 'LG', style: { fontFamily: '"Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' } },
  { name: 'Whirlpool', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' } },
  { name: 'IFB', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' } },
  { name: 'ITI Network', style: { fontFamily: 'Helvetica, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' } },
  { name: 'Vocational Centers', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' } },
];

const servicesList = [
  { name: 'Plumbing', icon: Droplets, desc: 'Leakages, fittings, and full pipe maintenance.' },
  { name: 'Electrical', icon: Zap, desc: 'Wiring, night-time issues, and installations.' },
  { name: 'Carpentry', icon: Hammer, desc: 'Custom furniture, repairs, and woodwork.' },
  { name: 'Painting', icon: PaintRoller, desc: 'Interior, exterior, and touch-up services.' },
  { name: 'Cleaning', icon: Sparkles, desc: 'Deep cleaning and janitorial support.' },
  { name: 'AC Repair', icon: Fan, desc: 'Servicing, gas refilling, and emergency fixes.' },
  { name: 'Appliance Care', icon: Settings, desc: 'Washing machines, microwaves, and more.' },
  { name: 'RO Maintenance', icon: Wrench, desc: 'Filter changes and quarterly servicing.' },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="flex flex-col bg-[#F5F5F5] min-h-screen">
      
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        .marquee-track { display: flex; width: max-content; animation: marquee 22s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .backers-track { display: flex; width: max-content; animation: backers-marquee 30s linear infinite; }
        @keyframes backers-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
      `}} />

      {/* 1. Navbar & Hero Section Wrapper */}
      <div className="h-screen flex flex-col overflow-hidden w-full max-w-[88rem] mx-auto relative">
        
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
              <LogoIcon className="w-7 h-7 text-black" />
              <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
              <a href="#services" className="hover:text-black transition-colors duration-200">Services</a>
              <a href="#why-haven" className="hover:text-black transition-colors duration-200">Why Haven</a>
              <a href="#ecosystem" className="hover:text-black transition-colors duration-200">Ecosystem</a>
              <a href="#partnerships" className="hover:text-black transition-colors duration-200">Partnerships</a>
            </div>

            <div className="hidden md:block">
              <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
                Join Waitlist
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-black p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-4 z-50">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 hover:text-black">Services</a>
              <a href="#why-haven" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 hover:text-black">Why Haven</a>
              <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 hover:text-black">Ecosystem</a>
              <a href="#partnerships" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 hover:text-black">Partnerships</a>
              <button className="mt-4 bg-black text-white text-base font-medium px-7 py-3 rounded-full hover:bg-gray-800 text-center">
                Join Waitlist
              </button>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <section id="home" className="flex-1 px-6 pt-20 pb-6 flex items-end w-full">
          <div 
            className="relative w-full rounded-2xl overflow-hidden" 
            style={{ height: 'calc(100vh - 96px)' }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="object-cover absolute inset-0 w-full h-full opacity-70"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            />
            
            <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-36">
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-black font-medium text-sm mb-6">
                Coming soon to your neighbourhood
              </span>
              
              <h1 
                className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
                style={{ letterSpacing: '-0.04em' }}
              >
                India’s Trusted<br />Hyperlocal Ecosystem
              </h1>
              
              <p 
                className="text-black/80 text-base md:text-lg max-w-md mb-8 leading-relaxed font-medium"
                style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
              >
                Connecting households with verified skilled professionals through technology, reliability, and fast hyperlocal services.
              </p>
              
              <a href="#services" className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group">
                Explore Services
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </a>

              {/* Hero Marquee */}
              <div className="mt-auto md:mt-24 w-full max-w-md overflow-hidden mask-fade-edges">
                <div className="marquee-track pt-12 md:pt-0">
                  {[...serviceMarquee, ...serviceMarquee].map((brand, idx) => (
                    <span 
                      key={idx} 
                      className="mx-7 shrink-0 text-black/60 whitespace-nowrap"
                      style={brand.style}
                    >
                      {brand.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Services Section */}
      <section id="services" className="bg-[#F5F5F5] px-6 py-24 w-full">
        <div className="max-w-[88rem] mx-auto">
          <div className="mb-16">
            <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
              Our Services
            </h2>
            <p className="text-black/60 text-lg max-w-2xl">
              From minor fixes to major renovations, access a comprehensive suite of skilled professionals instantly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer border border-black/5">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium text-black mb-2">{service.name}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Haven Section */}
      <section id="why-haven" className="bg-[#F5F5F5] px-6 py-24 w-full border-t border-black/5">
        <div className="max-w-[88rem] mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2 
                className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
                style={{ letterSpacing: '-0.03em' }}
              >
                Meet Haven.
              </h2>
              <button className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group">
                Book Professionals
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
            <div>
              <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
                A tech-enabled hyperlocal skilled-service ecosystem connecting users with verified professionals like electricians, plumbers, and technicians.
              </p>
            </div>
          </div>

          {/* Row 2 - Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              className="lg:col-span-2 rounded-2xl p-7 min-h-[20rem] flex flex-col justify-between"
              style={{
                backgroundImage: 'url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 
                className="text-black text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Verified Professionals
              </h3>
              <p className="text-black/80 font-medium text-base max-w-xs">
                Every service provider undergoes rigorous background checks, transparent rating systems, and skill verification.
              </p>
            </div>

            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-[20rem] flex flex-col justify-between">
              <h3 className="text-white text-2xl font-medium whitespace-pre-line">
                {"Transparent\nPricing"}
              </h3>
              <p className="text-white/60 text-base">
                No hidden costs. Get upfront estimates for all jobs with a secure booking ecosystem. Read ratings & reviews before you book.
              </p>
            </div>

            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-[20rem] flex flex-col justify-between">
              <h3 className="text-white text-2xl font-medium whitespace-pre-line">
                {"Fast\nResponse"}
              </h3>
              <p className="text-white/60 text-base">
                Rapid hyperlocal support. Because when a pipe bursts or the power goes out, you shouldn't have to wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecosystem & Subscriptions Section */}
      <section id="ecosystem" className="bg-[#F5F5F5] px-6 py-24 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column */}
          <div className="md:pr-12 md:pt-2">
            <span className="block text-black/60 text-sm mb-2 font-semibold tracking-wider uppercase">Subscription Ecosystem</span>
            <h2 
              className="text-black text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Smart Home Care
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm mb-8">
              Haven powers a wide range of modes for households wanting safe and reliable maintenance. 
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-black/80 font-medium">
                <CheckCircle2 className="w-5 h-5 text-black" /> Weekly cleaning plans
              </li>
              <li className="flex items-center gap-3 text-black/80 font-medium">
                <CheckCircle2 className="w-5 h-5 text-black" /> Monthly maintenance subscriptions
              </li>
              <li className="flex items-center gap-3 text-black/80 font-medium">
                <CheckCircle2 className="w-5 h-5 text-black" /> Annual AC & Quarterly RO servicing
              </li>
            </ul>
          </div>

          {/* Right Column (Video) */}
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[720px] w-full shadow-lg">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="object-cover absolute inset-0 w-full h-full"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
            />
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-start items-start bg-gradient-to-b from-white/40 to-transparent">
              <h3 
                className="text-black text-3xl md:text-5xl font-medium leading-tight mb-5"
                style={{ letterSpacing: '-0.03em' }}
              >
                Emergency Services
              </h3>
              <p className="text-black/80 text-base md:text-lg max-w-md mb-8 font-medium">
                Rapid hyperlocal support during critical situations. Get immediate help for pipe leakage, night-time electrical issues, and emergency AC malfunctions.
              </p>
              
              <button className="inline-flex items-center gap-3 text-black font-medium group bg-white/40 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/60 transition-colors duration-200">
                Request Emergency Help
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Partnerships & Workforce Section */}
      <section id="partnerships" className="bg-[#F5F5F5] px-6 py-24 w-full border-t border-black/5">
        <div className="max-w-[88rem] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              Workforce Empowerment & Brand Vision
            </h2>
            <p className="text-black/60 text-lg">
              We are building the future of the skilled workforce by partnering with top appliance brands, ITIs, and skill training institutes to create a certified, pan-India maintenance ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
            <div className="md:col-span-1 text-black/80 font-medium text-lg leading-relaxed whitespace-pre-line border-b md:border-b-0 md:border-r border-black/10 pb-6 md:pb-0 md:pr-6">
              {"Future partnerships\nand empowering\nthe workforce."}
            </div>
            <div className="md:col-span-3 overflow-hidden">
              <div className="backers-track">
                {[...backerBrands, ...backerBrands].map((brand, idx) => (
                  <span 
                    key={idx} 
                    className="mx-10 shrink-0 text-black/50 whitespace-nowrap"
                    style={brand.style}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12 md:py-20 w-full mt-auto">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LogoIcon className="w-8 h-8 text-white" />
              <span className="text-3xl font-medium tracking-tight">Haven</span>
            </div>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-6">
              India’s Trusted Hyperlocal Skilled-Service Ecosystem. <br/>
              Connecting households with trusted professionals through technology and reliability.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-sm text-white/60">
            <p>Email: <a href="mailto:gethavenservices@gmail.com" className="text-white hover:underline">gethavenservices@gmail.com</a></p>
            <p>Domain: <a href="https://gethaven.in" className="text-white hover:underline">gethaven.in</a></p>
            <p>Instagram: <a href="https://instagram.com/gofor.haven" className="text-white hover:underline">@gofor.haven</a></p>
            <p>X/Twitter: <a href="https://twitter.com/goforhaven" className="text-white hover:underline">@goforhaven</a></p>
            <p className="mt-8 text-white/40">© 2026 Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
