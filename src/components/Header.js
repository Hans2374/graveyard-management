import { useState, useEffect } from 'react';
import { routes } from "../routes";
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar, Toolbar, Button, Box, IconButton, Link, Typography, MenuItem, Select,
    Popover, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery,
    InputBase, Paper
} from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import VI from "../assets/vietnam.png";
import EN from "../assets/united-kingdom.png";
import { styled, alpha } from '@mui/material/styles';

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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: alpha(theme.palette.common.black, 0.54),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        color: theme.palette.common.black,
        '&::placeholder': {
            color: alpha(theme.palette.common.black, 0.54),
            opacity: 1,
        },
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const notificationStyles = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis'
};

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

export const Header = () => {
    const [language, setLanguage] = useState('vi');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
    const [accountAnchorEl, setAccountAnchorEl] = useState(null);
    const [searchAnchorEl, setSearchAnchorEl] = useState(null);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const isLg = useMediaQuery(theme.breakpoints.only('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSearchClick = (event) => {
        setSearchAnchorEl(searchAnchorEl ? null : event.currentTarget);
    };

    const handleSearchClose = () => {
        setSearchAnchorEl(null);
    };

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        const userRole = localStorage.getItem('role'); // Load role from localStorage
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
        if (userRole) {
            setRole(userRole); // Set role if available
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
        return { width: 170, height: 55 };  // xl size
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
                    height={0.9}
                >
                    <img
                        src={getLogo()}
                        alt="logo"
                        style={{
                            ...getLogoSize(),
                            cursor: 'pointer'
                        }}
                    />
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
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
                    {isLoggedIn && role === 'customer' && (
                        <>
                            {isMobile ? (
                                <IconButton color="inherit" onClick={handleSearchClick}>
                                    <SearchIcon />
                                </IconButton>
                            ) : (
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            )}
                        </>
                    )}
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
                                            <ListItem>
                                                <ListItemText
                                                    primary={truncateText(notification, 41)}
                                                    sx={notificationStyles}
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
                                    horizontal: 'center',
                                }}
                            >
                                <Box sx={{
                                    width: 160,
                                    maxHeight: 200,
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
                                    <List sx={{ maxHeight: 190, width: 150, p: 0 }}>
                                        <RouterLink to={routes.customerProfile} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <ListItem
                                                sx={{
                                                    cursor: 'pointer',
                                                    p: '0px 16px',
                                                    ':hover': {
                                                        backgroundColor: '#EEEEEE',
                                                    },
                                                }}>
                                                <ListItemText primary="Hồ sơ" />
                                            </ListItem>
                                        </RouterLink>
                                        {role === 'customer' ? (
                                            <>
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
                                            </>
                                        ) : role === 'staff' ? (
                                            <RouterLink to={routes.staff} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <ListItem
                                                    sx={{
                                                        cursor: 'pointer',
                                                        p: '0px 16px',
                                                        ':hover': {
                                                            backgroundColor: '#EEEEEE',
                                                        },
                                                    }}>
                                                    <ListItemText primary="Quản lý" />
                                                </ListItem>
                                            </RouterLink>
                                        ) : (
                                            <RouterLink to={routes.admin} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <ListItem
                                                    sx={{
                                                        cursor: 'pointer',
                                                        p: '0px 16px',
                                                        ':hover': {
                                                            backgroundColor: '#EEEEEE',
                                                        },
                                                    }}>
                                                    <ListItemText primary="Quản lý" />
                                                </ListItem>
                                            </RouterLink>
                                        )}
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
                </Box>
            </Toolbar>
            <Popover
                open={Boolean(searchAnchorEl)}
                anchorEl={searchAnchorEl}
                onClose={handleSearchClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Paper
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 300,
                        bgcolor: 'common.white',
                    }}
                >
                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                            color: 'common.black',
                            '& .MuiInputBase-input::placeholder': {
                                color: alpha('#000', 0.54),
                                opacity: 1,
                            },
                        }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px', color: 'common.black' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Popover>
        </StyledAppBar>
    );
};

