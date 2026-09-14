# Ahmed Elngar — Personal Portfolio

A modern, professional personal portfolio website built with **HTML, CSS, and Vanilla JavaScript**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 About

Personal portfolio website for **Ahmed Elngar** — Backend .NET Developer, C# Developer, and Artificial Intelligence student at Delta University for Science and Technology.

Built to present my skills, projects, education, and career direction to recruiters, companies, and collaborators.

## 🛠️ Tech Stack

- **HTML5** — Semantic structure & SEO
- **CSS3** — Custom design system, responsive layout, animations
- **Vanilla JavaScript** — Dynamic projects, filtering, lightbox, scroll reveal

No frameworks. No libraries. No dependencies.

## ✨ Features

- 🌗 Dark professional developer theme
- 📱 Fully responsive (Desktop → Mobile)
- 🖼️ Fullscreen image lightbox with keyboard navigation
- 🔍 Project filtering by category
- 🎯 Smooth scroll & active section indicator
- 📜 Scroll reveal animations (IntersectionObserver)
- 🍔 Mobile hamburger menu
- ♿ Accessibility support (`prefers-reduced-motion`)
- 🔎 SEO optimized (meta tags, Open Graph, semantic HTML)
- 📧 Contact form with mailto fallback

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML
├── css/
│   └── style.css       # Design system & responsive styles
├── js/
│   └── script.js       # All interactivity
├── projects/           # Project screenshots
│   ├── contact-management.jpg
│   ├── hospital-management.jpg
│   ├── factory-management.jpg
│   ├── company-management.jpg
│   ├── school-management.jpg
│   ├── pacman-game.jpg
│   └── wasel-graduation.jpg
└── assets/             # Additional assets
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/AhmedElngar5/portfolio.git
   ```

2. Open `index.html` in your browser — no build step required.

   Or use a local server:
   ```bash
   # Python
   python -m http.server 3000

   # Node.js
   npx serve .
   ```

3. Visit `http://localhost:3000`

## 🌐 Deployment

This is a static website — deploy to any static hosting:

- **GitHub Pages** — Push to `main` branch, enable Pages in repo settings
- **Netlify** — Drag & drop the folder
- **Vercel** — Import the repository

## ➕ Adding New Projects

Edit the `projects` array in `js/script.js`:

```javascript
{
  title: "Project Name",
  description: "Project description",
  image: "projects/project-image.jpg",
  technologies: ["C#", ".NET", "SQL Server"],
  github: "https://github.com/username/repo",
  demo: null,
  category: ["dotnet", "database"],
  badge: null
}
```

Place the project image in the `projects/` folder.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Email**: [ahmedengar205@gmail.com)
- **LinkedIn**: [www.linkedin.com/in/ahmed-elngar-3251b5375]
- **GitHub**: [github.com/AhmedElngar5](#)

---

⭐ If you like this portfolio, give it a star!
