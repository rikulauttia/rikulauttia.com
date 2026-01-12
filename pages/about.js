import { motion } from 'framer-motion';
import { FiAward, FiCode, FiZap } from 'react-icons/fi';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import SEO, { getPersonSchema, getBreadcrumbs } from '../components/SEO';
import { getProfile, getSkills } from '../src/lib/content';
import profileData from '../src/content/profile.json';

export default function About() {
  const profile = getProfile();
  const skills = getSkills();

  return (
    <Layout>
      <SEO
        title="About | Riku Lauttia"
        description="Learn about Riku Lauttia - AI Engineer, serial entrepreneur, and technology innovator based in Turku, Finland."
        canonical="https://rikulauttia.com/about"
        jsonLd={getPersonSchema(profileData.personal)}
        breadcrumbs={getBreadcrumbs('/about', 'About')}
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
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 leading-relaxed">
              AI Engineer and serial co-founder building production systems and companies in the Nordics.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Bio */}
      <Section>
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl font-semibold text-dark-50 mb-6">
                  Background
                </h2>
                <div className="space-y-6 text-dark-300 leading-relaxed">
                  <p>
                    I'm an AI Engineer and serial co-founder based in Turku, Finland.
                    I build production AI systems and companies.
                  </p>
                  <p>
                    At Teleste, I develop scalable software components for broadband R&D.
                    Built caching systems that reduced configuration latency.
                    Created testing frameworks for enterprise deployments.
                    Systems serve millions of broadband users globally.
                  </p>
                  <p>
                    Co-founded four companies: Since AI (AI hackathons), Root (recruiting events), Kolt (automation), and Attractor (consultancy).
                    1000+ participants across events.
                    Strategic partnerships with Nordic tech leaders.
                  </p>
                  <p>
                    I combine technical implementation with business execution.
                    Focus on shipping production systems that deliver measurable value.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-dark-800">
                  <Image
                    src="/rikulauttia.jpg"
                    alt="Riku Lauttia"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-dark-50 mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FiZap className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-dark-50">Location</div>
                      <div className="text-sm text-dark-400">
                        {profile.location.city}, {profile.location.country}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiAward className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-dark-50">Education</div>
                      <div className="text-sm text-dark-400">
                        University of Turku
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCode className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-dark-50">
                        Specialization
                      </div>
                      <div className="text-sm text-dark-400">
                        AI/ML Engineering
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section className="bg-dark-900/30">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} padding="lg" hover={false}>
                  <h3 className="text-xl font-semibold text-dark-50 mb-4">
                    {skillGroup.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
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
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card padding="lg" hover={false}>
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  Where are you based?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I'm based in Turku, Southwest Finland. I work primarily in the
                  Nordic region but collaborate with companies and partners
                  globally.
                </p>
              </Card>

              <Card padding="lg" hover={false}>
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  What's your educational background?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I studied Information and Communication Technology at the
                  University of Turku, where I wrote my thesis on "The Role of
                  Artificial Intelligence in Analyzing Large Datasets and Its
                  Utilization in Commercial Decision-Making." I hold certifications
                  including AWS Certified Cloud Practitioner (March 2025) and
                  Full Stack Open from the University of Helsinki (November 2024).
                </p>
              </Card>

              <Card padding="lg" hover={false}>
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  What kind of AI projects do you work on?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I focus on production-ready AI solutions that deliver measurable
                  business value. This includes machine learning systems, deep
                  learning applications, computer vision, natural language
                  processing, and MLOps infrastructure. I work across enterprise
                  software, automation systems, and strategic AI implementations.
                </p>
              </Card>

              <Card padding="lg" hover={false}>
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  What companies have you founded?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I've co-founded four companies: Since AI (AI hackathon and
                  innovation platform), Root (innovative recruiting events), Kolt
                  (automation solutions), and Attractor (technology consultancy).
                  Each focuses on different aspects of technology innovation and
                  business development in the Nordic ecosystem.
                </p>
              </Card>

              <Card padding="lg" hover={false}>
                <h3 className="text-xl font-semibold text-dark-50 mb-3">
                  Are you available for consulting or collaborations?
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  Yes, I'm open to consulting opportunities, strategic
                  partnerships, and innovative projects in AI and enterprise
                  solutions. Feel free to reach out via email at{' '}
                  <a
                    href="mailto:riku@lauttia.com"
                    className="text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    riku@lauttia.com
                  </a>{' '}
                  or through the{' '}
                  <a
                    href="/contact"
                    className="text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    contact page
                  </a>
                  .
                </p>
              </Card>
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
