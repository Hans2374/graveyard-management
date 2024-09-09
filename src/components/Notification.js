import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Notification = ({ notifications = [] }) => {
    // If no notifications are provided, use these default notifications
    const defaultNotifications = [
        "Thông báo ở đây thông báo ở đây thông báo ở đây. Thông báo ở đây thông báo ở đây thông báo ở đây. Thông báo ở đây thông báo ở đây thông báo ở đây. Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
        "Thông báo ở đây thông báo ở đây thông báo ở đây",
    ];

    const notificationsToDisplay = notifications.length > 0 ? notifications : defaultNotifications;

    return (
        <Box align='center' >
            <Box sx={{ backgroundColor: 'white', padding: 2, marginTop: '65px', maxWidth: '1000px' }}>
                <Typography
                    align="center"
                    sx={{ color: '#D3B023', marginBottom: 2, fontWeight: 'bold', scale: 2 }}
                >
                    THÔNG BÁO
                </Typography>
                <List>
                    {notificationsToDisplay.map((notification, index) => (
                        <ListItem key={index} divider={index < notificationsToDisplay.length - 1}>
                            <ListItemText primary={notification} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Notification;