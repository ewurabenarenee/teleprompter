import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function InfoContent({ onClose, isDarkMode }) {
  return (
    <div
      className={`p-4 rounded-lg shadow-lg border-2 ${
        isDarkMode
          ? "bg-gray-800 text-gray-100 border-purple-500"
          : "bg-white text-gray-800 border-purple-500"
      } w-80`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">How to Use This Tool</h2>
        <button onClick={onClose} className="focus:outline-none">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <p className="mt-2 text-sm">
        This tool helps you read or memorize a speech from any device, like a
        teleprompter. It is useful if you haven&apos;t memorized your speech or
        want to read a long text without getting lost.
      </p>
      <h3 className="mt-4 text-md font-semibold">Getting Started</h3>
      <p className="mt-2 text-sm">
        Just drag and drop or upload a .txt file to get started.
      </p>
      <h3 className="mt-4 text-md font-semibold">Navigation</h3>
      <p className="mt-2 text-sm">
        Use the arrow keys to navigate through the text.
      </p>
      <h3 className="mt-4 text-md font-semibold">Upcoming Features</h3>
      <p className="mt-2 text-sm">
        Touch controls for mobile devices and support for more file formats are
        coming soon.
      </p>
    </div>
  );
}

export default InfoContent;
