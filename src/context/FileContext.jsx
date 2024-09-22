import { createContext, useState } from "react";

export const FileContext = createContext();

function FileProvider({ children }) {
  const [sentences, setSentences] = useState([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  function handleFileUpload(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const splitSentences = text
        .split(/(?<=[.!?])\s+/)
        .filter((sentence) => sentence.trim() !== "");
      setSentences(splitSentences);
      setCurrentSentenceIndex(0);
    };
    reader.readAsText(file);
  }

  function goToNextSentence() {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    }
  }

  function goToPreviousSentence() {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex(currentSentenceIndex - 1);
    }
  }

  return (
    <FileContext.Provider
      value={{
        sentences,
        currentSentenceIndex,
        handleFileUpload,
        goToNextSentence,
        goToPreviousSentence,
      }}
    >
      {children}
    </FileContext.Provider>
  );
}

export { FileProvider };
