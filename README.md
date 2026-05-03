# Binyam Abraha — Personal Portfolio

> A professional portfolio website built to showcase projects, technical skills, and experience across Data Analytics, Software Engineering, iOS Development, AI/ML, and Robotics.

🌐 **Live Site:** [binyamabraha.github.io](https://binyamabraha.github.io)

---

## 📋 Project Overview

This portfolio was built as both a class project (Web Development, Cal State East Bay) and a real professional asset for career use. It is designed to appeal to recruiters and employers across multiple technical domains.

### Goals
- Showcase 3–5 technical projects across Data, iOS, AI, and Hardware
- Demonstrate front-end development skills with clean, responsive design
- Provide a functional contact form and downloadable resume
- Serve as a living document of my technical growth

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom, CSS variables, dark/light mode) |
| Interactivity | Vanilla JavaScript (DOM manipulation) |
| Animations | AOS.js (Animate On Scroll) |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Syne + DM Sans) |
| Contact Form | EmailJS |
| Lightbox | GLightbox |
| Blog / Markdown | Marked.js |
| Hosting | GitHub Pages |

---

## 📁 File Structure

```
BinyamAbraha.github.io/
│
├── index.html          ← Home: Hero, About, Skills
├── projects.html       ← Projects with filter & lightbox
├── blog.html           ← Blog with Markdown rendering
├── contact.html        ← Contact form + social links
│
├── css/
│   ├── style.css       ← Global design system & variables
│   ├── nav.css         ← Navigation styles
│   └── animations.css  ← Keyframes & transitions
│
├── js/
│   ├── main.js         ← Dark mode, nav scroll, mobile menu
│   ├── projects.js     ← Project filter & lightbox logic
│   └── blog.js         ← Markdown blog rendering
│
├── assets/
│   ├── resume.pdf      ← Downloadable resume
│   └── images/         ← Profile photo & project screenshots
│
└── README.md
```

---

## ✨ Features

- **Dark / Light mode** — toggle with memory via localStorage
- **Animated typewriter** — cycles through roles in the hero section
- **Project filter** — filter by category (Data, iOS, AI, Hardware)
- **Lightbox** — click project screenshots to expand
- **Blog** — posts written in Markdown, rendered live in browser
- **Contact form** — sends real emails via EmailJS (no backend needed)
- **Downloadable resume** — direct PDF link
- **Fully responsive** — mobile, tablet, and desktop
- **Smooth animations** — AOS scroll reveals throughout
- **Accessible** — semantic HTML, ARIA labels, reduced-motion support

---

## 🚀 Setup & Running Locally

No build tools required. Just open `index.html` in your browser.

```bash
# Clone the repo
git clone https://github.com/BinyamAbraha/BinyamAbraha.github.io.git

# Open in browser
open index.html
```

### EmailJS Setup (for contact form)
1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add an Email Service and create a Template
3. Replace the placeholder keys in `contact.html`:
   - `YOUR_PUBLIC_KEY`
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`

---

## 📸 Adding Your Own Content

### Profile Photo
Replace the placeholder in `index.html`:
```html
<!-- Find this comment and replace: -->
<img src="assets/images/profile.jpg" alt="Binyam Abraha">
```

### Project Screenshots
Add images to `assets/images/` and update each project card in `projects.html`.

### Resume
Add your resume PDF to `assets/resume.pdf`.

### Blog Posts
Edit `js/blog.js` — each post is a JavaScript object with a `content` field written in Markdown.

---

## 👤 About Me

I'm Binyam Abraha, a senior Computer Science student at Cal State East Bay pursuing an MS in AI & Machine Learning. I build across the full tech spectrum — from data pipelines and iOS apps to AI-powered hardware.

- 🔗 [GitHub](https://github.com/BinyamAbraha)
- 💼 [LinkedIn](https://www.linkedin.com/in/binyam-abraha/)
- 📧 binyamyabraha@gmail.com

---

*Built with curiosity & caffeine.*
