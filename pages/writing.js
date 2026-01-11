import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import SEO, { getBreadcrumbs } from '../components/SEO';
import { getArticles } from '../src/lib/content';

export default function Writing() {
  const articles = getArticles();

  return (
    <Layout>
      <SEO
        title="Writing | Riku Lauttia"
        description="Articles and insights by Riku Lauttia on AI, technology, and innovation in Europe and beyond."
        canonical="https://rikulauttia.com/writing"
        breadcrumbs={getBreadcrumbs('/writing', 'Writing')}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Writing
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 leading-relaxed">
              Thoughts on AI, technology, and building the future of innovation
              in Europe and beyond.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Articles */}
      <Section>
        <Container size="default">
          <div className="space-y-4">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`/writing/${article.slug}`}
                  className="group block bg-dark-900/50 border border-dark-800 rounded-2xl p-8 hover:bg-dark-900/70 hover:border-dark-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-dark-50 group-hover:text-accent-400 transition-colors leading-tight mb-3">
                        {article.title}
                      </h2>
                      {article.excerpt && article.excerpt !== 'TODO' && (
                        <p className="text-dark-300 leading-relaxed mb-3">
                          {article.excerpt.length > 150
                            ? `${article.excerpt.substring(0, 150)}...`
                            : article.excerpt}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-accent-500/10 text-accent-400 border border-accent-500/20">
                          {article.category}
                        </span>
                        {article.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-dark-900 text-dark-400 border border-dark-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <FiArrowRight className="w-6 h-6 text-dark-600 group-hover:text-accent-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  <div className="text-sm text-dark-500">
                    Read more on this site • Originally published on {article.platform}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
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
              Stay updated
            </h2>
            <p className="text-lg text-dark-400 mb-8">
              Follow me on social media for more insights on AI and technology
            </p>
            <a
              href="https://x.com/rikulauttia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-dark-50 text-dark-950 rounded-lg font-medium hover:bg-dark-100 transition-all"
            >
              Follow on X
              <FiArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
