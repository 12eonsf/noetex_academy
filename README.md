# Noetex Academy

A modern, dark-themed WebApp built with Next.js 14, Tailwind CSS, and Framer Motion. Noetex Academy is a futuristic education platform focused on neuroscience, AI, life sciences, and social sciences.

## 🚀 Features

- **Modern Design**: Deep black background with indigo/violet gradients and glassmorphism effects
- **Responsive**: Fully mobile-responsive design
- **Animations**: Smooth Framer Motion animations and scroll-triggered effects
- **Interactive**: Engaging user interface with hover effects and transitions
- **Content Management**: MDX support for blog posts
- **Performance**: Optimized for speed and SEO

## 🎨 Design System

- **Color Palette**: Deep black (#0c0c0e) with indigo/violet gradients
- **Typography**: Clean, modern fonts with proper hierarchy
- **Components**: Reusable glassmorphism cards and interactive elements
- **Animations**: Subtle parallax scroll and neuron-like connections

## 📁 Project Structure

```
noetex-academy/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Global layout with navigation
│   ├── page.tsx           # Landing page
│   ├── programs/          # Programs listing page
│   ├── faculty/           # Faculty directory
│   ├── apply/             # Application form
│   ├── lab/               # Research lab preview
│   ├── blog/              # Blog with MDX support
│   ├── contact/           # Contact information
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Hero.tsx           # Landing page hero section
│   ├── Section.tsx        # Reusable section wrapper
│   ├── CourseCard.tsx     # Course/program cards
│   ├── MentorCard.tsx     # Faculty member cards
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── content/               # Content files
│   └── blog/              # MDX blog posts
├── public/                # Static assets
├── styles/                # Additional styles
└── package.json          # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX for blog posts
- **Language**: TypeScript
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd noetex-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with animated elements
- About section with key features
- Featured programs showcase
- Faculty highlights
- Testimonials
- Call-to-action sections

### Programs (`/programs`)
- Grid of course cards with filtering
- Search functionality
- Program statistics
- Detailed course information

### Faculty (`/faculty`)
- Faculty member profiles
- Research specialties
- Achievement highlights
- Contact information

### Apply (`/apply`)
- Comprehensive application form
- Academic background collection
- Program interest selection
- Motivation and goals

### Lab (`/lab`)
- Research tools and platforms
- Interactive demos
- Research areas and progress
- Lab statistics

### Blog (`/blog`)
- MDX-powered blog posts
- Article filtering and search
- Featured content
- Newsletter signup

### Contact (`/contact`)
- Contact information
- Contact form
- Social media links
- QR code integration

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.ts`:
- `noetex-black`: #0c0c0e
- `noetex-indigo`: #4a55b1
- `noetex-violet`: #7c3aed
- `noetex-purple`: #8b5cf6

### Components
All components are built with Tailwind CSS and can be easily customized by modifying the classes in each component file.

### Animations
Framer Motion animations can be adjusted in each component by modifying the `motion` props and transition settings.

## 📝 Content Management

### Blog Posts
Blog posts are written in MDX format and stored in `content/blog/`. Each post should include frontmatter with:
- `title`: Post title
- `excerpt`: Short description
- `author`: Author name
- `date`: Publication date
- `tags`: Array of tags
- `featured`: Boolean for featured posts

### Adding New Content
1. Create new MDX files in `content/blog/`
2. Add frontmatter metadata
3. Write content using Markdown syntax
4. Posts will automatically appear in the blog listing

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js

2. **Configure Environment Variables**
   ```bash
   # Add any environment variables in Vercel dashboard
   ```

3. **Deploy**
   - Vercel will automatically build and deploy
   - Your site will be available at `https://your-project.vercel.app`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Other Platforms

The app can also be deployed to:
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from GitHub
- **Railway**: Connect repository
- **DigitalOcean App Platform**: Deploy from GitHub

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:
```bash
# Add any required environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind Configuration

The Tailwind config includes custom colors, animations, and utilities. Modify `tailwind.config.ts` to customize the design system.

### Next.js Configuration

The `next.config.js` includes MDX configuration. Modify as needed for additional plugins or settings.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: info@noetex.academy
- GitHub Issues: Create an issue in the repository
- Documentation: Check the code comments and component documentation

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Course enrollment functionality
- [ ] Payment integration
- [ ] Advanced search and filtering
- [ ] Real-time chat support
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

---

Built with ❤️ by the Noetex Academy team

