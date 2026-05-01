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
        title="Writing — Riku Lauttia"
        description="Notes on AI, software, systems, and company building by Riku Lauttia."
        canonical="https://rikulauttia.com/writing"
        breadcrumbs={getBreadcrumbs('/writing', 'Writing')}
      />

      <Section className="pt-24 pb-8 md:pt-28 md:pb-10">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-dark-50">
              Writing
            </h1>
            <p className="text-dark-500 text-[15px]">
              Notes on AI, software, systems, and company building.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <div className="max-w-2xl">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <a
                  href={`/writing/${article.slug}`}
                  className="group flex items-start justify-between gap-4 py-5 border-b border-dark-800/40 hover:border-dark-700/60 active:opacity-70 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[15px] font-medium text-dark-300 group-hover:text-dark-100 transition-colors leading-snug mb-1.5">
                      {article.title}
                    </h2>
                    <span className="text-xs text-dark-600">
                      {article.category}
                    </span>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-dark-700 group-hover:text-dark-500 flex-shrink-0 mt-0.5 transition-colors" />
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <a
            href="https://x.com/rikulauttia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-dark-500 hover:text-dark-300 transition-colors min-h-[44px]"
          >
            @rikulauttia on X
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>
        </Container>
      </Section>
    </Layout>
  );
}
