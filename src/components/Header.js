import { useState } from 'react';
import {
    AppBar, Toolbar, Button, Box, MenuItem, Select, Dialog, DialogTitle, DialogContent,
    DialogActions, TextField, Tabs, Tab, IconButton, InputAdornment, Link, Typography
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/logo.png";
import VI from "../assets/vietnam.png";
import EN from "../assets/united-kingdom.png";
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#E6D189', // Màu nền cho navbar
    boxShadow: 'none', // Loại bỏ bóng đổ mặc định
    transition: theme.transitions.create(['box-shadow', 'background-color'], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
    }),
    '&.sticky': {
        backgroundColor: '#E6D189', // Màu nền khi sticky
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Bóng đổ khi sticky
    },
}));

export const HeaderBefore = () => {
    const [language, setLanguage] = useState('vi');
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [loginValues, setLoginValues] = useState({ username: '', password: '' });
    const [signupValues, setSignupValues] = useState({ username: '', password: '', confirmPassword: '' });
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

    const handleLanguageChange = (event) => setLanguage(event.target.value);
    const handleOpenDialog = () => {
        setOpen(true);
        setActiveTab(0);  // Always set to login tab when opening
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setLoginValues({ username: '', password: '' });
        setSignupValues({ username: '', password: '', confirmPassword: '' });
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
    const validateUsername = (username) => username.length >= 3 && username.length <= 15;

    const handleLogin = () => {
        const errors = {};
        if (!loginValues.username) {
            errors.username = 'Vui lòng nhập email hoặc tên đăng nhập';
        }
        if (!loginValues.password) {
            errors.password = 'Vui lòng nhập mật khẩu';
        }
        setLoginErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Login successful');
        }
    };

    const handleSignup = () => {
        const errors = {};
        if (!signupValues.email || !validateEmail(signupValues.email)) {
            errors.email = 'Email không đúng định dạng (ví dụ: abc123@gmail.com)';
        }
        if (!signupValues.username || !validateUsername(signupValues.username)) {
            errors.username = 'Tên đăng nhập phải từ 3 đến 15 ký tự';
        }
        if (!signupValues.password) {
            errors.password = 'Vui lòng nhập mật khẩu';
        }
        if (signupValues.password !== signupValues.confirmPassword) {
            errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }
        setSignupErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Signup successful');
        }
    };

    return (
        <StyledAppBar position='sticky' sx={{ backgroundColor: '#E6D189' }}>
            <Toolbar>
                <Link to="/">
                    <img src={logo} alt="logo" style={{ width: 170, height: 60, padding: 5, cursor: 'pointer' }} />
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
                        marginRight: 2,
                        height: 53,
                        backgroundColor: 'white',
                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            backgroundColor: '#f5f5f5',
                        },
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
                <Button
                    variant='contained'
                    color='inherit'
                    endIcon={<AccountCircleIcon sx={{ color: '#D3B023', scale: 2 }} />}
                    onClick={handleOpenDialog}
                    sx={{
                        borderRadius: 3,
                        padding: '15px',
                        fontSize: 13,
                        paddingRight: '20px',
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                    }}
                >
                    Đăng nhập
                </Button>
            </Toolbar>

            {/* Main Login/Signup Dialog */}
            <Dialog open={open} onClose={handleCloseDialog} maxWidth="xs">
                <DialogTitle>
                    <Typography variant="h5" align="center">Đăng nhập tài khoản</Typography>
                </DialogTitle>
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
                        <Button onClick={handleLogin} variant="contained" color="inherit"
                            fullWidth sx={{ py: 1.5, borderRadius: 3, bgcolor: '#D3B023', mt: 2 }}>
                            Đăng nhập
                        </Button>
                    ) : (
                        <Button onClick={handleSignup} variant="contained" color="inherit"
                            fullWidth sx={{ py: 1.5, borderRadius: 3, bgcolor: '#D3B023', mt: 2 }}>
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
                                                sx={{ color: '#D3B023' }}
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
                                sx={{ backgroundColor: '#D3B023', color: 'black' }}
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
                                sx={{ backgroundColor: '#D3B023', color: 'black' }}
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