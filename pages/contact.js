import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';
import { FaXTwitter, FaMedium } from 'react-icons/fa6';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import SEO, { getBreadcrumbs } from '../components/SEO';
import { getSocialLinks } from '../src/lib/content';

export default function Contact() {
  const allSocialLinks = getSocialLinks();
  const requestedPlatforms = ['LinkedIn', 'X (Twitter)', 'GitHub', 'Instagram', 'Facebook', 'Medium'];
  const socialLinks = allSocialLinks.filter(link => requestedPlatforms.includes(link.platform));

  const getSocialIcon = (platform) => {
    const iconProps = { className: "w-5 h-5" };
    switch(platform) {
      case 'LinkedIn': return <FiLinkedin {...iconProps} />;
      case 'GitHub': return <FiGithub {...iconProps} />;
      case 'X (Twitter)': return <FaXTwitter {...iconProps} />;
      case 'Instagram': return <FiInstagram {...iconProps} />;
      case 'Facebook': return <FiFacebook {...iconProps} />;
      case 'Medium': return <FaMedium {...iconProps} />;
      default: return null;
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact | Riku Lauttia"
        description="Get in touch with Riku Lauttia - AI Engineer and Co-Founder."
        canonical="https://rikulauttia.com/contact"
        breadcrumbs={getBreadcrumbs('/contact', 'Contact')}
      />

      <Section className="pt-32 pb-16">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
              Get in Touch
            </h1>

            {/* Email */}
            <div className="mb-12">
              <a
                href="mailto:riku@lauttia.com"
                className="inline-flex items-center gap-3 px-6 py-4 bg-dark-800 border border-dark-700 rounded-lg hover:bg-dark-700 hover:border-accent-400 text-dark-50 hover:text-accent-400 transition-all text-lg font-medium"
              >
                <FiMail className="w-6 h-6" />
                riku@lauttia.com
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-dark-700">
              <h2 className="text-xl font-semibold text-dark-50 mb-6">
                Connect
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg hover:bg-dark-700 hover:border-accent-400 text-dark-200 hover:text-accent-400 transition-all"
                    aria-label={link.platform}
                  >
                    {getSocialIcon(link.platform)}
                    <span className="text-sm font-medium">{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}
