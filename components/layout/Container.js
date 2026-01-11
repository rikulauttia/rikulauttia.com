const Container = ({ children, className = '', size = 'default' }) => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-container',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`container-custom ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
