import Link from 'next/link';
import { motion } from 'framer-motion';

const TextLink = ({
  children,
  href,
  external = false,
  className = '',
  showUnderline = true,
  ...props
}) => {
  const baseStyles = `inline-flex items-center gap-1 text-dark-50 hover:text-accent-400 transition-colors duration-200 ${
    showUnderline ? 'underline decoration-dark-600 hover:decoration-accent-400 underline-offset-4' : ''
  }`;

  const classes = `${baseStyles} ${className}`;

  const content = (
    <motion.span
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center gap-1"
    >
      {children}
    </motion.span>
  );

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
};

export default TextLink;
