import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Customer/Homepage";
import { Servicepage } from "./pages/Servicepage";
import FuneralServicePage from "./pages/FuneralServicePage";
import PeriodicOfferingPage from "./pages/PeriodicOfferingPage";
import "./App.css";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { NotificationPage } from "./pages/Customer/NotificationPage";
import { News } from "./pages/Customer/News";
import {NewsDetail} from "./pages/Customer/NewsDetail";

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
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-detail" element={<NewsDetail />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/services/funeral" element={<FuneralServicePage />} />
        <Route
          path="/services/periodic-offering"
          element={<PeriodicOfferingPage />}
        />
      </Routes>
    </Box>
  );
}

export default App;
