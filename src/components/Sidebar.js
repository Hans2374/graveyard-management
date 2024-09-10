import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ListItem from "@mui/material/ListItem";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ListItemText from "@mui/material/ListItemText";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import { ListItemButton, ListItemIcon } from "@mui/material";
import "./Sidebar.module.css";
import AdminContent from "../pages/Admin/AdminContent";
import AdminDiscount from "../pages/Admin/AdminDiscount";
import Dashboard from "../pages/Admin/Dashboard";
import { Header } from "./Header";
import ServiceList from "../pages/Admin/ServiceList";
import ServicesNavbar from "../pages/Admin/Services/ServicesNavbar";
import EmployeeNavbar from "../pages/Admin/EmployeeManagement/EmployeeNavbar";
import CustomerNavbar from "../pages/Admin/CustomerManagement/CustomerNavbar";

const drawerWidth = 240;

export default function Sidebar() {
  const [menudata, setMenudata] = React.useState("ServicesNavbar");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Header />
      </AppBar>
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
              <ListItemButton onClick={() => setMenudata("ServicesNavbar")}>
                <ListItemIcon>
                  <Inventory2OutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dịch vụ" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("ServiceList")}>
                <ListItemIcon>
                  <HistoryOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Đơn dịch vụ" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("AdminDiscount")}>
                <ListItemIcon>
                  <DiscountOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Khuyến mãi" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("AdminContent")}>
                <ListItemIcon>
                  <ArticleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Nội dung" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("EmployeeNavbar")}>
                <ListItemIcon>
                  <AssignmentIndOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Nhân viên" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("CustomerNavbar")}>
                <ListItemIcon>
                  <ManageAccountsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Khách hàng" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("Dashboard")}>
                <ListItemIcon>
                  <ShowChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Thống kê" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#F2F2F2" }}
      >
        {menudata === "ServicesNavbar" && <ServicesNavbar />}
        {menudata === "ServiceList" && <ServiceList />}
        {menudata === "AdminDiscount" && <AdminDiscount />}
        {menudata === "AdminContent" && <AdminContent />}
        {menudata === "EmployeeNavbar" && <EmployeeNavbar />}
        {menudata === "CustomerNavbar" && <CustomerNavbar />}
        {menudata === "Dashboard" && <Dashboard />}
      </Box>
    </Box>
  );
}
