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
import { useState } from 'react';

const CustomerProfileContent = () => {
    // State cho dialogs, avatar, và menu avatar
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
    const [avatar, setAvatar] = useState("/path-to-default-avatar.jpg");
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

    return (
        <Box align="center" >
            <Box
                sx={{
                    backgroundColor: '#FFFFFF',
                    padding: 2,
                    marginTop: '65px',
                    maxWidth: '1000px',
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="md" sx={{ mb: 4, marginTop: '40px' }} >
                    {/* Avatar */}
                    <Avatar
                        src={avatar}
                        alt="User Avatar"
                        sx={{
                            border: '3px solid #E6D189',
                            width: 150,
                            height: 150,
                            cursor: 'pointer',
                            margin: '0 auto',
                            transition: '0.3s',
                            '&:hover': {
                                filter: 'brightness(85%)'
                            }
                        }}
                        onClick={handleAvatarClick}
                    />

                    {/* Tên account */}
                    <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                        Nguyễn Văn A
                    </Typography>

                    {/* icon button để update infomation, đến trang xem lịch sử đơn hàng và góp ý */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
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

                </Container>

                {/* Thông tin người dùng */}
                <Box
                    sx={{
                        marginTop: '30px',
                        padding: 3,
                        border: '3px solid #E6D189',
                        borderRadius: '8px',
                        maxWidth: '800px',
                        textAlign: 'left',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        minHeight: '250px',
                    }}
                >
                    <Box>
                        <Typography variant="body2">
                            <strong>SĐT :</strong> 0123445678
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            <strong>Email :</strong> exampleemail@gmail.com
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            <strong>Địa chỉ :</strong> Thành phố ABC, Quận XYZ, Đường số 45, nhà số 12/2
                        </Typography>
                    </Box>
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
