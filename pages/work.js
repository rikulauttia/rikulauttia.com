import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Timeline from '../components/ui/Timeline';
import SEO, { getBreadcrumbs } from '../components/SEO';
import { experiences } from '../src/lib/content';

export default function Work() {
  return (
    <Layout>
      <SEO
        title="Work — Riku Lauttia"
        description="Professional experience in AI engineering, software development, and founding technology companies."
        canonical="https://rikulauttia.com/work"
        breadcrumbs={getBreadcrumbs('/work', 'Work')}
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
              Work
            </h1>
            <p className="text-dark-500 text-[15px]">
              Production AI systems, venture building, and software engineering.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <Timeline items={experiences} />
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-lg"
          >
            <p className="text-dark-500 text-sm mb-5">
              For AI systems, software, partnerships, or company-building discussions, reach out directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center min-h-[44px] px-5 py-2.5 bg-dark-50 text-dark-950 rounded-lg text-sm font-medium hover:bg-dark-200 active:bg-dark-300 transition-colors"
              >
                Contact
              </a>
              <a
                href="/projects"
                className="inline-flex items-center min-h-[44px] px-5 py-2.5 border border-dark-700 text-dark-300 rounded-lg text-sm font-medium hover:border-dark-600 hover:text-dark-100 active:bg-dark-900 transition-colors"
              >
                View projects
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
