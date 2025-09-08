import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    if ('web-vital' in window) {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics (in production, send to analytics)
          const value = 'value' in entry ? entry.value : entry.duration;
          console.log(`${entry.name}:`, value);
        }
      });

      // Observe various performance metrics
      try {
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      } catch (e) {
        // Fallback for browsers that don't support these metrics
        console.log('Performance monitoring not fully supported');
      }

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Preload critical resources on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Preload additional product images
        const productImages = [
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop'
        ];

        productImages.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;