/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, RefObject, ChangeEvent } from "react";
import { 
  Menu, 
  X, 
  Smartphone, 
  Monitor, 
  Moon, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Sparkles,
  Database,
  Briefcase,
  ExternalLink,
  Code,
  Fingerprint,
  CreditCard,
  FileText,
  Image,
  Printer,
  FileSpreadsheet,
  Layers,
  Globe,
  Github,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Beautiful, high-fidelity SVG icon matching the new Suraj Tech Hub logo exactly
function SurajLogoIcon({ className = "w-14 h-14 md:w-16 md:h-16" }: { className?: string }) {
  return (
    <img 
      src="https://i.imgur.com/JSFnw2n.png" 
      alt="Suraj Tech Hub Logo" 
      className={`${className} object-contain transition-all duration-300 shrink-0 filter drop-shadow-[0_4px_12px_rgba(255,192,0,0.15)]`}
      referrerPolicy="no-referrer"
      loading="eager"
      fetchPriority="high"
      width={64}
      height={64}
      style={{ imageRendering: "high-quality" }}
    />
  );
}

// Service structure matching the "Our Expertise" section
interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectCategory, setProjectCategory] = useState("All");
  const [activeCscService, setActiveCscService] = useState<string | null>(null);
  
  // Real projects list (using direct real imagery)
  const projectsList = [
    {
      id: "foodiex",
      category: "Web",
      label: "Web Application & Delivery Portal",
      title: "Foodiex Delivery Storefront",
      description: "An outstanding food marketplace and secure delivery app with real-time driver tracking, responsive cart updates, and robust online transactions.",
      imgUrl: "https://i.imgur.com/YR8FLNUl.png",
      tags: ["React (Vite)", "TailwindCSS", "Node.js API", "Stripe Checkout"],
      placeholder: "Foodiex Checkout v2.1",
      domain: "foodiex-store.com",
      ctaText: "Hi Suraj Tech Hub, I am very interested in building a project similar to the 'Foodiex Delivery Storefront' for my business. Let's schedule a call to discuss."
    },
    {
      id: "flipzox",
      category: "Mobile",
      label: "Mobile Application & Retail Store",
      title: "Flipzox Sneaker Store",
      description: "A beautiful, native footwear catalog matching sensor metrics with dynamic, responsive swipe UI and smart checkout widgets.",
      imgUrl: "https://i.imgur.com/n7jUTpJl.png",
      tags: ["React Native", "Expo Core", "SQLite Store", "Core NFC Support"],
      placeholder: "Flipzox App",
      rating: "⭐ 4.9",
      domain: "flipzox-app",
      ctaText: "Hi Suraj Tech Hub, I would love to build an elegant native mobile application similar to the 'Flipzox Sneaker Store'. Please send more details on mobile services."
    },
    {
      id: "suraj-tech",
      category: "API",
      label: "Corporate Identity Showcase",
      title: "Suraj Tech Agency Portfolio",
      description: "The modern, high-contrast, fully responsive platform engineered to represent Suraj Tech Hub's brand identity, pricing indexes, and active digital support.",
      imgUrl: "https://i.imgur.com/GOyKVQNl.png",
      tags: ["React (Vite)", "TailwindCSS v4", "Lucide React", "Motion Design"],
      placeholder: "Suraj Tech Hub v3.0",
      domain: "suraj-tech-hub.com",
      ctaText: "Hi Suraj Tech Hub, I want to develop a custom showcase website or corporate portfolio for my brand inspired by the 'Suraj Tech Agency Portfolio'. Let's start the dialogue."
    }
  ];
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false
  });

  // Scroll target refs
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const onlineServicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: RefObject<HTMLDivElement | null>) => {
    setMobileMenuOpen(false);
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Change form submission handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "name" || name === "email") {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
    if (name === "service" && value !== "Online CSC Services") {
      setActiveCscService(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const errors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "" || !formData.email.includes("@")
    };
    
    setFormErrors(errors);
    
    if (!errors.name && !errors.email) {
      setIsSubmitting(true);
      
      try {
        // Submit using formsubmit.co AJAX API to send actual email to ksurajyadav93@gmail.com
        const response = await fetch("https://formsubmit.co/ajax/ksurajyadav93@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            _subject: `New Enquiry from Suraj Tech Hub (${formData.service})`,
            _honey: ""
          })
        });
        
        await response.json();
      } catch (err) {
        console.error("FormSubmit email delivery failed, fell back to local storage:", err);
      } finally {
        setIsSubmitting(false);
        setFormSubmitted(true);
        
        // Store in local storage for dynamic record tracking/fallback
        const savedEnquiries = JSON.parse(localStorage.getItem("suraj_tech_enquiries") || "[]");
        savedEnquiries.push({
          ...formData,
          date: new Date().toISOString()
        });
        localStorage.setItem("suraj_tech_enquiries", JSON.stringify(savedEnquiries));
      }
    }
  };

  // Preset services list based on "Our Expertise" screenshot
  const servicesList: Service[] = [
    {
      id: "mobile",
      title: "Mobile App Development",
      description: "Our flagship service. We build native iOS and Android applications that are fast, secure, and engaging. From concept to App Store launch, we handle the entire lifecycle.",
      icon: Smartphone,
      color: "border-blue-500 hover:border-blue-600"
    },
    {
      id: "web",
      title: "Web Applications",
      description: "Scalable web platforms designed to perform across all devices. We use modern frameworks to create responsive, progressive web apps (PWAs).",
      icon: Monitor,
      color: "border-yellow-400 hover:border-yellow-500 md:border-b-4"
    },
    {
      id: "backend",
      title: "Backend & API Integration",
      description: "The backbone of your software. We develop secure APIs, handle database management, and ensure your systems communicate flawlessly.",
      icon: Moon, // Custom night moon icon matching screenshot
      color: "border-slate-200 hover:border-slate-300"
    }
  ];

  // Global Social Media Links configuration
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Surajkyadav01",
      handle: "@Surajkyadav01",
      icon: Github,
      color: "hover:bg-slate-900 hover:text-white hover:border-slate-800",
      textColor: "text-slate-200",
      accentColor: "#333"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sunil-kumar-yadav-125ab6353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      handle: "@sunil-kumar-yadav",
      icon: Linkedin,
      color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]",
      textColor: "text-blue-400",
      accentColor: "#0077b5"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/its_.surajx01?igsh=eG16NHNmYzcyOXhq",
      handle: "@its_.surajx01",
      icon: Instagram,
      color: "hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c]",
      textColor: "text-pink-500",
      accentColor: "#e1306c"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@techinfodaily_in?si=wo0k4zvVrRFPDkgU",
      handle: "@techinfodaily_in",
      icon: Youtube,
      color: "hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000]",
      textColor: "text-red-500",
      accentColor: "#ff0000"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/916393869405",
      handle: "+91 6393869405",
      icon: ({ className, size }: { className?: string; size?: number }) => (
        <svg 
          className={className} 
          width={size || 18} 
          height={size || 18} 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "hover:bg-[#25d366] hover:text-white hover:border-[#25d366]",
      textColor: "text-emerald-500",
      accentColor: "#25d366"
    }
  ];

  // Quick select dynamic workflow to form
  const handleStartProject = () => {
    setFormData(prev => ({ ...prev, service: "Web Development" }));
    scrollToSection(contactRef);
  };

  const handleExploreServices = () => {
    scrollToSection(servicesRef);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-[#0052fe] text-white border-b border-blue-600/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 md:py-4 flex items-center justify-between">
          
          {/* Logo container matching exact design of SURAJ logo */}
          <div 
            className="flex items-center gap-3 select-none cursor-pointer group"
            onClick={() => scrollToSection(homeRef)}
            id="app-logo-container"
          >
            <div className="relative">
              <SurajLogoIcon className="w-14 h-14 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#0052fe] border-2 border-white flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
            </div>
            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-black tracking-tight text-white font-display">SURA</span>
                <span className="relative text-xl md:text-2xl font-black tracking-tight text-white font-display inline-block pr-[2px]">
                  J
                  <span className="absolute -top-[1px] md:-top-[1.5px] right-[0.5px] md:right-[1px] w-[8px] h-[8px] md:w-[9px] md:h-[9px] rounded-full bg-[#FFC000] shadow-sm shadow-yellow-500/50 animate-pulse"></span>
                </span>
              </div>
              <span className="text-[8px] md:text-[9px] font-black tracking-[0.35em] text-yellow-300 uppercase mt-[-2px]">TECH HUB</span>
            </div>
          </div>

          {/* Desktop Navigation Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-semibold" id="desktop-nav">
            <button 
              onClick={() => scrollToSection(homeRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
              id="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
              id="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(servicesRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
              id="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection(projectsRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
              id="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection(onlineServicesRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
              id="nav-online-services"
            >
              Online Services
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="bg-[#FFC000] text-slate-900 border-none px-6 py-2.5 rounded-md font-bold hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-md"
              id="nav-contact"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile hamburger menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none cursor-pointer hover:bg-blue-700/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#0051fde2] border-t border-blue-500/30 overflow-hidden"
              id="mobile-nav-panel"
            >
              <div className="px-4 py-4 space-y-3 flex flex-col font-medium">
                <button
                  onClick={() => scrollToSection(homeRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-home"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-about"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-services"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection(projectsRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-projects"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection(onlineServicesRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-online"
                >
                  Online Services
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-center py-2 px-3 bg-[#FFC000] text-slate-900 rounded-lg font-bold hover:bg-yellow-400 transition-all shadow-md mt-2"
                  id="mobile-nav-contact"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION - Off-white styled with generous negative space */}
      <section 
        ref={homeRef} 
        className="relative bg-gradient-to-b from-[#0052fe]/8 via-slate-50 to-white min-h-[85vh] flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden"
        id="hero-section"
      >
        {/* Advanced tech grid overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#0052fe05_1px,transparent_1px),linear-gradient(to_bottom,#0052fe05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"
          id="hero-grid-overlay"
        ></div>

        {/* Brand-aligned interactive glowing soft light orbs - performance optimized for mobile PageSpeed */}
        <div className="absolute top-[-10%] left-[-10%] w-[280px] md:w-[500px] h-[280px] md:h-[500px] rounded-full bg-blue-400/15 blur-[60px] md:blur-[120px] -z-10 md:animate-[pulse_7s_ease-in-out_infinite]" id="hero-glow-1"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#FFC000]/12 blur-[50px] md:blur-[110px] -z-10 md:animate-[pulse_9s_ease-in-out_infinite]" id="hero-glow-2"></div>
        <div className="absolute top-[25%] left-[25%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-indigo-300/12 blur-[40px] md:blur-[100px] -z-10 md:animate-[pulse_11s_ease-in-out_infinite]" id="hero-glow-3"></div>

        {/* Floating tech signature cards in side margins (large screens only to keep layout pristine) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.85, x: 0, y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="hidden xl:flex absolute left-8 lg:left-14 top-[28%] bg-white/70 backdrop-blur-md border border-slate-200/50 p-4 rounded-2xl shadow-xl shadow-blue-500/5 items-center gap-3 max-w-[200px]"
          id="hero-floating-card-1"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052fe] font-bold">
            <Code size={18} />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[9px] font-black tracking-widest font-mono leading-none text-slate-400">DEVELOPMENT</p>
            <p className="text-xs font-bold text-slate-800 mt-1 truncate">Clean & Fast Apps</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.85, x: 0, y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden xl:flex absolute right-8 lg:right-14 top-[35%] bg-white/70 backdrop-blur-md border border-yellow-500/20 p-4 rounded-2xl shadow-xl shadow-yellow-500/5 items-center gap-3 max-w-[200px]"
          id="hero-floating-card-2"
        >
          <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-[#FFC000] font-bold">
            <Layers size={18} />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[9px] font-black tracking-widest font-mono leading-none text-slate-400">SERVICES</p>
            <p className="text-xs font-bold text-slate-800 mt-1 truncate">Tailored For You</p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* Capsule/Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-[#edf2ff] text-[#0052fe] px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border border-blue-100/60 shadow-sm mb-6"
            id="hero-badge"
          >
            <Sparkles size={14} className="animate-spin text-blue-500" />
            <span>Innovating Tomorrow</span>
          </motion.div>

          {/* Heading with Web Development & Online Services */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 font-display"
            id="hero-main-title"
          >
            Web Development
            <span className="block text-[#0052fe] mt-2">& Online Services</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
            id="hero-subtitle"
          >
            We deliver fast, secure, and visually refined web applications, and offer integrated online support services tailored to empower your digital presence.
          </motion.p>

          {/* Clickable Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            id="hero-actions-container"
          >
            <button
              onClick={handleStartProject}
              className="w-full sm:w-auto bg-[#0052fe] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer text-base"
              id="hero-btn-start"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={handleExploreServices}
              className="w-full sm:w-auto bg-[#FFC000] hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg shadow-yellow-500/10 hover:shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer text-base"
              id="hero-btn-explore"
            >
              <span>Explore Services</span>
            </button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-12 justify-center border-t border-slate-200/40 pt-8 w-full max-w-md"
            id="hero-socials-row"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Connect Directly:</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center transition-all duration-300 group hover:scale-110 ${social.color}`}
                    title={social.name}
                    id={`hero-social-${social.name.toLowerCase()}`}
                  >
                    <IconComp className="text-slate-500 group-hover:text-white transition-colors" size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section 
        ref={aboutRef} 
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
        id="about-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6" id="about-left-col">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-display" id="about-heading">
                Who We Are
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#0052fe]" id="about-subheading">
                We turn ideas into digital reality.
              </p>
              <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed" id="about-paragraphs-box">
                <p>
                  Suraj Tech Hub is a premier technology partner for businesses looking to scale through innovation. We specialize in decoding complex problems and engineering streamlined, user-centric solutions.
                </p>
                <p>
                  Our philosophy is simple: write clean code, design intuitive interfaces, and deliver products that drive growth. We don't just build apps; we build ecosystems that sustain your business.
                </p>
              </div>
            </div>

            {/* Right Quote Column - styled matching second screenshot precisely */}
            <div className="lg:col-span-5 h-full flex items-center" id="about-right-col">
              <div 
                className="w-full bg-slate-50/80 border-l-6 border-[#FFC000] rounded-r-xl p-8 md:p-10 shadow-sm relative overflow-hidden" 
                id="about-quote-box"
              >
                {/* Background decorative accent element */}
                <div className="absolute right-0 top-0 w-24 h-24 bg-yellow-400/5 rounded-full filter blur-xl"></div>
                
                <p className="text-slate-700 italic text-base md:text-lg leading-relaxed mb-6 block" id="quote-text-element">
                  "Technology is best when it brings people together and simplifies their lives. That is the core foundation of every line of code we write."
                </p>
                <div className="block font-bold text-[#0052fe]" id="quote-by-element">
                  Suraj Tech Hub Team
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUR EXPERTISE */}
      <section 
        ref={servicesRef} 
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50"
        id="services-section"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Headings */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20" id="services-header-group">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 inline-block relative pb-4 font-display" id="services-main-title">
              Our Expertise
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#FFC000] rounded-full"></span>
            </h2>
            <p className="text-slate-500 mt-5 text-base md:text-lg" id="services-subtitle">
              Comprehensive digital solutions for the modern enterprise
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full" id="services-grid">
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              const isSelected = 
                (service.id === "mobile" && formData.service === "App Development") ||
                (service.id === "web" && formData.service === "Web Development") ||
                (service.id === "backend" && formData.service === "Backend/API");

              return (
                <div 
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => {
                    const formValue = service.id === "mobile" ? "App Development" : service.id === "web" ? "Web Development" : "Backend/API";
                    setFormData(prev => ({ ...prev, service: formValue }));
                    setActiveCscService(null); // Clear any active digital/CSC services
                    scrollToSection(contactRef);
                  }}
                  className={`bg-white border rounded-2xl p-8 transition-all duration-300 flex flex-col items-start cursor-pointer select-none relative active:scale-[0.97] ${
                    isSelected 
                      ? "border-[#0052fe] ring-4 ring-[#0052fe]/15 shadow-xl shadow-blue-500/10 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]" 
                      : "border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:shadow-xl md:hover:-translate-y-1 hover:bg-slate-50/10"
                  }`}
                >
                  {/* Subtle Selection Badge */}
                  {isSelected && (
                    <span className="absolute top-4 right-4 bg-[#0052fe] text-white rounded-full p-1 shadow-sm" id={`active-badge-${service.id}`}>
                      <Check size={12} className="stroke-[3.5]" />
                    </span>
                  )}

                  {/* Soft Background Blue Square For Icon */}
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052fe] mb-6 shadow-inner" id={`service-icon-box-${service.id}`}>
                    <IconComp size={28} className="stroke-[1.75]" />
                  </div>

                  <h3 className="text-xl font-bold min-h-[3rem] text-slate-900 mb-4 flex items-center" id={`service-title-${service.id}`}>
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow" id={`service-desc-${service.id}`}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE SURAJ TECH */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white" id="why-choose-section">
        <div className="max-w-3xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-16 md:mb-20" id="why-choose-header">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-display inline-block pb-4 relative" id="why-choose-title">
              Why Choose Suraj Tech Hub
              <span className="absolute bottom-0 left-[25%] right-[25%] h-1 bg-[#FFC000] rounded-full"></span>
            </h2>
          </div>

          {/* Feature List */}
          <div className="space-y-10" id="why-choose-list-container">
            
            {/* Feature 1 */}
            <div className="flex gap-4 md:gap-5 items-start animate-fade-in" id="why-feature-1">
              <div className="w-6 h-6 rounded-full bg-[#FFC000] flex items-center justify-center shrink-0 mt-1 shadow-sm" id="why-feature-icon-1">
                <Check size={14} className="stroke-[3.5] text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-900" id="why-feature-title-1">Technical Excellence</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  We adhere to strict coding standards and architectural patterns to ensure your product is maintainable and scalable.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 md:gap-5 items-start animate-fade-in" id="why-feature-2">
              <div className="w-6 h-6 rounded-full bg-[#FFC000] flex items-center justify-center shrink-0 mt-1 shadow-sm" id="why-feature-icon-2">
                <Check size={14} className="stroke-[3.5] text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-900" id="why-feature-title-2">Transparent Communication</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  No jargon, no hidden fees. We keep you in the loop at every stage of the development process.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 md:gap-5 items-start animate-fade-in" id="why-feature-3">
              <div className="w-6 h-6 rounded-full bg-[#FFC000] flex items-center justify-center shrink-0 mt-1 shadow-sm" id="why-feature-icon-3">
                <Check size={14} className="stroke-[3.5] text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-900" id="why-feature-title-3">On-Time Delivery</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  We respect your timelines. Our agile project management ensures rapid milestones without compromising quality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4.2: ONLINE & CSC SERVICES */}
      <section 
        ref={onlineServicesRef} 
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-100" 
        id="online-services-section"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" id="online-services-header">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 inline-block relative pb-4 font-display" id="online-services-title">
              Online Digital Services
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#FFC000] rounded-full"></span>
            </h2>
            <div className="mt-4" id="online-services-badge-container">
              <span className="text-[#0052fe] font-bold text-xs uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
                Digital Cyber Cafe & CSC Portal Support
              </span>
            </div>
            <p className="text-slate-500 mt-5 text-base md:text-lg" id="online-services-desc">
              We offer comprehensive digital support, official document assistance, creative graphics designing, and data solutions with absolute security and fast delivery.
            </p>
          </div>

          {/* Interactive Bento Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="online-services-grid">
            
            {/* Service 1: Aadhar & PAN */}
            <div 
              onClick={() => {
                setActiveCscService("aadhar");
                setFormData({
                  ...formData,
                  service: "Online CSC Services",
                  message: "Hi Suraj Tech Hub, I need assistance with Aadhar & PAN Card services (new application or corrections/updates). Kindly connect with me."
                });
                scrollToSection(contactRef);
              }}
              className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer select-none active:scale-[0.98] ${
                activeCscService === "aadhar"
                  ? "border-[#0052fe] ring-4 ring-[#0052fe]/15 shadow-xl shadow-blue-500/10 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]"
                  : "bg-white border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:shadow-xl md:hover:-translate-y-1"
              }`}
              id="online-service-card-aadhar"
            >
              <div className="absolute top-6 right-6 bg-[#0052fe]/10 text-[#0052fe] text-xs font-black px-2.5 py-1 rounded-md">
                Starting ₹50
              </div>
              
              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#0052fe] rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  <Fingerprint size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Aadhar & PAN Services</h3>
                <p className="text-slate-500 text-xs font-semibold mb-4 leading-none font-sans">आधार एवं पैन कार्ड सेवाएँ</p>
                
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Fast processing for all identity cards. We facilitate corrections, address updates, biometric support, and linking PAN-Aadhar smoothly.
                </p>

                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>New PAN Card Application</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Aadhar Address & General Correction</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>PAN-Aadhar Link Support</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Identity Card Print & Lamination</span>
                  </li>
                </ul>
              </div>

              <button
                className="w-full bg-[#0052fe] hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-auto cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Inquire Aadhaar/PAN</span>
                <ArrowRight size={12} />
              </button>
            </div>

            {/* Service 2: Resume / Bio-Data Maker */}
            <div 
              onClick={() => {
                setActiveCscService("resume");
                setFormData({
                  ...formData,
                  service: "Online CSC Services",
                  message: "Hi Suraj Tech Hub, I want to get a professional resume, CV, or marriage bio-data designed. Please share the details required."
                });
                scrollToSection(contactRef);
              }}
              className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer select-none active:scale-[0.98] ${
                activeCscService === "resume"
                  ? "border-[#0052fe] ring-4 ring-[#0052fe]/15 shadow-xl shadow-blue-500/10 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]"
                  : "bg-white border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:shadow-xl md:hover:-translate-y-1"
              }`}
              id="online-service-card-resume"
            >
              <div className="absolute top-6 right-6 bg-[#0052fe]/10 text-[#0052fe] text-xs font-black px-2.5 py-1 rounded-md">
                Starting ₹99
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#0052fe] rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Resume & Bio-Data Making</h3>
                <p className="text-slate-500 text-xs font-semibold mb-4 leading-none font-sans">रेज़्युमे एवं बायो-डाटा निर्माण</p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Stand out to employers with a premium customized resume. We write, format and arrange job applications and wedding bio-datas professionally.
                </p>

                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>ATS-Friendly Resumes & CVs</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Elegant Marriage Bio-Data layout</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Dynamic Profile Summary writing</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Fast PDF & Word file exports</span>
                  </li>
                </ul>
              </div>

              <button
                className="w-full bg-[#0052fe] hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-auto cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Order Resume / Bio-Data</span>
                <ArrowRight size={12} />
              </button>
            </div>

            {/* Service 3: Custom Banners, Posters & ID Cards */}
            <div 
              onClick={() => {
                setActiveCscService("poster");
                setFormData({
                  ...formData,
                  service: "Online CSC Services",
                  message: "Hi Suraj Tech Hub, I need custom banner, poster, or employee/school PVC ID card design services. Let's start discussion."
                });
                scrollToSection(contactRef);
              }}
              className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer select-none active:scale-[0.98] ${
                activeCscService === "poster"
                  ? "border-[#0052fe] ring-4 ring-[#0052fe]/15 shadow-xl shadow-blue-500/10 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]"
                  : "bg-white border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:shadow-xl md:hover:-translate-y-1"
              }`}
              id="online-service-card-poster"
            >
              <div className="absolute top-6 right-6 bg-[#0052fe]/10 text-[#0052fe] text-xs font-black px-2.5 py-1 rounded-md">
                Starting ₹149
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#0052fe] rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  <Image size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Banners, Posters & ID Cards</h3>
                <p className="text-slate-500 text-xs font-semibold mb-4 leading-none font-sans">बैनर, पोस्टर एवं आईडी कार्ड</p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Sleek custom design assets for marketing or printing. We create premium school/corporate ID cards, event flyers, and commercial banner layouts.
                </p>

                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>School & College PVC ID Cards</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>High-Res Festival & Ad Banners</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Modern Business Cards & Flyers</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Print-Ready CMYK vector layouts</span>
                  </li>
                </ul>
              </div>

              <button
                className="w-full bg-[#0052fe] hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-auto cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Design ID/Poster</span>
                <ArrowRight size={12} />
              </button>
            </div>

            {/* Service 4: Data Entry / Word Work */}
            <div 
              onClick={() => {
                setActiveCscService("data");
                setFormData({
                  ...formData,
                  service: "Online CSC Services",
                  message: "Hi Suraj Tech Hub, I have some data entry or office document formatting work that needs absolute precision and fast typing. Let's collaborate."
                });
                scrollToSection(contactRef);
              }}
              className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer select-none active:scale-[0.98] ${
                activeCscService === "data"
                  ? "border-[#0052fe] ring-4 ring-[#0052fe]/15 shadow-xl shadow-blue-500/10 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]"
                  : "bg-white border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:shadow-xl md:hover:-translate-y-1"
              }`}
              id="online-service-card-data"
            >
              <div className="absolute top-6 right-6 bg-[#0052fe]/10 text-[#0052fe] text-xs font-black px-2.5 py-1 rounded-md">
                Starting ₹199
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#0052fe] rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  <FileSpreadsheet size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Data Entry & Typing</h3>
                <p className="text-slate-500 text-xs font-semibold mb-4 leading-none font-sans">डाटा एंट्री और टाइपिंग वर्क</p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Reliable and highly accurate data compiling services. We execute Excel spreadsheets formula creation, typing, document scanning, and PDF conversions.
                </p>

                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>English & Hindi Typing works</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Excel Formulas & client database entry</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>PDF/Images to Word Conversion</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Online form filings & portal work</span>
                  </li>
                </ul>
              </div>

              <button
                className="w-full bg-[#0052fe] hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-auto cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Hire For Data Entry</span>
                <ArrowRight size={12} />
              </button>
            </div>

            {/* Service 5: Graphics Designing */}
            <div 
              onClick={() => {
                setActiveCscService("graphics");
                setFormData({
                  ...formData,
                  service: "Online CSC Services",
                  message: "Hi Suraj Tech Hub, I require custom graphic designing (brand logo, event posters, or social media vectors). Let's schedule a chat."
                });
                scrollToSection(contactRef);
              }}
              className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer select-none active:scale-[0.98] ${
                activeCscService === "graphics"
                  ? "border-[#0052fe] ring-4 ring-[#0052fe]/15 shadow-xl shadow-blue-500/10 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]"
                  : "bg-white border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:shadow-xl md:hover:-translate-y-1"
              }`}
              id="online-service-card-graphics"
            >
              <div className="absolute top-6 right-6 bg-[#0052fe]/10 text-[#0052fe] text-xs font-black px-2.5 py-1 rounded-md">
                Starting ₹299
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#0052fe] rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Graphics Designing</h3>
                <p className="text-slate-500 text-xs font-semibold mb-4 leading-none font-sans">ग्राफिक्स डिज़ाइनिंग</p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Stunning visual solutions that communicate your message. We create vector logo icons, corporate typography cards, social media assets, and digital artwork.
                </p>

                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Brand Vector Logos & Badges</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Social Media Marketing Posts</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Business Visual Branding elements</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Unlimited design revisions assistance</span>
                  </li>
                </ul>
              </div>

              <button
                className="w-full bg-[#0052fe] hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-auto cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Order Graphic Design</span>
                <ArrowRight size={12} />
              </button>
            </div>

            {/* Service 6: CSC Digital Cafe Portal */}
            <div 
              onClick={() => {
                setActiveCscService("csc");
                setFormData({
                  ...formData,
                  service: "Online CSC Services",
                  message: "Hi Suraj Tech Hub, I need help using official CSC portals / government form filings (driving license, certificates, utility bills). Please assist."
                });
                scrollToSection(contactRef);
              }}
              className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer select-none active:scale-[0.98] ${
                activeCscService === "csc"
                  ? "border-[#0052fe] ring-4 ring-[#0052fe]/15 shadow-xl shadow-blue-500/10 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]"
                  : "bg-white border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:shadow-xl md:hover:-translate-y-1"
              }`}
              id="online-service-card-csc"
            >
              <div className="absolute top-6 right-6 bg-[#0052fe]/10 text-[#0052fe] text-xs font-black px-2.5 py-1 rounded-md">
                Fast Support
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#0052fe] rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Government Portals & CSC</h3>
                <p className="text-slate-500 text-xs font-semibold mb-4 leading-none font-sans">ऑनलाइन सरकारी फॉर्म एवं डिजिटल कैफ़े</p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  One-stop portal support for driving license processing, online electricity bills, digital income/caste certification, passport assistance, and voter ID cards.
                </p>

                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Driving License & Voter ID applications</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Income, Caste, Residence Certificate</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Scholarship Registrations & Job Forms</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Electricity Utility & Bill Payments</span>
                  </li>
                </ul>
              </div>

              <button
                className="w-full bg-[#0052fe] hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-auto cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply Online Portal</span>
                <ArrowRight size={12} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4.5: OUR PROJECTS */}
      <section 
        ref={projectsRef} 
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-b border-slate-100" 
        id="projects-section"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20" id="projects-header-group">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 inline-block relative pb-4 font-display" id="projects-main-title">
              Our Projects
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#FFC000] rounded-full"></span>
            </h2>
            <p className="text-slate-500 mt-5 text-base md:text-lg" id="projects-subtitle">
              Take a look at some of the industry-grade digital products we have engineered.
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-12" id="projects-filter-tabs">
            {["All", "Web", "Mobile", "API"].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectCategory(cat)}
                className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  projectCategory === cat
                    ? "bg-[#0052fe] text-white shadow-md shadow-blue-500/10"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:border-blue-200 hover:text-[#0052fe]"
                }`}
              >
                {cat === "All" ? "All Projects" : cat === "Web" ? "Web Apps" : cat === "Mobile" ? "Mobile Apps" : "Backend & APIs"}
              </button>
            ))}
          </div>

          {/* Projects Showcases */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10" id="projects-grid">
            {projectsList.map((project) => {
              // Map filtering categories
              if (projectCategory !== "All") {
                if (projectCategory === "Web" && project.category !== "Web") return null;
                if (projectCategory === "Mobile" && project.category !== "Mobile") return null;
                if (projectCategory === "API" && project.category !== "API") return null;
              }

              return (
                <motion.div 
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-xl hover:border-blue-300 transition-all duration-300 group animate-fadeIn"
                  id={`proj-card-${project.id}`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {project.category === "Mobile" ? (
                        /* Smartphone Mock */
                        <div className="w-full bg-slate-100 aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-slate-100 shadow-inner group-hover:-translate-y-1 transition-transform duration-300">
                          {/* Smartphone Mock Frame */}
                          <div className="w-36 bg-slate-950 h-full rounded-t-3xl border-x-4 border-t-4 border-slate-800 p-1.5 shadow-2xl relative flex flex-col mt-4">
                            {/* Dynamic Island / Speaker */}
                            <div className="absolute top-1.5 left-10 right-10 h-2 bg-black rounded-full z-20 flex items-center justify-center">
                              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                            </div>
                            {/* Screen content */}
                            <div className="bg-slate-900 w-full h-full rounded-t-2xl overflow-hidden relative flex flex-col">
                              <img
                                src={project.imgUrl}
                                alt={project.title}
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                                loading="lazy"
                                decoding="async"
                                width={144}
                                height={220}
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/70 backdrop-blur-xs p-1 px-2 flex justify-between items-center select-none text-[7px] font-sans">
                                <span className="font-extrabold text-white">{project.placeholder}</span>
                                {project.rating && <span className="text-yellow-400 font-extrabold text-[6.5px]">{project.rating}</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Browser Mock */
                        <div className="w-full bg-slate-100 aspect-[4/3] rounded-2xl mb-6 flex flex-col overflow-hidden relative border border-slate-100 shadow-inner group-hover:-translate-y-1 transition-transform duration-300">
                          {/* Browser top-bar */}
                          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 border-b border-slate-200/60 shrink-0 select-none">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="ml-2 px-3 py-0.5 bg-white border border-slate-200/50 rounded text-[9px] font-mono text-slate-400 truncate w-40 flex items-center justify-center gap-1">
                              <span>🔒</span> {project.domain || "app-preview.net"}
                            </div>
                          </div>
                          {/* Image content */}
                          <div className="flex-grow w-full h-full overflow-hidden relative">
                            <img
                              src={project.imgUrl}
                              alt={project.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                              width={600}
                              height={450}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent flex items-end p-3">
                              <span className="bg-[#0052fe] text-white text-[10px] font-extrabold px-2.5 py-1 rounded shadow">
                                {project.placeholder}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Core description details */}
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                        project.category === "Web" ? "bg-blue-50 text-[#0052fe]" :
                        project.category === "Mobile" ? "bg-purple-50 text-purple-600" :
                        "bg-emerald-50 text-emerald-600"
                      }`}>
                        {project.label}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{project.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-bold font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setFormData({
                          ...formData,
                          service: project.category === "Web" ? "Web Development" : project.category === "Mobile" ? "App Development" : "Backend/API",
                          message: project.ctaText
                        });
                        scrollToSection(contactRef);
                      }}
                      className="w-full bg-[#0052fe] text-white hover:bg-blue-600 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer mt-8"
                    >
                      <span>Build This Project</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* SECTION 5: CONTACT FORM & INFORMATION */}
      <section 
        ref={contactRef} 
        className="py-20 md:py-32 bg-[#0c1524] text-white overflow-hidden relative"
        id="contact-section"
      >
        {/* Background ambient lighting effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-1"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl -z-1"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Box */}
            <div className="space-y-8" id="contact-left-col">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white" id="contact-title">
                  Let's build something great together.
                </h2>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg" id="contact-description">
                  Ready to transform your business? Reach out to us for a consultation. We discuss your goals, not just your requirements.
                </p>
              </div>

              {/* Direct Info list with dynamic checkable phone and mail links */}
              <div className="space-y-6" id="contact-info-list">
                
                {/* Email Item */}
                <a 
                  href="mailto:ksurajyadav93@gmail.com" 
                  className="flex items-center gap-4 group cursor-pointer hover:bg-slate-800/30 p-2.5 -m-2.5 rounded-xl transition-all"
                  id="contact-email-link"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#FFC000]/10 flex items-center justify-center text-[#FFC000] border border-[#FFC000]/20 shrink-0 group-hover:bg-[#FFC000] group-hover:text-slate-950 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Us</span>
                    <span className="block text-sm md:text-base font-semibold group-hover:text-yellow-300 transition-colors">ksurajyadav93@gmail.com</span>
                  </div>
                </a>

                {/* Phone Item */}
                <a 
                  href="tel:6393869405" 
                  className="flex items-center gap-4 group cursor-pointer hover:bg-slate-800/30 p-2.5 -m-2.5 rounded-xl transition-all"
                  id="contact-phone-link"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#FFC000]/10 flex items-center justify-center text-[#FFC000] border border-[#FFC000]/20 shrink-0 group-hover:bg-[#FFC000] group-hover:text-slate-950 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</span>
                    <span className="block text-sm md:text-base font-semibold group-hover:text-yellow-300 transition-colors">+91 6393869405</span>
                  </div>
                </a>

                {/* Address Item */}
                <div 
                  className="flex items-center gap-4 group p-2.5 -m-2.5 rounded-xl"
                  id="contact-address-box"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#FFC000]/10 flex items-center justify-center text-[#FFC000] border border-[#FFC000]/20 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Address Location</span>
                    <span className="block text-sm md:text-base text-slate-300 font-medium">Bhadohi, Uttar Pradesh, India 221404</span>
                  </div>
                </div>

                {/* Social Networks Grid */}
                <div 
                  className="pt-8 border-t border-slate-800/80 mt-6"
                  id="contact-socials-block"
                >
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                    Social Support & Networks
                  </span>
                  <div className="grid grid-cols-2 gap-3" id="contact-socials-grid">
                    {socialLinks.map((social) => {
                      const IconComp = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-slate-800/20 hover:bg-slate-800/50 border border-slate-800/60 hover:border-slate-700/80 p-3 rounded-2xl transition-all duration-300 group cursor-pointer"
                          id={`contact-social-btn-${social.name.toLowerCase()}`}
                          title={`Visit our ${social.name}`}
                        >
                          <div className={`w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-inner border border-slate-800`}>
                            <IconComp className={`w-4 h-4 transition-colors ${social.textColor}`} />
                          </div>
                          <div className="flex flex-col min-w-0" id={`contact-social-info-${social.name.toLowerCase()}`}>
                            <span className="text-xs font-bold text-white group-hover:text-yellow-300 transition-colors truncate">{social.name}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-300 font-mono truncate">{social.handle}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="w-full" id="contact-right-col">
              <div 
                className="bg-[#162235] border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl relative" 
                id="contact-form-card"
              >
                
                {/* Submitted State animation/UI */}
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-10 flex flex-col items-center justify-center"
                      id="contact-success-panel"
                    >
                      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 animate-bounce">
                        <Check size={32} className="stroke-[2.5]" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-white mb-2 font-display">Enquiry Sent!</h3>
                      <p className="text-slate-300 text-sm md:text-base max-w-xs mx-auto leading-relaxed mb-6">
                        Thank you dynamic feedback, <span className="font-bold text-white">{formData.name}</span>. We will contact you at <span className="font-bold text-white">{formData.email}</span> within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setFormData({ name: "", email: "", service: "Web Development", message: "" });
                          setFormSubmitted(false);
                        }}
                        className="text-xs font-bold uppercase tracking-wider text-[#FFC000] hover:text-yellow-300 py-1 px-3 border border-yellow-500/30 hover:border-yellow-300 rounded-md transition-all cursor-pointer"
                        id="reset-form-btn"
                      >
                        Send Another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      id="enquiry-form"
                    >
                      
                      {/* Name input */}
                      <div className="space-y-1.5" id="form-group-name">
                        <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name-input"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`w-full bg-[#0c1524] text-white border ${formErrors.name ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0052fe] focus:border-transparent placeholder:text-slate-500 text-sm`}
                        />
                        {formErrors.name && (
                          <p className="text-xs text-red-400 font-medium" id="name-error-msg">Please enter your name.</p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5" id="form-group-email">
                        <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          id="email-input"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          className={`w-full bg-[#0c1524] text-white border ${formErrors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0052fe] focus:border-transparent placeholder:text-slate-500 text-sm`}
                        />
                        {formErrors.email && (
                          <p className="text-xs text-red-400 font-medium" id="email-error-msg">Please enter a valid email address.</p>
                        )}
                      </div>

                      {/* Dynamic drop down matching layout instructions */}
                      <div className="space-y-1.5" id="form-group-service">
                        <label htmlFor="service-dropdown" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Interested Service?
                        </label>
                        <div className="relative">
                          <select 
                            id="service-dropdown"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full bg-[#0c1524] text-white border border-slate-700 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0052fe] focus:border-transparent text-sm appearance-none cursor-pointer"
                          >
                            <option value="">Interested Service?</option>
                            <option value="App Development">App Development</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Backend/API">Backend/API</option>
                            <option value="Online CSC Services">Online CSC Services</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" id="dropdown-arrow-icon">
                            ▼
                          </div>
                        </div>
                      </div>

                      {/* Brief text box description */}
                      <div className="space-y-1.5" id="form-group-message">
                        <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Briefly describe your project
                        </label>
                        <textarea 
                          id="message-input"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Briefly describe your project"
                          className="w-full bg-[#0c1524] text-white border border-slate-700 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0052fe] focus:border-transparent placeholder:text-slate-500 text-sm resize-none"
                        />
                      </div>

                      {/* Send Enquiry action button */}
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FFC000] hover:bg-yellow-400 text-slate-900 font-extrabold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm tracking-uppercase font-sans mt-3 disabled:opacity-75 disabled:cursor-not-allowed"
                        id="submit-enquiry-btn"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <span>Send Enquiry</span>
                        )}
                      </button>

                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#090f1a] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800" id="app-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div 
            className="flex items-center gap-3 select-none cursor-pointer group"
            onClick={() => scrollToSection(homeRef)}
            id="footer-logo"
          >
            <div className="relative">
              <SurajLogoIcon className="w-14 h-14 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute bottom-0 right-0 w-3 rounded-full bg-[#090f1a] border border-white flex items-center justify-center z-10">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <div className="flex items-center">
                <span className="text-lg font-black tracking-tight text-white font-display">SURA</span>
                <span className="relative text-lg font-black tracking-tight text-white font-display inline-block pr-[1.5px]">
                  J
                  <span className="absolute -top-[1px] right-[0.5px] w-[7px] h-[7px] rounded-full bg-[#FFC000] shadow-sm shadow-yellow-500/50 animate-pulse"></span>
                </span>
              </div>
              <span className="text-[8px] font-bold tracking-[0.3em] text-yellow-300 uppercase mt-[-2px]">TECH HUB</span>
            </div>
          </div>

          {/* Connected Social Links */}
          <div className="flex items-center gap-3" id="footer-socials-row">
            {socialLinks.map((social) => {
              const IconComp = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700/80 flex items-center justify-center transition-all duration-300 group hover:-translate-y-0.5"
                  title={`Follow us on ${social.name}`}
                  id={`footer-social-${social.name.toLowerCase()}`}
                >
                  <IconComp className="w-4.5 h-4.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>

          <div className="text-center md:text-right" id="footer-copyright-box">
            <p className="text-sm text-slate-400" id="footer-copyright-text">
              © 2026 Suraj Tech Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
