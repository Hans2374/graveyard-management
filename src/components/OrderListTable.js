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
import dayjs from 'dayjs'; // cần cài đặt package dayjs để format ngày tháng


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 50,
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

function createData(stt, madon, trangthai, ngaytao, thanhtoan, khachhang, tongtien) {
    return { stt, madon, trangthai, ngaytao, thanhtoan, khachhang, tongtien };
}

// Giả sử bạn có dữ liệu ngày tạo và tổng tiền
const rows = [
    createData(1, 'MD001', 'Đã xử lý', '2024-09-10T14:30:00', 'Đã thanh toán', 'Nguyễn Văn A', 1500000),
    createData(2, 'MD002', 'Chờ xử lý', '2024-09-11T09:15:00', 'Chưa thanh toán', 'Trần Thị B', 2000000),
    createData(3, 'MD003', 'Đã xử lý', '2024-09-12T10:45:00', 'Đã thanh toán', 'Lê Văn C', 2500000),
];

export default function OrderListTable({ filter }) {

    const filteredRows = rows.filter((row) => {

        if (filter === "All") return true;

        switch (filter) {

            case "Pending":
                return row.trangthai === "Chờ xử lý";
            case "Done":
                return row.trangthai === "Đã xử lý";
            case "NotPaid":
                return row.thanhtoan === "Chưa thanh toán";
            case "Paid":
                return row.thanhtoan === "Đã thanh toán";
            default:
                return true;
        }
    });

    return (


        <TableContainer component={Paper} sx={{ width: "1080px" }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{ fontWeight: "bold", width: "50px" }}>
                            STT
                        </TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>
                            Mã Đơn
                        </TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>
                            Trạng Thái
                        </TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold", width: "200px" }}>
                            Ngày Tạo
                        </TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>
                            Thanh Toán
                        </TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold", width: "200px" }}>
                            Khách Hàng
                        </TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>
                            Tổng Tiền
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredRows.map((row, index) => (
                        <TableRow key={row.madon} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" scope="row">
                                {row.stt}
                            </TableCell>
                            <TableCell align="left">{row.madon}</TableCell>
                            <TableCell align="left">{row.trangthai}</TableCell>
                            <TableCell align="left">
                                {dayjs(row.ngaytao).format('DD/MM/YYYY HH:mm')}
                            </TableCell>
                            <TableCell align="left">{row.thanhtoan}</TableCell>
                            <TableCell align="left">{row.khachhang}</TableCell>
                            <TableCell align="left">{row.tongtien.toLocaleString('vi-VN')} đ</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

