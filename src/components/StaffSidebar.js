import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ListItemText from "@mui/material/ListItemText";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { ListItemButton, ListItemIcon } from "@mui/material";
import "./Sidebar.module.css";
import AdminDiscount from "../pages/Admin/AdminDiscount";
import { Header } from "./Header";
import ServiceList from "../pages/Admin/ServiceList";
import ServicesNavbar from "../pages/Admin/Services/ServicesNavbar";
import StaffTable from "../components/StaffTable";

const drawerWidth = 240;

export default function StaffSidebar() {
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
                <ListItemText primary="Đơn dịch vụ" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("ScheduleList")}>
                <ListItemIcon>
                  <HistoryOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Lịch trình" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => setMenudata("StaffTable")}>
                <ListItemIcon>
                  <DiscountOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Vật dụng" />
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
      </Box>
    </Box>
  );
}
