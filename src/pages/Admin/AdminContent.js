import React from "react";
import {
  Box,
  Button,
} from "@mui/material";
import styles from "./Service.module.css";
import { useState } from "react";

import TextEditor from "../../components/TextEditor";

function AdminContent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <a className={styles.a}>
              Giới thiệu
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a}>
              Hình ảnh
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a}>
              Tin tức
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a}>
              Đánh giá
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a}>
              Liên hệ
            </a>
          </li>
        </ul>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        <Box sx={{ width:"100%", height:"100%"}}>
          <TextEditor/>
          <Button sx={{backgroundColor: "var(--primary-color)",
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px 100px 5px 100px",
                  textTransform: "none",
                  marginTop:"20px"
                  }}>
            Lưu
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AdminContent;
