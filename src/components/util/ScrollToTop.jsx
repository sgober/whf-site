import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  const scrollToTop = () => {
    if (isMobile) {
      window.scrollTo(0, 0);
    } else {
      document.getElementById('body').scrollTop = 0;
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
