import Layout from '../components/layout/Layout';
import SEO, { getPersonSchema } from '../components/SEO';
import {
  getProfile,
  getAbout,
  getEducation,
  getWork,
  getFeaturedArticles,
} from '../src/lib/content';

const introLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rikulauttia' },
  { name: 'GitHub', href: 'https://github.com/rikulauttia' },
  { name: 'X', href: 'https://x.com/rikulauttia' },
  { name: 'Email', href: 'mailto:riku@lauttia.com' },
];


const HomePage = () => {
  const profile = getProfile();
  const about = getAbout();
  const education = getEducation();
  const work = getWork();
  const articles = getFeaturedArticles().slice(0, 3);

  const timeline = [
    ...work.map((item) => ({
      key: item.id,
      period: item.period,
      logo: item.logo,
      logoWidth: item.logoWidth,
      logoHeight: item.logoHeight,
      name: item.name,
      url: item.url,
      role: item.role,
      description: item.description,
    })),
    ...education.map((item) => ({
      key: item.field,
      period: item.period,
      logo: item.logo,
      logoWidth: item.logoWidth,
      logoHeight: item.logoHeight,
      name: item.institution,
      url: item.url,
      role: item.degree,
      description: `${item.field}, ${item.institution}`,
      thesis: item.thesis,
    })),
  ];

  return (
    <Layout>
      <SEO jsonLd={getPersonSchema(profile)} />

      {/* Introduction */}
      <section className="wrap pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="flex items-center justify-center gap-5 sm:gap-7">
          <img
            src="/images/riku-lauttia.webp"
            alt="Riku Lauttia"
            width="600"
            height="600"
            className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-32 sm:w-32 md:h-40 md:w-40"
          />

          <div>
            <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Riku Lauttia
            </h1>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
              {introLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      link.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience & education */}
      <section id="work" className="wrap scroll-mt-20 pb-12 md:pb-16">
        <ul className="space-y-10 md:space-y-11">
          {timeline.map((item) => (
            <li
              key={item.key}
              className="md:grid md:grid-cols-[5rem_4rem_1fr] md:gap-x-6"
            >
              <div className="whitespace-nowrap text-[13px] tabular-nums text-ink-faint md:pt-1.5">
                {item.period}
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="mt-3 flex h-11 w-11 items-center justify-center transition-opacity duration-150 hover:opacity-60 md:mt-0"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  className="h-full w-full object-contain"
                />
              </a>
              <div className="mt-3 md:mt-0">
                <p className="max-w-prose text-ink-muted">
                  <span className="text-ink">{item.role}</span> — {item.description}
                </p>
                {item.thesis && (
                  <p className="mt-1.5 max-w-prose text-[14px] text-ink-faint">
                    Thesis: {item.thesis}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Writing */}
      <section id="writing" className="wrap scroll-mt-20 py-12 md:py-16">
        <h2 className="text-2xl tracking-tight md:text-[28px]">Writing</h2>
        <p className="mt-2 max-w-prose text-ink-muted">
          Notes on AI, software, systems, and technology.
        </p>
        <ul className="mt-10 max-w-prose border-t border-line">
          {articles.map((article) => (
            <li key={article.id} className="border-b border-line">
              <a
                href={`/writing/${article.slug}`}
                className="group flex items-baseline justify-between gap-4 py-5"
              >
                <span className="font-medium text-ink">{article.title}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-ink-faint transition-transform duration-150 group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <a href="/writing" className="link">
            All writing
          </a>
        </p>
      </section>

      {/* About */}
      <section id="about" className="wrap scroll-mt-20 py-12 md:py-16">
        <h2 className="text-2xl tracking-tight md:text-[28px]">About</h2>
        <div className="mt-6 max-w-prose space-y-5 text-ink-muted">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

    </Layout>
  );
};

export default HomePage;
