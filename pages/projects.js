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
        title="Projects | Riku Lauttia"
        description="Explore my ventures: Since AI, Root, Kolt, and Attractor - driving innovation in AI, recruiting, automation, and technology consulting."
        canonical="https://rikulauttia.com/projects"
        breadcrumbs={getBreadcrumbs('/projects', 'Projects & Ventures')}
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
              Projects & Ventures
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 leading-relaxed">
              Building companies and platforms that push the boundaries of AI,
              technology, and innovation across the Nordic region.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section>
        <Container size="default">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Tagline */}
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
              Interested in collaboration?
            </h2>
            <p className="text-lg text-dark-400 mb-8">
              Always open to discussing new opportunities and partnerships
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-dark-50 text-dark-950 rounded-lg font-medium hover:bg-dark-100 transition-all"
            >
              Start a Conversation
            </a>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
