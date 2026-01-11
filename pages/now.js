import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import SEO, { getBreadcrumbs } from '../components/SEO';
import { getProfile } from '../src/lib/content';

export default function Now() {
  const profile = getProfile();
  const lastUpdated = '2026-01-11'; // Update this when content changes

  return (
    <Layout>
      <SEO
        title="What I'm Working On Now | Riku Lauttia"
        description="Current focus areas and projects for Riku Lauttia - AI engineering, venture building, and strategic partnerships."
        canonical="https://rikulauttia.com/now"
        breadcrumbs={getBreadcrumbs('/now', 'Now')}
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
              What I'm Working On Now
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 leading-relaxed">
              Current focus areas, projects, and initiatives as of{' '}
              <time dateTime={lastUpdated} className="text-accent-400">
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

      {/* Current Focus */}
      <Section>
        <Container size="default">
          <div className="space-y-8">
            {/* Primary Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" hover={false}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-semibold text-dark-50">
                    Software Engineering at Teleste
                  </h2>
                  <Badge variant="accent">Current Role</Badge>
                </div>
                <p className="text-dark-300 leading-relaxed mb-4">
                  Contributing to broadband R&D, developing scalable software
                  components and optimized caching systems that enhance product
                  performance for millions of users worldwide. Building testing
                  frameworks and CI/CD optimizations for enterprise-grade
                  access-network solutions.
                </p>
                <div className="text-sm text-dark-400">
                  April 2025 - Present
                </div>
              </Card>
            </motion.div>

            {/* Active Ventures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-dark-50 mb-6">
                Active Ventures & Co-Founder Roles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card padding="lg" hover={false}>
                  <h3 className="text-xl font-semibold text-dark-50 mb-2">
                    Since AI
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    Leading strategic partnerships for Northern Europe's premier
                    AI innovation platform. Organizing hackathons and building
                    relationships with global technology leaders.
                  </p>
                  <a
                    href="https://sinceai.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    sinceai.fi →
                  </a>
                </Card>

                <Card padding="lg" hover={false}>
                  <h3 className="text-xl font-semibold text-dark-50 mb-2">
                    Root
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    Co-founding the Nordic region's premier innovative
                    recruiting event, connecting 1000+ participants with top IT
                    companies and influential speakers.
                  </p>
                  <a
                    href="https://rootexpo.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    rootexpo.fi →
                  </a>
                </Card>

                <Card padding="lg" hover={false}>
                  <h3 className="text-xl font-semibold text-dark-50 mb-2">
                    Kolt
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    Developing automation solutions for complex operational
                    challenges. Leading R&D, architecture, and systems
                    integration for scalable deployment.
                  </p>
                  <a
                    href="https://kolt.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    kolt.fi →
                  </a>
                </Card>

                <Card padding="lg" hover={false}>
                  <h3 className="text-xl font-semibold text-dark-50 mb-2">
                    Attractor
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    Building production-grade software and applied AI systems.
                    Client discovery, technical workshops, AI implementation,
                    and solution architecture.
                  </p>
                  <a
                    href="https://attractor.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    attractor.fi →
                  </a>
                </Card>
              </div>
            </motion.div>

            {/* Current Learning & Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card padding="lg" hover={false}>
                <h2 className="text-2xl font-semibold text-dark-50 mb-4">
                  Current Focus Areas
                </h2>
                <ul className="space-y-3 text-dark-300">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">→</span>
                    <span>
                      Scaling AI infrastructure and MLOps practices for
                      enterprise deployments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">→</span>
                    <span>
                      Building strategic partnerships between Nordic startups
                      and global tech companies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">→</span>
                    <span>
                      Developing production-ready AI solutions that deliver
                      measurable business value
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">→</span>
                    <span>
                      Contributing to the Nordic AI ecosystem through hackathons
                      and innovation events
                    </span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card padding="lg" hover={false}>
                <h2 className="text-2xl font-semibold text-dark-50 mb-4">
                  Availability
                </h2>
                <p className="text-dark-300 leading-relaxed mb-4">
                  {profile.availability.message}
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.availability.forConsulting && (
                    <Badge variant="accent">Open to Consulting</Badge>
                  )}
                  {profile.availability.forPartnerships && (
                    <Badge variant="accent">Open to Partnerships</Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* About the /now page */}
      <Section className="bg-dark-900/30">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">About This Page</h2>
            <p className="text-dark-400 mb-4">
              This is a{' '}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 transition-colors"
              >
                /now page
              </a>
              , inspired by Derek Sivers. It's a snapshot of what I'm currently
              focused on, updated regularly to reflect my current priorities and
              projects.
            </p>
            <p className="text-sm text-dark-500">
              Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let's collaborate
            </h2>
            <p className="text-lg text-dark-400 mb-8">
              Interested in working together on AI projects or strategic
              partnerships?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-dark-50 text-dark-950 rounded-lg font-medium hover:bg-dark-100 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
