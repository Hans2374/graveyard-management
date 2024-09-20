import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button
} from '@mui/material';
import dayjs from 'dayjs';
import ServiceOrderDetails from '../ServiceOrderDetails'; // Import the ServiceOrderDetails component

function createData(stt, madon, trangthai, ngaytao, thanhtoan, khachhang, tongtien) {
    return { stt, madon, trangthai, ngaytao, thanhtoan, khachhang, tongtien };
}

const rows = [
    createData(1, 'MD001', 'Đã xử lý', '2024-09-10T14:30:00', 'Đã thanh toán', 'Nguyễn Văn A', 1500000),
    createData(2, 'MD002', 'Chờ xử lý', '2024-09-11T09:15:00', 'Chưa thanh toán', 'Trần Thị B', 2000000),
    createData(3, 'MD003', 'Đã xử lý', '2024-09-12T10:45:00', 'Đã thanh toán', 'Lê Văn C', 2500000),
];

export default function OrderListTable({ filter }) {
    // State to control dialog open/close and store selected order
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

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

    // Function to handle clicking on Mã Đơn
    const handleRowClick = (order) => {
        setSelectedOrder(order); // Set the clicked order as selected
        setDialogOpen(true);     // Open the dialog
    };

    // Function to close the dialog
    const handleCloseDialog = () => {
        setDialogOpen(false);    // Close the dialog
        setSelectedOrder(null);  // Clear selected order
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ width: "1080px" }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{ fontWeight: "bold", width: "50px" }}>STT</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>Mã Đơn</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>Trạng Thái</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold", width: "200px" }}>Ngày Tạo</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>Thanh Toán</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold", width: "200px" }}>Khách Hàng</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold", width: "150px" }}>Tổng Tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.madon}>
                                <TableCell>{row.stt}</TableCell>

                                {/* Apply onClick only to the TableCell with row.madon */}
                                <TableCell
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => handleRowClick(row)}
                                >
                                    {row.madon}
                                </TableCell>

                                <TableCell>{row.trangthai}</TableCell>
                                <TableCell>{dayjs(row.ngaytao).format('DD/MM/YYYY HH:mm')}</TableCell>
                                <TableCell>{row.thanhtoan}</TableCell>
                                <TableCell>{row.khachhang}</TableCell>
                                <TableCell>{row.tongtien.toLocaleString('vi-VN')} đ</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pass props to ServiceOrderDetails for controlling the dialog */}
            {selectedOrder && (
                <ServiceOrderDetails
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    orderData={selectedOrder}
                />
            )}
        </>
    );
}