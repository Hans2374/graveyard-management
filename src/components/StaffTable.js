import React, { useState } from "react";
import {
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
  TablePagination
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../pages/Admin/Service.module.css";
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
  const [page, setPage] = React.useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = React.useState(8); // Items per page
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

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };

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
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "20px",
          margin: "3px 0 0 0 "
        }}
      >
        <Box sx={{ display: "flex", maxWidth: "100%", margin: "0 0 0 50px" }}>
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
        <Box sx={{ position: "relative", width: "1080px", pt: 2, height: '460px' }}>
          <TableContainer
            component={Paper}
            sx={{ width: "1100px", height: "445px" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      p: 1,
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    STT
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      p: 1,
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    Tên vật dụng
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      p: 1,
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    Tổng số lượng
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      p: 1,
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    Đang sử dụng
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      p: 1,
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    Còn lại
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      p: 1,
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    Trạng thái
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{ borderBottom: "1px solid #ddd" }}
                  >
                    <TableCell
                      align="center"
                      scope="row"
                      sx={{ borderRight: "1px solid #ddd", p: 1 }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      align="center"
                      scope="row"
                      sx={{ borderRight: "1px solid #ddd", p: 1 }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      scope="row"
                      sx={{ borderRight: "1px solid #ddd", p: 1 }}
                    >
                      {item.totalQuantity}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd", p: 1,
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
                    <TableCell
                      align="center"
                      scope="row"
                      sx={{ borderRight: "1px solid #ddd", p: 1 }}
                    >
                      {item.available}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: getStatusColor(item.status),
                        color: "#000",
                        padding: "8px",
                        borderRight: "1px solid #ddd", p: 1
                      }}
                    >
                      {item.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Table Pagination */}
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[8]}
            sx={{ position: "absolute", bottom: 0, right: 0, paddingRight: "16px" }}
          />
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
