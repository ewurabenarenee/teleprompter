import { useContext } from "react";
import { FileContext } from "../context/FileContext";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SentenceNavigator() {
  const {
    currentSentenceIndex,
    goToNextSentence,
    goToPreviousSentence,
    sentences,
  } = useContext(FileContext);

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex mt-auto justify-center w-full">
      <button
        className={`px-4 py-2 mx-1 md:mx-2 flex items-center justify-center rounded-md border-2 ${
          isDarkMode
            ? "bg-gray-800 text-gray-100 border-purple-500"
            : "bg-gray-100 text-gray-800 border-purple-500"
        }`}
        onClick={goToPreviousSentence}
        disabled={currentSentenceIndex === 0}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <span className="mx-1 md:mx-2 flex items-center justify-center">
        {currentSentenceIndex + 1} / {sentences.length}
      </span>
      <button
        className={`px-4 py-2 mx-1 md:mx-2 flex items-center justify-center rounded-md border-2 ${
          isDarkMode
            ? "bg-gray-800 text-gray-100 border-purple-500"
            : "bg-gray-100 text-gray-800 border-purple-500"
        }`}
        onClick={goToNextSentence}
        disabled={currentSentenceIndex === sentences.length - 1}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default SentenceNavigator;
