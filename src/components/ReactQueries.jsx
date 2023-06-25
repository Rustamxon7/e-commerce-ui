import { useMediaQuery } from 'react-responsive';

export const isMobile = useMediaQuery({ query: '(max-width: 34em)' });
export const isTablet = useMediaQuery({
  query: '(max-width: 59em) and (min-width: 34em)',
});
export const isDesktop = useMediaQuery({ query: '(min-width: 75em)' });
