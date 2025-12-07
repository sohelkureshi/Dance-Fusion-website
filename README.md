# Useless Dance Academy

A modern, fully-responsive dance academy website built with Node.js + Express + Pug + CSS3. Features beautiful animations, professional blue theme, working contact form with strict validation, and mobile-first design. Perfect portfolio showcase project.

---

## Key Features

- Professional Blue Theme - Modern gradients, hover effects, shadows
- Fully Responsive - Perfect on desktop, tablet, mobile
- Smooth Animations - Floating labels, card hovers, gradient glows
- Form Validation - Name (3+ letters), Phone (10 digits), Email (@ required)
- Pug Templating - Clean, reusable layouts (base.pug)
- 3 Unique Pages - Home, About, Contact with distinct designs
- Demo Mode - No database required, production ready

---

## Project Structure

```
dance/
├── backend/
│   ├── app.js                 # Express server + validation
│   ├── package.json           # Dependencies
│   ├── views/                 # Pug templates
│   │   ├── base.pug          # Main layout
│   │   ├── home.pug          # Homepage
│   │   ├── about.pug         # About page
│   │   └── contact.pug       # Contact form
│   └── static/                # Images
└── frontend/
    ├── js/
    │   └── index.js          # Client-side JS
    └── styles/
        ├── style.css         # Main styles
        ├── styleAbout.css    # About page styles
        └── styleContact.css  # Contact page styles
```

---

## Tech Stack

| Category      | Technology              |
|---------------|-------------------------|
| Backend       | Node.js, Express.js     |
| Templating    | Pug (Jade)              |
| Styling       | Vanilla CSS3, Custom Fonts |
| Responsive    | CSS Grid, Flexbox, Media Queries |
| Validation    | Regex (Client + Server) |
| Assets        | Static file serving     |
| Fonts         | Yeon Sung, ZCOOL QingKe |

---

## Quick Start

### 1. Navigate to Backend
```
cd dance/backend
```

### 2. Install Dependencies
```
npm install express pug
```

### 3. Start Server
```
node app.js
```
Or with auto-reload:
```
npm install -g nodemon
nodemon app.js
```

### 4. Open Browser
```
http://localhost:8000
```

---

## Page Breakdown

| Page     | Features                                                                 |
|----------|--------------------------------------------------------------------------|
| Home     | Hero section, mission cards, programs, sponsors, CTA button              |
| About    | Academy story, offerings, training philosophy, stats section             |
| Contact  | Form with floating labels + validation, contact info cards               |

---

## Form Validation Rules

| Field      | Required | Rules                              |
|------------|----------|------------------------------------|
| Name       | Yes (*)  | Minimum 3 letters (no numbers)     |
| Phone      | Yes (*)  | Exactly 10 digits only             |
| Email      | Yes (*)  | Valid format with @ symbol         |
| Location   | No       | Optional text                      |
| Message    | No       | Optional textarea                  |

---

## Design Highlights

- Blue Color Palette - Professional #2563eb primary theme
- CSS Grid Layouts - Perfect responsive cards & sections
- Floating Labels - Modern form UX (no double text)
- Hover Animations - Cards lift, buttons glow, smooth transitions
- Custom Fonts - Yeon Sung (headings) + ZCOOL QingKe (body)
- Gradient Backgrounds - Subtle glow effects & layered designs
- Strict Validation - Server-side + beautiful error pages

---

## Sample app.js Routes

```
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));
app.post('/contact', (req, res) => {
    // Strict validation + success/error pages
});
```

---

## Deployment Ready

Vercel (Recommended):
```
1. Push to GitHub
2. vercel --prod
3. Live: your-project.vercel.app
```

Other Options:
- Render - Free Node.js hosting
- Railway - One-click deploy
- Heroku - Traditional deployment

---

## Production Features

- No database required (demo mode)
- Form data logged to console
- process.env.PORT support
- Static assets optimized
- Mobile-first responsive design
- Professional error handling

---

## Future Enhancements

- MongoDB integration for form storage
- EmailJS for email notifications
- Admin dashboard for submissions
- SEO optimization (meta tags, sitemap)
- Image gallery for performances
- Online booking system



```

---

## Contributing
```
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Submit pull request
```

---

## License
```
MIT License - Free for personal/portfolio use
```

---

Built for portfolio showcase  
By Sohel Kureshi | Full-Stack Developer (NIT Nagpur)
```
