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

export default function BasicTable() {
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
            <TableCell align="left" sx={{ fontWeight: 'bold', width: '100px' }}>
              STT
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', width: '600px' }}>
              Tên Khách Hàng
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Chặn
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.tenkhachhang} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left" scope="row">
                {row.stt}
              </TableCell>
              <TableCell align="left">{row.tenkhachhang}</TableCell>
              <TableCell align="left">
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
    </TableContainer>
  );
}
