import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from './Container';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Writing', href: '/writing' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-dark-800/60'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="text-base font-semibold text-dark-50 hover:text-dark-300 transition-colors"
          >
            Riku Lauttia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  router.pathname === item.href
                    ? 'text-dark-50'
                    : 'text-dark-500 hover:text-dark-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button — 44px tap target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-dark-300 hover:text-dark-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-dark-800/60 bg-dark-950/98 backdrop-blur-xl"
          >
            <Container>
              <div className="py-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center min-h-[52px] px-2 text-base font-medium transition-colors border-b border-dark-800/30 last:border-0 ${
                      router.pathname === item.href
                        ? 'text-dark-50'
                        : 'text-dark-400 hover:text-dark-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
