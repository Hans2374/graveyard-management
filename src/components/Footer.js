import React from "react";
import { Box, Typography, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const logoStyles = {
    width: { xs: 250, sm: 300, md: 350, lg: 400 },
    height: 'auto',
    maxWidth: '100%',
    padding: 1,
    margin: '0 auto',  // Căn giữa logo
  };

  const contactInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  };

  const iconStyles = {
    marginRight: '10px', // Giảm khoảng cách giữa icon và chữ
  };

  const ContactInfo = () => (
    <Stack spacing={0.5} alignItems="flex-start">
      <Box sx={contactInfoStyles}>
        <PhoneIcon sx={iconStyles} />
        <Typography variant="body2">06857495673 - 0584756649</Typography>
      </Box>
      <Box sx={contactInfoStyles}>
        <EmailIcon sx={iconStyles} />
        <Typography variant="body2">amazingtech@gmail.com</Typography>
      </Box>
      <Box sx={contactInfoStyles}>
        <RoomIcon sx={iconStyles} />
        <Typography variant="body2" textAlign="left">
          22 D. Hoàng Diệu 2, P. Linh Trung, Thủ Đức, Hồ Chí Minh
        </Typography>
      </Box>
    </Stack>
  );

  return (
    <Box sx={{ bgcolor: "var(--primary-color)", p: 2, mt: "auto" }}>
      <Container maxWidth="lg">
        {isMobile ? (
          <Stack direction="column" spacing={2} alignItems="center">
            <Box component="img" src={logo} alt="logo" sx={{ width: '100%', maxWidth: 250, height: 'auto', padding: 1, margin: '0 auto' }} />
            <ContactInfo />
            <Box sx={{ 
              width: '100%', 
              height: 250,  // Giảm chiều cao cho iframe
              padding: 0, 
              border: '5px solid #d3b023', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              margin: 0 
            }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5628050519643!2d106.7698912759312!3d10.850873289296602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752743bdf5a07b%3A0x42a0364c47a52796!2zMjIgRC4gSMOgbmcgRGl14buBdSAyLCBQLiBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMgVGjhuqFjIFRow6BuaCwgSOG7kyBDaMOtIE5naGhp!5e0!3m2!1sen!2s!4v1694593284505!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Stack>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box component="img" src={logo} alt="logo" sx={logoStyles} />
              <ContactInfo />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                width: '100%', 
                height: 250,  // Giảm chiều cao cho iframe
                padding: 0, 
                border: '5px solid #d3b023', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                margin: 0 
              }}>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5628050519643!2d106.7698912759312!3d10.850873289296602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752743bdf5a07b%3A0x42a0364c47a52796!2zMjIgRC4gSMOgbmcgRGl14buBdSAyLCBQLiBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMgVGjhuqFjIFRow6BuaCwgSOG7kyBDaMOtIE5naGhp!5e0!3m2!1sen!2s!4v1694593284505!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Grid>
          </Grid>
        )}
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
          © 2023 Amazing Tech. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
