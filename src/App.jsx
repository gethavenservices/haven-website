import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Menu, X, Wrench, Zap, Hammer, PaintRoller, 
  Sparkles, Fan, Settings, Droplets, CheckCircle2, 
  ChevronLeft, Shield
} from 'lucide-react';

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
  { name: 'Cleaning & Janitorial', icon: Sparkles, desc: 'Deep cleaning and janitorial support.' },
  { name: 'AC Repair', icon: Fan, desc: 'Servicing, gas refilling, and emergency fixes.' },
  { name: 'Appliance Maintenance', icon: Settings, desc: 'Washing machines, microwaves, and more.' },
  { name: 'RO Maintenance', icon: Wrench, desc: 'Filter changes and quarterly servicing.' },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingStep, setBookingStep] = useState('form'); 
  const [isPartnerMode, setIsPartnerMode] = useState(false);
  const [partnerStep, setPartnerStep] = useState('form'); 
  
  // Ref to target the video element directly
  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', date: '', timeSlot: 'Morning (9 AM - 12 PM)', notes: ''
  });

  const [partnerData, setPartnerData] = useState({
    name: '', phone: '', trade: 'Electrical', experience: '1-3 Years', location: ''
  });

  // Force video playback on mount to bypass strict browser autoplay policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented by the browser:", error);
      });
    }
  }, []);

  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handlePartnerInputChange = (e) => setPartnerData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleServiceClick = (serviceName) => {
    setIsPartnerMode(false);
    setSelectedService(serviceName);
    setBookingStep('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePartnerClick = () => {
    setSelectedService(null);
    setIsPartnerMode(true);
    setPartnerStep('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    setIsPartnerMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBookingStep('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setPartnerStep('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isPartnerMode) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen text-black flex flex-col font-sans">
        <nav className="w-full max-w-[88rem] mx-auto px-6 py-5 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-30">
          <div onClick={handleBackToHome} className="flex items-center gap-3 cursor-pointer">
            <LogoIcon className="w-7 h-7 text-black" />
            <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
          </div>
          <button onClick={handleBackToHome} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to home
          </button>
        </nav>
        <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
          {partnerStep === 'form' ? (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm">
              <div className="mb-8">
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Join the Ecosystem</span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-2">Become a Haven Partner</h2>
                <p className="text-gray-500 text-sm mt-2">Earn more with regular work, fast digital payouts, and professional recognition.</p>
              </div>
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" name="name" value={partnerData.name} onChange={handlePartnerInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={partnerData.phone} onChange={handlePartnerInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Trade</label>
                    <select name="trade" value={partnerData.trade} onChange={handlePartnerInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black">
                      <option>Electrical</option>
                      <option>Plumbing</option>
                      <option>Carpentry</option>
                      <option>AC Repair & Appliance</option>
                      <option>Cleaning</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                    <select name="experience" value={partnerData.experience} onChange={handlePartnerInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black">
                      <option>0-1 Years</option>
                      <option>1-3 Years</option>
                      <option>3-5 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service City / Area</label>
                    <input type="text" name="location" value={partnerData.location} onChange={handlePartnerInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-medium text-base hover:bg-gray-800 transition-colors shadow-sm mt-4 flex items-center justify-center gap-2">
                  Submit Application <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-medium text-black tracking-tight mb-2">Application Received!</h2>
              <button onClick={handleBackToHome} className="bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 mt-8">Return to Home Screen</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (selectedService) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen text-black flex flex-col font-sans">
        <nav className="w-full max-w-[88rem] mx-auto px-6 py-5 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-30">
          <div onClick={handleBackToHome} className="flex items-center gap-3 cursor-pointer">
            <LogoIcon className="w-7 h-7 text-black" />
            <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
          </div>
          <button onClick={handleBackToHome} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to home
          </button>
        </nav>
        <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
          {bookingStep === 'form' ? (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm">
              <div className="mb-8">
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Booking Form</span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-2">Request {selectedService} Expert</h2>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                    <select name="timeSlot" value={formData.timeSlot} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black">
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Address</label>
                    <textarea name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" rows="2" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                    <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" rows="2" placeholder="Describe the issue you're facing..." />
                  </div>
                </div>
                <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-medium text-base hover:bg-gray-800 transition-colors shadow-sm mt-4 flex items-center justify-center gap-2">
                  Confirm Appointment Request <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-medium text-black tracking-tight mb-2">Request Submitted Successfully!</h2>
              <button onClick={handleBackToHome} className="bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 mt-8">Return to Home Screen</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col bg-[#F5F5F5] min-h-screen">
      
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        .marquee-track { display: flex; width: max-content; animation: marquee 22s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .backers-track { display: flex; width: max-content; animation: backers-marquee 30s linear infinite; }
        @keyframes backers-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
      `}} />

      {/* Navbar & Hero Section */}
      <div className="min-h-screen lg:h-screen flex flex-col overflow-hidden w-full max-w-[88rem] mx-auto relative mb-12 lg:mb-0">
        
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="flex items-center justify-between">
            <div onClick={handleBackToHome} className="flex items-center gap-3 cursor-pointer">
              <LogoIcon className="w-7 h-7 text-black" />
              <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-base text-gray-800 font-medium">
              <a href="#services" className="hover:text-black transition-colors duration-200">Services</a>
              <a href="#why-haven" className="hover:text-black transition-colors duration-200">Why Haven</a>
              <a href="#ecosystem" className="hover:text-black transition-colors duration-200">Ecosystem</a>
              <a href="#partnerships" className="hover:text-black transition-colors duration-200">Partnerships</a>
              <button onClick={handlePartnerClick} className="text-gray-800 hover:text-black transition-colors duration-200 font-medium">Become a Partner</button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => handleServiceClick('General Maintenance')}
                className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Join Waitlist
              </button>
            </div>

            <button 
              className="md:hidden text-black p-2 bg-white/50 rounded-lg backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Hero Area */}
        <section id="home" className="flex-1 px-6 pt-28 lg:pt-20 pb-6 flex items-center w-full">
          <div className="relative w-full h-full min-h-[580px] lg:h-[calc(100vh-96px)] rounded-3xl flex flex-col justify-center items-start shadow-sm overflow-hidden bg-[#EAE8F0] border border-black/5">
            
          {/* 
              THE NUCLEAR FIX: Bypassing React's DOM rendering entirely.
              This injects raw HTML to guarantee the browser registers 'muted', 
              'autoplay', and 'playsinline' simultaneously, bypassing strict autoplay blocks. 
            */}
            <div 
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              dangerouslySetInnerHTML={{ __html: `
                <video 
                  autoplay 
                  loop 
                  muted 
                  playsinline
                  poster="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                  style="width: 100%; height: 100%; object-fit: cover; object-position: center;"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-electrician-working-on-a-switchboard-42283-large.mp4" type="video/mp4" />
                </video>
              `}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5]/95 md:via-[#F5F5F5]/70 to-transparent z-10 pointer-events-none"></div>

            <div className="relative z-20 flex flex-col items-start max-w-xl p-8 md:p-12 lg:ml-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-900 font-semibold text-xs tracking-wide mb-8 shadow-sm">
                Coming soon to your neighbourhood
              </span>
              
              <h1 
                className="text-black text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.12] mb-6 text-left"
                style={{ letterSpacing: '-0.04em' }}
              >
                Haven — India’s<br />Trusted<br />Skilled-Service<br />Ecosystem
              </h1>
              
              <p className="text-gray-800 text-sm md:text-base mb-8 leading-relaxed text-left max-w-md font-medium">
                Connecting households with trusted skilled professionals through technology, reliability, and hyperlocal services.
              </p>
              
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 bg-black text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-md group">
                  Explore Services
                  <div className="bg-white rounded-full p-2">
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </div>
                </a>
                <button 
                  onClick={handlePartnerClick}
                  className="w-full sm:w-auto bg-white/90 backdrop-blur-md text-black border border-gray-200 text-sm font-medium px-7 py-3 rounded-full hover:bg-white transition-colors duration-200 shadow-sm"
                >
                  Join as Partner
                </button>
              </div>

              <div className="mt-12 lg:mt-16 w-full overflow-hidden opacity-[0.8]">
                <div className="marquee-track">
                  {[...serviceMarquee, ...serviceMarquee].map((brand, idx) => (
                    <span key={idx} className="mx-6 shrink-0 text-gray-900 whitespace-nowrap" style={brand.style}>
                      {brand.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Services Grid */}
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
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  onClick={() => handleServiceClick(service.name)}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer border border-black/5 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2">{service.name}</h3>
                  <p className="text-black/60 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-xs font-semibold text-black group-hover:text-gray-500 inline-flex items-center gap-1 transition-colors">
                    Book Service <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Haven */}
      <section id="why-haven" className="bg-[#F5F5F5] px-6 py-24 w-full border-t border-black/5">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
                Meet Haven.
              </h2>
              <button 
                onClick={() => handleServiceClick('General Maintenance')}
                className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group"
              >
                Book Trusted Professionals
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              className="lg:col-span-2 rounded-2xl p-7 min-h-[20rem] flex flex-col justify-between"
              style={{
                backgroundImage: 'url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="text-black text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                Verified Professionals
              </h3>
              <p className="text-black/80 font-medium text-base max-w-xs">
                Every service provider undergoes rigorous background checks, transparent rating & reviews systems, and skill verification.
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
                Rapid hyperlocal support. Because when a pipe bursts or the power goes out, our quick-response operations ensure you don't wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="bg-[#F5F5F5] px-6 py-24 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          <div className="md:pr-12 flex flex-col justify-center py-4">
            <span className="block text-black/60 text-sm mb-2 font-semibold tracking-wider uppercase">Subscription Ecosystem</span>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none mb-6" style={{ letterSpacing: '-0.04em' }}>
              Smart Home Care
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm mb-8">
              Haven powers a wide range of subscription-based maintenance modes for households wanting safe and reliable maintenance infrastructure. 
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-black/80 font-medium">
                <CheckCircle2 className="w-5 h-5 text-black" /> Weekly cleaning plans
              </li>
              <li className="flex items-center gap-3 text-black/80 font-medium">
                <CheckCircle2 className="w-5 h-5 text-black" /> Monthly maintenance subscriptions
              </li>
              <li className="flex items-center gap-3 text-black/80 font-medium">
                <CheckCircle2 className="w-5 h-5 text-black" /> Annual AC & Quarterly RO maintenance care
              </li>
            </ul>
          </div>

          <div className="relative rounded-3xl bg-black text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-lg min-h-[440px]">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #FFF 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold tracking-widest uppercase mb-6 bg-rose-500/10 px-3 py-1 rounded-full w-max border border-rose-500/20">
                <Shield className="w-3 h-3 text-rose-500" /> Hyperlocal Priority Desk
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-medium leading-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
                Emergency Services
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                Critical systems down? Get automated routing during home emergencies. Our custom hub locks in quick-response technicians for pipe ruptures, hazardous wiring shorts, or total cooling unit failure.
              </p>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-4 my-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block">Avg Response Speed</span>
                <span className="text-xl font-bold tracking-tight text-white mt-0.5 block">18.4 Minutes</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block">Hub Dispatch Status</span>
                <span className="text-xl font-bold tracking-tight text-emerald-400 mt-0.5 block flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Operational
                </span>
              </div>
            </div>
            
            <div className="relative z-10 pt-4">
              <button 
                onClick={() => handleServiceClick('Emergency Support')}
                className="inline-flex items-center gap-3 text-black font-semibold group bg-white px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto justify-center sm:justify-start"
              >
                Request Emergency Help
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="bg-[#F5F5F5] px-6 py-24 w-full border-t border-black/5">
        <div className="max-w-[88rem] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              Workforce Empowerment & Brand Vision
            </h2>
            <p className="text-black/60 text-lg">
              We focus heavily on skill development, certified career development paths, and regional servicing partnerships with global appliance giants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
            <div className="md:col-span-1 text-black/80 font-medium text-lg leading-relaxed whitespace-pre-line border-b md:border-b-0 md:border-r border-black/10 pb-6 md:pb-0 md:pr-6">
              {"Future partnerships with\nappliance brands & ITIs\nto reduce dependency."}
            </div>
            <div className="md:col-span-3 overflow-hidden">
              <div className="backers-track">
                {[...backerBrands, ...backerBrands].map((brand, idx) => (
                  <span key={idx} className="mx-10 shrink-0 text-black/50 whitespace-nowrap" style={brand.style}>
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-black text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">Grow Your Earnings as a Haven Partner</h3>
              <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
                Are you an experienced electrician, plumber, technician, or painter? Join India's most trusted skilled-service ecosystem. Get regular hyperlocal bookings, transparent digital payouts, and professional recognition.
              </p>
            </div>
            <button 
              onClick={handlePartnerClick}
              className="shrink-0 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base shadow-sm"
            >
              Apply as Partner <ArrowRight className="w-4 h-4" />
            </button>
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
            <p className="mt-4"><button onClick={handlePartnerClick} className="text-white underline hover:text-gray-300 font-medium">Partner Registration Portal</button></p>
            <p className="mt-4 text-white/40">© 2026 Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
