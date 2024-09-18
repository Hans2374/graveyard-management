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
import { Header } from "./Header";
import OrderList from "../pages/Admin/Services/ServiceOrderList";

const drawerWidth = 240;

export default function ServiceOrderList() {
    const [menudata, setMenudata] = React.useState("ServiceList");

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
                            <ListItemButton onClick={() => {
                                setMenudata("OrderList");
                                console.log(menudata);
                            }}>
                                <ListItemIcon>
                                    <Inventory2OutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Đơn dịch vụ" />
                            </ListItemButton>

                        </ListItem>

                        <ListItem>
                            <ListItemButton onClick={() => setMenudata("ServiceList")}>
                                <ListItemIcon>
                                    <HistoryOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lịch trình" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton onClick={() => setMenudata("AdminDiscount")}>
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
                {menudata === "OrderList" && <OrderList />}

            </Box>
        </Box>
    );
}
