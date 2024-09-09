import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomepageBefore } from "./pages/HomepageBefore";
import { Servicepage } from "./pages/Servicepage";
import FuneralServicePage from "./pages/FuneralServicePage";
import PeriodicOfferingPage from "./pages/PeriodicOfferingPage";
import "./App.css";
import { Box } from "@mui/material";

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
        <Route path="/" element={<HomepageBefore />} />
        <Route path="/services" element={<Servicepage />} />
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
