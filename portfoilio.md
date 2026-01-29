A recruiter-focused, multipage personal portfolio built with React, TypeScript, and Material UI, designed to present projects, skills, and experience with clarity, calmness, and professionalism.

This portfolio prioritizes usability, scannability, and maintainability, ensuring recruiters can evaluate technical competence within minutes.

Create a clean, intuitive navigation experience

Present projects as the primary hiring signal

Apply a calm, cohesive color palette:

Alice Blue (backgrounds)

Lavender (Web)

Periwinkle

Wisteria (CTAs & highlights)

Lavender (Floral)

Follow UI/UX best practices and recruiter expectations

Maintain production-ready structure suitable for real teams

src/
│
├── assets/
│   ├── images/          # Project screenshots, profile images
│   ├── icons/           # Custom SVGs or icons
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │
│   ├── ui/
│   │   ├── ProjectCard.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── SectionHeader.tsx
│   │
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   ├── Contact.tsx
│
├── data/
│   ├── projects.ts     # All project metadata
│   ├── skills.ts       # Skill categories and proficiency
│
├── theme/
│   ├── palette.ts
│   ├── typography.ts
│   ├── theme.ts
│
├── routes/
│   └── AppRoutes.tsx
│
├── App.tsx
├── main.tsx
└── index.css

React

TypeScript

Material UI

React Router

Vite or Create React App