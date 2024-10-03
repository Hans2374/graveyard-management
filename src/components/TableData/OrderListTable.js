import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box
} from '@mui/material';
import dayjs from 'dayjs';
import ServiceOrderDetails from '../ServiceOrderDetails'; // Import the ServiceOrderDetails component
import TablePagination from "@mui/material/TablePagination";

function createData(stt, madon, trangthai, ngaytao, thanhtoan, khachhang, tongtien) {
    return { stt, madon, trangthai, ngaytao, thanhtoan, khachhang, tongtien };
}

const rows = [
    createData(1, 'MD001', 'Đã xử lý', '2024-09-10T14:30:00', 'Đã thanh toán', 'Nguyễn Văn A', 1500000),
    createData(2, 'MD002', 'Chờ xử lý', '2024-09-11T09:15:00', 'Chưa thanh toán', 'Trần Thị B', 2000000),
    createData(3, 'MD003', 'Đã xử lý', '2024-09-12T10:45:00', 'Đã thanh toán', 'Lê Văn C', 2500000),
];

export default function OrderListTable({ filter }) {
    const [page, setPage] = React.useState(0); // Current page
    const [rowsPerPage, setRowsPerPage] = React.useState(6); // Items per page
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
                sx={{ width: "1100px", height: "370px" }}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{
                                fontWeight: "bold",
                                p: 1,
                                borderRight: "1px solid #ddd",
                            }}>STT</TableCell>
                            <TableCell align="center" sx={{
                                fontWeight: "bold",
                                p: 1,
                                borderRight: "1px solid #ddd",
                            }}>Mã Đơn</TableCell>
                            <TableCell align="left" sx={{
                                fontWeight: "bold",
                                p: 1,
                                borderRight: "1px solid #ddd",
                            }}>Trạng Thái</TableCell>
                            <TableCell align="left" sx={{
                                fontWeight: "bold",
                                p: 1,
                                borderRight: "1px solid #ddd",
                            }}>Ngày Tạo</TableCell>
                            <TableCell align="left" sx={{
                                fontWeight: "bold",
                                p: 1,
                                borderRight: "1px solid #ddd",
                            }}>Thanh Toán</TableCell>
                            <TableCell align="left" sx={{
                                fontWeight: "bold",
                                p: 1,
                                borderRight: "1px solid #ddd",
                            }}>Khách Hàng</TableCell>
                            <TableCell align="center" sx={{
                                fontWeight: "bold",
                                p: 1,
                                borderRight: "1px solid #ddd",
                            }}>Tổng Tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.madon} sx={{ borderBottom: "1px solid #ddd" }}>
                                <TableCell
                                    align="center"
                                    scope="row"
                                    sx={{ borderRight: "1px solid #ddd", p: 0 }}
                                >{row.stt}
                                </TableCell>

                                {/* Apply onClick only to the TableCell with row.madon */}
                                <TableCell
                                    align="center"
                                    sx={{
                                        borderRight: "1px solid #ddd",
                                        p: 0,
                                        "&:hover": {
                                            color: "blue",
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                        },
                                    }}
                                    onClick={() => handleRowClick(row)}
                                >
                                    {row.madon}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{ borderRight: "1px solid #ddd", p: 0, pl: "5px" }}
                                >{row.trangthai}</TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ borderRight: "1px solid #ddd", p: 0, pl: "5px", whiteSpace: "pre-wrap" }}
                                >{dayjs(row.ngaytao).format('DD/MM/YYYY\nHH:mm')}</TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ borderRight: "1px solid #ddd", p: 0, pl: "5px" }}
                                >{row.thanhtoan}</TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ borderRight: "1px solid #ddd", p: 0, pl: "5px" }}
                                >{row.khachhang}</TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ borderRight: "1px solid #ddd", p: 0 }}
                                >{row.tongtien.toLocaleString('vi-VN')} đ</TableCell>
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

            {/* Pass props to ServiceOrderDetails for controlling the dialog */}
            {selectedOrder && (
                <ServiceOrderDetails
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    orderData={selectedOrder}
                />
            )}
        </Box>
    );
}