import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from ".";
import { Box } from "@mui/material";

import { Homepage } from "../pages/Customer/Homepage";
import { Servicepage } from "../pages/Customer/Servicepage";
import { CustomerServicesPage } from "../pages/Customer/CustomerServicesPage";
import FuneralServicePage from "../pages/Customer/FuneralServicePage";
import PeriodicOfferingPage from "../pages/Customer/PeriodicOfferingPage";
import Sidebar from "../components/Sidebar";
import { NotificationPage } from "../pages/Customer/NotificationPage";
import { News } from "../pages/Customer/News";
import { NewsDetail } from "../pages/Customer/NewsDetail";
import StaffSidebar from "../components/StaffSidebar";
import { CustomerProfile } from "../pages/Customer/CustomerProfile";
import { LoginPage } from "../pages/LoginPage"

export default function AppRoute() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path={routes.homePage} element={<Homepage />} />
        <Route path={routes.admin} element={<Sidebar />} />
        <Route path={routes.staff} element={<StaffSidebar />} />
        <Route path={routes.notificationPage} element={<NotificationPage />} />
        <Route path={routes.news} element={<News />} />
        <Route path={routes.newsDetail} element={<NewsDetail />} />
        <Route path={routes.service} element={<Servicepage />} />
        <Route path={routes.funeralService} element={<FuneralServicePage />} />
        <Route path={routes.periodicOffering} element={<CustomerServicesPage />} />
        <Route path={routes.customerServicesPage} element={<PeriodicOfferingPage />} />
        <Route path={routes.customerProfile} element={<CustomerProfile />} />
        <Route path={routes.loginPage} element={<LoginPage />} />

      </Routes>
      <Route path={routes.admin} element={<Sidebar />} />
      <Route path={routes.staff} element={<StaffSidebar />} />
    </Box>
  );
}

// Cách gắn Link: 

// B1: import { routes } from "../routes";
//     import { Link as RouterLink } from 'react-router-dom';

// B2: 
{/* <RouterLink to={routes.loginPage} style={{  }}>
        <Button>
          Đăng nhập
        </Button>
    </RouterLink> */}


// Nếu dùng sx:
{/* <Link
      component={RouterLink}
      to={routes.loginPage}
      sx={{ textDecoration: 'none', color: 'black' }}
    >
      <Button
        sx={{ }}
      >
        Đăng nhập
      </Button>
    </Link> */}




// nếu thêm id: <Route path={`${routes.customerProfile}}/:id`} element={<CustomerProfile />} />
