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
  ArrowLeft, 
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
  Youtube,
  Receipt,
  Users,
  Search,
  Layout,
  PlayCircle,
  GraduationCap,
  ShoppingCart,
  Settings,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Cloud,
  TrendingUp,
  Target,
  Compass,
  Award,
  ShieldCheck,
  HeartHandshake,
  Zap
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
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activeAboutSubTab, setActiveAboutSubTab] = useState<"company" | "vision" | "leadership">("company");
  const [currentView, setCurrentView] = useState<"home" | "about">("home");
  
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

  // Auto-deselect service card when user clicks elsewhere on the website
  useEffect(() => {
    if (!formData.service) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Do not clear if user clicks inside a service card or inside the contact form section
      if (
        target.closest('[id^="core-service-card-"]') || 
        target.closest('[id^="service-card-"]') || 
        target.closest('#contact-section')
      ) {
        return;
      }
      setFormData(prev => ({ ...prev, service: "" }));
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleGlobalClick);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [formData.service]);

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

  const navigateTo = (
    view: "home" | "about", 
    subTab?: "company" | "vision" | "leadership", 
    sectionRef?: RefObject<HTMLDivElement | null>
  ) => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    
    if (view === "about") {
      setCurrentView("about");
      if (subTab) setActiveAboutSubTab(subTab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentView("home");
      if (sectionRef) {
        setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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

  // Core services list matching "Our Core Services" reference design from user screenshot
  const coreServicesData = [
    {
      id: "billing-software",
      title: "Billing Software",
      description: "GST-ready invoicing, transactions and billing for any business size.",
      icon: Receipt,
    },
    {
      id: "crm-software",
      title: "CRM Software",
      description: "Streamline leads, pipelines and post-sales support workflows.",
      icon: Users,
    },
    {
      id: "seo-smo",
      title: "SEO / SMO",
      description: "Boost visibility, traffic and conversions with data-driven optimisation.",
      icon: Search,
    },
    {
      id: "website-design",
      title: "Website Design",
      description: "Modern responsive websites that convert visitors into clients.",
      icon: Layout,
    },
    {
      id: "video-animation",
      title: "Video Animation",
      description: "2D/3D motion graphics that bring your brand story to life.",
      icon: PlayCircle,
    },
    {
      id: "school-erp",
      title: "School ERP",
      description: "Admissions, fees, attendance, exams and parent portal in one place.",
      icon: GraduationCap,
    },
    {
      id: "e-commerce",
      title: "E-Commerce",
      description: "Custom online stores with payments, inventory and smooth checkout.",
      icon: ShoppingCart,
    },
    {
      id: "erp-solutions",
      title: "ERP Solutions",
      description: "HR, accounts, inventory, purchase and production all integrated.",
      icon: Settings,
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps",
      description: "iOS, Android & cross-platform Flutter / React Native development.",
      icon: Smartphone,
    },
  ];

  // Why Businesses Trust Suraj Tech Hub features list
  const trustFeaturesData = [
    {
      id: "secure-reliable",
      title: "Secure & Reliable",
      description: "AES-256 encryption, live monitoring, and resilient systems keep your business data protected.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "support-247",
      title: "24 / 7 Support",
      description: "Dedicated support via call, chat, and email so your team always has help close by.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "scalable-architecture",
      title: "Scalable Architecture",
      description: "Modern architecture designed to grow from small teams to high-volume enterprise workflows.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "industry-experts",
      title: "Industry Experts",
      description: "Specialists in software, compliance, finance, growth, and real business operations.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "client-first",
      title: "Client First Approach",
      description: "Every decision starts with your business goals, user needs, and long-term ROI.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "on-time-delivery",
      title: "On-Time Delivery",
      description: "Clear milestones, weekly demos, and transparent delivery keep every project moving.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    }
  ];

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
      url: "https://www.instagram.com/suraj_tech_hub_?igsh=Mng0enBkendpZmNt",
      handle: "@suraj_tech_hub_",
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
            className="flex items-center gap-3 select-none cursor-pointer group shrink-0"
            onClick={() => navigateTo("home", undefined, homeRef)}
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

          {/* Centered Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-6 lg:space-x-8 text-base font-semibold px-4" id="desktop-nav">
            <button 
              onClick={() => navigateTo("home", undefined, homeRef)}
              className={`transition-colors cursor-pointer whitespace-nowrap ${
                currentView === "home" ? "text-yellow-300 font-bold" : "text-white hover:text-yellow-300"
              }`}
              id="nav-home"
            >
              Home
            </button>

            {/* About Us Interactive Dropdown (Matching Screenshot 1) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button 
                onClick={() => navigateTo("about", "company")}
                className={`transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  currentView === "about" ? "text-yellow-300 font-bold" : "text-white hover:text-yellow-300"
                }`}
                id="nav-about-dropdown-btn"
              >
                <span>About Us</span>
                <ChevronDown size={15} className={`transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180 text-yellow-300" : ""}`} />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 text-slate-800 z-50 overflow-hidden"
                    id="about-dropdown-menu"
                  >
                    <button
                      onClick={() => navigateTo("about", "company")}
                      className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${
                        currentView === "about" && activeAboutSubTab === "company" 
                          ? "bg-blue-50 text-[#0052fe]" 
                          : "hover:bg-slate-50 text-slate-800 hover:text-[#0052fe]"
                      }`}
                      id="dropdown-about-company"
                    >
                      <span>About Our Company</span>
                    </button>

                    <button
                      onClick={() => navigateTo("about", "vision")}
                      className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${
                        currentView === "about" && activeAboutSubTab === "vision" 
                          ? "bg-blue-50 text-[#0052fe]" 
                          : "hover:bg-slate-50 text-slate-800 hover:text-[#0052fe]"
                      }`}
                      id="dropdown-vision-mission"
                    >
                      <span>Vision Mission & Values</span>
                    </button>

                    <button
                      onClick={() => navigateTo("about", "leadership")}
                      className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${
                        currentView === "about" && activeAboutSubTab === "leadership" 
                          ? "bg-blue-50 text-[#0052fe]" 
                          : "hover:bg-slate-50 text-slate-800 hover:text-[#0052fe]"
                      }`}
                      id="dropdown-founding-leadership"
                    >
                      <span>Founding Leadership</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => navigateTo("home", undefined, servicesRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer whitespace-nowrap"
              id="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => navigateTo("home", undefined, projectsRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer whitespace-nowrap"
              id="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => navigateTo("home", undefined, onlineServicesRef)}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer whitespace-nowrap"
              id="nav-online-services"
            >
              Online Services
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center shrink-0" id="desktop-contact-container">
            <button 
              onClick={() => navigateTo("home", undefined, contactRef)}
              className="bg-[#FFC000] text-slate-900 border-none px-6 py-2.5 rounded-md font-bold hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-md whitespace-nowrap"
              id="nav-contact"
            >
              Contact Us
            </button>
          </div>

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
                  onClick={() => navigateTo("home", undefined, homeRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-home"
                >
                  Home
                </button>
                <div className="border-y border-blue-400/20 py-2 space-y-1">
                  <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest px-3 block">About Us</span>
                  <button
                    onClick={() => navigateTo("about", "company")}
                    className={`text-left w-full py-2 px-3 rounded-lg transition-all text-sm font-semibold flex items-center justify-between ${
                      currentView === "about" && activeAboutSubTab === "company" ? "bg-white/20 text-yellow-300" : "text-white hover:bg-blue-700/40"
                    }`}
                    id="mobile-nav-about-company"
                  >
                    <span>About Our Company</span>
                  </button>
                  <button
                    onClick={() => navigateTo("about", "vision")}
                    className={`text-left w-full py-2 px-3 rounded-lg transition-all text-sm font-semibold flex items-center justify-between ${
                      currentView === "about" && activeAboutSubTab === "vision" ? "bg-white/20 text-yellow-300" : "text-white hover:bg-blue-700/40"
                    }`}
                    id="mobile-nav-vision"
                  >
                    <span>Vision Mission & Values</span>
                  </button>
                  <button
                    onClick={() => navigateTo("about", "leadership")}
                    className={`text-left w-full py-2 px-3 rounded-lg transition-all text-sm font-semibold flex items-center justify-between ${
                      currentView === "about" && activeAboutSubTab === "leadership" ? "bg-white/20 text-yellow-300" : "text-white hover:bg-blue-700/40"
                    }`}
                    id="mobile-nav-leadership"
                  >
                    <span>Founding Leadership</span>
                  </button>
                </div>
                <button
                  onClick={() => navigateTo("home", undefined, servicesRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-services"
                >
                  Services
                </button>
                <button
                  onClick={() => navigateTo("home", undefined, projectsRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-projects"
                >
                  Projects
                </button>
                <button
                  onClick={() => navigateTo("home", undefined, onlineServicesRef)}
                  className="text-left py-2 px-3 rounded-lg text-white hover:bg-blue-700/40 hover:text-yellow-300 transition-all"
                  id="mobile-nav-online"
                >
                  Online Services
                </button>
                <button
                  onClick={() => navigateTo("home", undefined, contactRef)}
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

      {/* CONDITIONAL ROUTING: INTERNAL ABOUT PAGE VS HOME PAGE VIEW */}
      {currentView === "about" ? (
        <div className="bg-slate-50 min-h-screen pb-20" id="internal-about-page">
          {/* Internal Page Hero Header */}
          <div className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800" id="about-internal-header">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-yellow-300 uppercase tracking-widest mb-2">
                  <button onClick={() => navigateTo("home")} className="hover:underline cursor-pointer">Home</button>
                  <ChevronRight size={14} />
                  <span>About Us</span>
                  <ChevronRight size={14} />
                  <span className="text-white font-bold">
                    {activeAboutSubTab === "company" && "About Our Company"}
                    {activeAboutSubTab === "vision" && "Vision, Mission & Values"}
                    {activeAboutSubTab === "leadership" && "Founding Leadership"}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
                  {activeAboutSubTab === "company" && "About Suraj Tech Hub"}
                  {activeAboutSubTab === "vision" && "Vision, Mission & Core Values"}
                  {activeAboutSubTab === "leadership" && "Founding Leadership"}
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
                  {activeAboutSubTab === "company" && "Discover our background, software engineering focus, structured development process, and proven track record."}
                  {activeAboutSubTab === "vision" && "Explore the guiding principles, long-term vision, and core values driving our engineering excellence."}
                  {activeAboutSubTab === "leadership" && "Meet the visionary founder and engineering leaders steering Suraj Tech Hub toward continuous innovation."}
                </p>
              </div>

              <button
                onClick={() => navigateTo("home")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all shrink-0 hover:shadow-lg"
                id="btn-back-to-home"
              >
                <ArrowLeft size={16} />
                <span>Back to Home Page</span>
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          
          {/* Sub-navigation tabs for About Us */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap" id="about-tabs-container">
            <button
              onClick={() => setActiveAboutSubTab("company")}
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                activeAboutSubTab === "company"
                  ? "bg-[#0052fe] text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
              }`}
              id="tab-btn-about-company"
            >
              About Our Company
            </button>

            <button
              onClick={() => setActiveAboutSubTab("vision")}
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                activeAboutSubTab === "vision"
                  ? "bg-[#0052fe] text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
              }`}
              id="tab-btn-vision-mission"
            >
              Vision Mission & Values
            </button>

            <button
              onClick={() => setActiveAboutSubTab("leadership")}
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                activeAboutSubTab === "leadership"
                  ? "bg-[#0052fe] text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
              }`}
              id="tab-btn-founding-leadership"
            >
              Founding Leadership
            </button>
          </div>

          {/* TAB 1: ABOUT OUR COMPANY */}
          {activeAboutSubTab === "company" && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              id="about-company-content"
            >
              {/* REFINED SUBTLE INTRO BADGE */}
              <div className="w-full bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl mb-10 shadow-lg border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6" id="about-refined-banner">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-yellow-300 font-extrabold text-xs tracking-widest uppercase px-3.5 py-1 rounded-full border border-blue-400/30 mb-2 font-mono">
                    <Sparkles size={13} />
                    <span>SOFTWARE & ONLINE DIGITAL SERVICES</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                    Suraj Tech Hub
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                    A multi-disciplinary technology practice specializing in modern web applications, scalable software architectures, and automated online citizen services.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 text-center">
                    <p className="text-[10px] font-bold text-slate-400 font-mono uppercase">LOCATION</p>
                    <p className="text-sm font-extrabold text-yellow-300 font-display">BHADOHI, INDIA</p>
                  </div>
                </div>
              </div>

              {/* 2. ENGINEERING GROWTH THROUGH SMART TECH SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center mb-16 bg-white p-6 sm:p-8 md:p-12 rounded-3xl border-2 border-slate-100 shadow-xs" id="about-growth-section">
                {/* Left Text */}
                <div className="lg:col-span-7 space-y-5">
                  <span className="text-[#0091ff] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block font-display">
                    ABOUT SURAJ TECH HUB
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-display">
                    Engineering Growth Through Smart Technology
                  </h2>
                  <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                    <p>
                      At Suraj Tech Hub, we don't just build websites — we build digital systems that drive real business results. By combining clean code, modern design, and scalable architecture, we create solutions that are fast, secure, and built for long-term growth.
                    </p>
                    <p>
                      Whether you're an ambitious startup or an established enterprise, our goal is to empower your business with cutting-edge digital capabilities, robust web infrastructure, and seamless automated workflows.
                    </p>
                  </div>
                </div>

                {/* Right Illustration/Graphic */}
                <div className="lg:col-span-5 flex items-center justify-center p-2">
                  <div className="w-full max-w-md bg-gradient-to-br from-blue-50/80 via-slate-50 to-indigo-50/60 p-6 md:p-8 rounded-3xl border border-blue-100/80 shadow-md text-center relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
                    
                    {/* SVG Graphic mockup resembling analytics dashboard */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 space-y-5 relative z-10">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#0052fe] text-white flex items-center justify-center">
                            <TrendingUp size={18} />
                          </div>
                          <span className="font-bold text-xs md:text-sm text-slate-800">Growth Metrics</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+100% ROI</span>
                      </div>

                      {/* Mock Chart SVG */}
                      <div className="h-32 w-full bg-slate-50 rounded-xl p-3 flex items-end justify-between gap-2">
                        <div className="w-1/5 bg-blue-200 rounded-t-lg h-[40%]"></div>
                        <div className="w-1/5 bg-blue-300 rounded-t-lg h-[60%]"></div>
                        <div className="w-1/5 bg-blue-400 rounded-t-lg h-[75%]"></div>
                        <div className="w-1/5 bg-[#0052fe] rounded-t-lg h-[95%]"></div>
                        <div className="w-1/5 bg-amber-400 rounded-t-lg h-[85%]"></div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Web</span>
                        <span>Apps</span>
                        <span>DevOps</span>
                        <span>Cloud</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. OUR FOCUS SECTION */}
              <div className="mb-16" id="about-our-focus">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                    Our <span className="text-[#0052fe]">Focus</span>
                  </h2>
                  <p className="text-amber-600 font-medium text-sm md:text-base mt-3">
                    Building powerful digital solutions that help your business scale efficiently.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1: Modern Websites */}
                  <div className="bg-gradient-to-br from-[#0091ff] to-[#0052fe] text-white rounded-3xl p-7 shadow-lg shadow-blue-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-xs">
                      <Globe size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2.5 font-display">Modern Websites</h3>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed font-normal">
                        High-performance websites with modern UI/UX designed to convert visitors.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Scalable Apps */}
                  <div className="bg-gradient-to-br from-[#7b46ff] to-[#5123e2] text-white rounded-3xl p-7 shadow-lg shadow-purple-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-xs">
                      <Smartphone size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2.5 font-display">Scalable Apps</h3>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed font-normal">
                        Robust web and mobile applications built for seamless user experiences.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Cloud & DevOps */}
                  <div className="bg-gradient-to-br from-[#00c996] to-[#009a72] text-white rounded-3xl p-7 shadow-lg shadow-teal-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-xs">
                      <Cloud size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2.5 font-display">Cloud & DevOps</h3>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed font-normal">
                        Reliable cloud deployment, automation, and DevOps services for maximum uptime.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: SEO & Growth */}
                  <div className="bg-gradient-to-br from-[#ff5e2b] to-[#e03800] text-white rounded-3xl p-7 shadow-lg shadow-orange-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-xs">
                      <TrendingUp size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2.5 font-display">SEO & Growth</h3>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed font-normal">
                        Data-driven SEO strategies and performance optimization to drive real traffic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. OUR PROVEN PROCESS SECTION */}
              <div className="mb-16 bg-white p-8 md:p-12 rounded-3xl border-2 border-slate-100 shadow-xs" id="about-our-process">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                    Our Proven <span className="text-[#0052fe]">Process</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-sm md:text-base mt-3">
                    A streamlined workflow designed for clarity, speed, and real business results.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-[#0052fe] text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      01
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Discovery</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Understanding your goals and defining a clear direction.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-[#0052fe] text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      02
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Strategy</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Creating a roadmap with scalable architecture.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-[#0052fe] text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      03
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Design</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Crafting intuitive and conversion-focused UI/UX.</p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-[#0052fe] text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      04
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Development</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Building fast, secure solutions using modern tech.</p>
                  </div>

                  {/* Step 5 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-[#0052fe] text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      05
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Testing</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Ensuring top performance and cross-device compatibility.</p>
                  </div>

                  {/* Step 6 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-[#0052fe] text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      06
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Launch</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Smooth deployment and ongoing support for growth.</p>
                  </div>
                </div>
              </div>

              {/* 5. TRUSTED BY GROWING BUSINESSES METRICS SECTION */}
              <div className="bg-[#0b1b3d] text-white p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden" id="about-trusted-metrics">
                {/* Header Info */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-[#0088ff] mb-6">
                    <Users size={32} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4">
                    Trusted by Growing Businesses
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                    We have helped startups, founders, and businesses turn their ideas into high-performing digital products. Our clients trust us for speed, reliability, and long-term partnership.
                  </p>
                  <span className="text-[#00d2ff] font-bold text-base md:text-lg tracking-wide">
                    Real work. Real results. Real growth.
                  </span>
                </div>

                {/* 4 Cards (10+ HAPPY CLIENTS & 10+ PROJECTS DELIVERED) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1: Happy Clients */}
                  <div className="bg-white text-slate-900 rounded-3xl p-8 text-center border border-slate-100 shadow-xl flex flex-col items-center justify-center" id="metric-happy-clients">
                    <div className="w-16 h-16 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-500 mb-4">
                      <Users size={28} />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-[#0088ff] font-display mb-2">
                      10+
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      HAPPY CLIENTS
                    </span>
                  </div>

                  {/* Card 2: Projects Delivered */}
                  <div className="bg-white text-slate-900 rounded-3xl p-8 text-center border border-slate-100 shadow-xl flex flex-col items-center justify-center" id="metric-projects-delivered">
                    <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 mb-4">
                      <Briefcase size={28} />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-[#00c996] font-display mb-2">
                      10+
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      PROJECTS DELIVERED
                    </span>
                  </div>

                  {/* Card 3: Client Retention */}
                  <div className="bg-white text-slate-900 rounded-3xl p-8 text-center border border-slate-100 shadow-xl flex flex-col items-center justify-center" id="metric-client-retention">
                    <div className="w-16 h-16 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500 mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-[#7b46ff] font-display mb-2">
                      99%
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      CLIENT RETENTION
                    </span>
                  </div>

                  {/* Card 4: Support Available */}
                  <div className="bg-white text-slate-900 rounded-3xl p-8 text-center border border-slate-100 shadow-xl flex flex-col items-center justify-center" id="metric-support-available">
                    <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-4">
                      <Phone size={28} />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-[#ffaa00] font-display mb-2">
                      24/7
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      SUPPORT AVAILABLE
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2: VISION MISSION & VALUES */}
          {activeAboutSubTab === "vision" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
              id="about-vision-section"
            >
              {/* Vision & Mission 2-Column Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Our Vision Card */}
                <div className="bg-white rounded-3xl border-2 border-slate-100 p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>
                  <div>
                    <div className="w-14 h-14 bg-blue-50 text-[#0052fe] rounded-2xl flex items-center justify-center mb-6 shadow-xs">
                      <Target size={28} />
                    </div>
                    <span className="text-[#0052fe] font-bold text-xs tracking-widest uppercase mb-2 block font-mono">
                      OUR LONG-TERM VISION
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4 font-display">
                      Empowering Global Digital Excellence
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      To be a trusted global technology partner recognized for pioneering high-speed web applications, intelligent software platforms, and seamless e-governance services that accelerate human potential and enterprise prosperity.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                    <Sparkles size={14} />
                    <span>Pioneering Next-Gen Architecture</span>
                  </div>
                </div>

                {/* Our Mission Card */}
                <div className="bg-white rounded-3xl border-2 border-slate-100 p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full pointer-events-none"></div>
                  <div>
                    <div className="w-14 h-14 bg-yellow-50 text-[#FFC000] rounded-2xl flex items-center justify-center mb-6 shadow-xs">
                      <Compass size={28} />
                    </div>
                    <span className="text-amber-600 font-bold text-xs tracking-widest uppercase mb-2 block font-mono">
                      OUR STRATEGIC MISSION
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4 font-display">
                      Precision Engineering & Client Growth
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      To engineer robust, ultra-fast, and secure software applications and digital workflows that empower businesses, startups, and citizens through relentless innovation, clean code standards, and responsive, long-term technical support.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-600">
                    <CheckCircle2 size={14} />
                    <span>Delivering Real-World Impact</span>
                  </div>
                </div>
              </div>

              {/* Core Values Section */}
              <div className="bg-white rounded-3xl border-2 border-slate-100 p-8 sm:p-12 shadow-sm">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="text-[#0052fe] font-bold text-xs tracking-widest uppercase mb-2 block font-mono">
                    GUIDING PRINCIPLES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                    Our Core Values
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2">
                    The non-negotiable principles guiding every line of code we write and every solution we launch.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0052fe] flex items-center justify-center font-bold mb-4">
                      <Award size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-2 font-display">Engineering Excellence</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Writing clean, modular, and scalable code that stands the test of time and high traffic volumes.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7b46ff] flex items-center justify-center font-bold mb-4">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-2 font-display">Uncompromising Security</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Ensuring total data privacy, strict access protocols, and operational reliability across all systems.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#00c996] flex items-center justify-center font-bold mb-4">
                      <HeartHandshake size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-2 font-display">Client & Citizen First</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Measuring our success purely by the concrete business outcomes and ease of use experienced by our users.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#ffaa00] flex items-center justify-center font-bold mb-4">
                      <Zap size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-2 font-display">Speed & Transparency</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Rapid turnarounds, milestone tracking, and open communication every single step of the journey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: FOUNDING LEADERSHIP (Matching SkillLogic Reference Design) */}
          {activeAboutSubTab === "leadership" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
              id="about-leadership-section"
            >
              {/* LETTER & FOUNDER CARD SECTION MATCHING SKILLLOGIC SCREENSHOT 1 & 2 */}
              <div className="bg-white rounded-3xl border-2 border-slate-100 p-6 sm:p-10 md:p-12 shadow-sm" id="leadership-letter-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Left Column: Letter from Suraj Yadav */}
                  <div className="lg:col-span-7 space-y-5 text-slate-700">
                    <h3 className="text-xl font-extrabold text-slate-900 font-display">
                      Dear Team and Clients,
                    </h3>
                    
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      As the Founder & Tech Lead at Suraj Tech Hub, I want to take a moment to express my deepest appreciation for the hard work of our team and the continued trust our clients place in us.
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Our core focus has always been on spearheading technology and innovation. By defining a robust technical strategy and closely overseeing product development, we aim to deliver high-impact digital solutions that empower your business to scale with total confidence.
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      To our clients, thank you for your ongoing support. We know that every business is unique, and we are dedicated to providing personalized, cutting-edge technology that is specifically tailored to exceed your expectations and drive real growth.
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      To our incredible team, I want to say how proud I am of the innovative work we accomplish together every day. Your passion for clean code, modern architecture, and solving complex problems is truly the driving force behind our success.
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      As we look to the future, let us continue to push the boundaries of what's possible through smart technology, collaboration, and a relentless commitment to quality. I am confident that with our collective expertise, we will continue delivering products that leave a lasting mark in the IT industry.
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Thank you for being an essential part of our journey.
                    </p>

                    <div className="pt-6 border-t border-slate-100 space-y-1">
                      <p className="text-slate-500 text-xs font-semibold font-mono uppercase tracking-wider">Best regards,</p>
                      <p className="text-slate-900 font-extrabold text-xl font-display">Suraj Yadav</p>
                      <p className="text-slate-500 text-sm font-medium">Founder & Tech Lead, Suraj Tech Hub</p>
                    </div>
                  </div>

                  {/* Right Column: Founder Photo Frame + Caption + LinkedIn Button */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="w-full max-w-sm border-2 border-[#0052fe] rounded-3xl p-3 sm:p-4 bg-white shadow-xl">
                      <div className="overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] sm:aspect-square md:aspect-[4/5] relative">
                        <img 
                          src="https://www.image2url.com/r2/default/images/1786508638613-982e252e-cf62-441c-bf12-174ee59721ae.jpeg" 
                          alt="Suraj Yadav - Founder & Tech Lead" 
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* Caption & LinkedIn Link */}
                    <div className="text-center mt-6 space-y-3 w-full flex flex-col items-center">
                      <h4 className="font-black text-xl text-slate-900 font-display">
                        [Suraj Yadav]
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-slate-500 font-mono">
                        Founder & Tech Lead, Suraj Tech Hub
                      </p>

                      <a
                        href="https://www.linkedin.com/in/sunil-kumar-yadav-125ab6353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 bg-[#0077b5] hover:bg-[#006097] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-xl transition-all duration-250 cursor-pointer w-full max-w-xs mt-2 group"
                        id="btn-leadership-linkedin"
                      >
                        <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

            {/* Bottom Call-To-Action Banner inside Internal About Page */}
            <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">Ready to work with Suraj Tech Hub?</h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                  Contact us today to discuss software development, web applications, or online CSC services for your organization.
                </p>
              </div>
              <button
                onClick={() => navigateTo("home", undefined, contactRef)}
                className="bg-[#FFC000] text-slate-900 font-extrabold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl cursor-pointer text-sm shrink-0"
              >
                Get In Touch With Us
              </button>
            </div>
          </div>
        </div>
      ) : (
        <main id="home-view-container">

      {/* SECTION 1: HERO SECTION - Off-white styled with generous negative space */}
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

        {/* Floating tech signature cards in side margins */}
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

      {/* SECTION 3: OUR CORE SERVICES & EXPERTISE */}
      <section 
        ref={servicesRef} 
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/80"
        id="services-section"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Main Core Services Header (Matching reference screenshot precisely) */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18" id="services-header-group">
            <span className="text-[#0092ff] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-2 block font-display" id="core-services-eyebrow">
              WHAT WE DO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display block" id="services-main-title">
              Our Core <span className="text-[#0052fe] relative inline-block">
                Services
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#0052fe] rounded-full"></span>
              </span>
            </h2>
            <p className="text-amber-600 font-medium text-sm md:text-base mt-5" id="services-subtitle">
              Smart software & digital solutions for modern businesses
            </p>
          </div>

          {/* 9 Core Services Cards Grid (Exact replica of reference card layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 w-full mb-16 md:mb-20" id="core-services-grid">
            {coreServicesData.map((item) => {
              const IconComp = item.icon;
              const isSelected = formData.service === item.title;

              return (
                <div 
                  key={item.id}
                  id={`core-service-card-${item.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      setFormData(prev => ({ ...prev, service: "" }));
                    } else {
                      setFormData(prev => ({ ...prev, service: item.title }));
                      setActiveCscService(null);
                      scrollToSection(contactRef);
                    }
                  }}
                  className={`bg-white transition-all duration-300 rounded-3xl p-6 flex flex-col items-start cursor-pointer select-none group relative ${
                    isSelected 
                      ? "border-2 border-[#0052fe] ring-4 ring-[#0052fe]/20 shadow-xl shadow-blue-500/15 -translate-y-1 bg-gradient-to-br from-white to-blue-50/30" 
                      : "border-2 border-slate-200/90 shadow-md shadow-slate-200/40 hover:border-[#0052fe] hover:shadow-xl hover:-translate-y-1.5"
                  }`}
                >
                  {/* Selection Check Badge */}
                  {isSelected && (
                    <span className="absolute top-4 right-4 bg-[#0052fe] text-white rounded-full p-1 shadow-sm" id={`core-badge-${item.id}`}>
                      <Check size={12} className="stroke-[3.5]" />
                    </span>
                  )}

                  {/* Icon Squircle Box matching screenshot */}
                  <div className="w-13 h-13 md:w-14 md:h-14 bg-[#0052fe] rounded-2xl flex items-center justify-center text-white mb-5 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300 shrink-0" id={`core-icon-box-${item.id}`}>
                    <IconComp size={26} className="stroke-[2] text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-slate-900 font-bold text-lg md:text-xl mb-2 text-left group-hover:text-[#0052fe] transition-colors duration-200" id={`core-title-${item.id}`}>
                    {item.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed text-left font-normal flex-grow" id={`core-desc-${item.id}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Primary Flagship Engineering Pillars */}
          <div className="w-full pt-8 border-t border-slate-200/80">
            <div className="text-center mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800">Custom Engineering Expertise</h3>
              <p className="text-slate-500 text-sm mt-1">High-performance custom software engineering tailored to your specifications</p>
            </div>
            
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
                    onClick={(e) => {
                      e.stopPropagation();
                      const formValue = service.id === "mobile" ? "App Development" : service.id === "web" ? "Web Development" : "Backend/API";
                      if (isSelected) {
                        setFormData(prev => ({ ...prev, service: "" }));
                      } else {
                        setFormData(prev => ({ ...prev, service: formValue }));
                        setActiveCscService(null);
                        scrollToSection(contactRef);
                      }
                    }}
                    className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 flex flex-col items-start cursor-pointer select-none relative active:scale-[0.97] ${
                      isSelected 
                        ? "border-[#0052fe] ring-4 ring-[#0052fe]/20 shadow-xl shadow-blue-500/15 md:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 scale-[1.01]" 
                        : "border-slate-200/90 shadow-md shadow-slate-200/40 hover:border-blue-400 hover:shadow-xl md:hover:-translate-y-1 hover:bg-slate-50/10"
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

        </div>
      </section>

      {/* SECTION 4: WHY BUSINESSES TRUST SURAJ TECH HUB */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white" id="why-choose-section">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16" id="why-choose-header">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display block" id="why-choose-title">
              Why Businesses Trust <span className="text-[#0052fe] inline-block whitespace-nowrap">Suraj Tech Hub</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base mt-4 max-w-2xl mx-auto" id="why-choose-subtitle">
              Reliable software, practical support, and scalable systems built for growing businesses.
            </p>
            <div className="mt-6">
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-[#0052fe] hover:bg-blue-600 text-white font-semibold px-7 py-3 rounded-full text-sm md:text-base shadow-md hover:shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
                id="btn-discuss-project"
              >
                <span>Discuss Your Project</span>
              </button>
            </div>
          </div>

          {/* 6 Feature Image Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full" id="trust-features-grid">
            {trustFeaturesData.map((feature) => (
              <div 
                key={feature.id}
                id={`trust-card-${feature.id}`}
                onClick={() => scrollToSection(contactRef)}
                className="bg-white border-2 border-slate-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image Banner */}
                <div className="h-48 md:h-52 w-full overflow-hidden relative bg-slate-100 shrink-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300"></div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 md:p-7 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    {/* Title + Arrow Button Row */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#0052fe] transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0052fe] group-hover:text-white transition-colors duration-200 shrink-0 shadow-xs">
                        <ArrowRight size={15} className="stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Subtitle / Description */}
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
        </main>
      )}

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
