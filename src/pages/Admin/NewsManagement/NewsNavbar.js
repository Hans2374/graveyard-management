import React from "react";
import { Box } from "@mui/material";
import styles from "../Service.module.css";
import AdminNews from "./AdminNews";
import Picture from "./Picture";
import News from "./News";
import AdminContact from "./AdminContact";
import AdminRate from "./AdminRate";

function NewsNavbar() {
  const [navdata, setNavdata] = React.useState("AdminNews");
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
          {renderTab("Giới thiệu", "AdminNews")}
          {renderTab("Hình ảnh", "Picture")}
          {renderTab("Tin tức", "News")}
          {renderTab("Đánh giá", "AdminRate")}
          {renderTab("Liên hệ", "AdminContact")}
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
