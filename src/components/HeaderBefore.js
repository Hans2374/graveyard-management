import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, Select } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/logo.png"
import VI from "../assets/vietnam.png"
import EN from "../assets/united-kingdom.png"

export const HeaderBefore = () => {
    const [language, setLanguage] = useState('vi');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <AppBar position='static' sx={{ backgroundColor: '#E6D189' }}>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 200, height: 70, padding: 5 }} />
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
                        boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)', // Add shadow
                        transition: 'all 0.3s ease', // Smooth transition for hover effect
                        '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Increased shadow on hover
                            backgroundColor: '#f5f5f5', // Slight background color change on hover
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
                    endIcon={
                        <AccountCircleIcon sx={{ color: '#D3B023', scale: 2 }} /> // Custom icon size
                    }
                    sx={{
                        borderRadius: 3,
                        padding: '15px',
                        fontSize: 13,
                        paddingRight: '20px',
                        fontWeight: 'bold',
                        backgroundColor: 'white'
                    }}
                >
                    Đăng nhập
                </Button>
            </Toolbar>
        </AppBar>
    )
}
