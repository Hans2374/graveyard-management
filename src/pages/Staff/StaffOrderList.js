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
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import styles from "../Admin/Service.module.css";
import OrderListTable from "../../components/TableData/OrderListTable";
import { useState } from "react";

function StaffOrderList() {
  const [selectedTab, setSelectedTab] = useState("Tất cả");
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleTabClick = (tabKey) => {
    setSelectedTab(tabKey); // Cập nhật tab được chọn
    handleFilterChange(tabKey); // Gọi hàm xử lý filter tương ứng
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); // Cập nhật filter
  };

  const handleClose = () => {
    setOpen(false); // Đóng hộp thoại
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
          {renderTab("Tất cả đơn hàng", "Tất cả")}
          {renderTab("Đang thực hiện", "Chờ xử lý")}
          {renderTab("Hoàn thành", "Đã xử lý")}
          {renderTab("Chưa thanh toán", "Chưa thanh toán")}
          {renderTab("Đã thanh toán", "Đã thanh toán")}
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
            height: "393px",
          }}
        >
          <OrderListTable filter={filter} />
        </Box>
      </Box>
    </>
  );
}

export default StaffOrderList;
