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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const FuneralServicePage = () => {
  const servicePackages = [
    {
      id: 1,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 1",
      description: "Mô tả các dịch vụ có trong gói",
    },
    {
      id: 2,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 2",
      description: "Mô tả các dịch vụ có trong gói",
    },
    {
      id: 3,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 3",
      description: "Mô tả các dịch vụ có trong gói",
    },
    {
      id: 4,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 4",
      description: "Mô tả các dịch vụ có trong gói",
    },
    {
      id: 5,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 5",
      description: "Mô tả các dịch vụ có trong gói",
    },
    {
      id: 6,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 6",
      description: "Mô tả các dịch vụ có trong gói",
    },
    {
      id: 7,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 7",
      description: "Mô tả các dịch vụ có trong gói",
    },
    {
      id: 8,
      img: "https://vinhhanglongthanh.com/wp-content/uploads/2016/06/dich-vu-mai-tang-vinh-hang-long-thanh.jpg",
      title: "Gói dịch vụ 8",
      description: "Mô tả các dịch vụ có trong gói",
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

  const [compareList, setCompareList] = useState([]);
  const [isCompareDialogOpen, setIsCompareDialogOpen] = useState(false);

  const handleAddToCompare = (service) => {
    if (compareList.some((item) => item.id === service.id)) {
      alert("Dịch vụ này đã được thêm vào so sánh.");
      return;
    }
    if (compareList.length < 2) {
      setCompareList([...compareList, service]);
    } else {
      alert("Bạn chỉ có thể chọn tối đa 2 dịch vụ để so sánh!");
    }
  };

  const handleOpenCompareDialog = () => {
    if (compareList.length === 2) {
      setIsCompareDialogOpen(true);
    } else {
      alert("Vui lòng chọn 2 dịch vụ để so sánh.");
    }
  };

  const handleCloseCompareDialog = () => {
    setIsCompareDialogOpen(false);
  };

  const handleRemoveFromCompare = (service) => {
    setCompareList(compareList.filter((item) => item.id !== service.id));
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
        backgroundImage: 'url(https://cdn.vjshop.vn/tin-tuc/cach-chup-anh-phong-canh/cach-chup-anh-phong-canh-dep-15.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Box
        sx={{
          padding: { xs: "20px 10px", md: "40px 20px" },
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          margin: "auto",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{
            marginTop: '20px',
            color: 'var(--secondary-color)',
            fontWeight: 'bold',
            mb: 2,
            fontSize: {
              xs: '18px',
              sm: '24px',
              md: '28px',
              lg: '32px'
            }
          }}
        >
          DỊCH VỤ MAI TÁNG
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mb: 4,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Tìm kiếm dịch vụ và Thêm điều kiện lọc */}
          <Box
            display="flex"
            alignItems="center"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              mb: { xs: 2, md: 0 },
              width: { xs: "100%", md: "auto" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <TextField
              placeholder="Tìm kiếm dịch vụ"
              variant="outlined"
              sx={{ marginBottom: { xs: 2, md: 0 }, marginRight: { md: "10px" }, width: { xs: "100%", md: "300px" } }}
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
              sx={{
                backgroundColor: "#f5e1a4",
                color: "#333",
                padding: "16px",
                width: { xs: "100%", md: "300px" }, 
              }}
            >
              Thêm điều kiện lọc
            </Button>
          </Box>

          {/* So sánh dịch vụ */}
          <Box
            sx={{
              position: { xs: "relative", md: "sticky" },
              top: "10px",
              backgroundColor: "#fff3e0",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: { xs: "100%", md: "300px" }, 
              mt: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="#f0c431">
              So sánh dịch vụ
            </Typography>
            <Box>
              {compareList.map((service) => (
                <Box
                  key={service.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={2}
                >
                  <Typography variant="body2">{service.title}</Typography>
                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => handleRemoveFromCompare(service)}
                  >
                    X
                  </IconButton>
                </Box>
              ))}
            </Box>
            {compareList.length === 2 && (
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#f0c431", color: "#333" }}
                onClick={handleOpenCompareDialog}
              >
                So sánh ngay
              </Button>
            )}
          </Box>
        </Box>

        <Grid container spacing={4}>
          {displayedServices.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
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
                  sx={{ objectFit: "cover", height: "300px" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="#f0c431">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#f0c431",
                        padding: "4px 8px",
                        fontSize: "12px",
                        minWidth: "100px",
                        borderRadius: "8px",
                      }}
                      onClick={() => handleAddToCompare(service)}
                      disabled={compareList.some(
                        (item) => item.id === service.id
                      )}
                    >
                      {compareList.some((item) => item.id === service.id)
                        ? "Đã thêm"
                        : "So sánh"}
                    </Button>

                    <Button
                      variant="text"
                      sx={{
                        marginTop: "10px",
                        color: "#f0c431",
                        fontSize: "12px",
                        padding: "4px 8px",
                        borderRadius: "8px",
                      }}
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

        <Dialog
          open={isCompareDialogOpen}
          onClose={handleCloseCompareDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>So sánh dịch vụ</DialogTitle>
          <DialogContent>
            <Grid container spacing={4}>
              {compareList.map((service) => (
                <Grid item xs={12} sm={6} key={service.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={service.img}
                      alt={service.title}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {service.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="error"
                        sx={{ marginTop: "10px" }}
                        onClick={() => handleRemoveFromCompare(service)}
                      >
                        Xóa khỏi so sánh
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCompareDialog}>Đóng</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default FuneralServicePage;
