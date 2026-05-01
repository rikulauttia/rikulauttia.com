import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import SEO, { getBreadcrumbs } from '../components/SEO';

export default function Contact() {
  const links = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rikulauttia', icon: FiLinkedin },
    { name: 'GitHub', href: 'https://github.com/rikulauttia', icon: FiGithub },
    { name: 'X', href: 'https://x.com/rikulauttia', icon: FaXTwitter },
  ];

  return (
    <Layout>
      <SEO
        title="Contact — Riku Lauttia"
        description="For AI systems, software, partnerships, or company-building discussions, reach out directly."
        canonical="https://rikulauttia.com/contact"
        breadcrumbs={getBreadcrumbs('/contact', 'Contact')}
      />

      <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-lg"
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-5 text-dark-50">
              Contact
            </h1>

            <p className="text-dark-400 leading-relaxed mb-10 text-[15px] max-w-sm">
              For AI systems, software, partnerships, or company-building discussions, reach out directly.
            </p>

            {/* Email — full-width tap area on mobile */}
            <div className="mb-10">
              <a
                href="mailto:riku@lauttia.com"
                className="inline-flex items-center gap-3 min-h-[44px] text-dark-200 hover:text-dark-50 active:text-dark-300 transition-colors text-base break-all"
              >
                <FiMail className="w-[18px] h-[18px] text-dark-500 flex-shrink-0" />
                riku@lauttia.com
              </a>
            </div>

            {/* Social links — 44px touch targets */}
            <div className="pt-7 border-t border-dark-800/60">
              <div className="flex items-center gap-1 -ml-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 min-h-[44px] px-3 text-dark-500 hover:text-dark-200 active:text-dark-300 transition-colors text-sm"
                    aria-label={link.name}
                  >
                    <link.icon className="w-[17px] h-[17px]" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
}
