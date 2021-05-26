import { useEffect, useState } from 'react';

const useDebounceLocation = (value) => {
  const [debouncedLocation, setDebouncedLocation] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedLocation(value);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return debouncedLocation;
};

export { useDebounceLocation };
