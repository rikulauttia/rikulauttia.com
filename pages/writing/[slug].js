import fs from 'fs';
import path from 'path';
import Layout from '../../components/layout/Layout';
import SEO, { getArticleSchema, getBreadcrumbs } from '../../components/SEO';
import { getArticleBySlug, getArticles } from '../../src/lib/content';

export default function ArticlePage({ article, html }) {
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
        description={article.excerpt || `${article.title} — writing by Riku Lauttia.`}
        canonical={`https://rikulauttia.com/writing/${article.slug}`}
        ogType="article"
        ogImage={
          article.image && article.image.startsWith('/')
            ? `https://rikulauttia.com${article.image}`
            : undefined
        }
        jsonLd={getArticleSchema(article)}
        breadcrumbs={getBreadcrumbs(`/writing/${article.slug}`, article.title)}
      />

      <article className="wrap pt-16 pb-16 md:pt-24">
        <div className="max-w-prose">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-ink-faint">
            <span>{article.category}</span>
            {publishDate && (
              <>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={article.publishedDate}>{publishDate}</time>
              </>
            )}
            {article.readingTime && article.readingTime !== 'TODO' && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>{article.readingTime}</span>
              </>
            )}
          </div>

          <h1 className="mt-4 text-3xl leading-tight tracking-tight md:text-4xl">
            {article.title}
          </h1>

          <p className="mt-4 text-[15px] text-ink-faint">By Riku Lauttia</p>

          {html ? (
            <div
              className="article-body mt-10"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <p className="mt-10 text-ink-muted">This article is coming soon.</p>
          )}

          <p className="mt-14">
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

  const filePath = path.join(
    process.cwd(),
    'src/content/articles',
    `${article.slug}.html`
  );
  const html = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';

  return { props: { article, html } };
}
