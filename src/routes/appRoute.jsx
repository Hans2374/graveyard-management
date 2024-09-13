import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from ".";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";

//import file js (element), cẩn thận nhầm viết hoa với ko viết hoa nha ; )
import { CustomerProfile } from "./pages/Customer/CustomerProfile";
import { Servicepage } from "./pages/Customer/Servicepage";
import FuneralServicePage from "./pages/Customer/FuneralServicePage";
import PeriodicOfferingPage from "./pages/Customer/PeriodicOfferingPage";
import StaffSidebar from "./components/StaffSidebar";
export default function AppRoute() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ToastContainer />
      <Routes>
        {/* routes   cẩn thận nhầm viết hoa với ko viết hoa nha ; )  */}
        <Route path={routes.customerProfile} element={<CustomerProfile />} />
        <Route path={routes.service} element={<Servicepage />} />
        <Route path={routes.funeralService} element={<FuneralServicePage />} />
        <Route
          path={routes.periodicOffering}
          element={<PeriodicOfferingPage />}
        />
      </Routes>
      <Route path={routes.staff} element={<StaffSidebar />} />
    </Box>
  );
}

// nếu thêm id: <Route path={`${routes.customerProfile}}/:id`} element={<CustomerProfile />} />

// gắn link trong các trang khác: <Link to={routes.customerProfile}/> ai làm trang nào nhớ tự sửa nha ;v
