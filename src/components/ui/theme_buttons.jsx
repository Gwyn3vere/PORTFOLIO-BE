import { useState } from "react";

// CSS
import "../../assets/css/ui/theme_buttons.css";

// Hooks
import { useTheme } from "../hooks/useTheme";

function Theme() {
  const { setTheme } = useTheme();
  const [theme, setThemeState] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  }

  return (
    <div className="theme">
      <div className="list flex justify-center items-center gap-2">
        <button onClick={() => handleThemeChange("light")} className={`light-theme ${theme === "light" ? "active" : ""}`}></button>
        <button onClick={() => handleThemeChange("dark")} className={`dark-theme ${theme === "dark" ? "active" : ""}`}></button>
        <button onClick={() => handleThemeChange("blue")} className={`blue-theme ${theme === "blue" ? "active" : ""}`}></button>
      </div>
    </div>
  );
}

export default Theme;
