import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from "./Service.module.css";
import AddIcon from '@mui/icons-material/Add';
import DataTable from "../../components/DataTable";
import { useState } from "react";

function AdminServices() {

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
            <a href="#home" className={styles.a}>
              Tất cả gói dịch vụ
            </a>
          </li>
          <li className={styles.li}>
            <a href="#news" className={styles.a}>
              Mai táng
            </a>
          </li>
          <li className={styles.li}>
            <a href="#contact" className={styles.a}>
              Cúng định kỳ
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.a}>
              Thêm dịch vụ
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

          <IconButton
            sx={{
              backgroundColor: "var(--primary-color)",
              position: "absolute",
              marginLeft: "1040px",
            }}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </IconButton>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              sx={{
                backgroundColor: "var(--primary-color)",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Thông tin chi tiết
            </DialogTitle>
            <DialogContent>
              <Typography>
                h1. Heading
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{ backgroundColor: "var(--primary-color)", color: "black", borderRadius: "20px", padding: "5px 20px 5px 20px" }}>
                Đặt lại
              </Button>
              <Button onClick={handleClose} sx={{ backgroundColor: "var(--primary-color)", color: "black" }}>
                Hủy
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box
          sx={{
            maxWidth: "100%",
            marginLeft: "50px",
            marginTop: "50px",
          }}
        >
          <DataTable />
        </Box>
      </Box>
    </>
  );
}

export default AdminServices;
