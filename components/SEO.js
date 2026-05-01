import Head from 'next/head';

const SEO = ({
  title = 'Riku Lauttia — AI Engineer & Founder',
  description = 'Riku Lauttia is an AI engineer and founder focused on production AI systems, machine learning, software infrastructure, automation, and AI-native ventures.',
  canonical = 'https://rikulauttia.com',
  ogImage = 'https://rikulauttia.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  jsonLd = null,
  breadcrumbs = null,
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Riku Lauttia" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@rikulauttia" />
      <meta name="twitter:site" content="@rikulauttia" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Riku Lauttia" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Performance hints */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Breadcrumb Structured Data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': breadcrumbs.map((crumb, index) => ({
                '@type': 'ListItem',
                'position': index + 1,
                'name': crumb.name,
                'item': crumb.url,
              })),
            }),
          }}
        />
      )}
    </Head>
  );
};

export const getPersonSchema = (profile) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': profile.name,
  'url': 'https://rikulauttia.com',
  'image': 'https://rikulauttia.com/og-image.jpg',
  'jobTitle': 'AI Engineer & Founder',
  'email': profile.email,
  'alumniOf': {
    '@type': 'Organization',
    'name': 'Aalto University',
    'url': 'https://www.aalto.fi',
  },
  'knowsAbout': [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Engineering',
    'Data Systems',
    'Automation',
    'AI Infrastructure',
    'Technology Entrepreneurship',
  ],
  'description': profile.bio,
});

export const getArticleSchema = (article, author = 'Riku Lauttia') => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': article.title,
  'url': article.url,
  'author': {
    '@type': 'Person',
    'name': author,
    'url': 'https://rikulauttia.com',
  },
  'publisher': {
    '@type': 'Person',
    'name': author,
    'url': 'https://rikulauttia.com',
  },
  'datePublished': article.publishedDate,
  'description': article.excerpt || article.title,
  'articleSection': article.category,
  'keywords': article.tags?.join(', '),
});

export const getBreadcrumbs = (path, label) => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rikulauttia.com' },
  ];

  if (path !== '/') {
    breadcrumbs.push({
      name: label,
      url: `https://rikulauttia.com${path}`,
    });
  }

  return breadcrumbs;
};

export default SEO;
