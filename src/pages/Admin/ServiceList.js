import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from "./Service.module.css";
import ServiceListTable from "../../components/TableData/ServiceListTable";

function ServiceList() {
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
            <a href="#home" className={styles.a}>
              Tất cả đơn hàng
            </a>
          </li>
          <li className={styles.li}>
            <a href="#news" className={styles.a}>
              Chưa phân công
            </a>
          </li>
          <li className={styles.li}>
            <a href="#contact" className={styles.a}>
              Đã phân công
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.a}>
              Đang thực hiện
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.a}>
              Hoàn thành
            </a>
          </li>
        </ul>
      </Box>

      <Box
        sx={{
          marginTop: "3px",
          backgroundColor: "white",
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="#home" className={styles.a}>
              Chưa thanh toán
            </a>
          </li>
          <li className={styles.li}>
            <a href="#news" className={styles.a}>
              Đã thanh toán
            </a>
          </li>
          <li className={styles.li}>
            <a href="#contact" className={styles.a}>
              Yêu cầu hủy
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.a}>
              Đã hủy
            </a>
          </li>
        </ul>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            marginLeft: "50px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Tìm kiếm gói dịch vụ"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                width: "500px",
                margin: "0 20px 0 -0",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            placeholder="Thêm điều kiện lọc"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <FilterListIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: "100%",
            marginLeft: "50px",
            marginTop: "50px",
          }}
        >
          <ServiceListTable/>
        </Box>
      </Box>
    </>
  );
}

export default ServiceList