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
        title="Work Experience | Riku Lauttia"
        description="Professional experience in AI engineering, software development, and entrepreneurship. From Teleste R&D to founding multiple innovative companies."
        canonical="https://rikulauttia.com/work"
        breadcrumbs={getBreadcrumbs('/work', 'Work Experience')}
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
              Work Experience
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 leading-relaxed">
              Enterprise AI systems, venture building, and strategic consulting in the Nordic tech ecosystem.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container size="default">
          <Timeline items={experiences} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
              Common Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  What's your current role?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I'm currently a Software Engineer at Teleste, working on
                  broadband R&D since April 2025. I develop scalable software
                  components, optimize caching systems, and build testing
                  frameworks for enterprise access-network solutions.
                  Simultaneously, I co-found and lead multiple ventures in the AI
                  and technology space.
                </p>
              </div>

              <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  How many companies have you co-founded?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I've co-founded four companies: Since AI (January 2025), Root
                  (January 2025), Kolt (July 2024), and Attractor (October 2025).
                  Each focuses on different areas—AI innovation, recruiting,
                  automation, and technology consultancy respectively.
                </p>
              </div>

              <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  What industries have you worked in?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I've worked across telecommunications (Teleste), AI innovation
                  platforms (Since AI, Boost Turku), recruiting and talent
                  acquisition (Root), automation and operational technology
                  (Kolt), and technology consulting (Attractor). My work spans
                  enterprise software, AI/ML systems, and strategic partnerships.
                </p>
              </div>

              <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  What type of consulting do you offer?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I offer consulting in AI strategy and implementation, MLOps
                  infrastructure, enterprise AI solutions, and strategic
                  partnerships. Through Attractor, I help companies turn unclear
                  goals into shipped outcomes—defining metrics, designing
                  workflows, and integrating AI where it creates measurable value.
                </p>
              </div>

              <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  Are you open to new opportunities?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  Yes, I'm open to consulting engagements, strategic partnerships,
                  and innovative projects in AI and enterprise technology. I'm
                  particularly interested in opportunities that combine technical
                  depth with business impact. Reach out at{' '}
                  <a
                    href="mailto:riku@lauttia.com"
                    className="text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    riku@lauttia.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
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
              Available for consulting
            </h2>
            <p className="text-lg text-dark-400 mb-8">
              AI strategy and implementation. MLOps infrastructure. Production ML systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-dark-50 text-dark-950 rounded-lg font-medium hover:bg-dark-100 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-3.5 bg-dark-800 text-dark-50 border border-dark-700 rounded-lg font-medium hover:bg-dark-700 transition-all"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
