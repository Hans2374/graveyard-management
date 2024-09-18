import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Alert,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#E6D189', // Màu chính từ :root
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#D3B023', // Màu phụ từ :root
  '&:hover': {
    backgroundColor: '#E6D189'
  },
  color: '#FFFFFF', // Đặt màu chữ thành trắng cho nút
  fontWeight: 'bold',
  fontSize: '18px', // Tăng kích thước chữ để nút nổi bật hơn
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#333', // Màu chữ tối hơn để phù hợp với tông nền
}));

const FeedbackItem = ({ text }) => (
  <Box
    sx={{
      border: '1px solid #ccc',
      padding: 2,
      borderRadius: '8px',
      textAlign: 'center',
      marginBottom: 2,
    }}
  >
    <StyledTypography variant="body2">{text}</StyledTypography>
  </Box>
);

const ServiceDetail = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false); // State quản lý dialog

  const handleButtonClick = () => {
    // Kiểm tra đăng nhập
    const isLoggedIn = false; // Thay thế bằng hàm kiểm tra đăng nhập

    if (isLoggedIn) {
      setIsLoading(true);
      // Logic to handle button click, e.g., API call
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simulate loading time
    } else {
      setOpenDialog(true); // Mở dialog
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [values, setValues] = React.useState({
    ngayBatDau: '',
    ngayKetThuc: '',
    gio: '',
    tinhThanh: '',
    quanHuyen: '',
    phuongXa: '',
    tenDuong: '',
    hoVaTen: '',
    soDienThoai: '',
    yCauThem: '',
    phuongThucThanhToan: '',
    khuyenMai: '',
    dongYDieuKhoan: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setValues({ ...values, dongYDieuKhoan: event.target.checked });
  };

  const handleSubmit = () => {
    // Xử lý submit form ở đây
    console.log('Form submitted:', values);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#D3B023', fontWeight: 'bold' }}>
          TÊN GÓI DỊCH VỤ
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          {/* Sử dụng Box để tạo hai cột */}
          <Box sx={{ flex: 1, mr: 2 }}>
            <StyledTypography variant="body1">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </StyledTypography>
          </Box>
          <Box sx={{ flex: 1 }}>

            <StyledTypography variant="body1">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </StyledTypography>
          </Box>
        </Box>
        <StyledButton
          variant="contained"
          fullWidth
          onClick={() => setOpenDialog(true)}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            'Đặt gói dịch vụ'
          )}
        </StyledButton>
      </Box>
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          padding: 4,
          marginTop: 4,
          borderRadius: '16px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#D3B023' }}>
          ĐÁNH GIÁ CỦA KHÁCH HÀNG
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          {/* Sử dụng Box để tạo hai cột */}
          <Box sx={{ flex: 1, mr: 2 }}>
            <StyledBox sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
              <CircularProgress size={40} sx={{ color: '#D3B023' }} />
              <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>
                Tên người dùng
              </Typography>
              <FeedbackItem text="It is a long established fact that a reader will be distracted by the readable content of a page when look" />
            </StyledBox>
          </Box>
          <Box sx={{ flex: 1 }}>
            <StyledBox sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
              <CircularProgress size={40} sx={{ color: '#D3B023' }} />
              <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>
                Tên người dùng
              </Typography>
              <FeedbackItem text="It is a long established fact that a reader will be distracted by the readable content of a page when look" />
            </StyledBox>
          </Box>
        </Box>
      </Box>
      {/* Dialog cho form đặt gói dịch vụ */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>Đặt gói dịch vụ</DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Thông tin liên lạc</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Ngày bắt đầu"
                  type="date"
                  value={values.ngayBatDau}
                  onChange={handleChange('ngayBatDau')}
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Ngày kết thúc"
                  type="date"
                  value={values.ngayKetThuc}
                  onChange={handleChange('ngayKetThuc')}
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Giờ"
                  type="time"
                  value={values.gio}
                  onChange={handleChange('gio')}
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Tỉnh/Thành"
                  value={values.tinhThanh}
                  onChange={handleChange('tinhThanh')}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Quận/Huyện"
                  value={values.quanHuyen}
                  onChange={handleChange('quanHuyen')}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Phường/Xã"
                  value={values.phuongXa}
                  onChange={handleChange('phuongXa')}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tên đường, số nhà"
                  value={values.tenDuong}
                  onChange={handleChange('tenDuong')}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Họ và Tên"
                  value={values.hoVaTen}
                  onChange={handleChange('hoVaTen')}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Số điện thoại"
                  value={values.soDienThoai}
                  onChange={handleChange('soDienThoai')}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Yêu cầu thêm</Typography>
            <TextField
              fullWidth
              label="Hãy cho chúng tôi biết nếu bạn có yêu cầu thêm"
              multiline
              rows={4}
              value={values.yCauThem}
              onChange={handleChange('yCauThem')}
              sx={{ mb: 2 }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Phương thức thanh toán</Typography>
            <TextField
              fullWidth
              select
              label="Phương thức thanh toán"
              value={values.phuongThucThanhToan}
              onChange={handleChange('phuongThucThanhToan')}
              SelectProps={{ native: true }}
              sx={{ mb: 2 }}
            >
              <option value=""></option>
              <option value="tien-mat">Tiền mặt</option>
              <option value="chuyen-khoan">Chuyển khoản</option>
              {/* Thêm các phương thức thanh toán khác */}
            </TextField>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Khuyến mãi</Typography>
            <TextField
              fullWidth
              select
              label="Khuyến mãi"
              value={values.khuyenMai}
              onChange={handleChange('khuyenMai')}
              SelectProps={{ native: true }}
              sx={{ mb: 2 }}
            >
              <option value=""></option>
              <option value="khuyen-mai-1">Khuyến mãi 1</option>
              <option value="khuyen-mai-2">Khuyến mãi 2</option>
              {/* Thêm các khuyến mãi khác */}
            </TextField>
          </Box>
          <Box sx={{ p: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.dongYDieuKhoan}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
              }
              label="Tôi đồng ý với điều khoản v.v..."
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" sx={{ color: '#777', fontStyle: 'italic' }}>
              Vui lòng đọc kỹ điều khoản trước khi đặt hàng.
            </Typography>
          </Box>
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" fullWidth onClick={handleSubmit} disabled={!values.dongYDieuKhoan}>
              Xác nhận đặt gói dịch vụ
            </Button>
            <Button variant="outlined" fullWidth onClick={handleCloseDialog} sx={{ ml: 2 }}>
              Quay lại
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      {/* Snackbar thông báo */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="warning">
          Vui lòng đăng nhập để đặt gói dịch vụ!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ServiceDetail;