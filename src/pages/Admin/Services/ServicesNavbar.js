import React from "react";
import { Box } from "@mui/material";
import styles from "../Service.module.css";
import AllServiceTab from "./AllServiceTab";
import AddServiceTab from "./AddServiceTab";

function ServicesNavbar() {
  const [navdata, setNavdata] = React.useState("AllServiceTab");
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
            <a className={styles.a} onClick={() => setNavdata("AllServiceTab")}>
              Tất cả gói dịch vụ
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("AddService")}>
              Mai táng
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a}>
              Cúng định kỳ
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("AddServiceTab")}>
              Thêm dịch vụ
            </a>
          </li>
        </ul>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        {navdata === "AllServiceTab" && <AllServiceTab />}
        {navdata === "AddServiceTab" && <AddServiceTab />}

      </Box>
    </>
  );
}

export default ServicesNavbar;
