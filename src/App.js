import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomepageBefore } from "./pages/HomepageBefore";
import "./App.css";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";

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
        <Route path="/admin" element={<Sidebar />} />
      </Routes>
    </Box>
  );
}


export default App;
