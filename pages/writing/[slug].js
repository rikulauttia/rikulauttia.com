import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiCalendar } from 'react-icons/fi';
import Layout from '../../components/layout/Layout';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import Button from '../../components/ui/Button';
import SEO, { getArticleSchema, getBreadcrumbs } from '../../components/SEO';
import { getArticleBySlug, getArticles, getProjects } from '../../src/lib/content';

export default function ArticlePage({ article, relatedProjects }) {
  if (!article) {
    return null;
  }

  const publishDate = article.publishedDate && article.publishedDate !== 'TODO'
    ? new Date(article.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const articleSchema = getArticleSchema(article);

  return (
    <Layout>
      <SEO
        title={`${article.title} — Riku Lauttia`}
        description={article.excerpt || `Read "${article.title}" by Riku Lauttia on ${article.category}.`}
        canonical={article.url}
        ogType="article"
        jsonLd={articleSchema}
        breadcrumbs={getBreadcrumbs(`/writing/${article.slug}`, article.title)}
      />

      {/* Hero */}
      <Section className="pt-32 pb-12">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-dark-500">
              <span>{article.category}</span>
              {publishDate && (
                <>
                  <span className="text-dark-700">/</span>
                  <span>{publishDate}</span>
                </>
              )}
              <span className="text-dark-700">/</span>
              <span>{article.platform}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-dark-50">
              {article.title}
            </h1>
          </motion.div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section>
        <Container size="default">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {article.excerpt && article.excerpt !== 'TODO' ? (
                <p className="text-dark-300 leading-relaxed text-lg mb-8">
                  {article.excerpt}
                </p>
              ) : (
                <p className="text-dark-400 leading-relaxed mb-8">
                  This article explores {article.category.toLowerCase()} through the lens of practical implementation and real-world impact.
                </p>
              )}

              <div className="pt-8 border-t border-dark-800/40">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-dark-200 mb-1">
                      Read the full article
                    </h3>
                    <p className="text-sm text-dark-500">
                      Originally published on {article.platform}
                    </p>
                  </div>
                  <Button
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                  >
                    Read on {article.platform}
                    <FiExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <Section>
          <Container size="default">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-sm font-medium text-dark-500 uppercase tracking-wider mb-6">
                  Related work
                </h2>
                <div className="space-y-3">
                  {relatedProjects.map((project) => (
                    <a
                      key={project.id}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 py-4 border-b border-dark-800/40 hover:border-dark-700 transition-colors"
                    >
                      <div>
                        <h3 className="text-base font-medium text-dark-200 mb-0.5 group-hover:text-dark-50 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-dark-500">
                          {project.tagline}
                        </p>
                      </div>
                      <FiArrowRight className="w-4 h-4 text-dark-700 group-hover:text-dark-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>
      )}

      {/* More Writing */}
      <Section>
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Button href="/writing" variant="ghost" size="md">
              All writing
              <FiArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = getArticles();

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  const projects = getProjects();

  const relatedProjects = projects
    .filter((project) => {
      const articleKeywords = [
        ...(article.tags || []),
        article.category,
      ].map(k => k.toLowerCase());

      const projectKeywords = [
        project.name,
        project.tagline,
        project.description,
        project.category,
      ].join(' ').toLowerCase();

      return articleKeywords.some(keyword =>
        projectKeywords.includes(keyword.toLowerCase())
      );
    })
    .slice(0, 3);

  return {
    props: {
      article,
      relatedProjects: relatedProjects.length > 0 ? relatedProjects : null,
    },
  };
}
