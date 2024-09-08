import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomepageBefore } from "./pages/Homepage";
import "./App.css";
import { Box } from "@mui/material";
import Sidebar from "./pages/Admin/Sidebar";

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
        <Route path="/home" element={<HomepageBefore />} />
        <Route path="/admin" element={<Sidebar />} />
        <Route path="/contact" element={<HomepageBefore />} />
      </Routes>
    </Box>
  );
}


export default App;
