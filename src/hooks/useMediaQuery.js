import { useState, useEffect } from "react";


const mediaQueries = {
  sm: "(min-width: 500px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  xl2: "(min-width: 1536px)",
};

function useMedia(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    setMatches(window.matchMedia(query).matches);
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}

export { mediaQueries, useMedia }
