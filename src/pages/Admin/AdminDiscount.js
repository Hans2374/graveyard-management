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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import styles from "./Service.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DiscountListTable from "../../components/TableData/DiscountListTable";

function AdminDiscount() {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderTab = (label, tabKey) => (
    <li className={styles.li}>
      <a
        className={styles.a}
        onClick={() => handleTabClick(tabKey)}
        style={{
          color: selectedTab === tabKey ? "black" : "grey", // Đổi màu khi được chọn
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
          {renderTab("Tất cả mã khuyến mãi", "allDiscounts")}
          {renderTab("Còn hạn", "valid")}
          {renderTab("Gần hết hạn", "expiringSoon")}
          {renderTab("Hết hạn", "expired")}
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

          <Dialog
            open={open}
            onClose={handleClose}
            sx={{
              backgroundColor: "var(--primary-color)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
            }}
          >
            <DialogTitle
              sx={{
                backgroundColor: "var(--primary-color)",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Thông tin chi tiết
            </DialogTitle>
            <DialogContent sx={{ width: "400px" }}>
              <Typography sx={{ padding: "10px 10px 0 0", fontWeight: "bold" }}>
                Tên mã khuyến mãi:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
              <Typography sx={{ padding: "10px 10px 0 0", fontWeight: "bold" }}>
                Mô tả:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    height: "200px",
                  },
                }}
              />
              <Typography sx={{ padding: "10px 10px 0 0", fontWeight: "bold" }}>
                Đơn tối thiểu:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  backgroundColor: "var(--primary-color)",
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px 20px 5px 20px",
                  textTransform: "none",
                  left: "0px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Cập nhật
              </Button>

              <Button
                onClick={handleClose}
                sx={{
                  backgroundColor: "var(--primary-color)",
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px 20px 5px 20px",
                  textTransform: "none",
                }}
              >
                Đặt lại
              </Button>

              <Button
                onClick={handleClose}
                sx={{
                  backgroundColor: "var(--primary-color)",
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px 20px 5px 20px",
                  textTransform: "none",
                }}
              >
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
          <DiscountListTable />
        </Box>
      </Box>
    </>
  );
}

export default AdminDiscount;
