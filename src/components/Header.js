import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from "../routes";
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar, Toolbar, Button, Box, MenuItem, Select, IconButton, Link, Typography,
    Popover, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery
} from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import VI from "../assets/vietnam.png";
import EN from "../assets/united-kingdom.png";
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'var(--primary-color)',
    boxShadow: 'none',
    transition: theme.transitions.create(['box-shadow', 'background-color'], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
    }),
    '&.sticky': {
        backgroundColor: 'var(--primary-color)',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
}));

const notificationStyles = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis'
};

export const Header = () => {
    const [language, setLanguage] = useState('vi');
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
        if (isXs) return logo1;
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

    const handleNotificationItemClick = (notification) => {
        console.log("Clicked notification:", notification);
        // Handle notification click logic here
    };

    const handleListItemClick = (event, action) => {
        if (action === 'logout') {
            setIsLoggedIn(false);
        }
        handleLogout();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        handleAccountClose();
    };

    const notifications = [
        "Thông báo 1",
        "Thông báo 2 với nội dung dài hơn hai dòng sẽ bị che như thế này như thế này như thế này như thế này ",
        "Thông báo 3",
        "Thông báo 4",
        "Thông báo 5",
        "Thông báo 6",
    ];

    const handleLanguageChange = (event) => setLanguage(event.target.value);

    return (
        <StyledAppBar position='sticky'>
            <Toolbar>
                <Link
                    component={RouterLink}
                    to={routes.homePage}
                >
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
                            VI
                        </Box>
                    </MenuItem>
                    <MenuItem value="en">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={EN} alt="UK flag" style={{ width: 24, height: 24, marginRight: 8 }} />
                            EN
                        </Box>
                    </MenuItem>
                </Select>
                {isLoggedIn ? (
                    <>
                        <IconButton color="inherit" onClick={handleNotificationClick} sx={{ scale: 1.5, marginRight: 2 }} aria-label="notification">
                            <CircleNotificationsIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={handleAccountClick} sx={{ scale: 1.5 }} aria-label="account">
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
                                horizontal: 'center',
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
                                    <Typography variant="h6">
                                        Thông báo
                                    </Typography>
                                </Box>
                                <Divider sx={{
                                    borderColor: 'var(--secondary-color)',
                                    borderBottomWidth: 5
                                }} />
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, pb: 0, pt: 0 }}>
                                    <RouterLink to={routes.notificationPage}>
                                        <Button
                                            variant="text"
                                            size="small"
                                            sx={{
                                                minWidth: 'auto',
                                                p: 0,
                                                pt: '5px',
                                                mr: 2,
                                            }}
                                        >
                                            Xem tất cả
                                        </Button>
                                    </RouterLink>
                                </Box>
                                <List sx={{
                                    maxHeight: '750px',
                                    width: '360px',
                                    overflowY: 'auto',
                                    padding: 0,
                                }}>
                                    {notifications.map((notification, index) => (
                                        <ListItem
                                            key={index}
                                            onClick={() => handleNotificationItemClick(notification)}
                                            sx={{
                                                cursor: 'pointer',
                                                ':hover': {
                                                    backgroundColor: '#EEEEEE',
                                                },
                                            }}
                                        >
                                            <ListItemText primary={notification} sx={notificationStyles} />
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
                                horizontal: 'center',
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
                                    <Typography variant="h6">
                                        Tài khoản
                                    </Typography>
                                </Box>
                                <Divider sx={{
                                    borderColor: 'var(--secondary-color)',
                                    borderBottomWidth: 5
                                }} />
                                <List sx={{ maxHeight: 100, maxWidth: 310, p: 0 }}>
                                    <RouterLink to={routes.customerProfile} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItem
                                            sx={{
                                                cursor: 'pointer',
                                                p: '0px 16px',
                                                ':hover': {
                                                    backgroundColor: '#EEEEEE',
                                                },
                                            }}>
                                            <ListItemText primary="Tên Người Dùng" />
                                        </ListItem>
                                    </RouterLink>
                                    <RouterLink to={routes.myService} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItem
                                            sx={{
                                                cursor: 'pointer',
                                                p: '0px 16px',
                                                ':hover': {
                                                    backgroundColor: '#EEEEEE',
                                                },
                                            }}>
                                            <ListItemText primary="Dịch vụ của tôi" />
                                        </ListItem>
                                    </RouterLink>
                                    <ListItem sx={{ p: '0px 16px' }}>
                                        <ListItemText primary="Đóng góp ý kiến" />
                                    </ListItem>
                                    <RouterLink to={routes.homePage} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItem button onClick={handleListItemClick}
                                            sx={{
                                                cursor: 'pointer',
                                                p: '0px 16px',
                                                ':hover': {
                                                    backgroundColor: '#EEEEEE',
                                                },
                                            }}>
                                            <ListItemText primary="Đăng Xuất" />
                                        </ListItem>
                                    </RouterLink>
                                </List>
                            </Box>
                        </Popover>
                    </>
                ) : (
                    <Link
                        component={RouterLink}
                        to={routes.loginPage}
                        sx={{ textDecoration: 'none', color: 'black' }}
                    >
                        <Button
                            color="black"
                            sx={{
                                width: 130,
                                borderRadius: 3,
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
                        >
                            Đăng nhập
                        </Button>
                    </Link>
                )}
            </Toolbar>
        </StyledAppBar>
    );
};

