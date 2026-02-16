import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface UseScrollToHashOptions {
  offset?: number;
  delay?: number;
}

export const useScrollToHash = ({ offset = 80, delay = 100 }: UseScrollToHashOptions = {}) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.scrollY + rect.top - offset;
          
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [location.hash, offset, delay]);
};
