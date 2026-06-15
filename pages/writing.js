import Layout from '../components/layout/Layout';
import SEO, { getBreadcrumbs } from '../components/SEO';
import { getArticles } from '../src/lib/content';

export default function Writing() {
  const articles = getArticles();

  return (
    <Layout>
      <SEO
        title="Writing — Riku Lauttia"
        description="Notes on AI, software, systems, and technology by Riku Lauttia."
        canonical="https://rikulauttia.com/writing"
        breadcrumbs={getBreadcrumbs('/writing', 'Writing')}
      />

      <section className="wrap pt-16 pb-8 md:pt-24 md:pb-10">
        <h1 className="text-4xl tracking-tight md:text-5xl">Writing</h1>
        <p className="mt-4 max-w-prose text-ink-muted">
          Notes on AI, software, systems, and technology.
        </p>
      </section>

      <section className="wrap pb-16">
        <ul className="max-w-prose border-t border-line">
          {articles.map((article) => (
            <li key={article.id} className="border-b border-line">
              <a
                href={`/writing/${article.slug}`}
                className="group flex items-baseline justify-between gap-4 py-5"
              >
                <span>
                  <span className="block font-medium text-ink">
                    {article.title}
                  </span>
                  <span className="mt-1 block text-[14px] text-ink-faint">
                    {article.category}
                  </span>
                </span>
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
      </section>
    </Layout>
  );
}
