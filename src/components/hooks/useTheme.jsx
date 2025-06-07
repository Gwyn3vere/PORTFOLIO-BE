import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "blue");
    root.classList.add(newTheme);
  };

  const setTheme = (newTheme) => {
    applyTheme(newTheme);
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}
