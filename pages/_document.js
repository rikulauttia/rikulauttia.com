import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth">
      <Head>
        {/* Preconnect to fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts - Inter with optimal weights and font-display: swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Riku Lauttia" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="j-ILo9bEkx8_pOtSj67g1iTTYmssO0BB9fyQF_5iQcw" />

        {/* Social Media Profile Links */}
        <link rel="me" href="https://www.instagram.com/rikulauttia/" />
        <link rel="me" href="https://x.com/rikulauttia" />
        <link rel="me" href="https://github.com/rikulauttia" />
        <link rel="me" href="https://www.linkedin.com/in/rikulauttia" />
        <link rel="me" href="https://www.tiktok.com/@rikulauttia" />
        <link rel="me" href="https://www.youtube.com/@rikulauttia" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Riku Lauttia",
              "url": "https://rikulauttia.com",
              "image": "https://rikulauttia.com/og-image.jpg",
              "jobTitle": "AI Engineer & Founder",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Teleste",
                  "url": "https://www.teleste.com"
                },
                {
                  "@type": "Organization",
                  "name": "Since AI",
                  "description": "AI community and innovation platform",
                  "url": "https://sinceai.ai"
                },
                {
                  "@type": "Organization",
                  "name": "Root",
                  "description": "Recruitment and talent platform",
                  "url": "https://rootexpo.fi"
                },
                {
                  "@type": "Organization",
                  "name": "Kolt",
                  "description": "Automation and operational technology",
                  "url": "https://kolt.fi"
                },
                {
                  "@type": "Organization",
                  "name": "Attractor",
                  "description": "Technology consultancy building production-grade software, AI, and automation systems",
                  "url": "https://attractor.fi"
                }
              ],
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "Aalto University",
                  "url": "https://www.aalto.fi"
                }
              ],
              "email": "riku@lauttia.com",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Software Engineering",
                "Data Systems",
                "Automation",
                "AI Infrastructure",
                "Technology Entrepreneurship"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/rikulauttia",
                "https://github.com/rikulauttia",
                "https://x.com/rikulauttia",
                "https://www.instagram.com/rikulauttia",
                "https://www.facebook.com/rikulauttia",
                "https://substack.com/@rikulauttia",
                "https://medium.com/@rikulauttia"
              ],
              "description": "AI engineer and founder building production AI systems, software infrastructure, and AI-native technology ventures."
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
