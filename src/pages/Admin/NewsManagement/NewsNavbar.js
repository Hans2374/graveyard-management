import React from "react";
import {
  Box,
} from "@mui/material";
import styles from "../Service.module.css"
import AdminNews from "./AdminNews";
import Picture from "./Picture";
import News from "./News";
import AdminContact from "./AdminContact";
import AdminRate from "./AdminRate";

function NewsNavbar() {
  const [navdata, setNavdata] = React.useState("AdminNews");
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
            <a className={styles.a} onClick={() => setNavdata("AdminNews")}>
              Giới thiệu
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("Picture")}>
              Hình ảnh
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("News")}>
              Tin tức
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("AdminRate")}>
              Đánh giá
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={() => setNavdata("AdminContact")}>
              Liên hệ
            </a>
          </li>
        </ul>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        {navdata === "AdminNews" && <AdminNews />}
        {navdata === "Picture" && <Picture />}
        {navdata === "News" && <News />}
        {navdata === "AdminRate" && <AdminRate />}
        {navdata === "AdminContact" && <AdminContact />}
      </Box>
    </>
  );
}

export default NewsNavbar;