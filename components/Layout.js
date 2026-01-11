import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Projects', href: '/projects' },
    { name: 'Writing', href: '/writing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.08]">
      <nav className="flex justify-between items-center py-4 px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-2xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link href="/">RIKU LAUTTIA</Link>
        </motion.div>

        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/[0.05] transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <Link
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-300 font-medium text-base tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/[0.08] md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <ul className="py-6">
            {navItems.map((item) => (
              <li key={item.name} className="px-6 py-3">
                <Link
                  href={item.href}
                  className="block text-lg text-white/70 hover:text-white transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
      <motion.div className="h-px bg-white/20" style={{ scaleX }} />
    </header>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-white/[0.08] text-center">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <p className="text-white/40 text-sm font-medium">
        © 2025 Riku Lauttia. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="noise" />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
