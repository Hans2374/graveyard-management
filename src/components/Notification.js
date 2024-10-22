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
        <Box align='center' sx={{
            overflow: "hidden", flexGrow: 1,
            backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-3d-mountain-landscape-with-a-serene-lake-background-image_3626132.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Box sx={{ backgroundColor: 'white', padding: 2, marginTop: '65px', maxWidth: '1000px' }}>
                <Typography
                    align="center"
                    sx={{ color: 'var(--secondary-color)', marginBottom: 2, fontWeight: 'bold', scale: 2 }}
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