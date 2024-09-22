import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`w-12 h-12 flex items-center justify-center rounded-lg focus:outline-none border-2 ${
        isDarkMode
          ? "bg-gray-900 text-yellow-300 border-purple-500"
          : "bg-white text-blue-500 border-purple-500"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
    </button>
  );
}

export default ThemeToggleButton;
