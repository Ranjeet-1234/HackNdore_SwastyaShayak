import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext"; // Import theme context to manage themes
import { LIGHT_THEME } from "../../constants/themeConstants"; // Import constant for light theme
import LogoBlue from "../../assets/images/logo_blue.svg"; // Import logo for light theme
import LogoWhite from "../../assets/images/logo_white.svg"; // Import logo for dark theme
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md"; // Importing icons for the sidebar menu
import { Link } from "react-router-dom"; // Import Link component for navigation
import "./Sidebar.scss"; // Import stylesheet for styling
import { SidebarContext } from "../../context/SidebarContext"; // Import sidebar context for managing sidebar state

const Sidebar = () => {
  // Contexts for theme and sidebar state
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null); // Ref to handle sidebar clicks

  // Function to handle clicks outside of the sidebar to close it
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  // Adding event listener for clicks outside of the sidebar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} // Conditional class based on sidebar state
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          {/* Display logo based on the current theme */}
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="Logo" />
          <span className="sidebar-brand-text">Swastya Shayak</span>
        </div>
        {/* Button to close the sidebar */}
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        {/* Sidebar menu for main navigation */}
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                to="/"
                style={{
                  backgroundColor: "lime",
                  color: "black",
                }}
                className="menu-link active"
              >
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text"> Birth Certificates</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/death"
                style={{
                  backgroundColor: "yellow",
                  color: "black",
                }}
                className="menu-link"
              >
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Death Certificates</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/medical/"
                style={{
                  backgroundColor: "orange",
                  color: "black",
                }}
                className="menu-link"
              >
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Medical Bodies</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Transactions</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Products</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Customer</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Messages</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Sidebar menu for additional settings and logout */}
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
