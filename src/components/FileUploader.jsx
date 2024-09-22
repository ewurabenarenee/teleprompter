import { useState, useContext } from "react";
import { FileContext } from "../context/FileContext";
import { ThemeContext } from "../context/ThemeContext";

function FileUploader() {
  const { handleFileUpload } = useContext(FileContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [isDragging, setIsDragging] = useState(false);

  function onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 ${
        isDragging
          ? "border-dashed border-purple-500"
          : "border-dashed border-purple-500"
      } p-4 md:p-6 text-center w-full mb-2 md:mb-4 rounded-lg cursor-pointer ${
        isDarkMode
          ? "bg-gray-900 text-gray-100 border-gray-700"
          : "bg-white text-gray-800 border-gray-300"
      }`}
    >
      <input
        type="file"
        onChange={onFileChange}
        className="hidden"
        id="fileUpload"
      />
      <label htmlFor="fileUpload" className="cursor-pointer">
        <div>Drag and drop a file here</div>
        <div>OR</div>
        <div className="text-purple-500 underline">browse files</div>
      </label>
    </div>
  );
}

export default FileUploader;
