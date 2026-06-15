import Head from 'next/head';

const DEFAULT_DESCRIPTION =
  'Riku Lauttia works at the intersection of AI engineering, software engineering, commercial strategy, and product development.';

const SEO = ({
  title = 'Riku Lauttia',
  description = DEFAULT_DESCRIPTION,
  canonical = 'https://rikulauttia.com/',
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
  'url': 'https://rikulauttia.com/',
  'image': 'https://rikulauttia.com/og-image.jpg',
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
    'Product Development',
    'Data Systems',
    'Cloud Infrastructure',
  ],
  'sameAs': [
    'https://www.linkedin.com/in/rikulauttia',
    'https://github.com/rikulauttia',
    'https://x.com/rikulauttia',
  ],
  'description': profile.description,
});

export const getArticleSchema = (article, author = 'Riku Lauttia') => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'url': `https://rikulauttia.com/writing/${article.slug}`,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://rikulauttia.com/writing/${article.slug}`,
    },
    'author': {
      '@type': 'Person',
      'name': author,
      'url': 'https://rikulauttia.com/',
    },
    'publisher': {
      '@type': 'Person',
      'name': author,
      'url': 'https://rikulauttia.com/',
    },
    'description': article.excerpt || article.title,
    'articleSection': article.category,
    'keywords': article.tags?.join(', '),
  };

  if (article.publishedDate && article.publishedDate !== 'TODO') {
    schema.datePublished = article.publishedDate;
    schema.dateModified = article.publishedDate;
  }

  if (article.image && article.image.startsWith('/')) {
    schema.image = `https://rikulauttia.com${article.image}`;
  }

  return schema;
};

export const getBreadcrumbs = (path, label) => {
  const breadcrumbs = [{ name: 'Home', url: 'https://rikulauttia.com/' }];

  if (path !== '/') {
    breadcrumbs.push({
      name: label,
      url: `https://rikulauttia.com${path}`,
    });
  }

  return breadcrumbs;
};

export default SEO;
