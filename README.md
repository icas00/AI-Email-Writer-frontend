frontend_readme: |
  # ✉️ Email Writer AI — Frontend (React + Vite)

  AI-powered Gmail assistant that helps you write quick, polite, and tone-aware replies — right inside Gmail.

  🌍 [Live Demo](https://ai-email-writer-4rk4.onrender.com/) ·  
  🧩 [Chrome Extension](https://chromewebstore.google.com/detail/email-writer/nefgnkboedlacmpgbkgjoknjeigpppln) ·  
  ⚙️ [Backend Repo](https://github.com/icas00/AI-Email-Writer-backend)

  ---

  ### 🔹 Overview
  Built with **React (Vite)**, this frontend powers both:
  - The **Chrome/Brave extension** injected into Gmail.
  - The **standalone web app** for quick access.

  It connects to a Spring Boot backend (via Cloudflare proxy) that handles AI responses using **Gemini API**.

  ---

  ### 🧠 Key Features
  - 📨 Floating **“Generate Reply”** button inside Gmail  
  - 🎯 Tone selector – *Professional / Friendly / Concise*  
  - ⚡ Auto-copy generated text  
  - 🗂️ Tabs for *History*, *Generator*
  - 💾 LocalStorage for past replies (no server data)  
  - 🔐 Privacy-first design  

  ---

  ### ⚙️ Tech
  React (Vite) · Chrome Extension (Manifest V3) · LocalStorage · Gemini API · Render

  ---

  ### 🚀 Quick Start
  ```bash
  git clone https://github.com/icas00/AI-Email-Writer-frontend.git
  npm install
  npm run dev
