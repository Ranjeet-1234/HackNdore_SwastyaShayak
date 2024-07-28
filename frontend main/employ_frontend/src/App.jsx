import { useContext, useEffect } from "react";
import "./App.scss"; // Importing the stylesheet for styling
import { ThemeContext } from "./context/ThemeContext"; // Importing theme context for managing theme state
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants"; // Importing constants for theme values
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing routing components
import MoonIcon from "./assets/icons/moon.svg"; // Importing moon icon for dark mode
import SunIcon from "./assets/icons/sun.svg"; // Importing sun icon for light mode
import BaseLayout from "./layout/BaseLayout"; // Importing the base layout component
import { Dashboard, PageNotFound } from "./screens"; // Importing screen components
import DeathTable from "./components/dashboard/areaTable/DeathTable"; // Importing DeathTable component
import BirthAllUserInfo from "./UserInfo/BirthAllUserInfo"; // Importing BirthAllUserInfo component
import ViewOSRFault from "./UserInfo/ViewOSRFault"; // Importing ViewOSRFault component
import ViewDocFault from "./UserInfo/ViewDocFault"; // Importing ViewDocFault component
import MedicalBody from "./Medical/MedicalBody"; // Importing MedicalBody component
import HospitaloneData from "./Medical/HospitaloneData"; // Importing HospitaloneData component

function App() {
  // Accessing theme context to manage and toggle theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Effect hook to add or remove dark mode class based on the current theme
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        {/* Main routing setup */}
        <Routes>
          {/* BaseLayout wraps all routes */}
          <Route element={<BaseLayout />}>
            {/* Define routes for different components/screens */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/death" element={<DeathTable />} />
            <Route path="/view/birth/details" element={<BirthAllUserInfo />} />
            <Route path="/view/osr/fault" element={<ViewOSRFault />} />
            <Route path="/view/doc/fault" element={<ViewDocFault />} />
            <Route path="/medical" element={<MedicalBody />} />
            <Route path="/hospitaldata" element={<HospitaloneData />} />
            {/* Route for 404 not found */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        {/* Button to toggle theme */}
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          {/* Toggle between sun and moon icons based on current theme */}
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
            alt="Toggle theme"
          />
        </button>
      </Router>
    </>
  );
}

export default App;
