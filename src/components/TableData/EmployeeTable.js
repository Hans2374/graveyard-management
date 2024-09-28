import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import {
  Typography,
  Box,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Create sample data
function createData(stt, tennhanvien) {
  return { stt, tennhanvien };
}

const rows = [
  createData(1, "EMPLOYEE01"),
  createData(2, "EMPLOYEE02"),
  createData(3, "EMPLOYEE03"),
  createData(4, "EMPLOYEE04"),
  createData(5, "EMPLOYEE05"),
  createData(6, "EMPLOYEE05"),
  createData(7, "EMPLOYEE05"),
];

const orderRows = [
  { stt: 1, maDon: "ORDER001", trangThai: "Đang xử lý" },
  { stt: 2, maDon: "ORDER002", trangThai: "Hoàn thành" },
  { stt: 3, maDon: "ORDER003", trangThai: "Đã hủy" },
];

// Shared table cell style
const tableCellStyle = {
  border: "1px solid #ccc",
};

// Hover effect for customer name
const employeeNameStyle = {
  "&:hover": {
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
};

const dialogButtonStyle = {
  backgroundColor: "var(--primary-color)",
  color: "black",
  borderRadius: "10px",
  padding: "5px 20px",
  textTransform: "none",
};

// Table component
export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenOrders = () => {
    setOpenOrders(true);
  };

  const handleCloseOrders = () => {
    setOpenOrders(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <TableContainer component={Paper} sx={{ width: "1080px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", width: "50px", ...tableCellStyle }}
            >
              STT
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}
            >
              Tên nhân viên
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}
            >
              Số điện thoại
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}
            >
              Email
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}
            >
              Tổng số đơn
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.tennhanvien}>
              <TableCell align="left" scope="row" sx={tableCellStyle}>
                {row.stt}
              </TableCell>
              <TableCell
                align="left"
                sx={{ ...tableCellStyle, ...employeeNameStyle }}
                onClick={handleClickOpen}
              >
                {row.tennhanvien}
              </TableCell>
              <TableCell align="left" sx={tableCellStyle}>
                Sdt
              </TableCell>
              <TableCell align="left" sx={tableCellStyle}>
                mail
              </TableCell>
              <TableCell
                align="left"
                sx={{ ...tableCellStyle, ...employeeNameStyle }}
                onClick={handleClickOpenOrders}
              >
                số
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
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
          Sửa thông tin nhân viên
        </DialogTitle>
        <DialogContent sx={{ width: "400px", marginTop: "20px" }}>
          <TextField
            margin="dense"
            label="Tên tài khoản"
            fullWidth
            sx={textFieldStyle}
            defaultValue="CUSTOMER01"
          />
          <TextField
            margin="dense"
            label="Số điện thoại"
            fullWidth
            sx={textFieldStyle}
            defaultValue="số"
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            sx={textFieldStyle}
            defaultValue="mail"
          />

          {/* Mật khẩu hiện tại */}
          <Typography sx={{ padding: "10px 10px 0 0" }}>Mật khẩu</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type={showPassword ? "text" : "password"}
            sx={textFieldStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Mật khẩu mới */}
          <Typography sx={{ padding: "10px 10px 0 0" }}>
            Mật khẩu mới
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type={showNewPassword ? "text" : "password"}
            sx={textFieldStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleNewPasswordVisibility}>
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Xác nhận mật khẩu mới */}
          <Typography sx={{ padding: "10px 10px 0 0" }}>
            Xác nhận mật khẩu mới
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type={showConfirmPassword ? "text" : "password"}
            sx={textFieldStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>

        <DialogActions>
          <Button sx={dialogButtonStyle}>Cập nhập</Button>
          <Button sx={dialogButtonStyle}>Đặt lại</Button>
          <Button onClick={handleClose} sx={dialogButtonStyle}>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openOrders}
        onClose={handleCloseOrders}
        sx={{
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
          Đơn hàng
        </DialogTitle>
        <DialogContent sx={{ width: "600px" }}>
          {/* Search Field */}
          <TextField
            variant="outlined"
            placeholder="Tìm kiếm khách hàng"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                width: "500px",
                margin: "20px 20px 0 0",
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

          {/* Order Table */}
          <Table aria-label="order table" sx={{ marginTop: "20px" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", width: "50px", ...tableCellStyle }}
                >
                  STT
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", width: "200px", ...tableCellStyle }}
                >
                  Mã đơn
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", width: "200px", ...tableCellStyle }}
                >
                  Trạng thái
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderRows.map((order) => (
                <TableRow key={order.maDon}>
                  <TableCell align="left" sx={tableCellStyle}>
                    {order.stt}
                  </TableCell>
                  <TableCell align="left" sx={tableCellStyle}>
                    {order.maDon}
                  </TableCell>
                  <TableCell align="left" sx={tableCellStyle}>
                    {order.trangThai}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseOrders} sx={dialogButtonStyle}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
