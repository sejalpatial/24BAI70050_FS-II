import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  // Read data from localStorage on initialization
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        return JSON.parse(savedValue);
      }
    } catch (error) {
      console.error(`Error reading key "${key}" from localStorage:`, error);
    }
    return initialValue;
  });

  // Save data to localStorage whenever key or value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage:`, error);
    }
  }, [key, value]);

  // Remove data from localStorage
  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setValue(initialValue);
    } catch (error) {
      console.error(`Error removing key "${key}" from localStorage:`, error);
    }
  };

  return [value, setValue, removeValue];
}

export default useLocalStorage;