import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import BirthAllUserInfo from "./UserInfo/BirthAllUserInfo.jsx";
import MedicalBody from "./Medical/MedicalBody.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SidebarProvider>
      <App />
      {/* <MedicalBody /> */}
    </SidebarProvider>
  </ThemeProvider>
);
