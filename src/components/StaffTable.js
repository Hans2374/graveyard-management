import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  ThemeProvider, 
  createTheme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../pages/Admin/Service.module.css"
import FilterListIcon from "@mui/icons-material/FilterList";

// Mock data (dữ liệu cứng)
const mockData = [
  {
    id: 1,
    name: "Dịch vụ A",
    totalQuantity: 200,
    inUse: 34,
    available: 166,
    status: "Còn",
  },
  {
    id: 2,
    name: "Dịch vụ B",
    totalQuantity: 150,
    inUse: 50,
    available: 100,
    status: "Sắp hết",
  },
  {
    id: 3,
    name: "Dịch vụ C",
    totalQuantity: 300,
    inUse: 120,
    available: 180,
    status: "Hết",
  },
];

const hardcodedItemDetails = [
  { id: 1, orderCode: "BT54HGD", quantity: 18, date: "06/09/2024 14:30" },
  { id: 2, orderCode: "HJG5HFY", quantity: 16, date: "06/09/2024 07:00" },
];

const StaffTable = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchModal, setSearchModal] = useState(""); // Tìm kiếm trong dialog

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
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const filteredData = mockData
    .filter((item) => {
      if (tabIndex === 1) return item.status === "Còn";
      if (tabIndex === 2) return item.status === "Hết";
      if (tabIndex === 3) return item.status === "Sắp hết";
      return true;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const getStatusColor = (status) => {
    switch (status) {
      case "Còn":
        return "rgba(76, 175, 80, 0.3)";
      case "Hết":
        return "rgba(244, 67, 54, 0.3)";
      case "Sắp hết":
        return "rgba(255, 193, 7, 0.3)";
      default:
        return "transparent";
    }
  };

  return (
    
    <Box>
      <Box
        sx={{
          marginTop: "54px",
          backgroundColor: "white",
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <ul className={styles.ul}>
          {renderTab("Tất cả vật dụng", "AllTool")}
          {renderTab("Còn", "Available")}
          {renderTab("Hết", "UnAvailable")}
          {renderTab("Sắp hết", "AlmostRanOut")}
          {renderTab("Mai táng", "Service1")}
          {renderTab("Cúng định kỳ", "Service2")}
        </ul>
      </Box>

      {/* Search and Filter Section */}
      <Box sx={{ backgroundColor: "#fff", padding: "20px", margin:"3px 0 0 0 ", height:"568px"}}>
        <Box sx={{ display: "flex", maxWidth: "100%", margin:"0 0 0 50px" }}>
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

        {/* Table Section */}
        <Box sx={{margin:"45px 0 0 50px"}}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  STT
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Tên vật dụng
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Tổng số lượng
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Đang sử dụng
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Còn lại
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Trạng thái
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ textAlign: "center" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.totalQuantity}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#D3B023",
                        transition: "0.3s ease",
                      },
                    }}
                    onClick={() => handleOpenDialog(item)}
                  >
                    {item.inUse}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.available}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: getStatusColor(item.status),
                      color: "#000",
                      borderRadius: "5px",
                      padding: "8px",
                      textAlign: "center",
                    }}
                  >
                    {item.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Dialog Section */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{
            textAlign: "center",
            backgroundColor: "#E6D189",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {selectedItem?.name || "Dịch vụ A"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ marginTop: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Tìm kiếm đơn"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  borderColor: "#E0E0E0",
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
              value={searchModal}
              onChange={(e) => setSearchModal(e.target.value)}
            />
          </Box>
          <Table
            sx={{ marginTop: 2, borderCollapse: "collapse", width: "100%" }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                  }}
                >
                  STT
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                  }}
                >
                  Mã đơn
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                  }}
                >
                  Số lượng
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                  }}
                >
                  Ngày
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hardcodedItemDetails
                .filter((detail) => detail.orderCode.includes(searchModal))
                .map((detail, index) => (
                  <TableRow key={detail.id}>
                    <TableCell
                      sx={{ textAlign: "center", border: "1px solid #ccc" }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center", border: "1px solid #ccc" }}
                    >
                      {detail.orderCode}
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center", border: "1px solid #ccc" }}
                    >
                      {detail.quantity}
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center", border: "1px solid #ccc" }}
                    >
                      {detail.date}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            sx={{
              backgroundColor: "#E6D189",
              color: "#000",
              "&:hover": {
                backgroundColor: "#D5C17B",
              },
            }}
          >
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Box>
  );
};

export default StaffTable;
