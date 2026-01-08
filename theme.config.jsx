import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#818cf8" />
        <path d="M2 17L12 22L22 17" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        <span style={{ color: '#6366f1' }}>Conv</span>
        <span style={{ color: '#818cf8' }}>ultra</span>
      </span>
    </span>
  ),
  project: {
    link: 'https://github.com/convultra/convultra'
  },
  docsRepositoryBase: 'https://github.com/convultra/convultra-docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Convultra Docs'
      }
    }
    return {
      title: 'Convultra – Track Every Conversion. Ultra Accurate.'
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard = 'https://convultra.com/og-image.png'

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Convultra - Server-side conversion tracking that captures 30-40% more conversions" />
        <meta name="og:title" content={title ? title + ' – Convultra Docs' : 'Convultra Documentation'} />
        <meta name="og:description" content="Track Every Conversion. Ultra Accurate. Server-side conversion tracking that bypasses ad blockers and browser restrictions." />
        <meta name="og:image" content={socialCard} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@convultra" />
        <meta name="twitter:creator" content="@convultra" />
        <meta name="apple-mobile-web-app-title" content="Convultra Docs" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </>
    )
  },
  primaryHue: 239,
  primarySaturation: 84,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ fontWeight: 700, marginTop: '1rem' }}>{title}</div>
      }
      return <>{title}</>
    }
  },
  toc: {
    backToTop: true,
    float: true
  },
  footer: {
    text: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="https://convultra.com" target="_blank" rel="noopener" style={{ color: 'inherit' }}>
            Website
          </a>
          <span>·</span>
          <a href="https://app.convultra.com" target="_blank" rel="noopener" style={{ color: 'inherit' }}>
            Dashboard
          </a>
          <span>·</span>
          <a href="https://github.com/convultra" target="_blank" rel="noopener" style={{ color: 'inherit' }}>
            GitHub
          </a>
        </div>
        <span style={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Convultra. All rights reserved.
        </span>
      </div>
    )
  },
  banner: {
    key: 'beta-launch-2024',
    text: (
      <a href="https://convultra.com/waitlist" target="_blank" rel="noopener noreferrer">
        🎉 Convultra is in beta! Join the waitlist →
      </a>
    )
  },
  navigation: {
    prev: true,
    next: true
  },
  gitTimestamp: true,
  editLink: {
    text: 'Edit this page on GitHub'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  search: {
    placeholder: 'Search documentation...'
  }
}

