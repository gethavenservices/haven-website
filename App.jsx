import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, Zap, Hammer, Paintbrush, ShieldCheck, 
  Clock, Star, MapPin, HardHat, Rocket, 
  ChevronRight, Menu, X, CheckCircle2, 
  AirVent, Droplets, Laptop, Building2,
  AlertTriangle, GraduationCap, Handshake
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-white font-bold tracking-tighter text-xl">HAVEN</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#subscriptions" className="hover:text-cyan-400 transition-colors">Maintenance</a>
          <a href="#vision" className="hover:text-cyan-400 transition-colors">Our Vision</a>
          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-all">
            Join Waitlist
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" className="text-lg text-white">Services</a>
            <a href="#subscriptions" className="text-lg text-white">Maintenance</a>
            <button className="bg-cyan-500 text-white p-4 rounded-xl font-bold">Join Waitlist</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ title, icon: Icon, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
      <Icon className="text-cyan-400 group-hover:text-black w-6 h-6" />
    </div>
    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const FeatureItem = ({ title, desc, icon: Icon }) => (
  <div className="flex gap-4 p-4">
    <div className="shrink-0">
      <Icon className="text-cyan-400 w-6 h-6" />
    </div>
    <div>
      <h4 className="text-white font-medium mb-1">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  </div>
);

// --- Main Page ---

export default function HavenLanding() {
  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              Hyperlocal • Reliable • Tech-Enabled
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-8">
              Haven — India’s Trusted <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Skilled-Service Ecosystem
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Connecting households with verified professionals through a futuristic, 
              subscription-driven maintenance infrastructure.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
                Join Waitlist <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">On-Demand Expertise</h2>
          <p className="text-slate-400">Everything your home needs, one click away.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={Zap} title="Electrical" desc="Verified electricians for installations, wiring, and safety audits." />
          <ServiceCard icon={Droplets} title="Plumbing" desc="Leak detection, pipe repairs, and high-end fixture installs." />
          <ServiceCard icon={Hammer} title="Carpentry" desc="Custom furniture repair and structural woodwork expertise." />
          <ServiceCard icon={Paintbrush} title="Painting" desc="Interior, exterior, and specialized textured wall finishes." />
          <ServiceCard icon={Building2} title="Cleaning" desc="Deep home sanitization and commercial janitorial services." />
          <ServiceCard icon={AirVent} title="AC & HVAC" desc="Precision servicing for split, window, and central cooling." />
          <ServiceCard icon={Laptop} title="Appliance Repair" desc="Smart home, RO, and washing machine maintenance." />
          <ServiceCard icon={ShieldCheck} title="Safety Audit" desc="Comprehensive structural and fire safety home checks." />
        </div>
      </section>

      {/* Why Haven - Glassmorphism */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Why trust Haven?</h2>
            <div className="grid grid-cols-1 gap-4">
              <FeatureItem icon={ShieldCheck} title="Verified Professionals" desc="Rigorous 5-step background checks and skill testing." />
              <FeatureItem icon={Clock} title="Hyperlocal Quick Response" desc="Service reaches you in under 60 minutes for emergencies." />
              <FeatureItem icon={Star} title="Transparent Pricing" desc="No hidden costs. Upfront quotes via our smart pricing engine." />
              <FeatureItem icon={MapPin} title="Local Empowerment" desc="Upskilling local talent to create a sustainable workforce." />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/20 to-transparent border border-white/10 p-8 flex items-center justify-center">
               <div className="text-center">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-48 h-48 rounded-full border-4 border-cyan-500/30 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                      <ShieldCheck className="text-black w-16 h-16" />
                    </div>
                  </motion.div>
                  <p className="mt-8 font-mono text-cyan-400">ENCRYPTED TRUST PROTOCOL v2.0</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id="subscriptions" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Subscription Ecosystem</h2>
          <p className="text-slate-400">Proactive maintenance for a worry-free life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Lite", price: "₹999/yr", features: ["2 Electrical Checks", "1 Plumbing Check", "Priority Booking"] },
            { name: "Premium", price: "₹2499/yr", features: ["Monthly Cleaning", "AC Servicing", "Zero Visiting Fees", "Emergency Support"] },
            { name: "Elite", price: "Custom", features: ["Dedicated Manager", "Appliance Warranty", "Unlimited Repairs", "Brand Partnerships"] }
          ].map((plan, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${i === 1 ? 'border-cyan-500 bg-cyan-500/5' : 'border-white/10'} relative overflow-hidden`}>
              {i === 1 && <span className="absolute top-4 right-4 bg-cyan-500 text-black text-[10px] font-bold px-2 py-1 rounded">MOST POPULAR</span>}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-extrabold text-white mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-cyan-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all">Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-red-500/10 border border-red-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-6 items-center">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center animate-pulse">
              <AlertTriangle className="text-white w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Emergency Home Services</h2>
              <p className="text-red-200/70">Pipe leakage, electrical failure, or AC malfunction? We respond in under 60 mins.</p>
            </div>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold transition-all">
            Call Rapid Support
          </button>
        </div>
      </section>

      {/* Skill & Vision Section */}
      <section id="vision" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
          <GraduationCap className="text-cyan-400 w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Workforce Empowerment</h3>
          <p className="text-slate-400 mb-6">We partner with ITIs and vocational centers to provide certified training and career paths for local youth, reducing dependency on unorganized labor.</p>
          <div className="flex gap-4 opacity-50 italic text-sm">
            <span>#SkillIndia</span>
            <span>#VocationalGrowth</span>
          </div>
        </div>
        <div className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
          <Handshake className="text-cyan-400 w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Brand Partnership Vision</h3>
          <p className="text-slate-400 mb-6">Future integrations with Samsung, LG, and Whirlpool for authorized appliance servicing and parts ecosystem across India.</p>
          <div className="flex gap-6 grayscale opacity-30">
            {/* Logos Placeholder */}
            <div className="font-bold">SAMSUNG</div>
            <div className="font-bold">LG</div>
            <div className="font-bold">IFB</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                   <div className="w-3 h-3 border-2 border-black rotate-45" />
                </div>
                <span className="text-white font-bold tracking-tighter text-lg">HAVEN</span>
              </div>
              <p className="text-slate-500 max-w-xs mb-6">
                Building the future of hyperlocal services through trust, technology, and human empowerment.
              </p>
              <div className="flex gap-4">
                <span className="text-xs text-slate-600 hover:text-white cursor-pointer transition-colors">@gofor.haven</span>
                <span className="text-xs text-slate-600 hover:text-white cursor-pointer transition-colors">@goforhaven</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Join as Partner</li>
                <li className="hover:text-white cursor-pointer">Impact</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>gethavenservices@gmail.com</li>
                <li>gethaven.in</li>
                <li className="text-cyan-500 font-medium">Join the Waitlist</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-slate-600 uppercase tracking-widest">
            <p>© 2026 Haven Hyperlocal Ecosystem. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
