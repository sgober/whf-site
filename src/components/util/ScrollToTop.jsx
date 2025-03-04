import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const bodyContainer = document.getElementById('body');
    bodyContainer.scrollTop = 0;
  }, [pathname]);

  return null;
}
