import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Customer/Homepage";
import "./App.css";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { NotificationPage } from "./pages/Customer/NotificationPage"

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
      </Routes>
    </Box>
  );
}


export default App;
