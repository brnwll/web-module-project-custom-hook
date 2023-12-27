import { useState } from "react";

const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useState(initialValue);
  const toggleMode = () => setDarkMode(!darkMode);
  return [darkMode, toggleMode];
};

export default useDarkMode;
