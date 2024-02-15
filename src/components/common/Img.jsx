import React, { useState, useRef, useEffect } from 'react';

const Img = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imgRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const highQualityImage = new Image();
      highQualityImage.src = src;
      highQualityImage.onload = () => {
        setImageSrc(src);
      };
    }
  }, [isVisible, src]);

  return (
    <div >
      {isVisible ? (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          className={className}
          style={{ filter: 'blur(0px)', transition: 'filter 0.5s ease' }}
        />
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={className}
          style={{ filter: 'blur(10px)', transition: 'filter 0.5s ease' }}
        />
      )}
    </div>
  );
};

export default Img;
