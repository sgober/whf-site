import { useCallback, useEffect } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Fab, Fade, useMediaQuery, useScrollTrigger } from '@mui/material';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100
  });

  const scrollToTop = useCallback(
    transition => {
      if (isMobile) {
        window.scrollTo({ top: 0, left: 0, behavior: transition ? 'smooth' : 'instant' });
      } else {
        document.getElementById('body').scrollTop = 0;
      }
    },
    [isMobile]
  );

  useEffect(() => {
    scrollToTop();
  }, [pathname, scrollToTop]);

  return (
    isMobile && (
      <Fade in={trigger}>
        <Box onClick={() => scrollToTop(true)} role="presentation" sx={{ position: 'fixed', bottom: 25, right: 25 }}>
          <Fab aria-label="scroll back to top" size="medium">
            <KeyboardArrowUp />
          </Fab>
        </Box>
      </Fade>
    )
  );
}
