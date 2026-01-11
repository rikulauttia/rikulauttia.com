import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiTag, FiExternalLink, FiCalendar } from 'react-icons/fi';
import Layout from '../../components/layout/Layout';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import SEO, { getArticleSchema, getBreadcrumbs } from '../../components/SEO';
import { getArticleBySlug, getArticles, getProjects } from '../../src/lib/content';

export default function ArticlePage({ article, relatedProjects }) {
  if (!article) {
    return null;
  }

  // Format date if available
  const publishDate = article.publishedDate && article.publishedDate !== 'TODO'
    ? new Date(article.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  // Generate article schema for SEO
  const articleSchema = getArticleSchema(article);

  return (
    <Layout>
      <SEO
        title={`${article.title} | Riku Lauttia`}
        description={article.excerpt || `Read "${article.title}" by Riku Lauttia on ${article.category}.`}
        canonical={article.url} // Canonical points to original publication
        ogType="article"
        jsonLd={articleSchema}
        breadcrumbs={getBreadcrumbs(`/writing/${article.slug}`, article.title)}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="accent">{article.category}</Badge>
              {article.tags?.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="subtle">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-dark-400">
              {publishDate && (
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span className="text-sm">{publishDate}</span>
                </div>
              )}
              {article.readingTime && article.readingTime !== 'TODO' && (
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4" />
                  <span className="text-sm">{article.readingTime}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <FiExternalLink className="w-4 h-4" />
                <span className="text-sm">Published on {article.platform}</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Article Excerpt/Summary */}
      <Section>
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" hover={false}>
                <h2 className="text-2xl font-semibold text-dark-50 mb-4">
                  Article Summary
                </h2>

                {/* Excerpt or placeholder */}
                {article.excerpt && article.excerpt !== 'TODO' ? (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-dark-300 leading-relaxed text-lg">
                      {article.excerpt}
                    </p>
                  </div>
                ) : (
                  <div className="text-dark-300 leading-relaxed space-y-4">
                    <p>
                      This article explores {article.category.toLowerCase()} through the lens of practical implementation and real-world impact.
                    </p>
                    <p className="text-sm text-dark-400 italic">
                      Full article excerpt coming soon. Read the complete article on {article.platform}.
                    </p>
                  </div>
                )}

                {/* CTA to read full article */}
                <div className="mt-8 pt-8 border-t border-dark-800">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-dark-50 mb-1">
                        Read the Full Article
                      </h3>
                      <p className="text-sm text-dark-400">
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
                      <FiExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Key Topics */}
      {article.tags && article.tags.length > 0 && (
        <Section className="bg-dark-900/30">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold text-dark-50 mb-6">
                  Key Topics Covered
                </h2>
                <div className="flex flex-wrap gap-3">
                  {article.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-900 border border-dark-800"
                    >
                      <FiTag className="w-4 h-4 text-accent-400" />
                      <span className="text-dark-200">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>
      )}

      {/* Related Projects/Work */}
      {relatedProjects && relatedProjects.length > 0 && (
        <Section>
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold text-dark-50 mb-6">
                  Related Work
                </h2>
                <div className="space-y-4">
                  {relatedProjects.map((project) => (
                    <a
                      key={project.id}
                      href={`/projects#${project.id}`}
                      className="block group"
                    >
                      <Card padding="md" hover={true}>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-dark-50 mb-1 group-hover:text-accent-400 transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-sm text-dark-400">
                              {project.tagline}
                            </p>
                          </div>
                          <FiArrowRight className="w-5 h-5 text-dark-600 group-hover:text-accent-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>
      )}

      {/* More Writing */}
      <Section className="bg-dark-900/30">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Read More
            </h2>
            <p className="text-lg text-dark-400 mb-8">
              Explore more articles on AI, technology, and innovation
            </p>
            <Button href="/writing" variant="outline" size="lg">
              All Articles
              <FiArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}

// Generate static paths for all articles
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

// Get article data for the page
export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  // Get related projects based on article tags/category
  const projects = getProjects();

  // Simple matching logic: if article is about AI and project involves AI
  const relatedProjects = projects
    .filter((project) => {
      // Match on category or tags
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
    .slice(0, 3); // Show max 3 related projects

  return {
    props: {
      article,
      relatedProjects: relatedProjects.length > 0 ? relatedProjects : null,
    },
  };
}
