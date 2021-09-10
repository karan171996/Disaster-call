import { useState, useEffect } from "react";
const useDebounce = (value, timeout) => {
  const [debounceValue, setdebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceValue(value);
    }, timeout);

    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
};

export default useDebounce;
