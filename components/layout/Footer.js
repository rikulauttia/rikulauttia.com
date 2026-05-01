import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Container from './Container';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/rikulauttia', icon: FiGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rikulauttia', icon: FiLinkedin },
  { name: 'X', href: 'https://x.com/rikulauttia', icon: FiTwitter },
  { name: 'Email', href: 'mailto:riku@lauttia.com', icon: FiMail },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/60 py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-10">
          <div>
            <p className="text-sm font-semibold text-dark-200 mb-1.5">Riku Lauttia</p>
            <p className="text-sm text-dark-600 leading-relaxed max-w-xs">
              AI engineer and founder building production AI systems and technology ventures.
            </p>
          </div>

          {/* Social icons — 44px touch targets */}
          <div className="flex items-center gap-1 -ml-2 sm:ml-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-center w-11 h-11 text-dark-600 hover:text-dark-300 transition-colors rounded-md"
                aria-label={link.name}
              >
                <link.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-dark-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-dark-700">
            &copy; {currentYear} Riku Lauttia
          </p>

          <div className="flex items-center gap-5">
            {[
              { href: '/about', label: 'About' },
              { href: '/work', label: 'Work' },
              { href: '/now', label: 'Now' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-dark-700 hover:text-dark-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
