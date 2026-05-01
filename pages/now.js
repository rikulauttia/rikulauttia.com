import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import SEO, { getBreadcrumbs } from '../components/SEO';

export default function Now() {
  const lastUpdated = '2026-05-01';

  return (
    <Layout>
      <SEO
        title="Now — Riku Lauttia"
        description="Current focus areas: production AI systems, venture building, machine learning, and software infrastructure."
        canonical="https://rikulauttia.com/now"
        breadcrumbs={getBreadcrumbs('/now', 'Now')}
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
              Now
            </h1>
            <p className="text-dark-600 text-sm">
              Updated{' '}
              <time dateTime={lastUpdated}>
                {new Date(lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <div className="max-w-2xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[11px] font-medium text-dark-600 uppercase tracking-wider mb-3">
                Engineering
              </h2>
              <p className="text-dark-400 leading-relaxed text-[15px]">
                Software Engineer at Teleste. Building scalable components for broadband R&D, optimizing caching systems and testing frameworks for access-network solutions serving millions of users globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h2 className="text-[11px] font-medium text-dark-600 uppercase tracking-wider mb-3">
                Ventures
              </h2>
              <div className="space-y-3 text-[15px] leading-relaxed">
                <p className="text-dark-400">
                  <span className="text-dark-200">Since AI</span> — AI community and innovation platform. Hackathon programs and partnerships with technology companies.
                </p>
                <p className="text-dark-400">
                  <span className="text-dark-200">Root</span> — Recruitment and talent platform connecting technology talent with companies. 1000+ participants.
                </p>
                <p className="text-dark-400">
                  <span className="text-dark-200">Kolt</span> — Automation and operational technology. R&D, architecture, and systems integration.
                </p>
                <p className="text-dark-400">
                  <span className="text-dark-200">Attractor</span> — Technology consultancy. Production-grade software, AI systems, and automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-[11px] font-medium text-dark-600 uppercase tracking-wider mb-3">
                Focus areas
              </h2>
              <ul className="space-y-1.5 text-dark-400 text-[15px]">
                <li>Production AI systems and MLOps infrastructure</li>
                <li>Machine learning, data systems, and AI infrastructure</li>
                <li>Building AI-native companies and communities</li>
                <li>Software architecture and developer tools</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-[11px] font-medium text-dark-600 uppercase tracking-wider mb-3">
                Education
              </h2>
              <p className="text-dark-400 text-[15px]">
                MSc Machine Learning, Data Science and Artificial Intelligence — Aalto University.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <p className="text-xs text-dark-700">
            This is a{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-dark-500 transition-colors"
            >
              /now page
            </a>
            , inspired by Derek Sivers.
          </p>
        </Container>
      </Section>
    </Layout>
  );
}
