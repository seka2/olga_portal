import { useEffect } from "react";

const useClickOutside = (refs: React.RefObject<HTMLElement>[], handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = refs.every(ref => ref.current && !ref.current.contains(event.target as Node));
      if (clickedOutside) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler]);
};

export default useClickOutside;
