import React, { useState } from 'react';
import { Box, TextField, Tabs, Tab, Button, InputAdornment, IconButton, Link, Typography, Dialog } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    const handleShowPasswordToggle = () => setShowPassword(!showPassword);
    const handleShowNewPasswordToggle = () => setShowNewPassword(!showNewPassword);

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
            setForgotPasswordDialogOpen(false);
        }
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSignup = () => {
        const errors = {};
        let helpText = {};

        if (!signupValues.email?.trim()) {
            errors.email = 'Vui lòng nhập email';
            helpText.email = 'Email là bắt buộc';
        } else if (!validateEmail(signupValues.email)) {
            errors.email = 'Email không hợp lệ';
            helpText.email = 'Định dạng email không đúng';
        }
        if (!signupValues.username.trim()) {
            errors.username = 'Vui lòng nhập tên đăng nhập';
            helpText.username = 'Tên đăng nhập là bắt buộc';
        } else if (signupValues.username.length < 3 || signupValues.username.length > 20) {
            errors.username = 'Tên đăng nhập phải có từ 3 đến 20 ký tự';
            helpText.username = 'Tên đăng nhập không hợp lệ';
        }
        if (!signupValues.password) {
            errors.password = 'Vui lòng nhập mật khẩu';
            helpText.password = 'Mật khẩu là bắt buộc';
        } else if (signupValues.password.length < 6) {
            errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
            helpText.password = 'Mật khẩu quá ngắn';
        }
        if (signupValues.password !== signupValues.confirmPassword) {
            errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
            helpText.confirmPassword = 'Xác nhận mật khẩu không đúng';
        }

        if (Object.keys(errors).length > 0) {
            setSignupErrors(errors);
            setHelpText(helpText);
            return;
        }

        // Logic for registration
        setIsLoggedIn(true);
        handleCloseDialog();
        // Reset form
        setSignupValues({ email: '', username: '', password: '', confirmPassword: '' });
        setSignupErrors({});
        setHelpText({});
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
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#f5f5f5' }}>
            <Box
                sx={{
                    width: '400px',
                    height: '480px',
                    backgroundColor: 'white',
                    padding: 4,
                    pt: 0,
                    borderRadius: 2,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography align="center" padding={4} pb={2} fontWeight="bold" fontSize={20}>
                    Đăng nhập tài khoản
                </Typography>
                <Tabs value={activeTab} onChange={handleTabChange} centered>
                    <Tab label="Đăng nhập" />
                    <Tab label="Đăng ký" />
                </Tabs>

                {activeTab === 0 && (
                    <Box sx={{ mt: 2 }}>
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
                        <Link
                            variant="body2"
                            onClick={() => setForgotPasswordDialogOpen(true)}
                            sx={{ cursor: 'pointer', marginLeft: '14px' }}
                        >
                            Quên mật khẩu?
                        </Link>
                        <Button
                            onClick={() => console.log('Handle login')}
                            variant="contained"
                            color="inherit"
                            fullWidth
                            sx={{ py: 1.5, borderRadius: 3, bgcolor: 'var(--secondary-color)', mt: 2 }}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                )}

                {activeTab === 1 && (
                    <Box sx={{ mt: 2 }}>
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
                        <Button
                            onClick={() => console.log('Handle signup')}
                            variant="contained"
                            fullWidth
                            sx={{ py: 1.5, borderRadius: 3, bgcolor: 'var(--secondary-color)', mt: 2 }}
                        >
                            Đăng ký
                        </Button>
                    </Box>
                )}

                {/* Forgot Password Dialog */}
                <Dialog open={forgotPasswordDialogOpen} onClose={handleForgotPasswordDialogClose}>
                    <Box padding={3} sx={{ minWidth: '350px' }}>
                        {!verificationForm ? (
                            <>
                                <Typography variant="h6">Quên mật khẩu</Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ mb: 2 }}
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
                                                <Button onClick={handleSendVerificationCode} variant="text" disabled={codeSent}>
                                                    Gửi mã
                                                </Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ mb: 2 }}
                                />
                                {helpText && <Typography color="error">{helpText}</Typography>}
                                <Button onClick={handleVerifyCode} variant="contained" fullWidth>
                                    Xác minh mã
                                </Button>
                            </>
                        ) : (
                            <>
                                <Typography variant="h6">Đặt lại mật khẩu</Typography>
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
                                                <IconButton onClick={handleShowNewPasswordToggle}>
                                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ mb: 2 }}
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
                                                <IconButton onClick={handleShowNewPasswordToggle}>
                                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ mb: 2 }}
                                />
                                <Button onClick={handleResetPassword} variant="contained" fullWidth>
                                    Đặt lại mật khẩu
                                </Button>
                                {helpText && <Typography color="error">{helpText}</Typography>}
                            </>
                        )}
                    </Box>
                </Dialog>
            </Box>
        </Box>
    );
};
