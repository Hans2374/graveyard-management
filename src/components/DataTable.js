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
  createData(1, 'Hỏa táng'),
  createData(2, 'Hỏa táng'),
  createData(3, 'Hỏa táng'),
  createData(4, 'Hỏa táng'),
  createData(5, 'Hỏa táng'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ width: "1080px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "100px"}}>
              STT
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "600px" }}>
              Tên Gói
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Khả Dụng
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Chỉnh Sửa
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" scope="row">
                {row.stt}
              </TableCell>
              <TableCell align="left">{row.tengoi}</TableCell>
              <TableCell align="left">
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
              </TableCell>
              <TableCell align="left">{row.chinhsua}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}