const links = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rikulauttia' },
  { name: 'GitHub', href: 'https://github.com/rikulauttia' },
  { name: 'X', href: 'https://x.com/rikulauttia' },
  { name: 'Email', href: 'mailto:riku@lauttia.com' },
];

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-8 text-[15px]">
        <span className="font-semibold text-ink">Riku Lauttia</span>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-ink-muted transition-colors duration-150 hover:text-ink"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
