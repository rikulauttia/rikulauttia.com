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
        <meta name="geo.region" content="FI-02" />
        <meta name="geo.placename" content="Turku" />
        <meta name="geo.position" content="60.4518;22.2666" />
        <meta name="ICBM" content="60.4518, 22.2666" />

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
              "jobTitle": "AI Engineer & Co-Founder",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Teleste",
                  "url": "https://www.teleste.com"
                },
                {
                  "@type": "Organization",
                  "name": "Since AI",
                  "description": "AI hackathon and innovation platform",
                  "url": "https://sinceai.fi"
                },
                {
                  "@type": "Organization",
                  "name": "Root",
                  "description": "Nordic region's premier innovative recruiting event",
                  "url": "https://rootexpo.fi"
                },
                {
                  "@type": "Organization",
                  "name": "Kolt",
                  "description": "Automation solutions for complex operational challenges",
                  "url": "https://kolt.fi"
                },
                {
                  "@type": "Organization",
                  "name": "Attractor",
                  "description": "Technology consultancy building production-grade software, applied AI, and security-first systems",
                  "url": "https://attractor.fi"
                },
                {
                  "@type": "Organization",
                  "name": "Boost Turku",
                  "description": "AI innovation initiatives and strategic partnerships",
                  "url": "https://www.boostturku.com"
                }
              ],
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "University of Turku",
                  "url": "https://www.utu.fi"
                },
                {
                  "@type": "Organization",
                  "name": "VSP",
                  "url": "https://vsp.fi"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Turku",
                "addressRegion": "Southwest Finland",
                "addressCountry": "Finland"
              },
              "email": "riku@lauttia.com",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Software Engineering",
                "Enterprise AI Solutions",
                "Technology Innovation",
                "Startup Leadership",
                "AI Strategy"
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
              "description": "AI Engineer and serial co-founder of Since AI, Root, Kolt, and Attractor. Expert in artificial intelligence, machine learning, and enterprise technology solutions."
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
