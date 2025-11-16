import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Wrapper component for blend animations with variations
const BlendSection = ({ children, className = '', variant = 'fade' }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Define different animation variants
    const variants = {
      fade: {
        from: {
          opacity: 0,
          scale: 0.98,
          filter: 'blur(8px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 1.02,
          filter: 'blur(8px)',
        }
      },
      slideUp: {
        from: {
          opacity: 0,
          y: 100,
          scale: 0.95,
          filter: 'blur(12px)',
        },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          y: -80,
          scale: 1.05,
          filter: 'blur(12px)',
        }
      },
      slideDown: {
        from: {
          opacity: 0,
          y: -100,
          scale: 0.95,
          filter: 'blur(12px)',
        },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          y: 80,
          scale: 1.05,
          filter: 'blur(12px)',
        }
      },
      zoomIn: {
        from: {
          opacity: 0,
          scale: 0.85,
          filter: 'blur(15px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 1.15,
          filter: 'blur(15px)',
        }
      },
      zoomOut: {
        from: {
          opacity: 0,
          scale: 1.15,
          filter: 'blur(15px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 0.85,
          filter: 'blur(15px)',
        }
      },
      slideLeft: {
        from: {
          opacity: 0,
          x: 150,
          scale: 0.95,
          filter: 'blur(10px)',
        },
        to: {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          x: -150,
          scale: 1.05,
          filter: 'blur(10px)',
        }
      },
      slideRight: {
        from: {
          opacity: 0,
          x: -150,
          scale: 0.95,
          filter: 'blur(10px)',
        },
        to: {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          x: 150,
          scale: 1.05,
          filter: 'blur(10px)',
        }
      },
      rotate: {
        from: {
          opacity: 0,
          scale: 0.9,
          rotationY: -15,
          filter: 'blur(12px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 1.1,
          rotationY: 15,
          filter: 'blur(12px)',
        }
      }
    };

    const animation = variants[variant] || variants.fade;
    
    // Entrance animation (blend in) - smoother and more seamless
    gsap.fromTo(
      section,
      animation.from,
      {
        ...animation.to,
        duration: 1.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 15%',
          scrub: 2, // Increased for smoother animation
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Exit animation (blend out) - smoother transition
    gsap.to(section, {
      ...animation.exit,
      scrollTrigger: {
        trigger: section,
        start: 'bottom 65%',
        end: 'bottom 15%',
        scrub: 2, // Increased for smoother animation
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [variant]);

  return (
    <div ref={sectionRef} className={`blend-section ${className}`}>
      {children}
    </div>
  );
};

export default BlendSection;