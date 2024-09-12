import React from "react";
import { Box, Typography, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo.png";
import image from "../assets/image.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const ContactInfo = () => (
    <Stack spacing={1} alignItems={isMobile ? "center" : "flex-start"}>
      <Box display="flex" alignItems="center">
        <RoomIcon sx={{ mr: 1 }} />
        <Typography variant="body1" textAlign={isMobile ? "center" : "left"}>
          22 D. Hoàng Diệu 2, P. Linh Trung, Thủ Đức, Hồ Chí Minh
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <PhoneIcon sx={{ mr: 1 }} />
        <Typography variant="body1">06857495673 - 0584756649</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <EmailIcon sx={{ mr: 1 }} />
        <Typography variant="body1">amazingtech@gmail.com</Typography>
      </Box>
    </Stack>
  );

  return (
    <Box sx={{ bgcolor: "var(--primary-color)", p: 4, mt: "auto" }}>
      <Container maxWidth="lg">
        {isMobile ? (
          <Stack direction="column" spacing={2} alignItems="center">
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: '100%',
                maxWidth: 300,
                height: 'auto',
                padding: 1,
              }}
            />
            <ContactInfo />
            <Box
              component="img"
              src={image}
              alt="image"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: 502,
                padding: 1,
              }}
            />
          </Stack>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  width: {
                    sm: 300,
                    md: 350,
                    lg: 400
                  },
                  height: 'auto',
                  maxWidth: '100%',
                  padding: 1,
                  marginLeft: -4
                }}
              />
              <ContactInfo />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={image}
                alt="image"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: 502,
                  padding: 1,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'block'
                }}
              />
            </Grid>
          </Grid>
        )}
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          © 2023 Amazing Tech. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;