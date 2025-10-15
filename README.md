# Swift Stay Landing Page

A professional, responsive landing page for the Swift Stay mobile application - your trusted partner in finding the perfect accommodation worldwide.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Smooth scroll navigation and hover effects
- **Performance Optimized**: Built with Vite for fast development and builds
- **SEO Ready**: Semantic HTML structure for better search engine visibility

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Heroicons for consistent iconography
- **Build Tool**: Vite for fast development experience
- **Package Manager**: Yarn for reliable dependency management

## 📱 Sections

1. **Navigation**: Sticky header with smooth scroll links
2. **Hero Section**: Compelling headline with call-to-action buttons
3. **Stats**: Key metrics to build trust
4. **Features**: Highlighting app capabilities with icons
5. **Benefits**: Detailed value propositions
6. **Download**: Clear call-to-action for app downloads
7. **Footer**: Comprehensive site navigation and company info

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd swift-stay-landing
```

2. Install dependencies:
```bash
yarn install
```

3. Start development server:
```bash
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
yarn build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue theme (can be changed to match your brand)
- Secondary colors: Gray scale for text and backgrounds

### Content
Update the content in `src/App.tsx`:
- Company information
- Features and benefits
- Statistics and metrics
- Contact information

### Styling
Custom CSS classes are defined in `src/index.css`:
- `.btn-primary` and `.btn-secondary` for buttons
- `.section-padding` for consistent section spacing
- `.container-custom` for content width management

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will automatically detect it's a Vite project
3. Deploy with zero configuration

### Netlify
1. Build the project: `yarn build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 🔧 Development

### Project Structure
```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── assets/          # Static assets (if any)
```

### Adding New Sections
1. Create the section component in `App.tsx`
2. Add smooth scroll navigation in the nav menu
3. Use the `section-padding` class for consistent spacing
4. Apply motion animations for smooth interactions

### Styling Guidelines
- Use Tailwind utility classes for styling
- Create custom component classes in `index.css` for reusable styles
- Maintain consistent spacing using the predefined spacing scale
- Use semantic color names from the Tailwind config

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ performance score
- **Bundle Size**: Minimal bundle size with tree shaking
- **Loading Speed**: Fast initial load with optimized assets
- **SEO**: Semantic HTML and meta tags for better search visibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about the landing page:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for Swift Stay - Your Perfect Stay Awaits!**
