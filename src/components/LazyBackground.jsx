import React, { useState, useRef, useEffect } from 'react';

const LazyBackground = ({ src, className, children, ...props }) => {
  const [isInView, setIsInView] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const style = isInView ? { backgroundImage: `url(${src})` } : {};

  return (
    <div
      ref={divRef}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default LazyBackground;
