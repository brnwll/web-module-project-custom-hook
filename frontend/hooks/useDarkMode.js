import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
  const toggleMode = () => setDarkMode(!darkMode);
  return [darkMode, toggleMode];
};

export default useDarkMode;
