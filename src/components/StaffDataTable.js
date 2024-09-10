import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

function createData(stt, madon, tendichvu, goidichvu, khachhang, sdt, thoigian, ghichu) {
    return { stt, madon, tendichvu, goidichvu, khachhang, sdt, thoigian, ghichu };
}

const rows = [
    createData(1, 'ABC1234XY', '', '', '', '', '01/07/2024\n7:00', 'Bắt đầu sau x ngày y giờ'),
    createData(2, 'KLM5678RT', '', '', '', '', '10/06/2024\n14:30', 'Bắt đầu sau y giờ z phút'),
    createData(3, 'XYZ9101MN', '', '', '', '', '09/09/2024\n8:00', 'Bắt đầu sau x ngày y giờ'),
    createData(4, 'QWE2345OP', '', '', '', '', '19/10/2024\n10:00', 'Bắt đầu sau y giờ z phút'),
    createData(5, 'LMG2345OP', '', '', '', '', '19/10/2024\n10:00', 'Bắt đầu sau y giờ z phút'),
    createData(6, 'KAR2345OP', '', '', '', '', '19/10/2024\n10:00', 'Bắt đầu sau y giờ z phút'),
    createData(7, 'JKL6789UV', '', '', '', '', '12/11/2024\n15:00', 'Bắt đầu sau z giờ'),
    createData(8, 'LMN9876PQ', '', '', '', '', '05/12/2024\n16:30', 'Bắt đầu sau z giờ'),
    createData(9, 'OPQ4321AB', '', '', '', '', '06/12/2024\n08:00', 'Bắt đầu sau x giờ'),
    createData(10, 'RST9876CD', '', '', '', '', '07/12/2024\n12:15', 'Bắt đầu sau y giờ'),
    createData(11, 'UVW5432EF', '', '', '', '', '08/12/2024\n09:45', 'Bắt đầu sau z giờ'),
    createData(12, 'XYZ6789GH', '', '', '', '', '09/12/2024\n14:30', 'Bắt đầu sau x giờ'),
    createData(13, 'ABC1234IJ', '', '', '', '', '10/12/2024\n11:00', 'Bắt đầu sau y giờ'),
    createData(14, 'DEF5678KL', '', '', '', '', '11/12/2024\n17:15', 'Bắt đầu sau z giờ'),
    createData(15, 'GHI3456MN', '', '', '', '', '12/12/2024\n10:30', 'Bắt đầu sau x giờ'),
    createData(16, 'JKL7890OP', '', '', '', '', '13/12/2024\n15:00', 'Bắt đầu sau y giờ'),
    createData(17, 'RST5432CD', '', '', '', '', '07/12/2024\n09:30', 'Bắt đầu sau y giờ'),
    createData(18, 'UVW6543EF', '', '', '', '', '08/12/2024\n10:15', 'Bắt đầu sau z giờ'),
    createData(19, 'XYZ7654GH', '', '', '', '', '09/12/2024\n11:00', 'Bắt đầu sau x giờ'),
    createData(20, 'ABC8765IJ', '', '', '', '', '10/12/2024\n12:45', 'Bắt đầu sau y giờ'),
];

export default function StaffDataTable() {
    const [page, setPage] = React.useState(0); // Current page
    const [rowsPerPage, setRowsPerPage] = React.useState(8); // Items per page
    const [open, setOpen] = React.useState(false); // Dialog open state
    const [selectedRow, setSelectedRow] = React.useState(null); // Selected order details

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to first page when rows per page changes
    };

    // Handle open dialog
    const handleOpenDialog = (row) => {
        setSelectedRow(row); // Set the selected row data
        setOpen(true); // Open the dialog
    };

    // Handle close dialog
    const handleCloseDialog = () => {
        setOpen(false); // Close the dialog
        setSelectedRow(null); // Reset selected row
    };

    return (
        <Box sx={{ position: 'relative', width: '1080px' }}>
            <TableContainer
                component={Paper}
                sx={{ width: "1100px", height: "420px" }}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "10px", p: 1, borderRight: "1px solid #ddd" }}>
                                STT
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "50px", p: 1, borderRight: "1px solid #ddd" }}>
                                Mã đơn
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "100px", p: 1, borderRight: "1px solid #ddd" }}>
                                Tên dịch vụ
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "100px", p: 1, borderRight: "1px solid #ddd" }}>
                                Gói dịch vụ
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "100px", p: 1, borderRight: "1px solid #ddd" }}>
                                Khách hàng
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "100px", p: 1, borderRight: "1px solid #ddd" }}>
                                SĐT
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "100px", p: 1, borderRight: "1px solid #ddd" }}>
                                Thời gian
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", width: "150px", p: 1, borderRight: "1px solid #ddd" }}>
                                Ghi chú
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow
                                    key={`${row.stt}-${row.madon}`}
                                    sx={{ borderBottom: "1px solid #ddd" }}
                                >
                                    <TableCell align="center" scope="row" sx={{ borderRight: "1px solid #ddd", p: 0 }}>
                                        {row.stt}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderRight: "1px solid #ddd", p: 0, cursor: 'pointer' }}
                                        onClick={() => handleOpenDialog(row)} // Open dialog on click
                                    >
                                        {row.madon}
                                    </TableCell>
                                    <TableCell align="left" sx={{ borderRight: "1px solid #ddd", p: 0, pl: '5px' }}>
                                        {row.tendichvu}
                                    </TableCell>
                                    <TableCell align="left" sx={{ borderRight: "1px solid #ddd", p: 0, pl: '5px' }}>
                                        {row.goidichvu}
                                    </TableCell>
                                    <TableCell align="left" sx={{ borderRight: "1px solid #ddd", p: 0, pl: '5px' }}>
                                        {row.khachhang}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderRight: "1px solid #ddd", p: 0 }}>
                                        {row.sdt}
                                    </TableCell>
                                    <TableCell align="left" sx={{ borderRight: "1px solid #ddd", p: 0, pl: '5px', whiteSpace: 'pre-wrap' }}>
                                        {row.thoigian}
                                    </TableCell>
                                    <TableCell align="left" sx={{ p: 0, pl: '5px', whiteSpace: 'pre-wrap' }}>
                                        {row.ghichu}
                                    </TableCell>
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
                rowsPerPageOptions={[8]}
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    paddingRight: '16px'
                }}
            />

            {/* Dialog for showing order details */}
            <Dialog open={open} onClose={handleCloseDialog}>
                <DialogTitle>Chi tiết mã đơn</DialogTitle>
                <DialogContent>
                    {selectedRow && (
                        <div>
                            <p><strong>Mã đơn:</strong> {selectedRow.madon}</p>
                            <p><strong>Tên dịch vụ:</strong> {selectedRow.tendichvu || 'N/A'}</p>
                            <p><strong>Gói dịch vụ:</strong> {selectedRow.goidichvu || 'N/A'}</p>
                            <p><strong>Khách hàng:</strong> {selectedRow.khachhang || 'N/A'}</p>
                            <p><strong>SĐT:</strong> {selectedRow.sdt || 'N/A'}</p>
                            <p><strong>Thời gian:</strong> {selectedRow.thoigian || 'N/A'}</p>
                            <p><strong>Ghi chú:</strong> {selectedRow.ghichu || 'N/A'}</p>
                        </div>
                    )}
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
