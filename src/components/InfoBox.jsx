import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import InfoToggleButton from "./InfoToggleButton";
import InfoContent from "./InfoContent";

function InfoBox() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  function toggleInfoBox() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="absolute bottom-4 right-4">
      <div className="relative">
        <InfoToggleButton onClick={toggleInfoBox} isDarkMode={isDarkMode} />
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2">
            <InfoContent onClose={toggleInfoBox} isDarkMode={isDarkMode} />
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoBox;
