import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';
import SEO, { getBreadcrumbs } from '../components/SEO';
import { getProfile, getSocialLinks } from '../src/lib/content';

export default function Contact() {
  const profile = getProfile();
  const socialLinks = getSocialLinks();

  return (
    <Layout>
      <SEO
        title="Contact | Riku Lauttia"
        description="Get in touch with Riku Lauttia - AI Engineer and Co-Founder based in Turku, Finland."
        canonical="https://rikulauttia.com/contact"
        breadcrumbs={getBreadcrumbs('/contact', 'Contact')}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 leading-relaxed">
              Available for AI consulting, strategic partnerships, and production implementations. Reach out if you're building in AI or enterprise tech.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section>
        <Container size="sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card padding="lg" hover={false}>
              <div className="flex items-start gap-4">
                <FiMail className="w-6 h-6 text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-dark-50 mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-dark-300 hover:text-accent-400 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card padding="lg" hover={false}>
              <div className="flex items-start gap-4">
                <FiMapPin className="w-6 h-6 text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-dark-50 mb-2">
                    Location
                  </h3>
                  <p className="text-dark-300">{profile.location.city}, {profile.location.country}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Links */}
          <Card padding="lg">
            <h3 className="text-2xl font-semibold text-dark-50 mb-6 text-center">
              Connect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center justify-between p-4 rounded-lg bg-dark-800/50 border border-dark-700 hover:bg-dark-800 hover:border-dark-600 transition-all duration-300"
                >
                  <span className="text-base font-medium text-dark-200 group-hover:text-dark-50 transition-colors">
                    {link.platform}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-dark-600 group-hover:text-accent-400 transition-colors"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </Card>
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
              AI strategy and implementation. MLOps infrastructure. Production ML systems. Email me at riku@lauttia.com.
            </p>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
