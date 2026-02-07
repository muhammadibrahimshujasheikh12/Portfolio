
# Muhammad Ibrahim | Executive Portfolio & AI Intelligence

A high-fidelity, professional portfolio and agency landing page for **Muhammad Ibrahim**, Founder of **DevVortex-Co**. This project showcases a sophisticated blend of modern web engineering, AI integration, and premium UI/UX design.



## 🚀 Key Features

- **AI Digital Concierge (Agent Ibrahim)**: An intelligent chat assistant powered by **Google Gemini 1.5 Flash**, trained to act as a professional concierge for recruiters and clients.
- **Dynamic Project Showcase**: Executive-level cards highlighting full-stack architectures and agency-scale solutions.
- **Career & Certification Timelines**: Professional tracking of work history and academic achievements (ACCP AI Specialist).
- **Secure Communication Gateway**: A contact system integrated with **EmailJS** for direct, verified inquiry routing.
- **Premium Aesthetic**: Built with a "Deep Onyx" theme, featuring glassmorphism, advanced Tailwind animations, and a "no-scroll" welcome loader.
- **Multilingual Support**: Highlighting proficiency in English, Urdu, Arabic, and Latvian.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/) (ESM / No-Build architecture)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Intelligence**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Gemini 3 Flash)
- **Communications**: [EmailJS](https://www.emailjs.com/)
- **Typography**: Space Grotesk & Inter (via Google Fonts)

## ⚙️ Configuration & Setup

To run this portfolio locally or deploy it, you need to configure the following environment variables or service IDs:

### 1. Gemini AI Integration
Ensure you have a Google AI Studio API Key.
- **Key**: `process.env.API_KEY`

### 2. EmailJS Contact Form
The form is pre-configured with the following IDs (Update these in `components/ContactForm.tsx` if using your own account):
- **Service ID**: `service_qmmtwjn`
- **Template ID**: `template_s8synjg`
- **Public Key**: `ogcjElzeQMV0_7oHb`

## 📁 Project Structure

```text
├── components/          # Reusable UI Components (Hero, Navbar, etc.)
├── services/            # API Services (Gemini AI logic)
├── constants.tsx        # Portfolio data (Projects, Skills, Icons)
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main application logic
├── index.html           # Entry point with Tailwind & ESM config
└── index.tsx            # React DOM mounting
```

## 🤝 Agency & Freelance
- **Agency**: [DevVortex-Co](https://devvortex-co.netlify.app)
- **Fiverr**: [mbrahimshuja](https://www.fiverr.com/mbrahimshuja)
- **Upwork**: [Muhammad Ibrahim Profile](https://www.upwork.com/freelancers/~0189a690f05537559e)

## 📄 License
This project is for personal portfolio use. All rights reserved &copy; 2025 Muhammad Ibrahim.
