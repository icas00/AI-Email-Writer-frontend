# 📧 Email Writer AI — Frontend (React + Vite)

An AI-powered Gmail assistant that helps users generate smart, polite, and context-aware replies — directly inside Gmail or from a standalone web app.

🌍 **Live Demo:** [ai-email-writer-4rk4.onrender.com](https://ai-email-writer-4rk4.onrender.com/)  
🧩 **Chrome Extension:** [Email Writer on Web Store](https://chromewebstore.google.com/detail/email-writer/nefgnkboedlacmpgbkgjoknjeigpppln)  
⚙️ **Backend Repo:** [AI Email Writer Backend (Spring Boot)](https://github.com/icas00/AI-Email-Writer-backend)

---

## ✨ Overview

This repository contains the **React (Vite)** frontend that powers both:
- The **Chrome/Brave extension** — injected directly into Gmail’s interface.
- The **standalone web application** — accessible via browser for testing and usage without Gmail.

Both versions use a common **Spring Boot backend** deployed on Render for AI response generation (via Gemini API).

---

## 🧠 Key Features

- 📨 **Gmail integration:** Floating “Generate Reply” button inside Gmail’s compose box.  
- 🧠 **AI-powered responses:** Uses Gemini API to create tone-aware replies (*Professional*, *Friendly*, *Concise*).  
- ⚡ **One-click copy:** Automatically copies generated text emails to clipboard (image-rich emails skipped).  
- 🗂️ **Tabbed interface:** Switch between *History*, *Generator*, and *Settings*.  
- 💾 **Local storage:** Saves previous replies directly in the browser (no server storage).  
- 🔐 **Privacy-friendly:** No email data sent to servers; only user prompt and tone are processed.

---

## 🛠️ Tech Stack

**Framework:** React (Vite)  
**UI:** Custom floating popup + tab-based design  
**AI Integration:** Gemini API (via backend endpoint `/generate`)  
**Local Storage:** Browser LocalStorage for saved replies  
**Browser APIs:** Chrome Extension Manifest V3  
**Deployment:** Render (web version) · Chrome Web Store (extension)

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js ≥ 16
- npm or yarn

### 1️⃣ Clone the repository
```bash
git clone https://github.com/icas00/AI-Email-Writer-frontend.git
cd AI-Email-Writer-frontend
