import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const MyService = () => {
  const servicePackages = [
    {
      id: 1,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 1",
      description: "Mô tả các dịch vụ có trong gói",
      serviceTitle: "Tên dịch vụ 1",
    },
    {
      id: 2,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 2",
      description: "Mô tả các dịch vụ có trong gói",
      serviceTitle: "Tên dịch vụ 2",
    },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const pageCount = Math.ceil(servicePackages.length / itemsPerPage);

  const displayedServices = servicePackages.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
        backgroundColor: "#f0f0f0",
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        sx={{
          padding: "40px 20px",
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={4}
          style={{ color: "#333" }}
        >
          DỊCH VỤ CỦA TÔI
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
            alignItems: "flex-start",
          }}
        >
          <Box display="flex" alignItems="center">
            <TextField
              placeholder="Tìm kiếm dịch vụ"
              variant="outlined"
              sx={{ marginRight: "10px", width: "300px" }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
            <Button
              variant="contained"
              startIcon={<FilterListIcon />}
              sx={{ backgroundColor: "#f5e1a4", color: "#333" }}
            >
              Thêm điều kiện lọc
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {displayedServices.map((service) => (
            <Grid item xs={12} sm={6} md={6} key={service.id}>
              <Card
                sx={{
                  backgroundColor: "#fff3e0",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="auto"
                  image={service.img}
                  alt={service.title}
                  sx={{ objectFit: "cover", height: "384px" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="#f0c431">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    <strong>{service.serviceTitle}</strong>
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Button
                      variant="text"
                      sx={{ marginTop: "10px", color: "#f0c431" }}
                      href={"/service/detail"}
                    >
                      Chi tiết →
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MyService;
