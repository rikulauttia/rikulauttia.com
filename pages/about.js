import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import SEO, { getPersonSchema, getBreadcrumbs } from '../components/SEO';
import { getProfile, getSkills, getEducation } from '../src/lib/content';
import profileData from '../src/content/profile.json';

export default function About() {
  const profile = getProfile();
  const skills = getSkills();
  const education = getEducation();

  return (
    <Layout>
      <SEO
        title="About — Riku Lauttia"
        description="AI engineer and entrepreneur focused on intelligent systems, commercial strategy, and product development."
        canonical="https://rikulauttia.com/about"
        jsonLd={getPersonSchema(profileData.personal)}
        breadcrumbs={getBreadcrumbs('/about', 'About')}
      />

      <Section className="pt-24 pb-8 md:pt-28 md:pb-10">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-50">
              About
            </h1>
          </motion.div>
        </Container>
      </Section>

      {/* Bio */}
      <Section size="sm">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Text — below image on mobile */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-5 text-dark-300 leading-relaxed text-base md:text-[17px]">
                  <p>
                    Riku Lauttia is an AI engineer and entrepreneur focused on building intelligent systems that shape the future of technology and business.
                  </p>
                  <p>
                    With a background in software engineering, applied AI, and business, he combines deep technical expertise with strong commercial acumen — working at the intersection of AI engineering, commercial strategy, and product development.
                  </p>
                  <p className="text-dark-500">
                    Machine Learning, Data Science and Artificial Intelligence — Aalto University.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image + meta — above text on mobile */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-7"
              >
                <div className="relative w-full aspect-square max-w-[240px] sm:max-w-xs mx-auto lg:mx-0 rounded-xl overflow-hidden border border-dark-800/60">
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
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="max-w-[240px] sm:max-w-xs mx-auto lg:mx-0">
                  <div className="text-[11px] text-dark-600 uppercase tracking-wider mb-1.5">Education</div>
                  <div className="text-sm text-dark-300">{education[0]?.institution}</div>
                  <div className="text-xs text-dark-600 mt-0.5">{education[0]?.degree}, {education[0]?.field}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Expertise */}
      <Section>
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-semibold mb-8 text-dark-200">
              Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="text-[11px] font-medium text-dark-600 uppercase tracking-wider mb-3">
                    {skillGroup.name}
                  </h3>
                  <div className="space-y-1.5">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-dark-400 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-dark-500 mb-5 text-sm max-w-sm">
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
