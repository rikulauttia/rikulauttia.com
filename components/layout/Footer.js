import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Container from './Container';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/rikulauttia',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rikulauttia',
    icon: FiLinkedin,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/rikulauttia',
    icon: FiTwitter,
  },
  {
    name: 'Email',
    href: 'mailto:riku@lauttia.com',
    icon: FiMail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold text-dark-50 mb-4">
              Riku Lauttia
            </h3>
            <p className="text-dark-400 leading-relaxed max-w-md">
              AI Engineer and serial co-founder driving innovation in artificial
              intelligence and enterprise solutions.
            </p>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-dark-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-900 border border-dark-800 text-dark-300 hover:text-dark-50 hover:border-dark-700 transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            © {currentYear} Riku Lauttia. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm text-dark-500 hover:text-dark-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-sm text-dark-500 hover:text-dark-300 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/now"
              className="text-sm text-dark-500 hover:text-dark-300 transition-colors"
            >
              Now
            </Link>
            <Link
              href="/contact"
              className="text-sm text-dark-500 hover:text-dark-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
