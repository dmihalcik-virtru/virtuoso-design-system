import { useEffect, useState } from 'react';

/**
 * Match media hook
 *
 * @param {string} media css media query
 */
export default function useMatchMedia(media) {
  const mediaQueryList = matchMedia(media);
  const [matches, setMatches] = useState(mediaQueryList.matches);

  useEffect(() => {
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addListener(listener);

    return () => mediaQueryList.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return matches;
}
