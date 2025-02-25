import { useEffect, useState } from "react";

const useThemeDetector = () => {
  const getCurrentTheme = () => 
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const themeChangeHandler = () => setTheme(getCurrentTheme());

    mediaQuery.addEventListener("change", themeChangeHandler);
    return () => mediaQuery.removeEventListener("change", themeChangeHandler);
  }, []);

  return theme;
};

export default useThemeDetector;
