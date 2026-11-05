import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue !== null
        ? JSON.parse(storedValue)
        : defaultValue;

    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  useEffect(() => {
    console.log("Saving theme",key,value)

    localStorage.setItem(key, JSON.stringify(value));

    console.log("Stoed Value ", localStorage.getItem(key))
  }, [key, value]);

  return [value, setValue];
}