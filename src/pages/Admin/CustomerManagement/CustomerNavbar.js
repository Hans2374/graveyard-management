import React from "react";
import { Box } from "@mui/material";
import styles from "../Service.module.css";
import CustomerManagement from "./CustomerManagement";
import BlockedCustomer from "./BlockedCustomer";
import CustomerNoneOrder from "./CustomerNoneOrder";
import CustomerFewOrder from "./CustomerFewOrder";
import CustomerManyOrder from "./CustomerManyOrder";

function CustomerNavbar() {
  const [navdata, setNavdata] = React.useState("CustomerManagement");
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
          marginTop: "54px",
          backgroundColor: "white",
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <ul className={styles.ul}>
          {renderTab("Tất cả khách hàng", "CustomerManagement")}
          {renderTab("Nhiều đơn", "CustomerManyOrder")}
          {renderTab("Ít đơn", "CustomerFewOrder")}
          {renderTab("Chưa có đơn", "CustomerNoneOrder")}
          {renderTab("Bị chặn", "BlockedCustomer")}
        </ul>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        {navdata === "CustomerManagement" && <CustomerManagement />}
        {navdata === "CustomerManyOrder" && <CustomerManyOrder />}
        {navdata === "CustomerFewOrder" && <CustomerFewOrder />}
        {navdata === "CustomerNoneOrder" && <CustomerNoneOrder />}
        {navdata === "BlockedCustomer" && <BlockedCustomer />}
      </Box>
    </>
  );
}

export default CustomerNavbar;
