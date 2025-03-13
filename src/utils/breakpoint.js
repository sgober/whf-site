import { useMediaQuery, useTheme } from '@mui/material';

const useBreakpoint = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('mobile'));
  const isTablet = useMediaQuery(theme.breakpoints.only('tablet'));
  const isLaptop = useMediaQuery(theme.breakpoints.only('laptop'));
  const isDesktop = useMediaQuery(theme.breakpoints.only('desktop'));

  if (isMobile) {
    return 'mobile';
  } else if (isTablet) {
    return 'tablet';
  } else if (isLaptop) {
    return 'laptop';
  } else if (isDesktop) {
    return 'desktop';
  }
};

export default useBreakpoint;
