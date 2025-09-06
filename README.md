# Jason L. Fu - Personal Portfolio Website

A clean, modern, and responsive personal portfolio website showcasing my experience as a Computer Science student at Cornell University with a focus on AI and Software Engineering.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimal design with smooth animations and transitions
- **Interactive Navigation**: Smooth scrolling navigation with active link highlighting
- **Project Showcase**: Detailed sections for professional experience and projects
- **Resume Download**: Downloadable resume functionality
- **Contact Information**: Easy ways to get in touch with social media links
- **Performance Optimized**: Fast loading with optimized code and assets

## 🚀 Live Website

Visit the live website at: [https://jlfud.github.io](https://jlfud.github.io)

## 📁 Project Structure

```
jlfud.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and interactions
├── assets/             # Assets folder for images and other media
│   └── images/         # Image assets
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript**: Interactive functionality and smooth UX
- **Font Awesome**: Icons for better visual design
- **Google Fonts**: Inter font family for clean typography

## 🚀 GitHub Pages Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository exactly: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Make sure the repository is **Public**
5. Check "Initialize this repository with a README" (optional, since we're uploading files)
6. Click "Create repository"

### Step 2: Upload Your Website Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop or select these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - The entire `assets/` folder (if you have images)
3. Add a commit message like "Initial website upload"
4. Click "Commit changes"

**Option B: Using Git Command Line**
1. Clone your repository:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```
2. Copy all your website files into this directory
3. Add, commit, and push:
   ```bash
   git add .
   git commit -m "Initial website upload"
   git push origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Live Website

1. GitHub will provide you with a URL: `https://yourusername.github.io`
2. It may take a few minutes for the site to become available
3. Any future changes you make to the files will automatically update the live site

### Step 5: Custom Domain (Optional)

If you have a custom domain:
1. In your repository, create a file named `CNAME`
2. Add your domain name (e.g., `www.yourname.com`)
3. Configure your domain's DNS settings to point to GitHub Pages

## 📝 Customization Tips

### Update Personal Information
- Edit the contact details in `index.html`
- Update social media links
- Modify the resume content in `script.js`

### Add Your Projects
- Replace the project examples with your own work
- Add project links and descriptions
- Include relevant technologies used

### Styling Changes
- Modify colors in `styles.css` by changing the CSS custom properties
- Adjust fonts, spacing, and layout as needed
- Add your own animations or effects

### Add Images
- Place profile pictures or project screenshots in `assets/images/`
- Update the HTML to reference your images
- Optimize images for web (WebP format recommended)

## 🔧 Local Development

To test your website locally before deploying:

1. Open `index.html` in your web browser, or
2. Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

## 📱 Browser Support

This website supports all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎨 Color Scheme

The website uses a professional color palette:
- Primary Blue: `#3b82f6`
- Dark Text: `#1f2937`
- Light Gray: `#6b7280`
- Background: `#ffffff`
- Light Background: `#f8fafc`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you make improvements that could benefit others, consider submitting a pull request!

---

**Built with ❤️ by Jason L. Fu**

For questions or support, reach out at: jlf344@cornell.edu
