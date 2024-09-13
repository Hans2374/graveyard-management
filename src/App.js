import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Customer/Homepage";
import { Servicepage } from "./pages/Customer/Servicepage";
import { CustomerServicesPage } from "./pages/Customer/CustomerServicesPage";
import FuneralServicePage from "./pages/Customer/FuneralServicePage";
import PeriodicOfferingPage from "./pages/Customer/PeriodicOfferingPage";
import "./App.css";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { NotificationPage } from "./pages/Customer/NotificationPage";
import { News } from "./pages/Customer/News";
import { NewsDetail } from "./pages/Customer/NewsDetail";
import StaffSidebar from "./components/StaffSidebar";
import { CustomerProfile } from "./pages/Customer/CustomerProfile";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Sidebar />} />
        <Route path="/staff" element={<StaffSidebar />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-detail" element={<NewsDetail />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/services/funeral" element={<FuneralServicePage />} />
        <Route path="/services/detail" element={<CustomerServicesPage />} />
        <Route
          path="/services/periodic-offering"
          element={<PeriodicOfferingPage />}
        />
        <Route path="/profile" element={<CustomerProfile />} />
      </Routes>
    </Box>
  );
}

export default App;
