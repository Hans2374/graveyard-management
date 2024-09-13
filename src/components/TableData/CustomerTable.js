import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
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

// Custom IOS-style switch
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, checked }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: checked ? 'red' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


// Create sample data
function createData(stt, tenkhachhang, chan) {
  return { stt, tenkhachhang, chan };
}

const rows = [
  createData(1, 'CUSTOMER01', false),
  createData(2, 'CUSTOMER05', false),
  createData(3, 'CUSTOMER06', false),
  createData(4, 'CUSTOMER07', false),
  createData(5, 'CUSTOMER08', false),
];

// Shared table cell style
const tableCellStyle = {
  border: "1px solid #ccc",
};

// Hover effect for customer name
const customerNameStyle = {
  textDecoration: "underline",
  '&:hover': {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
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
export default function CustomerTable() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [blockStatus, setBlockStatus] = useState(
    rows.map(row => row.chan)
  );

  const handleSwitchChange = (index) => {
    const updatedStatus = [...blockStatus];
    updatedStatus[index] = !updatedStatus[index];
    setBlockStatus(updatedStatus);
  };

  return (
    <TableContainer component={Paper} sx={{ width: '1080px' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "50px", ...tableCellStyle }}>
              STT
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}>
              Tên Khách Hàng
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}>
              Số điện thoại
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}>
              Email
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "500px", ...tableCellStyle }}>
              Tổng số đơn
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "100px", ...tableCellStyle }}>
              Chặn
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.tenkhachhang}>
              <TableCell align="left" scope="row" sx={tableCellStyle}>
                {row.stt}
              </TableCell>
              <TableCell align="left" sx={{ ...tableCellStyle, ...customerNameStyle }} onClick={handleClickOpen}>
                {row.tenkhachhang}
              </TableCell>
              <TableCell align="left" sx={tableCellStyle}>
                Sdt
              </TableCell>
              <TableCell align="left" sx={tableCellStyle}>
                mail
              </TableCell>
              <TableCell align="left" sx={tableCellStyle}>
                số
              </TableCell>
              <TableCell align="left" sx={tableCellStyle}>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={blockStatus[index]}
                      onChange={() => handleSwitchChange(index)}
                      sx={{ m: 1 }}
                    />
                  }
                />
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
          Sửa thông tin khách hàng
        </DialogTitle>
        <DialogContent sx={{ width: "400px", marginTop: '20px' }}>
          <TextField
            margin="dense"
            label="Tên tài khoản"
            fullWidth sx={textFieldStyle}
            defaultValue="CUSTOMER01"
          />
          <TextField
            margin="dense"
            label="Số điện thoại"
            fullWidth sx={textFieldStyle}
            defaultValue="số"
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth sx={textFieldStyle}
            defaultValue="mail"
          />
          </DialogContent>
          <DialogActions>
          <Button sx={dialogButtonStyle}>
            Cập nhập
          </Button>
          <Button sx={dialogButtonStyle}>
            Đặt lại
          </Button>
          <Button onClick={handleClose} sx={dialogButtonStyle}>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
