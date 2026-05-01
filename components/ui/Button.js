import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-400 focus:ring-offset-2 focus:ring-offset-dark-950';

  const variants = {
    primary: 'bg-dark-50 text-dark-950 hover:bg-dark-200 active:bg-dark-300',
    secondary: 'bg-dark-800 text-dark-50 hover:bg-dark-700 active:bg-dark-600 border border-dark-700',
    outline: 'border border-dark-700 text-dark-200 hover:border-dark-600 hover:text-dark-50 active:bg-dark-900',
    ghost: 'text-dark-300 hover:text-dark-50 active:text-dark-200',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700',
  };

  const sizes = {
    sm: 'min-h-[36px] px-4 py-2 text-sm',
    md: 'min-h-[44px] px-6 py-2.5 text-[15px]',
    lg: 'min-h-[48px] px-8 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.span
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
