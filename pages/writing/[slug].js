import Layout from '../../components/layout/Layout';
import SEO, { getArticleSchema, getBreadcrumbs } from '../../components/SEO';
import { getArticleBySlug, getArticles } from '../../src/lib/content';

export default function ArticlePage({ article }) {
  if (!article) {
    return null;
  }

  const publishDate =
    article.publishedDate && article.publishedDate !== 'TODO'
      ? new Date(article.publishedDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : null;

  return (
    <Layout>
      <SEO
        title={`${article.title} — Riku Lauttia`}
        description={`${article.title} — writing by Riku Lauttia.`}
        canonical={`https://rikulauttia.com/writing/${article.slug}`}
        ogType="article"
        jsonLd={getArticleSchema(article)}
        breadcrumbs={getBreadcrumbs(`/writing/${article.slug}`, article.title)}
      />

      <article className="wrap pt-16 pb-12 md:pt-24">
        <div className="max-w-prose">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-ink-faint">
            <span>{article.category}</span>
            {publishDate && (
              <>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={article.publishedDate}>{publishDate}</time>
              </>
            )}
          </div>

          <h1 className="mt-4 text-3xl leading-tight tracking-tight md:text-4xl">
            {article.title}
          </h1>

          <p className="mt-4 text-[15px] text-ink-faint">By Riku Lauttia</p>

          <div className="mt-10 border-t border-line pt-8">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-lg"
            >
              Read the article &nearr;
            </a>
            {article.platform && (
              <p className="mt-2 text-[14px] text-ink-faint">
                Published on {article.platform}
              </p>
            )}
          </div>

          <p className="mt-12">
            <a href="/writing" className="link">
              &larr; Writing
            </a>
          </p>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = getArticles();

  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return { notFound: true };
  }

  return { props: { article } };
}
