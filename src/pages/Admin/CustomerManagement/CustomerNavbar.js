import React from "react";
import {
  Box,
} from "@mui/material";
import styles from "../Service.module.css"
import CustomerManagement from "./CustomerManagement";
import BlockedCustomer from "./BlockedCustomer";
import CustomerNoneOrder from "./CustomerNoneOrder";
import CustomerFewOrder from "./CustomerFewOrder";
import CustomerManyOrder from "./CustomerManyOrder";

function CustomerNavbar() {
  const [navdata, setNavdata] = React.useState("CustomerManagement");
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
            <a href="#customers" className={styles.a} onClick={() => setNavdata("CustomerManagement")}>
              Tất cả khách hàng
            </a>
          </li>
          <li className={styles.li}>
            <a href="#many-order" className={styles.a} onClick={() => setNavdata("CustomerManyOrder")}>
              Nhiều đơn
            </a>
          </li>
          <li className={styles.li}>
            <a href="#few-order" className={styles.a} onClick={() => setNavdata("CustomerFewOrder")}>
              Ít đơn
            </a>
          </li>
          <li className={styles.li}>
            <a href="#none-order" className={styles.a} onClick={() => setNavdata("CustomerNoneOrder")}>
              Chưa có đơn
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.a} onClick={() => setNavdata("BlockedCustomer")}>
              Bị chặn
            </a>
          </li>
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