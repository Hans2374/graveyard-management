import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar, Toolbar, Button, Box, MenuItem, Select, Dialog, DialogTitle, DialogContent,
    DialogActions, TextField, Tabs, Tab, IconButton, InputAdornment, Link, Typography,
    Popover, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery
} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import VI from "../assets/vietnam.png";
import EN from "../assets/united-kingdom.png";
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'var(--primary-color)', // Màu nền cho navbar
    boxShadow: 'none', // Loại bỏ bóng đổ mặc định
    transition: theme.transitions.create(['box-shadow', 'background-color'], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
    }),
    '&.sticky': {
        backgroundColor: 'var(--primary-color)', // Màu nền khi sticky
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Bóng đổ khi sticky
    },
}));

export const Header = () => {
    const [language, setLanguage] = useState('vi');
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [loginValues, setLoginValues] = useState({ username: '', password: '' });
    const [signupValues, setSignupValues] = useState({ email: '', username: '', password: '', confirmPassword: '' });
    const [loginErrors, setLoginErrors] = useState({});
    const [signupErrors, setSignupErrors] = useState({});
    const [forgotPasswordDialogOpen, setForgotPasswordDialogOpen] = useState(false);
    const [verificationForm, setVerificationForm] = useState(false);
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const [helpText, setHelpText] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
    const [accountAnchorEl, setAccountAnchorEl] = useState(null);

    const navigate = useNavigate();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const isLg = useMediaQuery(theme.breakpoints.only('lg'));
    const isXl = useMediaQuery(theme.breakpoints.only('xl'));

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const getLogo = () => {
        if (isXs) {
            return logo1;
        }
        return logo;
    };

    const getLogoSize = () => {
        if (isXs) return { width: 45, height: 45 };
        if (isSm) return { width: 150, height: 50 };
        if (isMd) return { width: 140, height: 49 };
        if (isLg) return { width: 155, height: 54 };
        return { width: 170, height: 60 };  // xl size
    };

    const getFontSize = () => {
        if (isXs) return 10;
        if (isSm) return 11;
        if (isMd) return 12;
        if (isLg) return 13;
        return 14;  // xl size
    };

    const handleNotificationClick = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setNotificationAnchorEl(null);
    };

    const handleAccountClick = (event) => {
        setAccountAnchorEl(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountAnchorEl(null);
    };

    const handleListItemClick = (event, action) => {
        if (action === 'logout') {
            setIsLoggedIn(false);
        }
        handleLogout();
    };

    // Giả lập đăng nhập thành công
    const handleSuccessfulLogin = () => {
        const errors = {};
        if (!loginValues.username.trim()) {
            errors.username = 'Vui lòng nhập tên đăng nhập hoặc email';
        }
        if (!loginValues.password) {
            errors.password = 'Vui lòng nhập mật khẩu';
        }

        if (Object.keys(errors).length > 0) {
            setLoginErrors(errors);
            return;
        }

        // Giả lập đăng nhập thành công
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        handleCloseDialog();
        setLoginValues({ username: '', password: '' });
        setLoginErrors({});
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        handleAccountClose();
    };

    const handleViewAllNotifications = () => {
        navigate('/notification', { state: { isLoggedIn: isLoggedIn } });
    };

    const notifications = [
        "Thông báo 1",
        "Thông báo 2 với nội dung dài hơn sẽ bị cắt ngắn...",
        "Thông báo 3",
        "Thông báo 4",
        "Thông báo 5",
        "Thông báo 6",
    ];

    const handleLanguageChange = (event) => setLanguage(event.target.value);
    const handleOpenDialog = () => {
        setOpen(true);
        setActiveTab(0);  // Always set to login tab when opening
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setLoginValues({ username: '', password: '' });
        setSignupValues({ email: '', username: '', password: '', confirmPassword: '' });
        setLoginErrors({});
        setSignupErrors({});
    };

    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    const handleShowPasswordToggle = () => setShowPassword(!showPassword);
    const handleShowNewPasswordToggle = () => setShowNewPassword(!showNewPassword);

    const handleForgotPasswordDialogOpen = () => {
        setForgotPasswordDialogOpen(true);
        resetForgotPasswordForm();
    };

    const handleForgotPasswordDialogClose = () => {
        setForgotPasswordDialogOpen(false);
        resetForgotPasswordForm();
    };

    const resetForgotPasswordForm = () => {
        setEmail('');
        setVerificationCode('');
        setNewPassword('');
        setConfirmPassword('');
        setVerificationForm(false);
        setCodeSent(false);
        setHelpText('');
    };

    const handleSendVerificationCode = () => {
        if (!validateEmail(email)) {
            setHelpText('Vui lòng nhập email đúng định dạng');
        } else {
            console.log("Verification code sent to:", email);
            setCodeSent(true);
            setHelpText('Mã xác minh đã được gửi đến email của bạn.');
        }
    };

    const handleVerifyCode = () => {
        if (!email || !verificationCode) {
            setHelpText('Vui lòng nhập cả email và mã xác minh.');
            return;
        }
        if (!validateEmail(email)) {
            setHelpText('Vui lòng nhập email đúng định dạng');
            return;
        }
        if (verificationCode === '123456') {  // Simulating correct verification code
            setVerificationForm(true);
            setHelpText('');
        } else {
            setHelpText('Mã xác minh không đúng.');
        }
    };

    const handleResetPassword = () => {
        if (!newPassword || !confirmPassword) {
            setHelpText('Vui lòng nhập cả mật khẩu mới và xác nhận mật khẩu.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setHelpText('Mật khẩu xác nhận không khớp');
        } else {
            console.log("Password successfully reset");
            handleForgotPasswordDialogClose();
        }
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSignup = () => {
        const errors = {};
        if (!signupValues.email?.trim()) {
            errors.email = 'Vui lòng nhập email';
        } else if (!validateEmail(signupValues.email)) {
            errors.email = 'Email không hợp lệ';
        }
        if (!signupValues.username.trim()) {
            errors.username = 'Vui lòng nhập tên đăng nhập';
        } else if (signupValues.username.length < 3 || signupValues.username.length > 20) {
            errors.username = 'Tên đăng nhập phải có từ 3 đến 20 ký tự';
        }
        if (!signupValues.password) {
            errors.password = 'Vui lòng nhập mật khẩu';
        } else if (signupValues.password.length < 6) {
            errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        if (signupValues.password !== signupValues.confirmPassword) {
            errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }

        if (Object.keys(errors).length > 0) {
            setSignupErrors(errors);
            return;
        }

        // Ở đây bạn sẽ thêm logic đăng ký với server
        // Giả sử đăng ký thành công
        setIsLoggedIn(true);
        handleCloseDialog();
        // Reset form
        setSignupValues({ email: '', username: '', password: '', confirmPassword: '' });
        setSignupErrors({});
    };

    return (
        <StyledAppBar position='sticky' sx={{ backgroundColor: 'var(--primary-color)' }}>
            <Toolbar>
                <Link to="/">
                    <img
                        src={getLogo()}
                        alt="logo"
                        style={{
                            ...getLogoSize(),
                            padding: 5,
                            cursor: 'pointer'
                        }}
                    />
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Select
                    color='inherit'
                    value={language}
                    onChange={handleLanguageChange}
                    displayEmpty
                    sx={{
                        width: 100,
                        borderRadius: 3,
                        marginRight: 3,
                        height: 40,
                        backgroundColor: 'white',
                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            backgroundColor: '#f5f5f5',
                        },
                        fontSize: getFontSize(),
                    }}
                    IconComponent={KeyboardArrowDownIcon}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={selected === 'vi' ? VI : EN}
                                alt={selected === 'vi' ? 'Vietnamese flag' : 'UK flag'}
                                style={{ width: 24, height: 24, marginRight: 8 }}
                            />
                            {selected.toUpperCase()}
                        </Box>
                    )}
                >
                    <MenuItem value="vi">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={VI} alt="Vietnamese flag" style={{ width: 24, height: 24, marginRight: 8 }} />
                            Tiếng Việt
                        </Box>
                    </MenuItem>
                    <MenuItem value="en">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={EN} alt="UK flag" style={{ width: 24, height: 24, marginRight: 8 }} />
                            English
                        </Box>
                    </MenuItem>
                </Select>
                {isLoggedIn ? (
                    <>
                        <IconButton color="inherit" sx={{ scale: 1.2, marginRight: 2 }} aria-label="chat">
                            <ChatBubbleIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={handleNotificationClick} sx={{ scale: 1.2, marginRight: 2 }} aria-label="notification">
                            <CircleNotificationsIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={handleAccountClick} sx={{ scale: 1.2 }} aria-label="account">
                            <AccountCircleIcon />
                        </IconButton>

                        <Popover
                            open={Boolean(notificationAnchorEl)}
                            anchorEl={notificationAnchorEl}
                            onClose={handleNotificationClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Box sx={{
                                width: '360px',
                                maxHeight: '750px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    p: 1,
                                    color: 'var(--secondary-color)',
                                }}>
                                    <Typography variant="h5">
                                        Thông báo
                                    </Typography>
                                </Box>
                                <Divider sx={{
                                    borderColor: 'var(--secondary-color)',
                                    borderBottomWidth: 5
                                }} />
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, pb: 0, pt: 0 }}>
                                    <Button
                                        variant="text"
                                        size="small"
                                        onClick={handleViewAllNotifications}
                                        sx={{
                                            minWidth: 'auto',
                                            p: 0,
                                            pt: '5px',
                                        }}
                                    >
                                        Xem tất cả
                                    </Button>
                                </Box>
                                <List sx={{
                                    maxHeight: '750px',
                                    width: '360px',
                                    pt: 0,
                                    overflowY: 'scroll',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    '&::-webkit-scrollbar': {
                                        display: 'none'
                                    }
                                }}>
                                    {notifications.map((notification, index) => (
                                        <ListItem key={index} sx={{ pb: 0, pt: 0 }}>
                                            <ListItemText
                                                primary={notification.length > 42 ? `${notification.substring(0, 42)}...` : notification}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Popover>

                        <Popover
                            anchorEl={accountAnchorEl}
                            open={Boolean(accountAnchorEl)}
                            onClose={handleAccountClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Box sx={{
                                height: 185,
                                width: 160,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    p: 1,
                                    color: 'var(--secondary-color)',
                                }}>
                                    <Typography variant="h5">
                                        Tài khoản
                                    </Typography>
                                </Box>
                                <Divider sx={{
                                    borderColor: 'var(--secondary-color)',
                                    borderBottomWidth: 5
                                }} />
                                <List sx={{ maxHeight: 100, maxWidth: 310, p: 0 }}>
                                    <ListItem button onClick={(event) => handleListItemClick(event, 'profile')} sx={{ p: '0px 16px' }}>
                                        <ListItemText primary="Tên Người Dùng" />
                                    </ListItem>
                                    <ListItem button onClick={(event) => handleListItemClick(event, 'services')} sx={{ p: '0px 16px' }}>
                                        <ListItemText primary="Dịch vụ của tôi" />
                                    </ListItem>
                                    <ListItem button onClick={(event) => handleListItemClick(event, 'feedback')} sx={{ p: '0px 16px' }}>
                                        <ListItemText primary="Đóng góp ý kiến" />
                                    </ListItem>
                                    <ListItem button onClick={(event) => handleListItemClick(event, 'logout')} sx={{ p: '0px 16px' }}>
                                        <ListItemText primary="Đăng Xuất" />
                                    </ListItem>
                                </List>
                            </Box>
                        </Popover>
                    </>
                ) : (
                    <Button
                        variant='contained'
                        color='inherit'
                        endIcon={<AccountCircleIcon sx={{ color: 'var(--secondary-color)', scale: 1.5 }} />}
                        onClick={handleOpenDialog}
                        sx={{
                            height: 40,
                            borderRadius: 3,
                            padding: '15px',
                            fontSize: getFontSize(),
                            paddingRight: '20px',
                            backgroundColor: 'white',
                        }}
                    >
                        Đăng nhập
                    </Button>
                )}
            </Toolbar>

            {/* Main Login/Signup Dialog */}
            <Dialog open={open} onClose={handleCloseDialog} maxWidth="xs">
                <DialogTitle align="center">Đăng nhập tài khoản</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '421px' }}>
                    <Tabs value={activeTab} onChange={handleTabChange} centered >
                        <Tab label="Đăng nhập" />
                        <Tab label="Đăng ký" />
                    </Tabs>

                    {activeTab === 0 && (
                        <Box sx={{ mt: 2, flexGrow: 1, marginTop: 8 }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email/Username"
                                placeholder="Enter your email or username"
                                value={loginValues.username}
                                onChange={(e) => setLoginValues({ ...loginValues, username: e.target.value })}
                                error={Boolean(loginErrors.username)}
                                helperText={loginErrors.username}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />

                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Password"
                                placeholder="Enter your password"
                                type={showPassword ? 'text' : 'password'}
                                value={loginValues.password}
                                onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })}
                                error={Boolean(loginErrors.password)}
                                helperText={loginErrors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPasswordToggle} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />

                            <Link
                                variant="body2"
                                onClick={handleForgotPasswordDialogOpen}
                                sx={{ cursor: 'pointer', marginLeft: '14px' }}
                            >
                                Quên mật khẩu?
                            </Link>
                        </Box>
                    )}

                    {activeTab === 1 && (
                        <Box sx={{ mt: 2, flexGrow: 1, marginTop: 2 }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email"
                                placeholder="Enter your email"
                                value={signupValues.email}
                                onChange={(e) => setSignupValues({ ...signupValues, email: e.target.value })}
                                error={Boolean(signupErrors.email)}
                                helperText={signupErrors.email}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />

                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Username"
                                placeholder="Enter your username"
                                value={signupValues.username}
                                onChange={(e) => setSignupValues({ ...signupValues, username: e.target.value })}
                                error={Boolean(signupErrors.username)}
                                helperText={signupErrors.username}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />

                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Password"
                                placeholder="Enter your password"
                                type={showPassword ? 'text' : 'password'}
                                value={signupValues.password}
                                onChange={(e) => setSignupValues({ ...signupValues, password: e.target.value })}
                                error={Boolean(signupErrors.password)}
                                helperText={signupErrors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPasswordToggle} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />

                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Confirm Password"
                                placeholder="Confirm your password"
                                type={showPassword ? 'text' : 'password'}
                                value={signupValues.confirmPassword}
                                onChange={(e) => setSignupValues({ ...signupValues, confirmPassword: e.target.value })}
                                error={Boolean(signupErrors.confirmPassword)}
                                helperText={signupErrors.confirmPassword}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPasswordToggle} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />
                        </Box>
                    )}
                </DialogContent>
                <DialogActions sx={{ marginBottom: 2 }}>
                    {activeTab === 0 ? (
                        <Button onClick={handleSuccessfulLogin} variant="contained" color="inherit"
                            fullWidth sx={{ py: 1.5, borderRadius: 3, bgcolor: 'var(--secondary-color)', mt: 2 }}>
                            Đăng nhập
                        </Button>
                    ) : (
                        <Button onClick={handleSignup} variant="contained" color="inherit"
                            fullWidth sx={{ py: 1.5, borderRadius: 3, bgcolor: 'var(--secondary-color)', mt: 2 }}>
                            Đăng ký
                        </Button>
                    )}
                </DialogActions>
            </Dialog>

            {/* Forgot Password Dialog */}
            <Dialog open={forgotPasswordDialogOpen} onClose={handleForgotPasswordDialogClose} maxWidth="xs">
                <DialogTitle>Quên mật khẩu</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '250px' }}>
                    {!verificationForm ? (
                        <Box sx={{ mt: 2, flexGrow: 1, marginTop: 2 }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Nhập email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Nhập mã xác minh"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                onClick={handleSendVerificationCode}
                                                variant="text"
                                                sx={{ color: 'var(--secondary-color)' }}
                                                disabled={codeSent}
                                            >
                                                Gửi mã
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />
                            {helpText && <Typography color="error">{helpText}</Typography>}
                            <Button
                                onClick={handleVerifyCode}
                                variant="contained"
                                sx={{ backgroundColor: 'var(--secondary-color)', color: 'black' }}
                                fullWidth
                            >
                                Xác minh mã
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ mt: 2, flexGrow: 1, marginTop: 2 }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Mật khẩu mới"
                                type={showNewPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowNewPasswordToggle} edge="end">
                                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Xác nhận mật khẩu"
                                type={showNewPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowNewPasswordToggle} edge="end">
                                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2, backgroundColor: '#F0F0F0', borderRadius: 2 }}
                            />
                            <Button
                                onClick={handleResetPassword}
                                variant="contained"
                                sx={{ backgroundColor: 'var(--secondary-color)', color: 'black' }}
                                fullWidth
                            >
                                Đặt lại mật khẩu
                            </Button>
                            {helpText && <Typography color="error">{helpText}</Typography>}
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
        </StyledAppBar>
    );
};