import React from "react";
import { Box, Typography, Container, Grid2 } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo.png";
import image from "../assets/image.png";

const Footer = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#E6D189", p: 4, mt: "auto" }} >
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: 400, height: 145, padding: 5, marginLeft: -46 }}
                />
              </Typography>
              <Box display="flex" alignItems="center">
                <RoomIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
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
            </Grid2>

            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                <img
                  src={image}
                  alt="image"
                  style={{ width: 502, height: 266, padding: 5, marginLeft: 164 }}
                />
              </Typography>
            </Grid2>
          </Grid2>
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
    </div>

  );
};

export default Footer;
