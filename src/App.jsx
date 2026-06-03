import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { 
  ArrowRight, Menu, X, Wrench, Zap, Hammer, PaintRoller, 
  Sparkles, Fan, Settings, Droplets, CheckCircle2, 
  ChevronLeft, Calendar, Clock, User, Phone, MapPin, MessageSquare, Briefcase
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
  const [bookingStep, setBookingStep] = useState('form'); // 'form' or 'success'
  
  // New States for "Become a Partner" Onboarding
  const [isPartnerMode, setIsPartnerMode] = useState(false);
  const [partnerStep, setPartnerStep] = useState('form'); // 'form' or 'success'

  // Form State Values (Booking Engine)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    timeSlot: 'Morning (9 AM - 12 PM)',
    notes: ''
  });

  // Form State Values (Partner Application)
  const [partnerData, setPartnerData] = useState({
    name: '',
    phone: '',
    trade: 'Electrical',
    experience: '1-3 Years',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnerInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerData(prev => ({ ...prev, [name]: value }));
  };

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

  /* =========================================================================
     VIEW MODE 1: PARTNER APPLICATION SCREEN
     ========================================================================= */
  if (isPartnerMode) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen text-black flex flex-col font-sans">
        {/* Simple Top Navigation */}
        <nav className="w-full max-w-[88rem] mx-auto px-6 py-5 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-30">
          <div onClick={handleBackToHome} className="flex items-center gap-3 cursor-pointer">
            <LogoIcon className="w-7 h-7 text-black" />
            <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
          </div>
          <button 
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to home
          </button>
        </nav>

        {/* Dedicated Partner Application Window */}
        <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
          {partnerStep === 'form' ? (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm">
              <div className="mb-8">
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Join the Ecosystem</span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-2">
                  Become a Haven Partner
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  Earn more with regular work, fast digital payouts, and professional recognition. Submit your profile below.
                </p>
              </div>

              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="text" required name="name" value={partnerData.name} onChange={handlePartnerInputChange}
                        placeholder="Your name" 
                        className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">WhatsApp / Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="tel" required name="phone" value={partnerData.phone} onChange={handlePartnerInputChange}
                        placeholder="Contact number" 
                        className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Primary Trade / Skill</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select 
                        name="trade" value={partnerData.trade} onChange={handlePartnerInputChange}
                        className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all appearance-none"
                      >
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>Carpentry</option>
                        <option>Painting</option>
                        <option>AC Repair</option>
                        <option>Appliance Maintenance</option>
                        <option>Cleaning Services</option>
                        <option>Other Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Years of Experience</label>
                    <div className="relative">
                      <Settings className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select 
                        name="experience" value={partnerData.experience} onChange={handlePartnerInputChange}
                        className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all appearance-none"
                      >
                        <option>Under 1 Year</option>
                        <option>1-3 Years</option>
                        <option>3-5 Years</option>
                        <option>5+ Years</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Current City / Preferred Operating Area</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" required name="location" value={partnerData.location} onChange={handlePartnerInputChange}
                      placeholder="e.g. Indiranagar, Bengaluru or South Delhi" 
                      className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-2xl font-medium text-base hover:bg-gray-800 transition-colors shadow-sm mt-4 flex items-center justify-center gap-2"
                >
                  Submit Application <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          ) : (
            /* Partner application success screen */
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-medium text-black tracking-tight mb-2">Application Received!</h2>
              <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
                Thank you, <span className="font-semibold text-black">{partnerData.name}</span>. Your details have been parsed inside our workforce management engine. A onboarding manager will reach out to <span className="font-semibold text-black">{partnerData.phone}</span> within 24-48 hours to complete verification.
              </p>

              <div className="w-full bg-[#F5F5F5] rounded-2xl p-6 text-left mb-8 text-sm space-y-2 max-w-md">
                <div className="flex justify-between"><span className="text-gray-500">Registered Trade:</span> <span className="font-medium">{partnerData.trade}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Experience Track:</span> <span className="font-medium">{partnerData.experience}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Operation Hub:</span> <span className="font-medium">{partnerData.location}</span></div>
              </div>

              <button 
                onClick={handleBackToHome}
                className="bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Return to Home Screen
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  /* =========================================================================
     VIEW MODE 2: CUSTOMER BOOKING ENGINE SCREEN (PROTECTED)
     ========================================================================= */
  if (selectedService) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen text-black flex flex-col font-sans">
        {/* Simple Top Navigation */}
        <nav className="w-full max-w-[88rem] mx-auto px-6 py-5 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-30">
          <div onClick={handleBackToHome} className="flex items-center gap-3 cursor-pointer">
            <LogoIcon className="w-7 h-7 text-black" />
            <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
          </div>
          <button 
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to home
          </button>
        </nav>

        {/* Dynamic Booking Content Window */}
        <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
          {bookingStep === 'form' ? (
            <>
              {/* IF SIGNED IN: Show the beautiful original form layout */}
              <SignedIn>
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm">
                  <div className="mb-8">
                    <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Booking Form</span>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-2">
                      Request {selectedService} Expert
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                      Fill in your details to connect with a verified professional near you.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            type="text" required name="name" value={formData.name} onChange={handleInputChange}
                            placeholder="John Doe" 
                            className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                            placeholder="Contact number" 
                            className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Service Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                        <textarea 
                          required rows="3" name="address" value={formData.address} onChange={handleInputChange}
                          placeholder="Street name, Building number, Apartment, Landmark..." 
                          className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all resize-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            type="date" required name="date" value={formData.date} onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Time Slot</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <select 
                            name="timeSlot" value={formData.timeSlot} onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all appearance-none"
                          >
                            <option>Morning (9 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 7 PM)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Job Description (Optional)</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                        <textarea 
                          rows="3" name="notes" value={formData.notes} onChange={handleInputChange}
                          placeholder="Briefly describe the repair or maintenance requirement..." 
                          className="w-full bg-[#F5F5F5] border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:bg-white focus:border-black transition-all resize-none"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-black text-white py-4 rounded-2xl font-medium text-base hover:bg-gray-800 transition-colors shadow-sm mt-4 flex items-center justify-center gap-2"
                    >
                      Confirm Appointment Request <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </SignedIn>

              {/* IF SIGNED OUT: Require login to view booking engine */}
              <SignedOut>
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-black/5 text-black flex items-center justify-center mb-6">
                    <User className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-medium text-black tracking-tight mb-2">Verification Required</h2>
                  <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
                    To maintain ecosystem trust, safety, and priority fulfillment, you must sign in or create an account before requesting a skilled expert.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm">
                    <SignInButton mode="modal">
                      <button className="w-full bg-black text-white text-sm font-medium px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                        Log In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="w-full bg-white text-black border border-black/15 text-sm font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                        Create Account
                      </button>
                    </SignUpButton>
                  </div>
                </div>
              </SignedOut>
            </>
          ) : (
            /* Success confirmation screen */
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-medium text-black tracking-tight mb-2">Request Submitted Successfully!</h2>
              <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
                Thank you, <span className="font-semibold text-black">{formData.name}</span>. Our verified {selectedService} professional has been dispatched inside your hyperlocal hub. We will connect with you at <span className="font-semibold text-black">{formData.phone}</span> shortly.
              </p>

              <div className="w-full bg-[#F5F5F5] rounded-2xl p-6 text-left mb-8 text-sm space-y-2 max-w-md">
                <div className="flex justify-between"><span className="text-gray-500">Service:</span> <span className="font-medium">{selectedService}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Date:</span> <span className="font-medium">{formData.date}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Scheduled Window:</span> <span className="font-medium">{formData.timeSlot}</span></div>
              </div>

              <button 
                onClick={handleBackToHome}
                className="bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Return to Home Screen
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  /* =========================================================================
     VIEW MODE 3: LANDING PAGE TRACK
     ========================================================================= */
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
            <div onClick={handleBackToHome} className="flex items-center gap-3 cursor-pointer">
              <LogoIcon className="w-7 h-7 text-black" />
              <span className="text-2xl font-medium tracking-tight text-black">Haven</span>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
              <a href="#services" className="hover:text-black transition-colors duration-200">Services</a>
              <button onClick={handlePartnerClick} className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">Become a Partner</button>
            </div>

            {/* Premium Auth & Status Header controls */}
            <div className="hidden md:flex items-center gap-5">
              <SignedIn>
                <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "w-9 h-9 border border-black/10 shadow-sm" } }} />
              </SignedIn>
              
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-base font-medium text-gray-700 hover:text-black transition-colors">
                    Log In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-black text-white text-base font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-sm">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-black p-2 flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-4 z-50 rounded-b-2xl">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 hover:text-black">Services</a>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); handlePartnerClick(); }} 
                className="text-left text-lg font-medium text-gray-800 hover:text-black border-t border-gray-100 pt-3"
              >
                Become a Partner
              </button>
              
              {/* Mobile Auth Integrations */}
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                <SignedIn>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                    <span className="text-sm font-medium text-gray-600">Your Account</span>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-gray-100 text-black text-base font-medium py-3 rounded-xl hover:bg-gray-200">
                      Log In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-black text-white text-base font-medium py-3 rounded-xl hover:bg-gray-800">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
              </div>
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
                Haven — India’s Trusted<br />Skilled-Service Ecosystem
              </h1>
              
              <p 
                className="text-black/80 text-base md:text-lg max-w-md mb-8 leading-relaxed font-medium"
                style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
              >
                Connecting households with trusted skilled professionals through technology, reliability, and hyperlocal services.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 group">
                  Explore Services
                  <div className="bg-white rounded-full p-2">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </a>
                <button 
                  onClick={handlePartnerClick}
                  className="bg-white/40 backdrop-blur-md text-black border border-black/15 text-base md:text-lg font-medium px-8 py-3 rounded-full hover:bg-white/60 transition-colors duration-200"
                >
                  Join as Partner
                </button>
              </div>

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
              From minor fixes to major renovations, access a comprehensive ecosystem of trusted, premium, and on-demand technical solutions.
            </p>
          </div>

          {/* Restored Complete Interactive Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  onClick={() => handleServiceClick(service.name)}
                  className="bg-white border border-black/5 rounded-3xl p-8 hover:border-black transition-all cursor-pointer group shadow-sm flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all">
                    <IconComponent className="w-5 h-5 text-black group-hover:text-white transition-all" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2 tracking-tight">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
