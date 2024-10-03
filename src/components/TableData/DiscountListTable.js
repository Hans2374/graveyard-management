import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Switch, TablePagination, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
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
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
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
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
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
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));

function createData(stt, tengoi, khadung, chinhsua) {
  return { stt, tengoi, khadung, chinhsua };
}

const rows = [
  createData(1, 'BYFUISDN'),
  createData(2, 'BYFUISDN'),
  createData(3, 'BYFUISDN'),
  createData(4, 'BYFUISDN '),
  createData(5, 'BYFUISDN'),
];

export default function DiscountListTable() {
  const [page, setPage] = React.useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = React.useState(6); // Items per page

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };
  return (
    <Box sx={{ position: "relative", width: "1080px" }}>
      <TableContainer
        component={Paper}
        sx={{ width: "1100px", height: "400px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #ccc", p: 1 }}>
                STT
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold", border: "1px solid #ccc", p: 1 }}>
                Tên Gói
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #ccc", p: 1 }}>
                Khả Dụng
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold", border: "1px solid #ccc", p: 1 }}>
                Chỉnh Sửa
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.name}
                >
                  <TableCell align="center" scope="row" sx={{ border: "1px solid #ccc", p: '5px' }}>
                    {row.stt}
                  </TableCell>
                  <TableCell align="left" sx={{ border: "1px solid #ccc", p: '5px' }}>{row.tengoi}</TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #ccc", p: 0.5, pl: '35px' }}>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: "1px solid #ccc", p: '5px' }}>{row.chinhsua}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Table Pagination */}
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[6]}
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