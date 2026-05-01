import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import ProjectCard from '../components/ui/ProjectCard';
import SEO, { getBreadcrumbs } from '../components/SEO';
import { projects } from '../src/lib/content';

export default function Projects() {
  return (
    <Layout>
      <SEO
        title="Projects — Riku Lauttia"
        description="Companies, systems, and communities built across AI, software, automation, and technology consulting."
        canonical="https://rikulauttia.com/projects"
        breadcrumbs={getBreadcrumbs('/projects', 'Projects')}
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
              Projects
            </h1>
            <p className="text-dark-500 text-[15px]">
              Companies, systems, and communities built across AI, software, and automation.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <div className="space-y-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-dark-500 text-sm mb-5">
              For AI systems, software, partnerships, or company-building discussions, reach out directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center min-h-[44px] px-5 py-2.5 bg-dark-50 text-dark-950 rounded-lg text-sm font-medium hover:bg-dark-200 active:bg-dark-300 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
