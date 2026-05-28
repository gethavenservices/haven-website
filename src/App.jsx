import React from 'react';
import { ArrowRight } from 'lucide-react';

const LogoIcon = ({ className }) => (
  <svg 
    viewBox="0 0 256 256" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);

const heroTrust = [
  { name: 'Verified Experts', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
  { name: 'Secure Booking', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' } },
  { name: '24/7 Support', style: { fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' } },
  { name: 'Local Ecosystem', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' } },
  { name: 'Quality Assured', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
];

const backerBrands = [
  { name: 'Property Management', style: { fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' } },
  { name: 'Local Services', style: { fontFamily: '"Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' } },
  { name: 'Effortless Hospitality', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' } },
  { name: 'Trusted Network', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' } },
];

export default function App() {
  return (
    <main className="flex flex-col bg-[#F5F5F5] min-h-screen">
      
      {/* 1. Navbar & 2. Hero Section Wrapper */}
      <div className="h-screen flex flex-col overflow-hidden w-full max-w-[88rem] mx-auto relative">
        
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <LogoIcon className="w-7 h-7 text-black" />
            <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
            <a href="#services" className="hover:text-black transition-colors duration-200">Services</a>
            <a href="#ecosystem" className="hover:text-black transition-colors duration-200">Our Ecosystem</a>
            <a href="#about" className="hover:text-black transition-colors duration-200">About Us</a>
            <a href="#contact" className="hover:text-black transition-colors duration-200">Contact</a>
          </div>

          <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
            Book Now
          </button>
        </nav>

        {/* Hero Content */}
        <section className="flex-1 px-6 pt-20 pb-6 flex items-end w-full">
          <div 
            className="relative w-full rounded-2xl overflow-hidden" 
            style={{ height: 'calc(100vh - 96px)' }}
          >
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="object-cover absolute inset-0 w-full h-full opacity-60"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            />
            
            <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
              <h1 
                className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
                style={{ letterSpacing: '-0.04em' }}
              >
                Intelligent Property,<br />Effortless Hospitality
              </h1>
              <p 
                className="text-black/80 text-base md:text-lg max-w-md mb-8 leading-relaxed font-medium"
                style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
              >
                Your trusted hyperlocal ecosystem. We connect you with verified professionals for seamless property management and local services.
              </p>
              
              <button className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group">
                Explore Services
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>

              {/* Hero Marquee */}
              <div className="mt-24 w-full max-w-md overflow-hidden mask-fade-edges">
                <div className="marquee-track">
                  {[...heroTrust, ...heroTrust].map((brand, idx) => (
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
                See how it works
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
            <div>
              <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
                The complete platform for luxury vacation rentals, student accommodations, and trusted local services—all in one place.
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
                Every service provider in our network undergoes strict background checks and quality assessments.
              </p>
            </div>

            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-[20rem] flex flex-col justify-between">
              <h3 className="text-white text-2xl font-medium whitespace-pre-line">
                {"Instant\nBooking"}
              </h3>
              <p className="text-white/60 text-base">
                Schedule property maintenance and local services at your convenience with real-time availability.
              </p>
            </div>

            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-[20rem] flex flex-col justify-between">
              <h3 className="text-white text-2xl font-medium whitespace-pre-line">
                {"Secure\nPayments"}
              </h3>
              <p className="text-white/60 text-base">
                Pay safely through our platform. Funds are handled securely so you can book with total peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
