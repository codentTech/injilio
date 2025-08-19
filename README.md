# Injilio Chatbot - Next.js Chatbot Builder

A modern, drag-and-drop chatbot builder built with Next.js, featuring a beautiful landing page and an intuitive dashboard for creating conversational AI flows.

## 🚀 Features

### Landing Page

- **Modern Design**: Beautiful, responsive landing page similar to Twilio
- **Hero Section**: Compelling call-to-action with animated elements
- **Feature Showcase**: Highlighting key capabilities
- **Professional Layout**: Clean, modern UI with smooth animations

### Dashboard & Builder

- **Drag & Drop Interface**: Intuitive visual flow builder
- **Node Types**: Support for various node types (trigger, message, options, actions, etc.)
- **Real-time Preview**: Test your chatbot as you build
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional interface with smooth animations

### Chatbot Engine

- **Flow Builder**: Visual conversation flow designer
- **Node Configuration**: Edit node properties and settings
- **Connection Management**: Connect nodes to create conversation paths
- **Preview Mode**: Test your chatbot in real-time

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for beautiful icons
- **State Management**: React hooks for local state
- **Responsive**: Mobile-first design approach

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd injilio-chatbot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout component
│   ├── page.js              # Landing page
│   └── dashboard/
│       └── page.js          # Dashboard page
├── components/
│   ├── Sidebar.js           # Chatbot list sidebar
│   ├── Toolbar.js           # Dashboard toolbar
│   ├── ChatbotBuilder.js    # Main builder component
│   ├── FlowBuilder.js       # Drag & drop flow builder
│   ├── NodePanel.js         # Node properties panel
│   └── ChatPreview.js       # Chat preview/testing
└── styles/
    └── globals.css          # Global CSS variables
```

## 🎯 Key Components

### Landing Page (`src/app/page.js`)

- Hero section with animated text and CTA buttons
- Feature grid showcasing capabilities
- Professional footer with navigation

### Dashboard (`src/app/dashboard/page.js`)

- Main dashboard interface
- Chatbot management
- Builder workspace

### Flow Builder (`src/components/FlowBuilder.js`)

- Drag and drop node placement
- Visual connection management
- Node selection and interaction

### Node Panel (`src/components/NodePanel.js`)

- Node property editing
- Configuration options
- Settings management

### Chat Preview (`src/components/ChatPreview.js`)

- Real-time chatbot testing
- Message simulation
- User interaction testing

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  },
  secondary: { /* ... */ },
  accent: { /* ... */ }
}
```

### Components

All components are built with Tailwind CSS classes and can be easily customized by modifying the class names or adding new utility classes.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

## 🔧 Development

### Adding New Node Types

1. Update the `getNodeIcon()` function in `FlowBuilder.js`
2. Add new node type handling in `NodePanel.js`
3. Update the node data structure as needed

### Styling Changes

- Modify `src/app/globals.css` for global styles
- Update component-specific styles in individual component files
- Use Tailwind utility classes for consistent design

### Adding New Features

- Create new components in the `src/components/` directory
- Import and use them in the appropriate pages
- Follow the existing component patterns for consistency

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Optimized for small screens with collapsible navigation
- **Tablet**: Adaptive layouts for medium screens
- **Desktop**: Full-featured interface with sidebar and detailed panels

## 🎭 Animations

Smooth animations powered by Framer Motion:

- Page transitions
- Component mounting/unmounting
- Hover effects
- Loading states

## 🔒 Security Considerations

- Input validation on all forms
- XSS prevention in message content
- Secure API endpoints (when implemented)
- Environment variable management

## 🧪 Testing

### Manual Testing

1. **Landing Page**: Test all links and responsive behavior
2. **Dashboard**: Verify chatbot creation and management
3. **Builder**: Test drag & drop functionality
4. **Preview**: Test chatbot conversations

### Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

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

- Create an issue in the GitHub repository
- Check the documentation
- Review the code examples

## 🚧 Roadmap

### Phase 1 (Current)

- ✅ Landing page
- ✅ Basic dashboard
- ✅ Drag & drop builder
- ✅ Node configuration
- ✅ Chat preview

### Phase 2 (Future)

- [ ] User authentication
- [ ] Database integration
- [ ] API endpoints
- [ ] Advanced node types
- [ ] Analytics dashboard

### Phase 3 (Future)

- [ ] Multi-user collaboration
- [ ] Advanced AI integration
- [ ] Mobile app
- [ ] Enterprise features

---

**Built with ❤️ using Next.js and Tailwind CSS**
