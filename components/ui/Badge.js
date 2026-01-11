const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-dark-800 text-dark-200 border border-dark-700',
    accent: 'bg-accent-500/10 text-accent-400 border border-accent-500/20',
    success: 'bg-green-500/10 text-green-400 border border-green-500/20',
    subtle: 'bg-dark-900 text-dark-400 border border-dark-800',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
