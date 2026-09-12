import { useEffect, useState } from "react";

function useMediaQuery(query: string, defaultMatches: boolean = window.matchMedia(query).matches): boolean {
    const [matches, setMatches] = useState<boolean>(defaultMatches);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== matches) setMatches(media.matches);

        const listener = () => setMatches(media.matches);

        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [query, matches]);

    return matches;
}

export default useMediaQuery;
