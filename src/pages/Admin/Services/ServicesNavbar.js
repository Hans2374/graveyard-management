import React from "react";
import { Box } from "@mui/material";
import styles from "../Service.module.css";
import AllServiceTab from "./AllServiceTab";
import AddServiceTab from "./AddServiceTab";
import ServiceOrderDetail from "./ServiceOrderDetail";

function ServicesNavbar() {
  const [navdata, setNavdata] = React.useState("AllServiceTab");
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
          {renderTab("Tất cả gói dịch vụ", "AllServiceTab")}
          {renderTab("Mai táng", "AddService")}
          {renderTab("Cúng định kỳ", "ServiceOrderDetail")}
          {renderTab("Thêm dịch vụ", "AddServiceTab")}
        </ul>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        {navdata === "AllServiceTab" && <AllServiceTab />}
        {navdata === "AddServiceTab" && <AddServiceTab />}
        {navdata === "ServiceOrderDetail" && <ServiceOrderDetail />}
      </Box>
    </>
  );
}

export default ServicesNavbar;
