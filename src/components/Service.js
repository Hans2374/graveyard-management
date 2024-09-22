import React from "react";
import { Grid, Card, Typography, CardContent, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Sử dụng Link từ react-router-dom

// Thêm thuộc tính image vào từng service
const services = [
  {
    title: "Mai táng",
    description: [
      "Cung cấp các dịch vụ liên quan đến việc tổ chức tang lễ, an táng người đã khuất.",
      "Chuẩn bị quan tài, dịch vụ hỏa táng, chôn cất, và các nghi lễ tôn giáo liên quan.",
      "Giúp gia đình giải quyết các thủ tục pháp lý, lựa chọn địa điểm chôn cất.",
    ],
    link: "/services/funeral",
    image:
      "https://saigonthienphuc.com/wp-content/uploads/2022/03/MG_6247-scaled.jpg", // Đường dẫn hình ảnh
  },
  {
    title: "Cúng định kỳ",
    description: [
      "Thực hiện các nghi lễ cúng bái nhằm tưởng nhớ và cầu siêu cho người đã khuất.",
      "Tổ chức vào các ngày lễ lớn hoặc các dịp đặc biệt trong năm.",
      "Cung cấp dịch vụ chuẩn bị mâm cỗ, hoa, hương, và các vật phẩm cần thiết cho lễ cúng.",
    ],
    link: "/services/periodic-offering",
    image:
      "https://saigonthienphuc.com/wp-content/uploads/2021/11/DSC00043-scaled.jpg", // Đường dẫn hình ảnh
  },
];

export const Service = () => {
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
        <Box
          sx={{
            padding: "15px",
            borderRadius: "8px",
            mb: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >

        </Box>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} md={5} key={index}>
              {/* Sử dụng Link từ react-router-dom */}
              <Card
                component={Link}
                to={service.link}
                style={{
                  backgroundColor: "#f5e6a7", // Giữ lại màu nền
                  padding: "30px",
                  cursor: "pointer",
                  textDecoration: "none", // Bỏ underline của link
                  color: "inherit", // Giữ lại màu sắc của text
                  display: "block", // Đảm bảo chiếm toàn bộ vùng Card
                  transition: "transform 0.3s ease", // Hiệu ứng hover
                }}
                sx={{
                  "&:hover": {
                    transform: "scale(1.05)", // Phóng to khi hover
                  },
                  "&:focus, &:active": {
                    outline: "none", // Bỏ viền khi focus
                  },
                }}
              >
                <CardContent style={{ padding: "0" }}>
                  {/* Tiêu đề của dịch vụ */}
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      borderRadius: "4px 4px 0 0",
                      width: "100%",
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      style={{
                        fontWeight: "bold",
                        color: "#f0c431",
                        textTransform: "uppercase",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  {/* Hình ảnh dịch vụ (giữa tiêu đề và mô tả) */}
                  <Box mt={2} sx={{ textAlign: "center" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        maxHeight: "250px", // Giới hạn chiều cao nếu cần
                        objectFit: "cover", // Cắt gọn hình ảnh theo khung
                        borderRadius: "8px",
                      }}
                    />
                  </Box>

                  {/* Mô tả dịch vụ */}
                  <ul style={{ paddingLeft: "25px", marginTop: "20px" }}>
                    {service.description.map((desc, idx) => (
                      <li key={idx}>
                        <Typography variant="body1" style={{ color: "#333" }}>
                          {desc}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Service;