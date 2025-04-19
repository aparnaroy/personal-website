# Aparna Roy's Personal Website

A modern, interactive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design with a light blue, purple, and pink theme
- 🌓 Light and dark mode support
- ✨ Interactive animations and transitions
- 📱 Fully responsive design
- 🎯 Smooth scrolling navigation
- 📝 Contact form with validation
- 🎨 Dynamic particle background
- 📊 Project showcase with technology tags
- 💼 Professional experience timeline

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll
- React Type Animation
- TSParticles

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/aparnaroy/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
personal-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceCard.tsx
│   ├── ContactForm.tsx
│   ├── ThemeProvider.tsx
│   └── ParticlesBackground.tsx
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

1. Update your personal information in `app/page.tsx`
2. Add your project images to the `public/images` directory
3. Modify the color scheme in `tailwind.config.js`
4. Update the particle effects in `components/ParticlesBackground.tsx`

## Deployment

The easiest way to deploy this website is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is licensed under the MIT License - see the LICENSE file for details. 