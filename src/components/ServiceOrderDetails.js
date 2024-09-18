import React, { useState } from 'react';
import {
    Grid, Typography, Button, FormControl, IconButton, Box, Dialog, DialogTitle,
    DialogContent, DialogActions, Avatar, TextField, Snackbar, Alert
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const ServiceOrderDetails = () => {

    const servicePackages = [
        {
            id: 1,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 1",
            description: "Mô tả các dịch vụ có trong gói",
        },
        {
            id: 2,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 2",
            description: "Mô tả các dịch vụ có trong gói",
        },
        {
            id: 3,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 3",
            description: "Mô tả các dịch vụ có trong gói",
        },
        {
            id: 4,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 4",
            description: "Mô tả các dịch vụ có trong gói",
        },
        {
            id: 5,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 5",
            description: "Mô tả các dịch vụ có trong gói",
        },
        {
            id: 6,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 6",
            description: "Mô tả các dịch vụ có trong gói",
        },
        {
            id: 7,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 7",
            description: "Mô tả các dịch vụ có trong gói",
        },
        {
            id: 8,
            img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
            title: "Gói dịch vụ 8",
            description: "Mô tả các dịch vụ có trong gói",
        },
    ];

    // Mock Data
    const mockData = {
        maDon: "MOCK12345",
        sdt: "0123456789",
        ngayTao: "01/09/2024 10:00",
        hoTen: "Nguyễn Văn B",
        thanhToan: "Chưa thanh toán",
        diaChi: "123, Đường ABC, Quận XYZ, Hà Nội",
        khachHang: "CUSTOMER02",
        trangThai: "Hoàn thành",
        thoiGian: "Ngày 10 mỗi tháng 08:00 10/08/2024 - 10/08/2025",
        tenGoi: "Gói số 5",
        vatDung: ["Vật dụng 1", "Vật dụng 2"],
        giaGoc: "2.000.000đ",
        phatSinh: "200.000đ",
        giamGia: "300.000đ",
        yeuCauThem: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem",
        ghiChuPhatSinh: "No additional notes",
        nhanVien: ["Nhân viên 1", "Kỹ thuật viên 2"],
        hinhAnh: servicePackages
    };

    // State for Snackbar
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const [open, setOpen] = useState(false);
    const [showAllImages, setShowAllImages] = useState(false);
    const [newItemDialogOpen, setNewItemDialogOpen] = useState(false);
    const [newItem, setNewItem] = useState({ name: "", quantity: 1 });
    const [items, setItems] = useState(mockData.vatDung.map((item) => ({
        name: item,
        quantity: 1
    })));


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggleImages = () => {
        setShowAllImages(!showAllImages);
    };

    const handleNewItemDialogOpen = () => {
        setNewItemDialogOpen(true);
    };

    const handleNewItemDialogClose = () => {
        setNewItemDialogOpen(false);
    };

    const handleNewItemChange = (event) => {
        const { name, value } = event.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleQuantityChange = (index, value) => {
        setItems(items.map((item, i) =>
            i === index ? { ...item, quantity: Math.max(1, Math.min(10, value)) } : item
        ));
    };

    const addItem = () => {
        if (items.length >= 5) {
            setSnackbarMessage("Bạn không thể thêm quá 5 Vật dụng");
            setSnackbarOpen(true);
            return; // Exit the function to prevent adding a new item
        }

        if (newItem.name) {
            setItems([...items, { name: newItem.name, quantity: newItem.quantity }]);
            setNewItem({ name: "", quantity: 1 });
            handleNewItemDialogClose();
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    // Calculate Thành Tiền
    const giaGoc = parseInt(mockData.giaGoc.replace(/\D/g, '')); // Remove non-digit characters
    const phatSinh = parseInt(mockData.phatSinh.replace(/\D/g, '')); // Remove non-digit characters
    const giamGia = parseInt(mockData.giamGia.replace(/\D/g, '')); // Remove non-digit characters
    const thanhTien = giaGoc + phatSinh - giamGia;

    // Determine which images to display and the extra image count
    const displayedImages = mockData.hinhAnh.slice(0, 4); // Show first 4 images by default
    const extraImagesCount = mockData.hinhAnh.length - 4; // Count of images beyond the first 4


    return (
        <>
            {/* Button to trigger the pop-up */}
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Service Order Form
            </Button>

            {/* Pop-up Dialog */}
            <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                {/* Dialog Title */}
                <DialogTitle sx={{ marginBottom: '20px' }}>
                    Thông Tin Chi Tiết Dịch Vụ
                </DialogTitle>

                {/* Dialog Content (Form with mock data) */}
                <DialogContent
                    sx={{
                        padding: '20px',
                        width: '1100px',
                        height: '900px'
                    }}
                >
                    <Grid container spacing={2}>
                        {/* Row 1: Mã đơn, SDT */}
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Mã đơn:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.maDon}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">SĐT:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.sdt}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Row 2: Ngày tạo, Họ và Tên */}
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Ngày tạo:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.ngayTao}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Họ và Tên:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.hoTen}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Row 3: Thanh toán, Địa chỉ */}
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Thanh toán:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.thanhToan}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Địa chỉ:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.diaChi}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Row 4: Khách hàng, Trạng thái */}
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Khách hàng:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.khachHang}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Trạng thái:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.trangThai}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Row 5: Thời gian */}
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" fontWeight="bold">Thời gian:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{mockData.thoiGian}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Row 6: Vật dụng (Editable List) */}
                        <Grid item xs={12}>
                            <Typography variant="h6" fontWeight="bold">Vật dụng</Typography>
                            {items.map((item, index) => (
                                <Grid item xs={6} key={index} sx={{ padding: '8px', marginBottom: '8px' }}>
                                    <Box sx={{ border: '1px solid #ddd', borderRadius: '4px', padding: '8px', display: 'flex', alignItems: 'center' }}>
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid item xs={6}>
                                                <TextField
                                                    value={item.name}
                                                    onChange={(e) => {
                                                        const newName = e.target.value;
                                                        setItems(items.map((i, idx) =>
                                                            idx === index ? { ...i, name: newName } : i
                                                        ));
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <TextField
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    InputProps={{
                                                        inputProps: { min: 1, max: 10 }
                                                    }}
                                                />
                                                <IconButton onClick={() => removeItem(index)} color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={handleNewItemDialogOpen}
                            >
                                Thêm Vật Dụng
                            </Button>
                        </Grid>

                        {/* Row 7: Giá gốc, Phát sinh, Giảm giá */}
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body1" fontWeight="bold">Giá gốc:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">{mockData.giaGoc}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" fontWeight="bold">Phát sinh:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">{mockData.phatSinh}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" fontWeight="bold">Giảm giá:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">{mockData.giamGia}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" fontWeight="bold">Thành tiền:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">{thanhTien.toLocaleString('vi-VN')}đ</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Row 8: Yêu cầu thêm, Ghi chú phát sinh, Nhân viên */}
                        <Grid item xs={12}>
                            <Typography variant="body1" fontWeight="bold">Yêu cầu thêm:</Typography>
                            <Typography variant="body1">{mockData.yeuCauThem}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" fontWeight="bold">Ghi chú phát sinh:</Typography>
                            <TextField
                                multiline
                                rows={4}
                                placeholder="Nhập ghi chú phát sinh"
                                fullWidth
                                value={mockData.ghiChuPhatSinh}
                            // handleChange function can be added here if needed
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" fontWeight="bold">Nhân viên:</Typography>
                            <Typography variant="body1">{mockData.nhanVien.join(', ')}</Typography>
                        </Grid>

                        {/* Row 9: Hình ảnh */}
                        <Grid item xs={12}>
                            <Typography variant="body1" fontWeight="bold">Hình ảnh:</Typography>
                            <Box>
                                <Grid container spacing={2}>
                                    {displayedImages.map((packageData) => (
                                        <Grid item xs={3} key={packageData.id}>
                                            <Avatar
                                                variant="square"
                                                src={packageData.img}
                                                sx={{ width: 150, height: 150 }}
                                                onClick={handleToggleImages}
                                            />
                                        </Grid>
                                    ))}
                                    {extraImagesCount > 0 && (
                                        <Grid item xs={3}>
                                            <Button variant="outlined" onClick={handleToggleImages}>
                                                +{extraImagesCount} ảnh
                                            </Button>
                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Grid>

                        {/* Modal to show all images */}
                        {showAllImages && (
                            <Dialog open={showAllImages} onClose={handleToggleImages} maxWidth="md" fullWidth>
                                <DialogTitle>
                                    Tất Cả Hình Ảnh
                                    <IconButton
                                        sx={{ position: 'absolute', right: 8, top: 8 }}
                                        onClick={handleToggleImages}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </DialogTitle>
                                <DialogContent>
                                    <Grid container spacing={2}>
                                        {mockData.hinhAnh.map((image, index) => (
                                            <Grid item key={index}>
                                                <Avatar
                                                    variant="square"
                                                    src={image.img}
                                                    sx={{ width: 150, height: 150 }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </DialogContent>
                            </Dialog>
                        )}
                    </Grid>
                </DialogContent>

                {/* Dialog Actions */}
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleClose}>Lưu</Button>
                </DialogActions>
            </Dialog>

            {/* Add Item Dialog */}
            <Dialog open={newItemDialogOpen} onClose={handleNewItemDialogClose}>
                <DialogTitle>Thêm Vật Dụng</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Tên vật dụng"
                        name="name"
                        value={newItem.name}
                        onChange={handleNewItemChange}
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        label="Số lượng"
                        name="quantity"
                        type="number"
                        value={newItem.quantity}
                        onChange={handleNewItemChange}
                        fullWidth
                        margin="dense"
                        InputProps={{
                            inputProps: { min: 1, max: 10 }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleNewItemDialogClose}>Hủy</Button>
                    <Button onClick={addItem} variant="contained">Thêm</Button>
                </DialogActions>
            </Dialog>

        </>
    );
};

export default ServiceOrderDetails;