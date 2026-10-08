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
  Zap,
  Shield,
  Lock,
  Scale,
  FileCheck,
  AlertCircle,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- EMBEDDED INDUSTRIES SECTION ---

export interface IndustryCard {
  id: string;
  name: string;
}

export const industriesList: IndustryCard[] = [
  { id: "education", name: "EDUCATION" },
  { id: "hospital", name: "HOSPITAL" },
  { id: "finance", name: "FINANCE" },
  { id: "ecommerce", name: "E-COMMERCE" },
  { id: "manufacturing", name: "MANUFACTURING" },
  { id: "healthcare", name: "HEALTHCARE" },
  { id: "supply-chain", name: "SUPPLY CHAIN" },
  { id: "food-beverage", name: "FOOD & BEVERAGE" },
  { id: "small-business", name: "SMALL BUSINESS" },
  { id: "sports-fitness", name: "SPORTS & FITNESS" },
  { id: "law", name: "LAW" },
  { id: "tours-travel", name: "TOURS & TRAVEL" },
  { id: "startup", name: "STARTUP" },
  { id: "technology", name: "TECHNOLOGY" }
];

// High-fidelity colorful vector SVG illustrations matching the reference image precisely
export const IndustryIcons: Record<string, React.FC<{ className?: string }>> = {
  education: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Graduation Cap */}
      <polygon points="32,8 4,20 32,32 60,20" fill="#1e293b" />
      <polygon points="32,10 8,20 32,30 56,20" fill="#0f172a" />
      <path d="M16 26.5V40C16 46 23 50 32 50C41 50 48 46 48 40V26.5" fill="#1e293b" />
      <path d="M19 28V39C19 44 24.5 47.5 32 47.5C39.5 47.5 45 44 45 39V28" fill="#334155" />
      {/* Golden Button & Tassel */}
      <ellipse cx="32" cy="20" rx="3.5" ry="2" fill="#f59e0b" />
      <path d="M32 20C38 22 47 25 49 32L51 44" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="51" cy="45" r="2.5" fill="#f59e0b" />
      {/* Diploma Scroll */}
      <rect x="20" y="52" width="24" height="6" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="29" y="51" width="6" height="8" rx="1" fill="#ef4444" />
      <path d="M22 55H42" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),

  hospital: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Side wings */}
      <rect x="8" y="24" width="16" height="34" rx="2" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
      <rect x="40" y="24" width="16" height="34" rx="2" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
      {/* Main tower */}
      <rect x="18" y="14" width="28" height="44" rx="3" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
      {/* Hospital Cross Badge on top */}
      <circle cx="32" cy="23" r="6" fill="#10b981" />
      <rect x="30" y="19.5" width="4" height="7" rx="0.8" fill="#ffffff" />
      <rect x="28.5" y="21" width="7" height="4" rx="0.8" fill="#ffffff" />
      {/* Windows */}
      <rect x="22" y="32" width="4" height="4" rx="0.8" fill="#0284c7" />
      <rect x="28" y="32" width="4" height="4" rx="0.8" fill="#0284c7" />
      <rect x="34" y="32" width="4" height="4" rx="0.8" fill="#0284c7" />
      <rect x="38" y="32" width="4" height="4" rx="0.8" fill="#0284c7" />
      <rect x="22" y="39" width="4" height="4" rx="0.8" fill="#0284c7" />
      <rect x="28" y="39" width="4" height="4" rx="0.8" fill="#0284c7" />
      <rect x="34" y="39" width="4" height="4" rx="0.8" fill="#0284c7" />
      <rect x="38" y="39" width="4" height="4" rx="0.8" fill="#0284c7" />
      {/* Wing Windows */}
      <rect x="11" y="29" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      <rect x="17" y="29" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      <rect x="11" y="36" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      <rect x="17" y="36" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      <rect x="44" y="29" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      <rect x="50" y="29" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      <rect x="44" y="36" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      <rect x="50" y="36" width="3" height="3.5" rx="0.5" fill="#38bdf8" />
      {/* Emergency Entrance Door */}
      <rect x="28" y="47" width="8" height="11" rx="1.5" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
      <line x1="32" y1="47" x2="32" y2="58" stroke="#ffffff" strokeWidth="1" />
    </svg>
  ),

  finance: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Golden Money Sack */}
      <path d="M22 22C17 25 10 33 11 44C12 53 20 57 32 57C44 57 52 53 53 44C54 33 47 25 42 22C43 19 45 15 45 13C45 11 43 10 40 10C37 10 35 12 32 12C29 12 27 10 24 10C21 10 19 11 19 13C19 15 21 19 22 22Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
      {/* Sack Tie Ribbon */}
      <ellipse cx="32" cy="21" rx="10" ry="2.5" fill="#dc2626" />
      <polygon points="32,22 37,29 27,29" fill="#dc2626" />
      {/* Currency Dollar / Rupee Sign */}
      <circle cx="32" cy="38" r="8" fill="#f59e0b" />
      <path d="M32 32V44M29.5 34.5C29.5 34.5 31 33 33 33C35 33 36 34 36 35.5C36 37.5 32 38 32 38C32 38 28 38.5 28 40.5C28 42 29.5 43 32 43C34 43 35.5 42 35.5 42" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      {/* Golden Coins Stack at Base */}
      <ellipse cx="14" cy="53" rx="5" ry="2.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.2" />
      <ellipse cx="16" cy="50" rx="5" ry="2.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
      <ellipse cx="50" cy="53" rx="5" ry="2.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.2" />
    </svg>
  ),

  ecommerce: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Store Awning */}
      <path d="M12 24L16 12H48L52 24" fill="#38bdf8" />
      <path d="M12 24C12 27 15 29 18 27C21 29 25 29 27 27C29 29 33 29 35 27C37 29 41 29 43 27C45 29 49 29 52 24" fill="#ea580c" />
      <rect x="14" y="12" width="36" height="12" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
      {/* Awning Stripes */}
      <polygon points="18,12 24,12 21,24 15,24" fill="#ffffff" />
      <polygon points="30,12 36,12 34,24 28,24" fill="#ffffff" />
      <polygon points="42,12 48,12 47,24 41,24" fill="#ffffff" />
      {/* Shopping Cart Body */}
      <path d="M14 34H20L25 48H47L51 36H24" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Goods inside Cart */}
      <rect x="25" y="32" width="8" height="8" rx="1.5" fill="#ef4444" />
      <rect x="34" y="28" width="9" height="11" rx="1.5" fill="#3b82f6" />
      {/* Wheels */}
      <circle cx="28" cy="54" r="3.5" fill="#1e293b" />
      <circle cx="28" cy="54" r="1.5" fill="#ffffff" />
      <circle cx="44" cy="54" r="3.5" fill="#1e293b" />
      <circle cx="44" cy="54" r="1.5" fill="#ffffff" />
    </svg>
  ),

  manufacturing: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Smoke Clouds */}
      <circle cx="20" cy="11" r="3" fill="#cbd5e1" opacity="0.8" />
      <circle cx="22" cy="7" r="4" fill="#94a3b8" opacity="0.6" />
      <circle cx="33" cy="9" r="2.5" fill="#cbd5e1" opacity="0.8" />
      {/* Factory Chimneys */}
      <polygon points="18,28 17,16 23,16 22,28" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
      <polygon points="30,28 29,14 35,14 34,28" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
      {/* Sawtooth Factory Roof */}
      <polygon points="12,56 12,38 22,30 22,38 32,30 32,38 42,30 42,56" fill="#0284c7" stroke="#0f172a" strokeWidth="2.5" />
      {/* Industrial Warehouse Wall */}
      <rect x="42" y="34" width="14" height="22" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
      {/* Large Rotating Industrial Cog / Gear */}
      <circle cx="27" cy="46" r="6" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
      <circle cx="27" cy="46" r="2.5" fill="#ffffff" />
      {/* Windows */}
      <rect x="45" y="38" width="4" height="4" fill="#ffffff" />
      <rect x="50" y="38" width="4" height="4" fill="#ffffff" />
      <rect x="45" y="45" width="4" height="4" fill="#ffffff" />
      <rect x="50" y="45" width="4" height="4" fill="#ffffff" />
    </svg>
  ),

  healthcare: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Medical Doctor Bag / Kit */}
      <rect x="10" y="20" width="44" height="34" rx="7" fill="#ffffff" stroke="#e11d48" strokeWidth="3" />
      {/* Kit Handle */}
      <path d="M24 20V14C24 11.5 26 10 28.5 10H35.5C38 10 40 11.5 40 14V20" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
      {/* Prominent Red Healthcare Cross */}
      <rect x="29" y="27" width="6" height="20" rx="1.5" fill="#ef4444" />
      <rect x="22" y="34" width="20" height="6" rx="1.5" fill="#ef4444" />
      {/* Metal Corners & Latches */}
      <rect x="12" y="33" width="3" height="8" rx="1" fill="#cbd5e1" />
      <rect x="49" y="33" width="3" height="8" rx="1" fill="#cbd5e1" />
      {/* Stethoscope Accent */}
      <circle cx="47" cy="47" r="4.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
    </svg>
  ),

  "supply-chain": ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cargo Logistics Truck */}
      <rect x="8" y="22" width="28" height="24" rx="2" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
      {/* Truck Cabin */}
      <path d="M36 28H48L54 36V46H36V28Z" fill="#60a5fa" stroke="#1e3a8a" strokeWidth="2" />
      {/* Cabin Window */}
      <polygon points="40,31 46,31 50,36 40,36" fill="#e0f2fe" />
      {/* Truck Wheels */}
      <circle cx="18" cy="49" r="4.5" fill="#1e293b" />
      <circle cx="18" cy="49" r="2" fill="#94a3b8" />
      <circle cx="44" cy="49" r="4.5" fill="#1e293b" />
      <circle cx="44" cy="49" r="2" fill="#94a3b8" />
      {/* Delivery Box Parcel */}
      <rect x="16" y="14" width="12" height="10" rx="1" fill="#f59e0b" stroke="#b45309" strokeWidth="1.2" />
      <line x1="22" y1="14" x2="22" y2="24" stroke="#d97706" strokeWidth="1.2" />
      {/* Connected Network Nodes */}
      <circle cx="53" cy="18" r="3" fill="#10b981" />
      <path d="M28 17L50 18" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  ),

  "food-beverage": ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circular Emblem in Crimson Red */}
      <circle cx="32" cy="32" r="26" fill="#dc2626" />
      <circle cx="32" cy="32" r="22" fill="#b91c1c" />
      <circle cx="32" cy="32" r="20" stroke="#f87171" strokeWidth="1" strokeDasharray="3 3" />
      {/* Fork on Left */}
      <path d="M21 20V26C21 28.5 23 30 25 30V44M23 20V26M25 20V26M25 30H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dinner Plate in Center */}
      <circle cx="32" cy="32" r="7.5" fill="#ffffff" />
      <circle cx="32" cy="32" r="5" stroke="#ef4444" strokeWidth="1" />
      {/* Dining Knife on Right */}
      <path d="M39 20V44M39 20C41.5 20 43 23 43 28L39 30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  "small-business": ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neighborhood Store Awning */}
      <rect x="12" y="16" width="40" height="12" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
      <polygon points="16,16 22,16 20,28 14,28" fill="#ffffff" />
      <polygon points="26,16 32,16 30,28 24,28" fill="#ffffff" />
      <polygon points="36,16 42,16 40,28 34,28" fill="#ffffff" />
      <polygon points="46,16 52,16 50,28 44,28" fill="#ffffff" />
      {/* Scallop drops */}
      <circle cx="17" cy="28" r="3" fill="#ffffff" stroke="#991b1b" strokeWidth="1" />
      <circle cx="27" cy="28" r="3" fill="#ffffff" stroke="#991b1b" strokeWidth="1" />
      <circle cx="37" cy="28" r="3" fill="#ffffff" stroke="#991b1b" strokeWidth="1" />
      <circle cx="47" cy="28" r="3" fill="#ffffff" stroke="#991b1b" strokeWidth="1" />
      {/* Store Frontage Body */}
      <rect x="14" y="30" width="36" height="24" rx="1.5" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
      {/* Glass Display Window */}
      <rect x="18" y="35" width="14" height="14" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
      <line x1="20" y1="46" x2="28" y2="38" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Entrance Door */}
      <rect x="36" y="35" width="10" height="19" rx="1" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
      <circle cx="43" cy="44" r="1.2" fill="#fbbf24" />
    </svg>
  ),

  "sports-fitness": ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Treadmill Machine Base */}
      <polygon points="12,50 48,44 54,49 14,54" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
      {/* Treadmill Railing & Console */}
      <path d="M46 44L43 28H39" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Athletic Runner Person */}
      <circle cx="32" cy="14" r="4.5" fill="#0284c7" />
      <path d="M29 20L34 26L32 35" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arms in Sprint */}
      <path d="M24 23L31 22L37 19" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
      {/* Forward Leg */}
      <path d="M32 35L38 41L45 42" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Back Leg */}
      <path d="M32 35L26 38L21 46" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  law: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Pillar & Pedestal */}
      <rect x="22" y="52" width="20" height="5" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
      <line x1="32" y1="16" x2="32" y2="52" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="32" cy="14" r="3.5" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
      {/* Balance Beam */}
      <path d="M14 20C23 18 41 18 50 20" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      {/* Left Pan & Chains */}
      <line x1="14" y1="21" x2="9" y2="34" stroke="#d97706" strokeWidth="1.5" />
      <line x1="14" y1="21" x2="19" y2="34" stroke="#d97706" strokeWidth="1.5" />
      <path d="M8 34C8 38 20 38 20 34Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
      {/* Right Pan & Chains */}
      <line x1="50" y1="21" x2="45" y2="34" stroke="#d97706" strokeWidth="1.5" />
      <line x1="50" y1="21" x2="55" y2="34" stroke="#d97706" strokeWidth="1.5" />
      <path d="M44 34C44 38 56 38 56 34Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
    </svg>
  ),

  "tours-travel": ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue Earth Globe */}
      <circle cx="30" cy="34" r="20" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
      {/* Continents in Green */}
      <path d="M22 22C24 24 28 23 27 27C26 31 32 30 31 35C30 38 26 37 25 41C24 45 20 44 19 46C14 43 11 36 12 30C13 25 18 21 22 22Z" fill="#10b981" />
      <path d="M38 24C41 27 46 29 48 35C45 39 42 41 38 41C35 41 36 34 38 31C39 28 36 26 38 24Z" fill="#10b981" />
      {/* Orbital Flight Path */}
      <ellipse cx="32" cy="32" rx="26" ry="12" transform="rotate(-25 32 32)" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
      {/* Airplane */}
      <g transform="translate(34, 10) rotate(15)">
        <polygon points="12,4 16,14 10,14" fill="#ffffff" stroke="#1e293b" strokeWidth="1" />
        <polygon points="12,0 14,16 10,16" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.2" />
        <polygon points="8,10 16,10 12,14" fill="#3b82f6" />
        <polygon points="10,16 14,16 12,18" fill="#ef4444" />
      </g>
    </svg>
  ),

  startup: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Jet Flame Exhaust */}
      <path d="M22 44C20 50 17 56 16 58C20 56 25 54 28 50" fill="#f97316" />
      <path d="M21 45C22 49 20 53 19 55C22 53 24 51 26 48" fill="#fde047" />
      {/* Rocket Main Body angled at 45 deg */}
      <path d="M24 38L38 24C44 18 48 10 52 8C50 12 42 16 36 22L22 36" fill="#e2e8f0" />
      <path d="M22 36C22 36 20 40 24 44C28 48 32 46 32 46L44 34C48 30 52 24 52 14C42 14 36 18 32 22L20 34" fill="#ffffff" stroke="#1e40af" strokeWidth="2.5" />
      {/* Rocket Fins */}
      <path d="M22 44L14 48L18 38" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
      <path d="M36 28L46 32L42 24" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
      {/* Porthole Window */}
      <circle cx="36" cy="24" r="4.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
      <circle cx="37" cy="23" r="1.5" fill="#ffffff" />
      {/* Sparkle Stars */}
      <polygon points="12,16 13,20 17,21 13,22 12,26 11,22 7,21 11,20" fill="#fbbf24" />
      <polygon points="50,46 51,48 53,49 51,50 50,52 49,50 47,49 49,48" fill="#fbbf24" />
    </svg>
  ),

  technology: ({ className = "w-14 h-14" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* High-Tech Circuit Board Circle */}
      <circle cx="32" cy="32" r="26" fill="#0284c7" />
      <circle cx="32" cy="32" r="23" fill="#0369a1" />
      {/* Microchip Processor Core */}
      <rect x="22" y="22" width="20" height="20" rx="3.5" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
      {/* Chip Internal Die */}
      <rect x="26" y="26" width="12" height="12" rx="2" fill="#38bdf8" />
      {/* Processor Pins (Top, Bottom, Left, Right) */}
      <line x1="26" y1="18" x2="26" y2="22" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="18" x2="32" y2="22" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="18" x2="38" y2="22" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="42" x2="26" y2="46" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="42" x2="32" y2="46" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="42" x2="38" y2="46" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="26" x2="22" y2="26" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="32" x2="22" y2="32" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="38" x2="22" y2="38" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="26" x2="46" y2="26" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="32" x2="46" y2="32" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="38" x2="46" y2="38" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      {/* Circuit Trace Dots */}
      <circle cx="16" cy="16" r="2" fill="#38bdf8" />
      <circle cx="48" cy="16" r="2" fill="#38bdf8" />
      <circle cx="48" cy="48" r="2" fill="#38bdf8" />
      <circle cx="16" cy="48" r="2" fill="#38bdf8" />
    </svg>
  )
};

export const IndustriesSection: React.FC = () => {
  return (
    <section 
      id="industries-section" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-t border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with exact Diamond Accent from reference image */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-display">
            Industries We Serve
          </h2>

          {/* Exact 5-diamond accent decoration from reference image */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-4" aria-hidden="true">
            <span className="w-2.5 h-2.5 rotate-45 bg-[#0052fe] rounded-[1px]"></span>
            <span className="w-2.5 h-2.5 rotate-45 bg-[#0052fe] rounded-[1px]"></span>
            <span className="w-3.5 h-3.5 rotate-45 bg-[#0052fe] rounded-[1px] shadow-sm shadow-blue-500/50"></span>
            <span className="w-2.5 h-2.5 rotate-45 bg-[#0052fe] rounded-[1px]"></span>
            <span className="w-2.5 h-2.5 rotate-45 bg-[#0052fe] rounded-[1px]"></span>
          </div>

          <p className="text-slate-600 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering tailored digital systems, high-performance web applications, and modern IT solutions across diverse business domains.
          </p>
        </div>

        {/* 14 Industry Cards Grid - Highly visible, sharp white cards on soft grey background */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4 md:gap-5">
          {industriesList.map((item) => {
            const IconComponent = IndustryIcons[item.id] || IndustryIcons.technology;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center border-2 border-slate-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,82,254,0.12)] hover:border-[#0052fe] hover:-translate-y-2 transition-all duration-300 select-none min-h-[148px] sm:min-h-[160px]"
              >
                {/* Illustrated Vector Icon with smooth hover animation */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
                  <IconComponent className="w-full h-full drop-shadow-sm" />
                </div>

                {/* Industry Label - Bold, clean, high-contrast, transitions to brand blue on hover */}
                <div className="w-full mt-2 pt-2 border-t border-slate-100">
                  <h3 className="text-xs sm:text-[13px] font-black tracking-wider text-slate-800 uppercase transition-colors duration-200 group-hover:text-[#0052fe] leading-tight">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- EMBEDDED PRIVACY POLICY VIEW ---

interface PrivacyPolicyViewProps {
  onBackToHome: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBackToHome }) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="privacy-policy-page">
      {/* Hero Header */}
      <div className="bg-[#0c1524] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-yellow-300 hover:text-yellow-400 mb-4 transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
              <Shield size={24} />
            </span>
            <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
              Legal & Trust Center
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Effective Date: October 2026 • Last Updated: October 2026. Learn how Suraj Tech Hub collects, safeguards, and respects your business and personal data.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sticky Left Navigation Summary */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <span className="text-[11px] font-black tracking-wider text-slate-400 uppercase block mb-2">
                Quick Navigation
              </span>
              {[
                { title: "1. Overview & Scope", href: "#overview" },
                { title: "2. Information We Collect", href: "#info-collected" },
                { title: "3. How Data Is Used", href: "#how-used" },
                { title: "4. Client Confidentiality (NDA)", href: "#confidentiality" },
                { title: "5. Third-Party Integrations", href: "#third-parties" },
                { title: "6. Security & Encryption", href: "#security" },
                { title: "7. Data Rights & Retention", href: "#retention" },
                { title: "8. Grievance & Contact", href: "#contact-grievance" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="block text-xs font-semibold text-slate-600 hover:text-[#0052fe] hover:translate-x-1 transition-all py-1"
                >
                  {link.title}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onBackToHome}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer text-center block"
                >
                  Return to Website
                </button>
              </div>
            </div>
          </div>

          {/* Policy Text Articles */}
          <div className="lg:col-span-3 space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            {/* Section 1 */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  1
                </span>
                Overview & Scope
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Welcome to <strong>Suraj Tech Hub</strong> ("Company", "we", "our", or "us"). We provide custom software engineering, full-stack web and mobile application development, IT consulting, cloud infrastructure management, and online citizen support services.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                This Privacy Policy describes our policies and practices regarding the collection, use, protection, and disclosure of information when you browse our website, initiate inquiries through our digital channels, or contract our professional development and technical services.
              </p>
            </section>

            {/* Section 2 */}
            <section id="info-collected" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  2
                </span>
                Information We Collect
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We only collect information that is strictly necessary to evaluate project inquiries, deliver tailored software solutions, and provide post-deployment support:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">A. Contact & Communication Details</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Name, email address, phone/WhatsApp number, company name, location, and project brief submitted via our contact and consultation inquiry forms.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">B. Project Specifications & Credentials</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For active projects, we may receive API keys, database credentials, design files, or brand assets provided directly by you to enable integration and deployment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">C. Technical Browsing Analytics</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Standard non-identifying telemetry such as browser type, operating system, referring URL, and approximate device screen resolution to optimize performance and responsiveness.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-used" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  3
                </span>
                How We Use Your Information
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0052fe] shrink-0 mt-0.5" />
                  <span><strong>Project Execution:</strong> To develop, test, configure, and deploy contracted web applications, mobile apps, and digital platforms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0052fe] shrink-0 mt-0.5" />
                  <span><strong>Communication:</strong> To provide sprint updates, technical consultations, milestone completions, and invoice receipts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0052fe] shrink-0 mt-0.5" />
                  <span><strong>Support & Warranty:</strong> To assist you during the post-launch bug-fix period and ongoing maintenance schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0052fe] shrink-0 mt-0.5" />
                  <span><strong>Zero Spam Guarantee:</strong> We never sell, rent, trade, or monetize your contact information to third-party telemarketers or advertisers.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="confidentiality" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  4
                </span>
                Client Confidentiality & Non-Disclosure (NDA)
              </h2>
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <Lock size={16} className="text-amber-700" />
                  <span>Strict Intellectual Property & Business Confidentiality</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Suraj Tech Hub honors strict confidentiality regarding your proprietary business logic, client lists, internal algorithms, and unreleased product roadmaps. All shared assets remain your exclusive property.
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Upon project completion and clearance of contracted fees, complete ownership of the custom source code is handed over to the client.
              </p>
            </section>

            {/* Section 5 */}
            <section id="third-parties" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  5
                </span>
                Third-Party Integrations & Infrastructure
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                In building client applications, we integrate with industry-standard, secure third-party services as requested:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="block text-slate-900 mb-0.5">Code Hosting & CI/CD:</strong>
                  GitHub, GitHub Pages, Gitlab, Vercel, Firebase
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="block text-slate-900 mb-0.5">Payment Gateways:</strong>
                  Razorpay, Stripe, UPI Gateway integration
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="block text-slate-900 mb-0.5">Cloud Hosting:</strong>
                  AWS, Google Cloud Platform, Hostinger, DigitalOcean
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="block text-slate-900 mb-0.5">Messaging APIs:</strong>
                  WhatsApp Cloud API, Twilio, SendGrid
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="security" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  6
                </span>
                Security & Data Safeguards
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We apply modern engineering best practices to protect all client deliverables and communications:
              </p>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Enforced HTTPS/TLS encryption across all live web instances.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Environment variable isolation for database passwords and API tokens (no hardcoded secrets).</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Role-based access controls and sanitization against SQL injection, XSS, and CSRF vulnerabilities.</span>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="retention" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  7
                </span>
                Data Rights & Retention
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                You have the right to request access to the personal or business information we hold, request corrections, or ask for the deletion of temporary project staging files after final deployment.
              </p>
            </section>

            {/* Section 8 */}
            <section id="contact-grievance" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  8
                </span>
                Grievance Officer & Contact Information
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                If you have any questions, clarifications, or requests concerning this Privacy Policy, please reach out to our grievance team directly:
              </p>
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white">Suraj Tech Hub Support & Legal Desk</h3>
                  <p className="text-xs text-slate-400 mt-1">Lead Software Engineer & Founder: Sunil Kumar Yadav (Suraj)</p>
                  <p className="text-xs text-yellow-300 mt-1 flex items-center gap-1.5">
                    <Mail size={13} />
                    <span>ksurajyadav93@gmail.com</span>
                  </p>
                </div>

                <button
                  onClick={onBackToHome}
                  className="px-5 py-2.5 rounded-xl bg-[#0052fe] hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  Return to Home
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- EMBEDDED TERMS & CONDITIONS VIEW ---

interface TermsConditionsViewProps {
  onBackToHome: () => void;
}

export const TermsConditionsView: React.FC<TermsConditionsViewProps> = ({ onBackToHome }) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800" id="terms-conditions-page">
      {/* Hero Header */}
      <div className="bg-[#0c1524] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-yellow-300 hover:text-yellow-400 mb-4 transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
              <Scale size={24} />
            </span>
            <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
              Service Agreement & Policies
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            Terms & Conditions
          </h1>

          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Effective Date: October 2026 • Last Updated: October 2026. Standard service delivery agreement, project scopes, milestones, warranties, and code ownership policies for Suraj Tech Hub.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sticky Left Navigation Summary */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <span className="text-[11px] font-black tracking-wider text-slate-400 uppercase block mb-2">
                Quick Navigation
              </span>
              {[
                { title: "1. Acceptance of Terms", href: "#acceptance" },
                { title: "2. Services & Scopes", href: "#services-scope" },
                { title: "3. Milestones & Payments", href: "#milestones-payment" },
                { title: "4. Code Ownership (IP)", href: "#ip-ownership" },
                { title: "5. Revisions & Warranty", href: "#revisions-warranty" },
                { title: "6. Client Responsibilities", href: "#client-duties" },
                { title: "7. Third-Party Platforms", href: "#third-party-platforms" },
                { title: "8. Limitation of Liability", href: "#liability" },
                { title: "9. Governing Law", href: "#governing-law" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="block text-xs font-semibold text-slate-600 hover:text-[#0052fe] hover:translate-x-1 transition-all py-1"
                >
                  {link.title}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onBackToHome}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer text-center block"
                >
                  Return to Website
                </button>
              </div>
            </div>
          </div>

          {/* Terms Articles */}
          <div className="lg:col-span-3 space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  1
                </span>
                Acceptance of Terms
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                By hiring <strong>Suraj Tech Hub</strong> ("Company", "we", "our") for website design, full-stack application development, software engineering, cloud maintenance, or online services, you ("Client", "User") agree to be bound by these Terms and Conditions.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you are entering into this agreement on behalf of a company, organization, or enterprise, you represent that you have the full legal authority to bind such entity to these provisions.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services-scope" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  2
                </span>
                Services & Project Scopes of Work (SOW)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Each project undertaken by Suraj Tech Hub begins with an agreed Scope of Work (SOW), detailed proposal, or quotation defining:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 mb-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0052fe] shrink-0 mt-0.5" />
                  <span>Exact project deliverables, features, pages, and architectural specifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0052fe] shrink-0 mt-0.5" />
                  <span>Target sprint milestones, review periods, and final release schedule.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0052fe] shrink-0 mt-0.5" />
                  <span>Change Request Clause: Additional features requested outside the initial SOW are billed separately at our agreed hourly or milestone rate.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="milestones-payment" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  3
                </span>
                Payment Milestones & Invoicing
              </h2>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase block">Milestone 1</span>
                    <span className="text-lg font-black text-[#0052fe]">Advance / Kickoff</span>
                    <span className="text-[11px] text-slate-500 block mt-1">To initiate architecture, design & core setup</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase block">Milestone 2</span>
                    <span className="text-lg font-black text-slate-900">Prototype Review</span>
                    <span className="text-[11px] text-slate-500 block mt-1">Upon functional staging preview approval</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase block">Milestone 3</span>
                    <span className="text-lg font-black text-emerald-600">Final Deployment</span>
                    <span className="text-[11px] text-slate-500 block mt-1">Prior to live domain push & source code handover</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Invoices must be settled within 7 days of milestone sign-off. Payments can be completed securely via UPI, Bank Transfer (IMPS/NEFT), or digital payment gateways.
              </p>
            </section>

            {/* Section 4 */}
            <section id="ip-ownership" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  4
                </span>
                Intellectual Property & Source Code Ownership
              </h2>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-900 leading-relaxed mb-3 font-medium">
                <strong>100% Client Ownership Guarantee:</strong> Once the contracted project fees have been paid in full, all custom source code, design assets, database structures, and assets engineered specifically for the client become the exclusive intellectual property of the Client.
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Suraj Tech Hub retains the right to display the completed public project interface (screenshots and URL) in our agency portfolio and case studies to demonstrate our demonstrated capabilities.
              </p>
            </section>

            {/* Section 5 */}
            <section id="revisions-warranty" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  5
                </span>
                Revisions & 30-Day Bug-Fix Warranty
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Quality is our core foundation. We back our software engineering with a generous warranty period:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>30-Day Free Bug Fixing:</strong> Following live deployment, any bugs or functional deviations from the agreed SOW are rectified free of charge for 30 consecutive days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Design Iterations:</strong> Up to 2 rounds of standard revision during the UI/UX stage are included in every package.</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="client-duties" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  6
                </span>
                Client Responsibilities
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Timely project delivery requires collaboration. Clients are responsible for providing needed brand assets (logos, high-res photos, text copy), API credentials (SMS, Payment, Maps), and prompt feedback during milestone reviews within 5 business days.
              </p>
            </section>

            {/* Section 7 */}
            <section id="third-party-platforms" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  7
                </span>
                Third-Party Platforms & Service Outages
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Suraj Tech Hub is not liable for temporary service interruptions caused by third-party cloud infrastructure (such as GitHub, AWS, Google Cloud, Razorpay, or domain registrar outages) outside our reasonable control. We maintain disaster recovery and multi-region backups where contracted.
              </p>
            </section>

            {/* Section 8 */}
            <section id="liability" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  8
                </span>
                Limitation of Liability
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                To the maximum extent permitted by applicable law, Suraj Tech Hub's aggregate liability under any contract shall be strictly limited to the total fees actually paid by the Client to Suraj Tech Hub for the specific project under dispute.
              </p>
            </section>

            {/* Section 9 */}
            <section id="governing-law" className="scroll-mt-24 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052fe] flex items-center justify-center text-xs font-black">
                  9
                </span>
                Governing Law & Jurisdiction
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. Any legal dispute or controversy arising out of or in connection with these services shall be subject to the exclusive jurisdiction of the competent courts in Uttar Pradesh, India.
              </p>
              
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white">Need a Signed Custom Contract or NDA?</h3>
                  <p className="text-xs text-slate-400 mt-1">We readily sign bilateral enterprise NDAs and bespoke master services agreements (MSAs).</p>
                  <p className="text-xs text-yellow-300 mt-1 flex items-center gap-1.5">
                    <Mail size={13} />
                    <span>ksurajyadav93@gmail.com</span>
                  </p>
                </div>

                <button
                  onClick={onBackToHome}
                  className="px-5 py-2.5 rounded-xl bg-[#0052fe] hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  Return to Home
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};



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
  const [currentView, setCurrentView] = useState<"home" | "about" | "privacy" | "terms">("home");
  
  // Real projects list (using direct real imagery)
  const projectsList = [
    {
      id: "prakash-hospital",
      category: "Web",
      label: "Healthcare & Patient Portal",
      title: "Prakash Hospital",
      description: "Official website for Prakash Hospital, Suriyawan (Bhadohi) — 24x7 Emergency, Super Speciality Care, OPD Booking & Patient Portal.",
      imgUrl: "https://cdn.jsdelivr.net/gh/Surajkyadav01/Suraj-Tech-Hub@main/public/Prakash%20Hospital.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "OPD Booking", "Healthcare Portal"],
      placeholder: "Prakash Hospital Live",
      domain: "prakashospital.com",
      liveUrl: "https://www.prakashospital.com/",
      ctaText: "Hi Suraj Tech Hub, I am very interested in developing a hospital, clinic, or healthcare web application similar to 'Prakash Hospital'. Let's discuss."
    },
    {
      id: "villasell",
      category: "Web",
      label: "Real Estate & Property Marketplace",
      title: "VillaSell",
      description: "VillaSell — India's premier zero-brokerage real estate & property marketplace built with React 19, TypeScript, Vite & Tailwind CSS.",
      imgUrl: "https://cdn.jsdelivr.net/gh/Surajkyadav01/Suraj-Tech-Hub@main/public/VillaSell.png",
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Real Estate Marketplace"],
      placeholder: "VillaSell Live",
      domain: "villasell.com",
      liveUrl: "https://www.villasell.com/",
      ctaText: "Hi Suraj Tech Hub, I am interested in building a real estate, property listing, or marketplace platform similar to 'VillaSell'. Let's connect."
    },
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
      liveUrl: "",
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
      liveUrl: "",
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
      liveUrl: "https://surajkyadav01.github.io/Suraj-Tech-Hub/",
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
    view: "home" | "about" | "privacy" | "terms", 
    subTab?: "company" | "vision" | "leadership", 
    sectionRef?: RefObject<HTMLDivElement | null>
  ) => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    
    if (view === "about") {
      setCurrentView("about");
      if (subTab) setActiveAboutSubTab(subTab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (view === "privacy") {
      setCurrentView("privacy");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (view === "terms") {
      setCurrentView("terms");
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
      ) : currentView === "privacy" ? (
        <PrivacyPolicyView onBackToHome={() => navigateTo("home", undefined, homeRef)} />
      ) : currentView === "terms" ? (
        <TermsConditionsView onBackToHome={() => navigateTo("home", undefined, homeRef)} />
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

      {/* SECTION 3: INDUSTRIES WE SERVE */}
      <IndustriesSection />

      {/* SECTION 4: WHY BUSINESSES TRUST SURAJ TECH HUB */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-100" id="why-choose-section">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" id="projects-grid">
            {projectsList.map((project) => {
              // Map filtering categories
              if (projectCategory !== "All") {
                if (projectCategory === "Web" && project.category !== "Web") return null;
                if (projectCategory === "Mobile" && project.category !== "Mobile") return null;
                if (projectCategory === "API" && project.category !== "API") return null;
              }

              const hasLiveUrl = Boolean(project.liveUrl);

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
                      {/* Project Preview Mockup */}
                      {hasLiveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative group/preview cursor-pointer mb-6"
                          title={`Click to open ${project.title} live website in new tab`}
                        >
                          {project.category === "Mobile" ? (
                            /* Smartphone Mock */
                            <div className="w-full bg-slate-100 aspect-[4/3] rounded-2xl flex items-center justify-center overflow-hidden relative border border-slate-100 shadow-inner group-hover/preview:-translate-y-1 transition-transform duration-300">
                              <div className="w-36 bg-slate-950 h-full rounded-t-3xl border-x-4 border-t-4 border-slate-800 p-1.5 shadow-2xl relative flex flex-col mt-4">
                                <div className="absolute top-1.5 left-10 right-10 h-2 bg-black rounded-full z-20 flex items-center justify-center">
                                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                                </div>
                                <div className="bg-slate-900 w-full h-full rounded-t-2xl overflow-hidden relative flex flex-col">
                                  <img
                                    src={project.imgUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top group-hover/preview:scale-110 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => {
                                      if (project.id === "prakash-hospital") {
                                        e.currentTarget.src = "/prakash-hospital.png";
                                      }
                                    }}
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
                            <div className="w-full bg-slate-100 rounded-2xl flex flex-col overflow-hidden relative border border-slate-200/90 shadow-sm group-hover/preview:-translate-y-1 transition-all duration-300">
                              <div className="flex items-center justify-between px-3 md:px-4 py-2 bg-slate-100 border-b border-slate-200/80 shrink-0 select-none">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                  <span className="ml-2 inline-flex items-center gap-1 text-[9px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span>Live Site</span>
                                  </span>
                                </div>
                                <div className="px-2.5 py-0.5 bg-white border border-slate-200/80 rounded text-[9px] font-mono text-slate-500 hover:text-[#0052fe] transition-colors truncate max-w-[170px] flex items-center gap-1 shadow-xs">
                                  <span>🔒</span>
                                  <span className="truncate">{project.domain || "app-preview.net"}</span>
                                  <ExternalLink size={9} className="shrink-0 text-slate-400" />
                                </div>
                              </div>
                              <div className="w-full bg-slate-50 flex items-center justify-center overflow-hidden">
                                <img
                                  src={project.imgUrl}
                                  alt={project.title}
                                  className="w-full h-auto block object-contain group-hover/preview:scale-[1.02] transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                  loading="lazy"
                                  decoding="async"
                                  onError={(e) => {
                                    if (project.id === "prakash-hospital") {
                                      e.currentTarget.src = "/prakash-hospital.png";
                                    } else if (project.id === "villasell") {
                                      e.currentTarget.src = "/villasell.png";
                                    }
                                  }}
                                  width={1350}
                                  height={637}
                                />
                              </div>
                            </div>
                          )}

                          {/* Hover Overlay Hint */}
                          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center pointer-events-none">
                            <span className="bg-slate-900/90 backdrop-blur-md text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-xl border border-white/20 flex items-center gap-1.5 transform translate-y-2 group-hover/preview:translate-y-0 transition-transform">
                              <Globe size={13} className="text-blue-400" />
                              <span>Explore Live Project</span>
                              <ExternalLink size={12} className="stroke-[2.5]" />
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className="mb-6">
                          {project.category === "Mobile" ? (
                            /* Smartphone Mock */
                            <div className="w-full bg-slate-100 aspect-[4/3] rounded-2xl flex items-center justify-center overflow-hidden relative border border-slate-100 shadow-inner group-hover:-translate-y-1 transition-transform duration-300">
                              <div className="w-36 bg-slate-950 h-full rounded-t-3xl border-x-4 border-t-4 border-slate-800 p-1.5 shadow-2xl relative flex flex-col mt-4">
                                <div className="absolute top-1.5 left-10 right-10 h-2 bg-black rounded-full z-20 flex items-center justify-center">
                                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                                </div>
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
                            <div className="w-full bg-slate-100 rounded-2xl flex flex-col overflow-hidden relative border border-slate-200/90 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                              <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 border-b border-slate-200/80 shrink-0 select-none">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                <div className="ml-2 px-3 py-0.5 bg-white border border-slate-200/50 rounded text-[9px] font-mono text-slate-400 truncate w-40 flex items-center justify-center gap-1">
                                  <span>🔒</span> {project.domain || "app-preview.net"}
                                </div>
                              </div>
                              <div className="w-full bg-slate-50 flex items-center justify-center overflow-hidden relative">
                                <img
                                  src={project.imgUrl}
                                  alt={project.title}
                                  className="w-full h-auto block object-contain group-hover:scale-105 transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                  loading="lazy"
                                  decoding="async"
                                  width={600}
                                  height={350}
                                />
                              </div>
                            </div>
                          )}
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

                      {/* Title with link support */}
                      {hasLiveUrl ? (
                        <div className="mb-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-bold text-slate-900 hover:text-[#0052fe] transition-colors font-display inline-flex items-center gap-2 group/titleLink"
                            title={`Open ${project.title} in new tab`}
                          >
                            <span>{project.title}</span>
                            <ExternalLink size={16} className="text-slate-400 group-hover/titleLink:text-[#0052fe] group-hover/titleLink:translate-x-0.5 group-hover/titleLink:-translate-y-0.5 transition-all stroke-[2.5]" />
                          </a>
                        </div>
                      ) : (
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{project.title}</h3>
                      )}

                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-bold font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {hasLiveUrl ? (
                      <div className="grid grid-cols-2 gap-2.5 mt-8">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0052fe] text-white hover:bg-blue-600 py-3 px-2 sm:px-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer text-center"
                          id={`live-btn-${project.id}`}
                        >
                          <Globe size={14} className="shrink-0" />
                          <span>Live Demo</span>
                          <ExternalLink size={12} className="shrink-0 stroke-[2.5]" />
                        </a>
                        <button
                          onClick={() => {
                            setFormData({
                              ...formData,
                              service: project.category === "Web" ? "Web Development" : project.category === "Mobile" ? "App Development" : "Backend/API",
                              message: project.ctaText
                            });
                            scrollToSection(contactRef);
                          }}
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 py-3 px-2 sm:px-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all active:scale-[0.98] flex items-center justify-center gap-1 cursor-pointer text-center border border-slate-200/80"
                          id={`inquire-btn-${project.id}`}
                        >
                          <span>Build Similar</span>
                          <ArrowRight size={13} className="shrink-0" />
                        </button>
                      </div>
                    ) : (
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
                    )}
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
      <footer className="bg-[#090f1a] text-slate-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800" id="app-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div 
            className="flex items-center gap-3 select-none cursor-pointer group shrink-0"
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

          {/* Legal Policy Links - Strictly only Privacy Policy & Terms & Conditions */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <span className="text-slate-600 font-bold select-none">|</span>
            <button 
              onClick={() => navigateTo("privacy")} 
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer px-1 py-0.5 font-bold hover:underline whitespace-nowrap"
              id="footer-link-privacy"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600 font-bold select-none">|</span>
            <button 
              onClick={() => navigateTo("terms")} 
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer px-1 py-0.5 font-bold hover:underline whitespace-nowrap"
              id="footer-link-terms"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-600 font-bold select-none">|</span>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 text-center md:text-right">
            <div className="flex items-center gap-2.5" id="footer-socials-row">
              {socialLinks.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700/80 flex items-center justify-center transition-all duration-300 group hover:-translate-y-0.5"
                    title={`Follow us on ${social.name}`}
                    id={`footer-social-${social.name.toLowerCase()}`}
                  >
                    <IconComp className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            <div id="footer-copyright-box">
              <p className="text-xs sm:text-sm text-slate-400 whitespace-nowrap" id="footer-copyright-text">
                © 2026 Suraj Tech Hub. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
