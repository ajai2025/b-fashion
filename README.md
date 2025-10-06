# Banjara Fashion

A modern React-based web application for Banjara Fashion, featuring a full-width slideshow, attractive services and contact pages, and smooth navigation using React Router.

---

## Features

- **Responsive Design:** Looks great on all devices.
- **Full-Width Slideshow:** Eye-catching hero section on the home page.
- **Services Page:** Showcases premium fabrics and services with elegant layout.
- **Contact Page:** Includes address, contact persons, and an embedded Google Map.
- **Client-Side Routing:** Seamless navigation using React Router.
- **Webpack & Babel:** Modern build setup with hot reloading.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ajai2025/b-fashion.git
   cd b-fashion
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Project Structure

```
b-fashion/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Header.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── styles/
│   │   └── main.css
│   └── index.js
├── webpack.config.js
├── package.json
└── README.md
```

---

## Customization

- **Images:** Update slideshow images in `src/pages/Home.js`.
- **Services:** Edit or add services in `src/pages/Services.js`.
- **Contact Info:** Update address and contact persons in `src/pages/Contact.js`.

---

## Troubleshooting

- If you get `Error: Cannot GET /route`, make sure `historyApiFallback: true` is set in `webpack.config.js`.
- If port 3000 is in use, stop the other process or change the port in `webpack.config.js`.

---

## License

This project is licensed under the ISC License.

---

## Author

[ajai2025](https://github.com/ajai2025)