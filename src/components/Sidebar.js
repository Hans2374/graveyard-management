import * as React from "react";
import {
  createTheme,
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  ThemeProvider,
  ListItemButton
} from "@mui/material";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import "./Sidebar.module.css";
import AdminDiscount from "../pages/Admin/AdminDiscount";
import Dashboard from "../pages/Admin/Dashboard";
import { Header } from "./Header";
import ServiceList from "../pages/Admin/ServiceList";
import ServicesNavbar from "../pages/Admin/Services/ServicesNavbar";
import EmployeeNavbar from "../pages/Admin/EmployeeManagement/EmployeeNavbar";
import CustomerNavbar from "../pages/Admin/CustomerManagement/CustomerNavbar";
import { useState } from "react";
import NewsNavbar from "../pages/Admin/NewsManagement/NewsNavbar";

export default function Sidebar() {
  const [menudata, setMenudata] = React.useState("ServicesNavbar");

  const [activeItem, setActiveItem] = useState("ServicesNavbar");
  const drawerWidth = 240;

  const handleTabClick = (menudata) => {
    setActiveItem(menudata);
    setMenudata(menudata);
  };

  const theme = createTheme({
    components: {
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "var(--primary-color)",
              color: "white",
            },
            backgroundColor: activeItem === menudata ? "white" : "red",
            color: activeItem === menudata ? "black" : "black",
            '&.Mui-selected': {
            backgroundColor: 'var(--primary-color) !important',
            color: 'white',
          },
          },
        },
      },
      
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Header />
      </AppBar>
      <ThemeProvider theme={theme}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem>
                <ListItemButton
                  onClick={() => handleTabClick("ServicesNavbar")}
                  selected={activeItem === "ServicesNavbar"}
                >
                  <ListItemIcon>
                    <Inventory2OutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dịch vụ" />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton
                  onClick={() => handleTabClick("ServiceList")}
                  selected={activeItem === "ServiceList"}
                >
                  <ListItemIcon>
                    <HistoryOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Đơn dịch vụ" />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton
                  onClick={() => handleTabClick("AdminDiscount")}
                  selected={activeItem === "AdminDiscount"}
                >
                  <ListItemIcon>
                    <DiscountOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Khuyến mãi" />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton
                  onClick={() => handleTabClick("NewsNavbar")}
                  selected={activeItem === "NewsNavbar"}
                >
                  <ListItemIcon>
                    <ArticleOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Nội dung" />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton
                  onClick={() => handleTabClick("EmployeeNavbar")}
                  selected={activeItem === "EmployeeNavbar"}
                >
                  <ListItemIcon>
                    <AssignmentIndOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Nhân viên" />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton
                  onClick={() => handleTabClick("CustomerNavbar")}
                  selected={activeItem === "CustomerNavbar"}
                >
                  <ListItemIcon>
                    <ManageAccountsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Khách hàng" />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton
                  onClick={() => handleTabClick("Dashboard")}
                  selected={activeItem === "Dashboard"}
                >
                  <ListItemIcon>
                    <ShowChartOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Thống kê" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </ThemeProvider>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#F2F2F2" }}
      >
        {menudata === "ServicesNavbar" && <ServicesNavbar />}
        {menudata === "ServiceList" && <ServiceList />}
        {menudata === "AdminDiscount" && <AdminDiscount />}
        {menudata === "NewsNavbar" && <NewsNavbar />}
        {menudata === "EmployeeNavbar" && <EmployeeNavbar />}
        {menudata === "CustomerNavbar" && <CustomerNavbar />}
        {menudata === "Dashboard" && <Dashboard />}
      </Box>
    </Box>
  );
}
