const Section = ({ children, className = '', size = 'default', id }) => {
  const sizes = {
    sm: 'section-sm',
    default: 'section',
    lg: 'section-lg',
    none: '',
  };

  return (
    <section id={id} className={`${sizes[size]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
