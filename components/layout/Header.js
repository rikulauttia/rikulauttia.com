import Link from 'next/link';

const navigation = [
  { name: 'Work', href: '/#work' },
  { name: 'Writing', href: '/#writing' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const Header = () => {
  return (
    <header className="border-b border-line">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-ink transition-opacity duration-150 hover:opacity-60"
        >
          Riku Lauttia
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[15px]">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-ink-muted transition-colors duration-150 hover:text-ink"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
