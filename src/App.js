import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Customer/Homepage";
import { Servicepage } from "./pages/Servicepage";
import FuneralServicePage from "./pages/FuneralServicePage";
import PeriodicOfferingPage from "./pages/PeriodicOfferingPage";
import "./App.css";
import { Box } from "@mui/material";
<<<<<<< HEAD
import {CustomerServicesPage} from "./pages/Customer/CustomerServicesPage"
=======
import Sidebar from "./components/Sidebar";
import { NotificationPage } from "./pages/Customer/NotificationPage";
import { News } from "./pages/Customer/News";
>>>>>>> 3d5b298d7a7ff01d92ee9ad6771012d3488137dd

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
<<<<<<< HEAD
        <Route path="/services" element={<CustomerServicesPage/>} />
=======
        <Route path="/news" element={<News/>} />
>>>>>>> 3d5b298d7a7ff01d92ee9ad6771012d3488137dd
      </Routes>
    </Box>
  );
}


export default App;
