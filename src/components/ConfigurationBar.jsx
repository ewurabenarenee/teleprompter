import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import FileUploader from "./FileUploader";

function ConfigurationBar() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`relative w-full md:w-2/5 h-1/2 md:h-full p-4 flex flex-col items-start space-y-4 ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="w-full flex justify-end">
        <ThemeToggleButton />
      </div>
      <div className="w-full">
        <FileUploader />
      </div>
    </div>
  );
}

export default ConfigurationBar;
