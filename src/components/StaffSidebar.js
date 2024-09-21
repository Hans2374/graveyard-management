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
  ThemeProvider,ListItemIcon, ListItemButton
} from "@mui/material";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import "./Sidebar.module.css";
import { Header } from "./Header";
import ScheduleList from "../pages/Staff/ScheduleList";
import StaffTable from "../components/StaffTable";
import { useState } from "react"
import StaffOrderList from "../pages/Staff/StaffOrderList";

export default function StaffSidebar() {
  const [menudata, setMenudata] = React.useState("StaffOrderList");

  const [activeItem, setActiveItem] = useState("StaffOrderList");
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
    <ThemeProvider theme = {theme}>
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
              <ListItemButton onClick={() => handleTabClick("StaffOrderList")}
                  selected={activeItem === "StaffOrderList"}>
                <ListItemIcon>
                  <Inventory2OutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Đơn dịch vụ" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => handleTabClick("ScheduleList")}
                selected={activeItem === "ScheduleList"}>
                <ListItemIcon>
                  <HistoryOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Lịch trình" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => handleTabClick("StaffTable")}
                selected={activeItem === "StaffTable"}>
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
        {menudata === "StaffOrderList" && <StaffOrderList />}
        {menudata === "ScheduleList" && <ScheduleList />}
        {menudata === "StaffTable" && <StaffTable />}
      </Box>
    </Box>
    </ThemeProvider>
  );
}
