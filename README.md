# Convultra Documentation

Developer documentation for Convultra - the server-side conversion tracking platform.

**Tagline:** Track Every Conversion. Ultra Accurate.

## Tech Stack

- [Nextra](https://nextra.site/) - Next.js documentation framework
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Deploy

Push to main branch to auto-deploy to Vercel, or:

```bash
vercel
```

## Project Structure

```
convultra-docs/
├── pages/                    # Documentation pages (.mdx files)
│   ├── getting-started/      # Getting started guides
│   ├── sdk/                  # SDK documentation
│   ├── integrations/         # Platform integrations
│   ├── dashboard/            # Dashboard docs
│   ├── api-reference/        # API reference
│   ├── advanced/             # Advanced features
│   └── troubleshooting/      # Troubleshooting
├── components/               # Custom React components
├── public/                   # Static assets
├── styles/                   # Global styles
├── theme.config.jsx          # Nextra theme configuration
└── next.config.mjs           # Next.js configuration
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## Documentation Pages

- **Getting Started**: Introduction, installation, quick start
- **SDK**: Configuration, tracking methods, enhanced conversions
- **Integrations**: Google Ads, Meta, Microsoft, TikTok, LinkedIn
- **Dashboard**: Analytics, conversions, test center, settings
- **API Reference**: SDK methods, server API, webhooks, pixel tracking
- **Advanced**: Deduplication, attribution, cross-domain, bot detection
- **Troubleshooting**: Common issues, debugging, FAQ

## License

Proprietary - Convultra Inc.

