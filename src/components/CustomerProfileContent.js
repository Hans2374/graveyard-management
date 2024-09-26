import {
    Box,
    Typography,
    Container,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    Card,
    CardMedia,
    Button,
    Grid,
    Tooltip,
    Menu,
    MenuItem,
    InputAdornment
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import LockResetIcon from '@mui/icons-material/LockReset';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useEffect } from 'react';
import backgroundImage from '../assets/login_background.jpg';

const CustomerProfileContent = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // State cho dialogs, avatar, và menu avatar
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
    const [avatar, setAvatar] = useState(backgroundImage);
    const [anchorEl, setAnchorEl] = useState(null);

    // State cho ẩn hiện password
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // đóng mở dialog
    const handleEditDialogOpen = () => setEditDialogOpen(true);
    const handleEditDialogClose = () => setEditDialogOpen(false);
    const handlePasswordDialogOpen = () => setPasswordDialogOpen(true);
    const handlePasswordDialogClose = () => setPasswordDialogOpen(false);

    // hiện menu avatar
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // đổi avatar
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // xóa avatar
    const handleRemoveAvatar = () => {
        setAvatar("/path-to-default-avatar.jpg");
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleClickShowCurrentPassword = () => setShowCurrentPassword(!showCurrentPassword);
    const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const imageData = [
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/vuon-nhi-thap-tu-hieu.jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/GD100-IMG_0787-2020.jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/6%20(2).jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/toan%20canh%20cong%20vien%20vinh%20hang%20long%20thanh.jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/goc%20canh%20quan%20khu%20gia%20toc%20dep%20tai%20hoa%20vien%20vinh%20hang%20long%20thanh.jpg",
        },
        {
            src: "https://cdnphoto.dantri.com.vn/XXKeoGI5eHY-594kWEorzcnmSFM=/thumb_w/1920/2024/02/21/chua-dai-tue-nghe-annguyen-duy-1-1708478566537.jpg?watermark=true",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/vuon-nhi-thap-tu-hieu.jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/GD100-IMG_0787-2020.jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/6%20(2).jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/toan%20canh%20cong%20vien%20vinh%20hang%20long%20thanh.jpg",
        },
        {
            src: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/goc%20canh%20quan%20khu%20gia%20toc%20dep%20tai%20hoa%20vien%20vinh%20hang%20long%20thanh.jpg",
        },
        {
            src: "https://cdnphoto.dantri.com.vn/XXKeoGI5eHY-594kWEorzcnmSFM=/thumb_w/1920/2024/02/21/chua-dai-tue-nghe-annguyen-duy-1-1708478566537.jpg?watermark=true",
        },
    ];

    return (
        <Box align="center" 
        sx={{ 
            backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230902/pngtree-sunrise-above-a-sunrise-in-the-sky-image_13129631.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
            }}>
            <Box
                sx={{
                    backgroundColor: '#FFFFFF',
                    padding: 2,
                    marginTop: '55px',
                    maxWidth: '1000px'
                }}
            >
                <Container maxWidth="md" sx={{ mb: 4, marginTop: '40px' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '30px',
                    flexWrap: 'wrap', // Allow wrapping
                }}
            >
                {/* Avatar */}
                <Box sx={{ textAlign: 'center', flex: '0 0 auto' }}>
                    <Avatar
                        src={avatar}
                        alt="User Avatar"
                        sx={{
                            border: '3px solid #E6D189',
                            width: 150,
                            height: 150,
                            cursor: 'pointer',
                            transition: '0.3s',
                            '&:hover': {
                                filter: 'brightness(85%)',
                            },
                        }}
                        onClick={handleAvatarClick}
                    />
                    <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                        Nguyễn Văn A
                    </Typography>
                </Box>

                {/* User information and menu icons */}
                <Box sx={{ flex: 1, minWidth: '250px' }}> {/* Added minWidth for better responsiveness */}
                    {/* User info */}
                    <Box
                        sx={{
                            padding: 3,
                            border: '3px solid #E6D189',
                            borderRadius: '8px',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4.5,
                            minHeight: '135px',
                        }}
                    >
                        <Typography variant="body2">
                            <strong>SĐT :</strong> 0123445678
                        </Typography>
                        <Typography variant="body2">
                            <strong>Email :</strong> exemail@gmail.com
                        </Typography>
                        <Typography variant="body2">
                            <strong>Địa chỉ :</strong> Thành phố ABC, Quận XYZ, Đường số 45, nhà số 12/2
                        </Typography>
                    </Box>

                    {/* Icon buttons for actions */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', flexWrap: 'wrap' }}>
                        <Tooltip title="Sửa thông tin" arrow>
                            <IconButton onClick={handleEditDialogOpen} sx={{ color: '#D3B023' }}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Đơn hàng" arrow>
                            <IconButton sx={{ marginLeft: '20px', color: '#D3B023' }}>
                                <ReceiptLongIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Góp ý" arrow>
                            <IconButton sx={{ marginLeft: '20px', color: '#D3B023' }}>
                                <RateReviewIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Đổi mật khẩu" arrow>
                            <IconButton onClick={handlePasswordDialogOpen} sx={{ marginLeft: '20px', color: '#D3B023' }}>
                                <LockResetIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Container>
                <Box
                    sx={{
                        display: "flex",
                        maxWidth: "100%",
                        marginLeft: "50px",
                    }}
                >
                </Box>

                <Box
                    sx={{
                        maxWidth: "100%",
                        marginLeft: "40px",
                        marginRight: "40px",
                        marginTop: "50px",
                    }}
                >
                    <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold', color: '#d3b023' }}>
                        Ảnh Của Tôi
                    </Typography>
                    <Grid container spacing={2} sx={{ padding: 2 }}>
                        {imageData.map((image, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.1)', // Enlarge the hovered card
                                        },
                                        // Apply a scale effect to the surrounding cards
                                        '&:not(:hover)': {
                                            transform: 'scale(0.9)', // Shrink surrounding cards
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={image.src}
                                        sx={{
                                            transition: 'transform 0.3s', // Ensure smooth transition for the image
                                        }}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>


                {/* Sửa infor dialog */}
                <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
                    <DialogTitle sx={{ backgroundColor: '#E6D189', textAlign: 'center' }}>Sửa thông tin cá nhân</DialogTitle>
                    <DialogContent>
                        <TextField
                            sx={{ marginTop: "25px" }}
                            margin="dense"
                            label="Tên tài khoản"
                            fullWidth
                            defaultValue="Nguyễn Văn A"
                        />
                        <TextField
                            margin="dense"
                            label="Số điện thoại"
                            fullWidth
                            defaultValue="0123445678"
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            fullWidth
                            defaultValue="exampleemail@gmail.com"
                        />
                        <TextField
                            margin="dense"
                            label="Thành Phố"
                            fullWidth
                            defaultValue=""
                        />
                        <TextField
                            margin="dense"
                            label="Quận Huyện"
                            fullWidth
                            defaultValue=""
                        />
                        <TextField
                            margin="dense"
                            label="Phường Xã"
                            fullWidth
                            defaultValue=""
                        />
                        <TextField
                            margin="dense"
                            label="Tên đường"
                            fullWidth
                            defaultValue=""
                        />
                        <TextField
                            margin="dense"
                            label="Số nhà"
                            fullWidth
                            defaultValue=""
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleEditDialogClose}
                            sx={{ color: '#D3B023' }}
                        >
                            Hủy
                        </Button>
                        <Button
                            onClick={handleEditDialogClose}
                            sx={{ color: '#D3B023' }}
                        >
                            Lưu
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Đổi password dialog */}
                <Dialog open={passwordDialogOpen} onClose={handlePasswordDialogClose}>
                    <DialogTitle sx={{ backgroundColor: '#E6D189', textAlign: 'center' }}>Đổi mật khẩu</DialogTitle>
                    <DialogContent>
                        <TextField
                            sx={{ marginTop: "25px" }}
                            margin="dense"
                            label="Mật khẩu hiện tại"
                            type={showCurrentPassword ? 'text' : 'password'}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowCurrentPassword}
                                            edge="end"
                                        >
                                            {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            margin="dense"
                            label="Mật khẩu mới"
                            type={showNewPassword ? 'text' : 'password'}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowNewPassword}
                                            edge="end"
                                        >
                                            {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            margin="dense"
                            label="Xác nhận mật khẩu mới"
                            type={showConfirmPassword ? 'text' : 'password'}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowConfirmPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handlePasswordDialogClose}
                            sx={{ color: '#D3B023' }}
                        >
                            Hủy
                        </Button>
                        <Button
                            onClick={handlePasswordDialogClose}
                            sx={{ color: '#D3B023' }}
                        >
                            Đổi mật khẩu
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* avatar Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{ marginTop: '5px' }}
                >
                    <MenuItem>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="avatar-upload"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="avatar-upload" style={{ width: '100%' }}>
                            Đổi ảnh đại diện
                        </label>
                    </MenuItem>
                    <MenuItem onClick={handleRemoveAvatar}>
                        Xóa ảnh đại diện
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default CustomerProfileContent;
