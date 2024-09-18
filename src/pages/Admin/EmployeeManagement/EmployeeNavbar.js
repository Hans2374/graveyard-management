import React from "react";
import {
  Box,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import styles from "../Service.module.css";
import EmployeeManagement from "./EmployeeManagement";
import ManyOrderTabs from "./ManyOrdersTab";
import FewOrdersTab from "./FewOrdersTab";
import NoneOrderTab from "./NoneOrderTab";

function EmployeeNavbar() {
  const [navdata, setNavdata] = React.useState("EmployeeManagement");
  const renderTab = (label, tabKey) => (
    <li className={styles.li}>
      <a
        className={styles.a}
        onClick={() => setNavdata(tabKey)}
        style={{
          color: navdata === tabKey ? "black" : "grey", // Đổi màu khi được chọn
        }}
      >
        {label}
      </a>
    </li>
  );
  return (
    <>
      <Box
        sx={{
          marginTop: "65px",
          backgroundColor: "white",
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <ul className={styles.ul}>
          {renderTab("Tất cả nhân viên", "EmployeeManagement")}
          {renderTab("Nhiều đơn", "ManyOrderTabs")}
          {renderTab("Ít đơn", "FewOrdersTab")}
          {renderTab("Chưa có đơn", "NoneOrderTab")}
        </ul>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        {navdata === "EmployeeManagement" && <EmployeeManagement />}
        {navdata === "ManyOrderTabs" && <ManyOrderTabs />}
        {navdata === "FewOrdersTab" && <FewOrdersTab />}
        {navdata === "NoneOrderTab" && <NoneOrderTab />}
      </Box>
    </>
  );
}

export default EmployeeNavbar;
