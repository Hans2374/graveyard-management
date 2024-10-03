import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, Switch, TablePagination
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
function createData(stt, tenkhachhang, sdt, email, sodon, chan) {
  return { stt, tenkhachhang, sdt, email, sodon, chan };
}

const rows = [
  createData(1, "Alice Johnson", "+1-555-595-4173", "user101@example.com", 15, false),
  createData(2, "Bob Smith", "+1-555-431-3405", "user852@example.com", 13, false),
  createData(3, "Charlie Brown", "+1-555-497-2707", "user520@example.com", 19, false),
  createData(4, "David Wilson", "+1-555-702-1112", "user26@example.com", 6, false),
  createData(5, "Eva Green", "+1-555-180-2246", "user980@example.com", 12, false),
  createData(6, "Frank White", "+1-555-631-6587", "user881@example.com", 1, false),
  createData(7, "Grace Miller", "+1-555-481-2755", "user799@example.com", 18, false),
  createData(8, "Hank Davis", "+1-555-513-1038", "user641@example.com", 7, false),
  createData(9, "Ivy Thompson", "+1-555-435-5590", "user20@example.com", 10, false),
  createData(10, "John Clark", "+1-555-338-6563", "user183@example.com", 1, false),
];

// Shared table cell style
const tableCellStyle = {
  border: "1px solid #ccc", p: 1
};

// Hover effect for customer name
const customerNameStyle = {
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
  const [page, setPage] = React.useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = React.useState(5); // Items per page
  const [open, setOpen] = useState(false);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };

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
    <Box sx={{ position: "relative", width: "1080px" }}>
      <TableContainer
        component={Paper}
        sx={{ width: "1100px", height: "390px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold", ...tableCellStyle }}>
                STT
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold", ...tableCellStyle }}>
                Tên Khách Hàng
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold", ...tableCellStyle }}>
                Số điện thoại
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold", ...tableCellStyle }}>
                Email
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold", ...tableCellStyle }}>
                Tổng số đơn
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", ...tableCellStyle }}>
                Chặn
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={row.tenkhachhang}>
                  <TableCell align="center" scope="row" sx={tableCellStyle}>
                    {row.stt}
                  </TableCell>
                  <TableCell align="left" sx={{ ...tableCellStyle, ...customerNameStyle }} onClick={handleClickOpen}>
                    {row.tenkhachhang}
                  </TableCell>
                  <TableCell align="left" sx={tableCellStyle}>
                    {row.sdt}
                  </TableCell>
                  <TableCell align="left" sx={tableCellStyle}>
                    {row.email}
                  </TableCell>
                  <TableCell align="left" sx={tableCellStyle}>
                    {row.sodon}
                  </TableCell>
                  <TableCell align="center" sx={{ ...tableCellStyle, pl: '40px' }}>
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

      {/* Table Pagination */}
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5]}
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          paddingRight: "16px",
        }}
      />
    </Box>
  );
}
