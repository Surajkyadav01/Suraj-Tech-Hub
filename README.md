# 🚀 Suraj Tech Hub

<div align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" alt="Vite Badge" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer-motion&logoColor=white" alt="Framer Motion Badge" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" />
</div>

---

### 🌟 Introduction
**Suraj Tech Hub** is a premium, high-performance modern agency website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. It is fully optimized for lightning-fast speeds, responsive viewing across all screen matrices (Mobile, Tablet, Desktop), and features elegant state-of-the-art interactive micro-animations triggered via Framer Motion. 

The application offers structured categories for professional technological consulting alongside targeted **Online CSC & Government Portal Assistance Work**, serving as a seamless hybrid service hub.

---

## 🎨 Professional Visual Identity & UI Polish
*   **Depth and Separation**: All service panels and digital service grids incorporate deliberate boundary strokes (`border-slate-200`) and soft custom elevation shadows (`shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]`) to pop gracefully off the page—completely shielding UI cards from blending into the background.
*   **Rich Micro-Interactions**: Features custom hover configurations, physical active scale transitions (`active:scale-[0.98]`), dynamic glow backgrounds on item selection, and animated badges indicating currently active filters or items.
*   **Aesthetic Color Palettes**: Uses a robust High-Contrast Royal Blue (`#0052fe`) as the primary brand color, beautifully balanced with deep neutral slates and breathable off-white spaces matching the premium Swiss-Modern design structure.

---

## ⚡ Core Features & Interactivity

### 1. 💼 Multi-dimensional Services Section ("Our Expertise")
*   **No Auto-Selection by Default**: Cards remain unselected with default slate styling when loading, ensuring pure user intent triggers any designated highlight. 
*   **Glow selection**: Selecting a primary service (Mobile development, Web development, or Backend API Integration) outlines the container with a solid corporate blue brand border combined with a delicate matching blue ambient glow shadow.
*   **Form Auto-Populator**: Seamlessly updates the general query form's selected service dropdown on user click and scrolls down smoothly into focus.

### 2. 📱 Online Digital Services Grid (CSC Services)
*   Equipped with beautiful card integrations offering Hindi transcription labels (`आधार एवं पैन कार्ड सेवाएँ`, `रेज़्युमे एवं बायो-डाटा निर्माण`, `बैनर, पोस्टर एवं आईडी कार्ड`, etc.).
*   **Adaptive Selection Glow**: Clicking on any CSC service Card triggers a premium selection glow, injects optimized custom messaging templates indicating the selection directly into the query details field, and centers the Contact form immediately.
*   Includes diverse service cards:
    *   *Aadhar & PAN Services*
    *   *Resume & Professional Bio-Data Making*
    *   *Custom Banners, Posters & ID Card Designing*
    *   *Data Entry & Excel Office Typing*
    *   *Vector Logo & Custom Graphic Designing*
    *   *Government CSC Portals & Digital Cafe Consultation*

### 3. 🛡️ Dynamic Lead Capture Form
*   Fully validated local client-side state engine prevents blank submissions.
*   Integrates smart success feedback displaying user credentials.
*   Connects directly to server-side mail handling dynamically configuring the service field in the output headers.

---

## 🛠️ Tech Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **Vite** | Next-generation ultra-fast frontend tooling and project compiler. |
| **React 18** | High efficiency state management using functional hooks (`useState`, `useRef`). |
| **TypeScript** | Absolute type-safety with strict compile-time checks making UI execution foolproof. |
| **Tailwind CSS** | Premium responsive layout framework using modern fluid layouts and elevation utility tokens. |
| **Framer Motion** | Cinematic entrance animations, staggered fade-in layers, and layout transitions. |
| **Lucide React** | Consistent, crisp, scalable vector icons paired beautifully with typography. |

---

## 📦 How to Setup and Run Locally

Ensure you have [Node.js](https://nodejs.org/) installed on your local workstation.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Surajkyadav01/Suraj-Tech-Hub.git
   cd Suraj-Tech-Hub
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Compile production build**:
   ```bash
   npm run build
   ```

---

## 🚀 Deployed Successfully with GitHub Actions
The project features a continuous integration / continuous deployment (CI/CD) workflow.
*   **Workflow Path**: `.github/workflows/deploy.yml`
*   **Vite Base Path**: Configured securely to `/Suraj-Tech-Hub/` within `vite.config.ts`.
*   **Automated Action**: On every sequential push to the `main` branch, the workflow compiles the assets using `npm run build` and automatically pushes the build files directly into the isolated `gh-pages` deployment branch on GitHub.
