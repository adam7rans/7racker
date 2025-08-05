export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    slug: "getting-started-nextjs-15",
    excerpt: "Learn how to set up a modern Next.js 15 application with TypeScript, Tailwind CSS, and the new App Router.",
    content: "Next.js 15 brings significant improvements to the React ecosystem. In this post, we'll explore how to set up a modern application using the latest features including the App Router, Server Components, and enhanced TypeScript support.\n\n## Key Features\n- **App Router**: The new file-based routing system\n- **Server Components**: Improved performance with server-side rendering\n- **TypeScript**: First-class TypeScript support\n- **Tailwind CSS**: Utility-first styling approach\n\n## Setting Up\n\nTo get started with Next.js 15, you can use the create-next-app command:\n\n\`\`\`bash\nnpx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias \"@/*\"\n\`\`\`\n\nThis command sets up a new Next.js 15 project with all the modern tooling you need.",
    publishDate: "2024-08-01",
    readTime: "5 min read",
    tags: ["Next.js", "TypeScript", "Tutorial"]
  },
  {
    id: "2",
    title: "Mastering Dark Mode with Next.js and Tailwind",
    slug: "dark-mode-nextjs-tailwind",
    excerpt: "Implementing a seamless dark mode experience using next-themes, Tailwind CSS, and shadcn/ui components.",
    content: "Dark mode has become an essential feature for modern web applications. In this comprehensive guide, we'll implement a professional dark mode toggle using Next.js, Tailwind CSS, and the next-themes library.\n\n## The Setup\n\nWe'll use next-themes for theme management, which provides excellent TypeScript support and works seamlessly with Next.js App Router.\n\n## Implementation Steps\n\n1. **Install Dependencies**\n   \`\`\`bash\n   npm install next-themes lucide-react\n   \`\`\`\n\n2. **Create Theme Provider**\n   We'll create a client-side theme provider that prevents hydration mismatches.\n\n3. **Build the Toggle Component**\n   A beautiful theme toggle using shadcn/ui Button component with smooth transitions.",
    publishDate: "2024-07-28",
    readTime: "8 min read",
    tags: ["Next.js", "Dark Mode", "UI/UX"]
  },
  {
    id: "3",
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "responsive-layouts-tailwind",
    excerpt: "Create beautiful, responsive layouts using Tailwind CSS's utility-first approach and modern design principles.",
    content: "Tailwind CSS has revolutionized how we approach responsive design. Instead of writing custom CSS, we use utility classes to build responsive layouts quickly and efficiently.\n\n## The 8-Point Grid System\n\nProfessional designers use the 8-point grid system for consistent spacing. Tailwind makes this easy with classes like:\n- p-4 (16px padding)\n- m-2 (8px margin)\n- gap-4 (16px gap)\n\n## Responsive Design Patterns\n\nLearn how to use Tailwind's responsive prefixes to create layouts that work on all devices:\n- Mobile-first approach\n- Breakpoint system (sm, md, lg, xl)\n- Container queries\n- Flexbox and Grid layouts",
    publishDate: "2024-07-25",
    readTime: "6 min read",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"]
  },
  {
    id: "4",
    title: "GitHub Pages Deployment for Next.js",
    slug: "github-pages-deployment-nextjs",
    excerpt: "Deploy your Next.js static site to GitHub Pages with automated CI/CD using GitHub Actions.",
    content: "GitHub Pages provides free hosting for static websites. Let's set up automated deployment for a Next.js static export site.\n\n## Configuration Steps\n\n1. **Next.js Configuration**\n   Update next.config.ts for static export:\n   \`\`\`typescript\n   const nextConfig: NextConfig = {\n     output: 'export',\n     basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',\n     images: { unoptimized: true },\n     trailingSlash: true,\n   };\n   \`\`\`\n\n2. **GitHub Actions Workflow**\n   Create .github/workflows/deploy.yml for automated deployment.\n\n3. **Repository Settings**\n   Configure GitHub Pages to use GitHub Actions as the source.",
    publishDate: "2024-07-22",
    readTime: "7 min read",
    tags: ["Next.js", "GitHub Pages", "CI/CD"]
  },
  {
    id: "5",
    title: "Modern Component Design with shadcn/ui",
    slug: "modern-components-shadcn-ui",
    excerpt: "Build beautiful, accessible components using shadcn/ui's design system and Radix UI primitives.",
    content: "shadcn/ui provides a collection of beautiful, accessible components built on top of Radix UI and Tailwind CSS. These components follow modern design principles and are fully customizable.\n\n## Design Principles\n\n- **Accessibility First**: All components are built with accessibility in mind\n- **Customizable**: Easy to customize with Tailwind CSS\n- **TypeScript**: Full TypeScript support\n- **Composability**: Components work well together\n\n## Getting Started\n\nInstall shadcn/ui components:\n\`\`\`bash\nnpx shadcn-ui@latest init\nnpx shadcn-ui@latest add button\n\`\`\`\n\n## Building Custom Components\n\nLearn how to extend the design system with your own components while maintaining consistency.",
    publishDate: "2024-07-20",
    readTime: "10 min read",
    tags: ["shadcn/ui", "Component Design", "UI/UX"]
  }
];
