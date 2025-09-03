import React, { useState, useRef, useEffect } from 'react';

const LazyBackground = ({ src, className, children, isVideo, ...props }) => {
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

  if (isVideo && isInView) {
    return (
      <div
        ref={divRef}
        className={className}
        {...props}
      >
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {children}
      </div>
    );
  }

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
