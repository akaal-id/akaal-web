"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AnimateOnScroll = () => {
  const router = useRouter();

  const runObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.animate;
          const delay = element.dataset.animateDelay || '0';

          setTimeout(() => {
            element.classList.add(`animate-${animationType}`);
            observer.unobserve(element);
          }, parseInt(delay));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
  };

  useEffect(() => {
    // Jalankan pertama kali
    runObserver();

    // Jalankan kembali setiap kali route berubah
    const handleRouteChange = () => {
      // Delay agar elemen sudah muncul di DOM
      setTimeout(runObserver, 100);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return null;
};

export default AnimateOnScroll;
