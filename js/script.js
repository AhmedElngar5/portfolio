/* =============================================
   Ahmed Elngar — Portfolio JavaScript
   Vanilla JS — No frameworks
   ============================================= */

'use strict';

/* ---------- Project Data ---------- */
const projects = [
  {
    title: "Wasel — AI-Based Child Family Reunification System",
    description: "Graduation project combining Artificial Intelligence, web development, mobile development, and backend engineering to build an AI-based child family reunification and alternative care support system.",
    image: "projects/wasel-graduation.jpg",
    technologies: ["AI", "Machine Learning", "Web Development", "Mobile", "Backend"],
    github: "#", // TODO: Replace with actual GitHub URL
    demo: null,
    category: ["ai"],
    badge: "Graduation Project"
  },
  {
    title: "Contact Management System",
    description: "A desktop application for managing contacts and database records with full CRUD operations, built using C# and Windows Forms with MySQL database integration.",
    image: "projects/contact-management.jpg",
    technologies: ["C#", "OOP", "SQL", "MySQL", "Windows Forms"],
    github: "#", // TODO: Replace with actual GitHub URL
    demo: null,
    category: ["dotnet", "database"]
  },
  {
    title: "Hospital Management System",
    description: "A database-driven management system for handling hospital operations including patient records, departments, and medical data management.",
    image: "projects/hospital-management.jpg",
    technologies: ["C#", "SQL", "MySQL", "Database Design"],
    github: "#", // TODO: Replace with actual GitHub URL
    demo: null,
    category: ["dotnet", "database"]
  },
  {
    title: "Factory Management System",
    description: "A database application for managing factory-related data including production records, inventory, and operational workflows.",
    image: "projects/factory-management.jpg",
    technologies: ["C#", "SQL", "MySQL"],
    github: "#", // TODO: Replace with actual GitHub URL
    demo: null,
    category: ["dotnet", "database"]
  },
  {
    title: "Company Management System",
    description: "A database application for managing company information including employee records, departments, and organizational data.",
    image: "projects/company-management.jpg",
    technologies: ["C#", "SQL", "MySQL"],
    github: "#", // TODO: Replace with actual GitHub URL
    demo: null,
    category: ["dotnet", "database"]
  },
  {
    title: "School Management System",
    description: "A database management application for handling student records, class schedules, grades, and school administrative operations.",
    image: "projects/school-management.jpg",
    technologies: ["C#", "SQL", "MySQL"],
    github: "#", // TODO: Replace with actual GitHub URL
    demo: null,
    category: ["dotnet", "database"]
  },
  {
    title: "Pacman Game",
    description: "A Pacman game project built with C++ featuring classic gameplay mechanics, ghost AI behavior, and score tracking.",
    image: "projects/pacman-game.jpg",
    technologies: ["C++", "Game Programming"],
    github: "#", // TODO: Replace with actual GitHub URL
    demo: null,
    category: ["cpp"]
  }
];

/* ---------- DOM Elements ---------- */
const navbar          = document.getElementById('navbar');
const navLinks        = document.getElementById('nav-links');
const navOverlay      = document.getElementById('nav-overlay');
const hamburger       = document.getElementById('hamburger');
const projectsGrid    = document.getElementById('projects-grid');
const filterBtns      = document.querySelectorAll('.filter-btn');
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightbox-img');
const lightboxClose   = document.getElementById('lightbox-close');
const lightboxPrev    = document.getElementById('lightbox-prev');
const lightboxNext    = document.getElementById('lightbox-next');
const lightboxCounter = document.getElementById('lightbox-counter');
const contactForm     = document.getElementById('contact-form');
const yearSpan        = document.getElementById('current-year');

/* ---------- State ---------- */
let currentLightboxIndex = 0;
let lightboxImages       = [];
let activeFilter         = 'all';

/* ---------- Initialize ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initContactForm();
  setCurrentYear();
});

/* =============================================
   NAVBAR
   ============================================= */
function initNavbar() {
  // Scroll handler for navbar background and active section
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleNavScroll();
        updateActiveNavLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  handleNavScroll();
  updateActiveNavLink();
}

function handleNavScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');

    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* =============================================
   MOBILE MENU
   ============================================= */
function initMobileMenu() {
  hamburger.addEventListener('click', toggleMobileMenu);
  navOverlay.addEventListener('click', closeMobileMenu);

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  navOverlay.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
}

function closeMobileMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* =============================================
   SMOOTH SCROLL
   ============================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      e.preventDefault();

      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
}

/* =============================================
   PROJECTS
   ============================================= */
function renderProjects(filter = 'all') {
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  projectsGrid.innerHTML = '';

  filtered.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${index * 0.08}s`;

    const badgeHTML = project.badge
      ? `<span class="project-badge">${project.badge}</span>`
      : '';

    const demoBtn = project.demo
      ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Live demo of ${project.title}">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
           Live Demo
         </a>`
      : '';

    card.innerHTML = `
      <div class="project-image-wrapper" data-image="${project.image}" data-index="${index}">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <div class="project-image-overlay">
          <div class="zoom-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </div>
        </div>
        ${badgeHTML}
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository for ${project.title}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          ${demoBtn}
        </div>
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  // Re-init reveal for newly added cards
  initScrollRevealForNew();

  // Build lightbox image list
  lightboxImages = filtered.map(p => p.image);

  // Attach click listeners for lightbox
  document.querySelectorAll('.project-image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const imgSrc = wrapper.dataset.image;
      const idx = lightboxImages.indexOf(imgSrc);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });
}

/* Project Filtering */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    activeFilter = filter;

    // Smooth transition: fade out, render, fade in
    projectsGrid.style.opacity = '0';
    projectsGrid.style.transform = 'translateY(10px)';

    setTimeout(() => {
      renderProjects(filter);
      requestAnimationFrame(() => {
        projectsGrid.style.opacity = '1';
        projectsGrid.style.transform = 'translateY(0)';
      });
    }, 250);
  });
});

// Add transition to projects grid
if (projectsGrid) {
  projectsGrid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

/* =============================================
   LIGHTBOX
   ============================================= */
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxImage();

  lightbox.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function updateLightboxImage() {
  lightboxImg.src = lightboxImages[currentLightboxIndex];
  lightboxImg.alt = `Project image ${currentLightboxIndex + 1} of ${lightboxImages.length}`;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${lightboxImages.length}`;
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
  updateLightboxImage();
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevLightboxImage);
lightboxNext.addEventListener('click', nextLightboxImage);

// Close on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowRight':
      nextLightboxImage();
      break;
    case 'ArrowLeft':
      prevLightboxImage();
      break;
  }
});

/* =============================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================= */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // Show everything immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initScrollRevealForNew() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
}

/* =============================================
   CONTACT FORM
   ============================================= */
function initContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = contactForm.querySelector('#contact-name').value.trim();
    const email   = contactForm.querySelector('#contact-email').value.trim();
    const message = contactForm.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailto  = `mailto:ahmedengar205@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
}

/* =============================================
   CURRENT YEAR
   ============================================= */
function setCurrentYear() {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* =============================================
   CODE BACKGROUND (Hero decoration)
   ============================================= */
(function generateCodeBackground() {
  const codeBg = document.getElementById('hero-code-bg');
  if (!codeBg) return;

  const codeLines = [
    'using System;',
    'using Microsoft.AspNetCore.Mvc;',
    'using Microsoft.EntityFrameworkCore;',
    '',
    'namespace Portfolio.Api.Controllers',
    '{',
    '    [ApiController]',
    '    [Route("api/[controller]")]',
    '    public class ProjectsController : ControllerBase',
    '    {',
    '        private readonly AppDbContext _context;',
    '',
    '        public ProjectsController(AppDbContext context)',
    '        {',
    '            _context = context;',
    '        }',
    '',
    '        [HttpGet]',
    '        public async Task<IActionResult> GetAll()',
    '        {',
    '            var projects = await _context.Projects',
    '                .OrderByDescending(p => p.CreatedAt)',
    '                .ToListAsync();',
    '',
    '            return Ok(projects);',
    '        }',
    '',
    '        [HttpGet("{id}")]',
    '        public async Task<IActionResult> GetById(int id)',
    '        {',
    '            var project = await _context.Projects',
    '                .FindAsync(id);',
    '',
    '            if (project == null)',
    '                return NotFound();',
    '',
    '            return Ok(project);',
    '        }',
    '',
    '        [HttpPost]',
    '        public async Task<IActionResult> Create(Project p)',
    '        {',
    '            _context.Projects.Add(p);',
    '            await _context.SaveChangesAsync();',
    '            return CreatedAtAction(',
    '                nameof(GetById),',
    '                new { id = p.Id },',
    '                p);',
    '        }',
    '    }',
    '}',
  ];

  // Repeat lines to fill the hero
  let fullText = '';
  for (let i = 0; i < 4; i++) {
    fullText += codeLines.join('\n') + '\n\n';
  }

  codeBg.textContent = fullText;
})();
