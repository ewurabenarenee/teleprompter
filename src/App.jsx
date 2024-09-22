import Card from "./components/Card";
import ConfigurationBar from "./components/ConfigurationBar";
import InfoBox from "./components/InfoBox";
import { FileProvider } from "./context/FileContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <FileProvider>
        <div className="flex flex-col md:flex-row h-screen relative">
          <Card />
          <ConfigurationBar />
          <InfoBox />
        </div>
      </FileProvider>
    </ThemeProvider>
  );
}

export default App;
