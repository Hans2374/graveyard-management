import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
    Box,
    TextField,
    Tabs,
    Tab,
    Button,
    InputAdornment,
    IconButton,
    Link,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { routes } from "../routes";  // Thêm đường dẫn đúng của routes file
import MailOutline from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import backgroundImage from '../assets/login_background.jpg';

export const Login = () => {
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
    const [open, setOpen] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [rememberMe, setRememberMe] = useState(false); // State for "Remember me?"
    const [loginErrorMessage, setLoginErrorMessage] = useState(''); // State to hold error message

    const navigate = useNavigate(); // Initialize navigate

    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    const handleShowPasswordToggle = () => setShowPassword(!showPassword);
    const handleShowNewPasswordToggle = () => setShowNewPassword(!showNewPassword);

    const handleCloseDialog = () => {
        setOpen(false);
        setLoginValues({ username: '', password: '' });
        setSignupValues({ email: '', username: '', password: '', confirmPassword: '' });
        setLoginErrors({});
        setSignupErrors({});
    };

    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    // Giả lập tài khoản
    const accounts = {
        customer: { username: 'customerUser', password: 'customerPass', role: 'customer' },
        staff: { username: 'staffUser', password: 'staffPass', role: 'staff' },
        admin: { username: 'adminUser', password: 'adminPass', role: 'admin' },
    };

    // Hàm kiểm tra thông tin đăng nhập và xác định vai trò
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

        // Giả lập quá trình kiểm tra tài khoản
        let role = '';
        if (
            loginValues.username === accounts.customer.username &&
            loginValues.password === accounts.customer.password
        ) {
            role = accounts.customer.role; // Đặt vai trò là customer
        } else if (
            loginValues.username === accounts.staff.username &&
            loginValues.password === accounts.staff.password
        ) {
            role = accounts.staff.role; // Đặt vai trò là staff
        } else if (
            loginValues.username === accounts.admin.username &&
            loginValues.password === accounts.admin.password
        ) {
            role = accounts.admin.role; // Đặt vai trò là admin
        } else {
            // Nếu tài khoản hoặc mật khẩu không đúng
            setLoginErrorMessage('Tên đăng nhập hoặc mật khẩu không đúng');
            return;
        }

        // Đăng nhập thành công, lưu vai trò vào localStorage
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('role', role); // Lưu vai trò vào localStorage

        handleCloseDialog();
        setLoginValues({ username: '', password: '' });
        setLoginErrors({});
        setLoginErrorMessage(''); // Clear error message on successful login

        // Navigate to the path after successful login
        navigate(routes.homePage);
    };

    const handleSendVerificationCode = () => {
        if (!validateEmail(email)) {
            setHelpText('Vui lòng nhập email đúng định dạng');
        } else {
            console.log("Verification code sent to:", email);
            setCodeSent(true);
            setHelpText('Mã xác minh đã được gửi đến email của bạn.');
            setCountdown(60); // Set countdown for 1 minute
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
            setForgotPasswordDialogOpen(false);
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

        // Giả sử đăng ký thành công
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        handleCloseDialog();
        setSignupValues({ email: '', username: '', password: '', confirmPassword: '' });
        setSignupErrors({});

        // Navigate to the path after successful signup
        navigate(routes.homePage);
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

    const handleForgotPasswordDialogOpen = () => {
        setForgotPasswordDialogOpen(true);
        resetForgotPasswordForm();
    };

    const handleForgotPasswordDialogClose = () => {
        setForgotPasswordDialogOpen(false);
        resetForgotPasswordForm();
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'flex-end' }} // Center on smaller screens, align right on larger screens
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                padding: { xs: 2, sm: 4, md: 6 },
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    width: { xs: '100%', sm: '80%', md: '400px' },
                    maxWidth: '500px',
                    height: {
                        xs: '600px',  // Fixed height for extra small screens
                        sm: '650px',  // Fixed height for small screens
                        md: '500px',  // Fixed height for medium screens (iPad)
                        lg: '550px',  // Fixed height for large screens
                        xl: '580px'   // Fixed height for extra large screens
                    },
                    backgroundColor: {
                        xs: 'rgba(255, 255, 255, 0.9)',
                        sm: 'rgba(255, 255, 255, 0.9)',
                        md: 'rgba(255, 255, 255, 0.9)',
                        lg: 'rgba(255, 255, 255, 0.9)',
                        xl: 'rgba(255, 255, 255, 0.69)',
                    },
                    padding: { xs: 3, sm: 4, md: 6 },
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    align="center"
                    pb={2}
                    fontWeight="bold"
                    fontSize={{ xs: 18, sm: 20, md: 22 }}
                    sx={{ mb: { md: '-20px' }, mt: { md: '20px' } }}
                >
                    {activeTab === 0 ? 'Đăng nhập tài khoản' : 'Tạo tài khoản mới'}
                </Typography>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    centered
                    sx={{
                        minHeight: { xs: 40, sm: 48 },
                        '& .MuiTabs-indicator': { height: 3 },
                    }}
                >
                    <Tab label="Đăng nhập" sx={{ textTransform: 'none', fontSize: { xs: 14, sm: 16 } }} />
                    <Tab label="Đăng ký" sx={{ textTransform: 'none', fontSize: { xs: 14, sm: 16 } }} />
                </Tabs>

                <Box sx={{ flexGrow: 1, mt: 2 }}>
                    {activeTab === 0 && (
                        <Box>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email/Username"
                                value={loginValues.username}
                                onChange={(e) => setLoginValues({ ...loginValues, username: e.target.value })}
                                error={Boolean(loginErrors.username)}
                                helperText={loginErrors.username}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                value={loginValues.password}
                                onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })}
                                error={Boolean(loginErrors.password)}
                                helperText={loginErrors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPasswordToggle}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2 }}
                            />
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                    }
                                    label="Nhớ mật khẩu?"
                                />
                                <Link
                                    variant="body2"
                                    onClick={handleForgotPasswordDialogOpen}
                                    sx={{ cursor: 'pointer', marginLeft: '14px' }}
                                >
                                    Quên mật khẩu?
                                </Link>
                            </Box>
                            {loginErrorMessage && (
                                <Typography color="error" sx={{ mt: 1 }}>
                                    {loginErrorMessage}
                                </Typography>
                            )}
                        </Box>
                    )}

                    {activeTab === 1 && (
                        <Box>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email"
                                value={signupValues.email}
                                onChange={(e) => setSignupValues({ ...signupValues, email: e.target.value })}
                                error={Boolean(signupErrors.email)}
                                helperText={signupErrors.email}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Username"
                                value={signupValues.username}
                                onChange={(e) => setSignupValues({ ...signupValues, username: e.target.value })}
                                error={Boolean(signupErrors.username)}
                                helperText={signupErrors.username}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                value={signupValues.password}
                                onChange={(e) => setSignupValues({ ...signupValues, password: e.target.value })}
                                error={Boolean(signupErrors.password)}
                                helperText={signupErrors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPasswordToggle}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Confirm Password"
                                type={showPassword ? 'text' : 'password'}
                                value={signupValues.confirmPassword}
                                onChange={(e) => setSignupValues({ ...signupValues, confirmPassword: e.target.value })}
                                error={Boolean(signupErrors.confirmPassword)}
                                helperText={signupErrors.confirmPassword}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPasswordToggle}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2 }}
                            />
                        </Box>
                    )}
                </Box>

                {/* Social Media Icons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end', // Space between the icons to avoid overlay
                        mt: 2,
                    }}
                >
                    <IconButton color="primary">
                        <MailOutline />
                    </IconButton>
                    <IconButton color="primary">
                        <FacebookIcon />
                    </IconButton>
                </Box>

                {/* Action Button */}
                <Box
                    sx={{
                        mt: 3, // Add margin to push the button below the social icons
                        display: 'flex', // Use flexbox for better positioning
                        justifyContent: 'center',
                    }}
                >
                    {activeTab === 0 ? (
                        <Button
                            onClick={handleSuccessfulLogin}
                            variant="contained"
                            color="inherit"
                            fullWidth
                            sx={{
                                py: { xs: 1, sm: 1.5, md: 2 }, // Padding adjusts based on screen size
                                mb: { md: 3 },
                                mt: { md: '-20px' },
                                borderRadius: 3,
                                bgcolor: 'var(--secondary-color)',
                                fontSize: { xs: 14, sm: 16, md: 18 },
                                transition: 'background-color 0.3s',
                            }}
                        >
                            Đăng nhập
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSignup}
                            variant="contained"
                            color="inherit"
                            fullWidth
                            sx={{
                                py: { xs: 1, sm: 1.5, md: 2 },
                                mb: { md: 3 },
                                mt: { md: '-20px' },
                                borderRadius: 3,
                                bgcolor: 'var(--secondary-color)',
                                fontSize: { xs: 14, sm: 16, md: 18 },
                                transition: 'background-color 0.3s',
                            }}
                        >
                            Đăng ký
                        </Button>
                    )}
                </Box>
            </Box>

            {/* Forgot Password Dialog */}
            <Dialog open={forgotPasswordDialogOpen} onClose={handleForgotPasswordDialogClose} maxWidth="xs" fullWidth>
                <DialogTitle>Quên mật khẩu</DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: { xs: 'auto', sm: 'auto', md: '250px' },
                        padding: { xs: 2, sm: 3, md: 4 },
                    }}
                >
                    {!verificationForm ? (
                        <Box sx={{ mt: 2, flexGrow: 1 }}>
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
                                                onClick={() => handleSendVerificationCode()}
                                                variant="text"
                                                sx={{ color: 'var(--secondary-color)' }}
                                                disabled={codeSent}
                                            >
                                                {codeSent
                                                    ? `Gửi mã (${Math.floor(countdown / 60)}:${countdown % 60 < 10 ? '0' : ''}${countdown % 60})`
                                                    : 'Gửi mã'}
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
                                sx={{
                                    backgroundColor: 'var(--secondary-color)',
                                    color: 'black',
                                    mt: 2,
                                    fontSize: { xs: 14, sm: 16, md: 18 },
                                    py: { xs: 1, sm: 1.5, md: 2 },
                                }}
                                fullWidth
                            >
                                Xác minh mã
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ mt: 2, flexGrow: 1 }}>
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
                                sx={{
                                    backgroundColor: 'var(--secondary-color)',
                                    color: 'black',
                                    fontSize: { xs: 14, sm: 16, md: 18 },
                                    py: { xs: 1, sm: 1.5, md: 2 },
                                }}
                                fullWidth
                            >
                                Đặt lại mật khẩu
                            </Button>
                            {helpText && <Typography color="error">{helpText}</Typography>}
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};
