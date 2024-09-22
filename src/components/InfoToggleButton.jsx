import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function InfoToggleButton({ onClick, isDarkMode }) {
  return (
    <button
      onClick={onClick}
      className={`  rounded-full focus:outline-none ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      <FontAwesomeIcon icon={faInfoCircle} size="lg" />
    </button>
  );
}

export default InfoToggleButton;
