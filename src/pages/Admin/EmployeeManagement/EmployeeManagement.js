import React, { useState } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import EmployeeTable from "../../../components/TableData/EmployeeTable";
import AddIcon from "@mui/icons-material/Add";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Shared styles
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

function EmployeeManagement() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
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
              margin: "0 20px 0 0",
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
          startIcon={<FilterListIcon />}
        >
          Thêm điều kiện lọc
        </Button>

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
          Thêm Nhân Viên
        </DialogTitle>
        <DialogContent sx={{ width: "400px", marginTop: '20px' }}>
          <TextField
            margin="dense"
            label="Tên tài khoản"
            fullWidth sx={textFieldStyle}
          />
          <TextField
            margin="dense"
            label="Số điện thoại"
            fullWidth sx={textFieldStyle}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth sx={textFieldStyle}
          />

          {/* Mật khẩu */}
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

          {/* Xác nhận mật khẩu */}
          <Typography sx={{ padding: "10px 10px 0 0" }}>Xác nhận mật khẩu</Typography>
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
          <Button sx={dialogButtonStyle}>
            Thêm
          </Button>
          <Button sx={dialogButtonStyle}>
            Đặt lại
          </Button>
          <Button onClick={handleClose} sx={dialogButtonStyle}>
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
        <EmployeeTable />
      </Box>
    </>
  );
}

export default EmployeeManagement;
