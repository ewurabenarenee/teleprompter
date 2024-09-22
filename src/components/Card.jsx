import { useContext, useEffect } from "react";
import { FileContext } from "../context/FileContext";
import { ThemeContext } from "../context/ThemeContext";
import SentenceNavigator from "./SentenceNavigator";

function Card() {
  const {
    sentences,
    currentSentenceIndex,
    goToNextSentence,
    goToPreviousSentence,
  } = useContext(FileContext);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight") {
        goToNextSentence();
      } else if (event.key === "ArrowLeft") {
        goToPreviousSentence();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNextSentence, goToPreviousSentence]);

  return (
    <div
      className={`w-full md:w-4/5 h-1/2 md:h-full flex flex-col justify-center items-center p-2 md:p-4 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex-grow flex items-center justify-center text-xl md:text-2xl">
        {sentences.length > 0
          ? sentences[currentSentenceIndex]
          : "No text uploaded yet!"}
      </div>
      {sentences.length > 0 && <SentenceNavigator />}
    </div>
  );
}

export default Card;
