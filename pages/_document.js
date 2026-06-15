import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta tags */}
        <meta name="theme-color" content="#fdfdfc" />
        <meta name="author" content="Riku Lauttia" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="j-ILo9bEkx8_pOtSj67g1iTTYmssO0BB9fyQF_5iQcw" />

        {/* Social Media Profile Links */}
        <link rel="me" href="https://www.linkedin.com/in/rikulauttia" />
        <link rel="me" href="https://github.com/rikulauttia" />
        <link rel="me" href="https://x.com/rikulauttia" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Riku Lauttia",
              "url": "https://rikulauttia.com/",
              "image": "https://rikulauttia.com/og-image.jpg",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Teleste",
                  "url": "https://www.teleste.com"
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
                "Product Development",
                "Data Systems",
                "Cloud Infrastructure"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/rikulauttia",
                "https://github.com/rikulauttia",
                "https://x.com/rikulauttia"
              ],
              "description": "Riku Lauttia works at the intersection of AI engineering, software engineering, commercial strategy, and product development."
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
