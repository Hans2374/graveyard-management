import {
  Typography,
  Box,
  TextField,
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.png";

function AdminContact() {
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "20px",
            width: "300px",
            marginRight: "20px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          marginLeft: "50px",
        }}
      >
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Hình ảnh:
        </Typography>
      </Box>
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          display: "flex",
          width: "200px",
          maxWidth: 300,
          height: "auto",
          padding: 1,
          marginLeft: "40px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          maxWidth: "62%",
          margin: "20px 0 0 50px",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Tỉnh thành:
        </Typography>
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Quận huyện:
        </Typography>
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Phường xã:
        </Typography>
      </Box>
      <Box sx={{ display: "flex", margin: "0 0 0 50px " }}>
        <TextField variant="outlined" placeholder="Hồ Chí Minh" size="small" />
        <TextField variant="outlined" placeholder="Thủ Đức" size="small" />
        <TextField
          variant="outlined"
          placeholder="Phường Linh Trung"
          size="small"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          maxWidth: "32%",
          margin: "20px 0 0 50px",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Tên đường:
        </Typography>
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Số nhà:
        </Typography>
      </Box>
      <Box sx={{ display: "flex", margin: "0 0 0 50px " }}>
        <TextField variant="outlined" placeholder="Hoàng Diệu 2" size="small" />
        <TextField variant="outlined" placeholder="22" size="small" />
      </Box>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          margin: "20px 0 0 50px",
        }}
      >
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Định vị:
        </Typography>
      </Box>
      <Box
        sx={{
          width: "500px",
          height: "100%",
          display: "flex",
          m: "0 0 0 50px",
          border: "10px solid var(--primary-color)",
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5628050519643!2d106.7698912759312!3d10.850873289296602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752743bdf5a07b%3A0x42a0364c47a52796!2zMjIgRC4gSMOgbmcgRGl14buBdSAyLCBQLiBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMgVGjhuqFjIFRow6BuaCwgSOG7kyBDaMOtIE5naGhp!5e0!3m2!1sen!2s!4v1694593284505!5m2!1sen!2s"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          maxWidth: "32%",
          margin: "20px 0 0 50px",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Số điện thoại:
        </Typography>
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          Email:
        </Typography>
      </Box>
      <Box sx={{ display: "flex", margin: "0 0 0 50px " }}>
        <TextField variant="outlined" placeholder="06857495673 - 0584756649" size="small" />
        <TextField variant="outlined" placeholder="amazingtech@gmail.com" size="small" />
      </Box>
      <Box
        sx={{
          display: "flex",
          maxWidth: "50%",
          margin: "20px 0 0 50px",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ marginLeft: "6px", fontWeight: "bold" }}>
          ????:
        </Typography>
      </Box>
      <Box sx={{ display: "flex", margin: "0 0 0 50px " }}>
        <TextField
          variant="outlined"
          placeholder="2023 Amazing Tech All Rights Reserved"
          size="small"
        />
      </Box>
      <Box sx={{display: "flex",
          maxWidth: "100%",
          margin: "20px 50px 0 50px",
          justifyContent: "space-between"}}>
      <Button
        sx={{
          backgroundColor: "var(--primary-color)",
          color: "black",
          borderRadius: "10px",
          padding: "5px 100px 5px 100px",
          textTransform: "none",
          marginTop: "20px",
        }}
      >
        Lưu
      </Button>

      <Button
        sx={{
          backgroundColor: "var(--primary-color)",
          color: "black",
          borderRadius: "10px",
          padding: "5px 100px 5px 100px",
          textTransform: "none",
          marginTop: "20px",
        }}
      >
        Đặt lại
      </Button>
      </Box>
    </ThemeProvider>
  );
}

export default AdminContact;
