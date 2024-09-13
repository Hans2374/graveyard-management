import React from "react";
import {
  Box,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import styles from "../Service.module.css"
import EmployeeManagement from "./EmployeeManagement";
import ManyOrderTabs from "./ManyOrdersTab";
import FewOrdersTab from "./FewOrdersTab";
import NoneOrderTab from "./NoneOrderTab";

function EmployeeNavbar() {
  const [navdata, setNavdata] = React.useState("EmployeeManagement");
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
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("EmployeeManagement")}>
              Tất cả nhân viên
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("ManyOrderTabs")}>
              Nhiều đơn
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("FewOrdersTab")}>
              Ít đơn
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("NoneOrderTab")}>
              Chưa có đơn
            </a>
          </li>
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