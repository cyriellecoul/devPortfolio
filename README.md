# 🚀 Dev Portfolio

Built with **TypeScript**, **Next.js**, and **Tailwind CSS**.

**[▶ Live ](https://cyriellecoul.github.io/devPortfolio/)**

**[▶ Demo ]**
<p>Desktop
  <img src="docs/demo_desktop.gif" alt="Portfolio desktop demo" width="480" />
</p>
<br/>

<p>Mobile
  <img src="docs/demo_mobile.gif" alt="Portfolio mobile demo" width="480" />
</p>
---

## 🛠 Tech Stack

* **Next.js** 
* **TypeScript**
* **Tailwind CSS**
* **Deployed on GitHub Pages**

---

## ✨ Features

* 🌍 Multi-language support (FR / EN)
* 📱 Fully responsive design
* ⚡ Optimized performance (Lighthouse friendly)
* 🎨 Modern UI with Tailwind CSS
* 🖼 Optimized images
* 📂 Projects showcase section
* 📬 Contact section

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/cyriellecoul/devPortfolio.git
```

Install dependencies and node modules:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🚀 Deployment (GitHub Pages)

1. Build the project
2. Deploy the `out/` folder to the `gh-pages` branch
   OR configure GitHub Actions for automatic deployment.

Make sure `next.config.ts` includes:

```ts
output: 'export',
images: { unoptimized: true }
```

---

## 📁 Project Structure

```
public/
src/app/
next.config.ts
```

* `app/about/page` → Pages & layouts → about, contact, projects, skills and Global styles in src/app/globals.css
* `components/ui` → Reusable UI components
* `context/` → AppContextProvider
* `hooks/` → Toast and responsive for mobile
* `lib/` → images (json), translations, utils
* `public/` → Static assets (images, icons)* 

---

## 📸 Images

All images are stored inside the `public/` folder.

To deploying in GitHub Pages, a basePath is needed:

const basePath = process.env.NODE_ENV === 'development' ? '' : '/devPortfolio';

---

## 📈 Performance

* Optimized Largest Contentful Paint (LCP)
* Lazy-loaded images
* Static export for fast loading

---

## 👤 Author

Cyrielle Coul
Frontend & Mobile Developer

* GitHub: https://github.com/cyriellecoul
* LinkedIn: https://www.linkedin.com/in/cyrielle-c/

---

## 📄 License

This project is open source and available under the MIT License.
Improvements Cyrielle Coul
-