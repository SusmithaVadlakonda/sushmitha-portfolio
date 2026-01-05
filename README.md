# Susmitha Vadlakonda - Portfolio Website

A modern, professional portfolio website showcasing my experience as a Software Engineer, built with React and featuring a premium design aesthetic.

## 🚀 Features

- **Modern Design**: High-end designer brand aesthetic with vibrant gradients and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with React and Vite for fast loading times
- **Sections**:
  - Hero section with animated introduction
  - About & Skills showcase
  - Professional experience timeline
  - Featured projects
  - Education background
  - Achievements
  - Contact form

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Smooth animations
- **CSS3** - Custom styling with CSS variables

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sushmitha-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📤 Deploy to GitHub Pages

1. Update the `base` path in `vite.config.js` to match your repository name:
```js
base: '/your-repo-name/'
```

2. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## 📧 Contact Form Setup

The contact form uses Formspree. To set it up:

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form and copy the form ID
3. Update the `formspreeEndpoint` in `src/components/Contact.jsx`:
```js
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  --bg-primary: #0a0a0f;
  /* ... */
}
```

### Content
Update the content in each component file:
- `src/components/Hero.jsx` - Hero section
- `src/components/About.jsx` - Skills
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Projects
- `src/components/Education.jsx` - Education
- `src/components/Achievements.jsx` - Achievements

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Susmitha Vadlakonda**
- Email: susmithavg00@gmail.com
- Phone: +1 (737) 229-0094
- LinkedIn: [Connect with me](https://linkedin.com/in/susmitha-vadlakonda)

---

Built with ❤️ using React and modern web technologies.

