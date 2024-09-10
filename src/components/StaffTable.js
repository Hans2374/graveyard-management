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
  Button,
  TextField,
  IconButton,
  Chip,
  InputAdornment,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
  // Thêm các dịch vụ khác ở đây...
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

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleCloseModal = () => {
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
    <Box sx={{ padding: 2, marginTop: 6 }}>
      <Box
        sx={{
          marginBottom: "3px",
          backgroundColor: "#fff",
          padding: "10px",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": {
              textDecoration: "none",
            },
            "& .MuiTab-root.Mui-selected": {
              fontWeight: "normal",
              color: "#000",
            },
            "& .MuiTab-root::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "0%",
              height: "2px",
              backgroundColor: "#D3B023",
              transition: "width 0.3s ease",
            },
            "& .MuiTab-root:hover::after": {
              width: "100%",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Tất cả vật dụng" />
          <Tab label="Còn" />
          <Tab label="Hết" />
          <Tab label="Sắp hết" />
          <Tab label="Mai táng" />
          <Tab label="Cúng định kỳ" />
        </Tabs>
      </Box>

      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            marginBottom: 2,
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
                      "&:hover::after": {
                        content: '""',
                        backgroundColor: "#D3B023",
                      },
                    }}
                    onClick={() => handleOpenModal(item)}
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

      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "#FAF8F1",
            borderRadius: "10px",
            boxShadow: 24,
            p: 3,
          }}
        >
          {/* Title */}
          <h2
            style={{
              margin: 0,
              backgroundColor: "#D3B023",
              textAlign: "center",
              borderRadius: "10px 10px 0 0",
              padding: "10px 0",
            }}
          >
            TÊN VẬT DỤNG
          </h2>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Tìm kiếm đơn"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  borderColor: "#E0E0E0",
                  paddingRight: "10px",
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
          </Box>

          <TableContainer
            sx={{
              marginTop: 2,
              border: "1px solid #E0E0E0",
              borderRadius: "10px",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#fff",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    STT
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Mã đơn
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Số lượng
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Ngày
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hardcodedItemDetails.map((detail, index) => (
                  <TableRow key={detail.id}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{detail.orderCode}</TableCell>
                    <TableCell align="center">{detail.quantity}</TableCell>
                    <TableCell align="center">{detail.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </Box>
  );
};

export default StaffTable;
