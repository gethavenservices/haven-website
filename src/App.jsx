import React from 'react';
import { 
  Home, Wrench, Zap, Hammer, Paintbrush, Wind, Droplets, 
  ShieldCheck, Clock, Phone, GraduationCap, Building2, 
  CheckCircle2, Search, Calendar, Star, ArrowRight, Instagram, Twitter
} from 'lucide-react';

// Custom Minimal House Logo
const LogoIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30">
      
      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-white/10 p-2 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
              <LogoIcon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="text-xl font-bold tracking-wide">HAVEN</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-cyan-400 transition-colors duration-200">Services</a>
            <a href="#why-haven" className="hover:text-cyan-400 transition-colors duration-200">Why Haven</a>
            <a href="#ecosystem" className="hover:text-cyan-400 transition-colors duration-200">Ecosystem</a>
            <a href="#partnerships" className="hover:text-cyan-400 transition-colors duration-200">Partnerships</a>
          </div>

          <button className="bg-cyan-500 text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] text-center">
        {/* Subtle glowing background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Coming Soon to Your Neighborhood</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            India’s Trusted Hyperlocal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skilled-Service Ecosystem
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Connecting households with trusted skilled professionals through technology, reliability, and hyperlocal services. Welcome to the future of home maintenance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <button className="w-full sm:w-auto bg-cyan-500 text-black text-base font-semibold px-8 py-3.5 rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              Join Waitlist
            </button>
            <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 text-base font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Services at Your Doorstep</h2>
            <p className="text-gray-400 text-lg">One app for every essential home repair and maintenance need.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Plumbing", icon: <Droplets className="w-6 h-6" /> },
              { title: "Electrical", icon: <Zap className="w-6 h-6" /> },
              { title: "Carpentry", icon: <Hammer className="w-6 h-6" /> },
              { title: "Painting", icon: <Paintbrush className="w-6 h-6" /> },
              { title: "Cleaning", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "AC Repair", icon: <Wind className="w-6 h-6" /> },
              { title: "Appliance Care", icon: <Wrench className="w-6 h-6" /> },
              { title: "RO Service", icon: <ShieldCheck className="w-6 h-6" /> },
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Haven Section */}
      <section id="why-haven" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Designed for <br/>Trust & Speed.
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We are redefining hyperlocal services by building an ecosystem where reliability meets modern technology.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Verified Professionals", desc: "Rigorous background checks and skill verification." },
                  { title: "Transparent Pricing", desc: "No hidden costs, upfront estimates for all jobs." },
                  { title: "Hyperlocal Workforce", desc: "Professionals routed from your immediate vicinity." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-cyan-500/20 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Glassmorphism Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col justify-between h-48">
                <Star className="w-8 h-8 text-yellow-400" />
                <div>
                  <h4 className="font-semibold text-lg">Ratings & Reviews</h4>
                  <p className="text-xs text-gray-400 mt-1">Community driven trust</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/40 to-black backdrop-blur-md p-6 rounded-3xl border border-cyan-500/30 flex flex-col justify-between h-48 translate-y-8">
                <Clock className="w-8 h-8 text-cyan-400" />
                <div>
                  <h4 className="font-semibold text-lg">Fast Response</h4>
                  <p className="text-xs text-cyan-100/60 mt-1">Under 60 mins ETA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Emergency & Subscription Sections */}
      <section id="ecosystem" className="py-24 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Emergency Services */}
          <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Phone className="w-64 h-64 text-red-500" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                24/7 Rapid Support
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Home Services</h2>
              <p className="text-gray-400 text-lg mb-8">
                Rapid hyperlocal support during critical situations. Whether it's a pipe leakage at 2 AM or a sudden electrical blackout, our emergency task force is ready.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2.5 rounded-full transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> Book Emergency Support
              </button>
            </div>
          </div>

          {/* Subscriptions */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscription Ecosystem</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Put your home maintenance on autopilot with our curated, scheduled service plans.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Weekly Cleaning", price: "Flexible Plans", desc: "Consistent, professional deep cleaning." },
                { title: "Quarterly Maintenance", price: "RO & Appliances", desc: "Filter changes, tuning, and checkups." },
                { title: "Annual Protection", price: "AC & Electrical", desc: "Pre-summer servicing and safety audits." }
              ].map((plan, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-all">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-cyan-400 font-medium mb-4">{plan.price}</div>
                  <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-xl text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Empowerment & Partnerships */}
      <section id="partnerships" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Workforce Empowerment */}
          <div>
            <div className="bg-cyan-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Workforce Empowerment</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are actively building an affordable training ecosystem by collaborating with ITIs, vocational centers, and skill training institutes.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Certified workforce development</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Structuring career paths for gig workers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Reducing overseas dependency</li>
            </ul>
          </div>

          {/* Brand Partnerships */}
          <div>
            <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Brand Partnership Vision</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating a premium appliance support ecosystem through future regional servicing collaborations with global leaders.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Samsung', 'LG', 'Whirlpool', 'IFB'].map((brand, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                  {brand}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. How it Works */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How Haven Works</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
            
            {[
              { step: 1, icon: <Search />, title: "Select Service" },
              { step: 2, icon: <Home />, title: "Find Nearby Pros" },
              { step: 3, icon: <Star />, title: "Compare & Book" },
              { step: 4, icon: <Clock />, title: "Service Completion" },
              { step: 5, icon: <CheckCircle2 />, title: "Feedback & Subs" },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black border border-cyan-500/50 text-cyan-400 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {item.icon}
                </div>
                <div className="text-xs text-cyan-500 font-bold mb-1">STEP 0{item.step}</div>
                <h3 className="text-sm font-medium text-gray-200">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Future Vision Hero */}
      <section className="py-32 px-6 text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Future is Smart & Hyperlocal</h2>
          <p className="text-gray-400 text-lg mb-10">
            We are building AI-based workforce matching, a smart home maintenance ecosystem, and the infrastructure for rapid Pan-India expansion to modernize the blue-collar workforce.
          </p>
          <button className="bg-white text-black text-base font-semibold px-8 py-3.5 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Join the Revolution
          </button>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LogoIcon className="w-5 h-5 text-white" />
              <span className="text-lg font-bold tracking-wide">HAVEN</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-6">
              India's premium tech-enabled hyperlocal skilled-service ecosystem.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/gofor.haven" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/goforhaven" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:text-right">
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <a href="mailto:gethavenservices@gmail.com" className="text-gray-500 hover:text-cyan-400 text-sm mb-2 transition-colors">gethavenservices@gmail.com</a>
            <a href="https://gethaven.in" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">gethaven.in</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 Haven. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
