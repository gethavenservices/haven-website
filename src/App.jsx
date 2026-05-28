import React from 'react';
import { ArrowRight } from 'lucide-react';

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

export default function App() {
  return (
    <main className="flex flex-col bg-[#F5F5F5] min-h-screen">
      
      <style dangerouslySetInnerHTML={{__html: `
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .backers-track {
          display: flex;
          width: max-content;
          animation: backers-marquee 30s linear infinite;
        }
        @keyframes backers-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* 1. Navbar & Hero Section Wrapper */}
      <div className="h-screen flex flex-col overflow-hidden w-full max-w-[88rem] mx-auto relative">
        
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <LogoIcon className="w-7 h-7 text-black" />
            <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
            <a href="#services" className="hover:text-black transition-colors duration-200">Services</a>
            <a href="#why-haven" className="hover:text-black transition-colors duration-200">Why Haven</a>
            <a href="#ecosystem" className="hover:text-black transition-colors duration-200">Ecosystem</a>
            <a href="#partnerships" className="hover:text-black transition-colors duration-200">Partnerships</a>
          </div>

          <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
            Join Waitlist
          </button>
        </nav>

        {/* Hero Content */}
        <section className="flex-1 px-6 pt-20 pb-6 flex items-end w-full">
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
            
            <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
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
              
              <button className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group">
                Join Waitlist
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>

              {/* Hero Marquee */}
              <div className="mt-24 w-full max-w-md overflow-hidden mask-fade-edges">
                <div className="marquee-track">
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

      {/* 3. Info Section ("Meet Haven.") */}
      <section className="bg-[#F5F5F5] px-6 py-24 w-full">
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
                Explore Services
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
                No hidden costs. Get upfront estimates for all jobs with a secure booking ecosystem.
              </p>
            </div>

            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-[20rem] flex flex-col justify-between">
              <h3 className="text-white text-2xl font-medium whitespace-pre-line">
                {"Fast\nResponse"}
              </h3>
              <p className="text-white/60 text-base">
                Rapid hyperlocal support during critical situations with our quick-response workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Backed By Section */}
      <section className="bg-[#F5F5F5] px-6 pb-24 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-1 text-black/70 text-base leading-relaxed whitespace-pre-line">
            {"Future partnerships and\nempowering the workforce."}
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
      </section>

      {/* 5. Use Cases Section */}
      <section className="bg-[#F5F5F5] px-6 pb-24 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column */}
          <div className="md:pr-12 md:pt-2">
            <span className="block text-black/60 text-sm mb-2">Subscription Ecosystem</span>
            <h2 
              className="text-black text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Service modes
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm">
              Haven powers a wide range of modes for households wanting safe and reliable maintenance. Enjoy weekly cleaning plans, monthly subscriptions, and annual AC servicing.
            </p>
          </div>

          {/* Right Column */}
          <div className="relative rounded-3xl overflow-hidden min-h-[720px] w-full">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="object-cover absolute inset-0 w-full h-full"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
            />
            
            <div className="relative z-10 p-10 md:p-12 flex flex-col h-full justify-start items-start">
              <h3 
                className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5"
                style={{ letterSpacing: '-0.03em' }}
              >
                Emergency Services
              </h3>
              <p className="text-black/70 text-base max-w-md mb-8">
                Rapid hyperlocal support during critical situations. Get immediate help for pipe leakage, night-time electrical issues, and emergency AC malfunctions.
              </p>
              
              <button className="inline-flex items-center gap-3 text-black font-medium group">
                Book Trusted Professionals
                <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
