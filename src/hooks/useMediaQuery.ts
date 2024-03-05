import { useEffect, useMemo, useState } from 'react';
import tailwindConfig from '../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const { theme } = resolveConfig(tailwindConfig);

const breakpoints = theme.screens;
type BreakpointKey = keyof typeof breakpoints;

function useQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [mediaQuery]);

  return match;
}

export default function useMediaQuery<K extends BreakpointKey>(
  breakpointKey: K,
) {
  return useQuery(`(min-width: ${breakpoints[breakpointKey]})`);
}
