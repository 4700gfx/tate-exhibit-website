import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Wrapper component for blend animations with proper pinning
const BlendSection = ({ children, className = '', variant = 'fade', index = 0, isFirst = false, isLast = false }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Define different animation variants
    const variants = {
      fade: {
        from: {
          opacity: 0,
          scale: 0.95,
          filter: 'blur(20px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 1.05,
          filter: 'blur(20px)',
        }
      },
      slideUp: {
        from: {
          opacity: 0,
          y: 150,
          scale: 0.9,
          filter: 'blur(25px)',
        },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          y: -150,
          scale: 1.1,
          filter: 'blur(25px)',
        }
      },
      slideDown: {
        from: {
          opacity: 0,
          y: -150,
          scale: 0.9,
          filter: 'blur(25px)',
        },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          y: 150,
          scale: 1.1,
          filter: 'blur(25px)',
        }
      },
      zoomIn: {
        from: {
          opacity: 0,
          scale: 0.7,
          filter: 'blur(30px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 1.3,
          filter: 'blur(30px)',
        }
      },
      zoomOut: {
        from: {
          opacity: 0,
          scale: 1.3,
          filter: 'blur(30px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 0.7,
          filter: 'blur(30px)',
        }
      },
      slideLeft: {
        from: {
          opacity: 0,
          x: 200,
          scale: 0.9,
          filter: 'blur(25px)',
        },
        to: {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          x: -200,
          scale: 1.1,
          filter: 'blur(25px)',
        }
      },
      slideRight: {
        from: {
          opacity: 0,
          x: -200,
          scale: 0.9,
          filter: 'blur(25px)',
        },
        to: {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          x: 200,
          scale: 1.1,
          filter: 'blur(25px)',
        }
      },
      rotate: {
        from: {
          opacity: 0,
          scale: 0.85,
          rotationY: -25,
          filter: 'blur(25px)',
        },
        to: {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: 'blur(0px)',
        },
        exit: {
          opacity: 0,
          scale: 1.15,
          rotationY: 25,
          filter: 'blur(25px)',
        }
      }
    };

    const animation = variants[variant] || variants.fade;
    
    // First section: show immediately without entrance animation
    if (isFirst) {
      gsap.set(section, {
        ...animation.to,
      });

      // Only add exit animation for first section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 2.5,
          anticipatePin: 1,
          pinSpacing: false,
        }
      });

      tl.to(section, {
        duration: 0.4,
      })
      .to(section, {
        ...animation.exit,
        duration: 0.6,
        ease: 'power3.inOut',
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }

    // Last section: no exit animation, stays visible
    if (isLast) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 2.5,
          anticipatePin: 1,
          pinSpacing: false,
        }
      });

      tl.fromTo(
        section,
        {
          ...animation.from,
        },
        {
          ...animation.to,
          duration: 1,
          ease: 'power3.inOut',
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }

    // Middle sections: full animation with overlap
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 2.5,
        anticipatePin: 1,
        pinSpacing: false,
      }
    });

    tl.fromTo(
      section,
      {
        ...animation.from,
      },
      {
        ...animation.to,
        duration: 0.4,
        ease: 'power3.out',
      }
    )
    .to(section, {
      duration: 0.2,
    })
    .to(section, {
      ...animation.exit,
      duration: 0.4,
      ease: 'power3.in',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [variant, index, isFirst, isLast]);

  return (
    <div 
      ref={sectionRef} 
      className={`blend-section ${className}`} 
      style={{ 
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};

export default BlendSection;