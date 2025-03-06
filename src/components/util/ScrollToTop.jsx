import { useEffect } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Fab, Fade, useMediaQuery, useScrollTrigger } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100
  });

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

  return (
    isMobile && (
      <Fade in={trigger}>
        <Box onClick={scrollToTop} role="presentation" sx={{ position: 'fixed', bottom: 25, right: 25 }}>
          <Fab aria-label="scroll back to top" size="medium">
            <KeyboardArrowUp />
          </Fab>
        </Box>
      </Fade>
    )
  );
}
