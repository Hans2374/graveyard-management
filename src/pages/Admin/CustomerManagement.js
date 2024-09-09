import React from "react";
import {
  Box,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from "./Service.module.css";
import CustomerTable from "../../components/CustomerTable";

function CustomerManagement() {

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
              Tất cả khách hàng
            </a>
          </li>
          <li className={styles.li}>
            <a href="#news" className={styles.a}>
              Nhiều đơn
            </a>
          </li>
          <li className={styles.li}>
            <a href="#contact" className={styles.a}>
              Ít đơn
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.a}>
              Chưa có đơn
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.a}>
              Bị chặn
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
            placeholder="Tìm kiếm khách hàng"
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

          <Button
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "20px",
              padding: "6px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              minWidth: "200px",
              borderColor: "rgba(0, 0, 0, 0.23)", 
              color: "rgba(0, 0, 0, 0.87)", 
              textTransform: "none",
              "&:hover": {
                borderColor: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "rgba(0, 0, 0, 0.04)", 
              },
            }}
            startIcon={
              <FilterListIcon />
            }
          >
            Thêm điều kiện lọc
          </Button>

        </Box>
        <Box
          sx={{
            maxWidth: "100%",
            marginLeft: "50px",
            marginTop: "50px",
          }}
        >
          <CustomerTable />
        </Box>
      </Box>
    </>
  );
}

export default CustomerManagement;