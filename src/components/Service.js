import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, CardContent, Box, Container } from "@mui/material";
import { Link } from "react-router-dom"; // Sử dụng Link từ react-router-dom
import { styled } from '@mui/system';
import leftImage from "../assets/pexels-arina-krasnikova-6907774.jpg";
import rightImage from "../assets/pexels-koolshooters-6495751.jpg";

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

// Tạo container cho ảnh trái và phải
const ImageContainer = styled("div")({
  width: "244px",  // Kích thước ảnh
  height: "700px",
  top: "128px",  // Điều chỉnh vị trí top cho phù hợp
  overflow: "hidden",  // Đảm bảo ảnh không vượt quá container
});

const LeftImage = styled(ImageContainer)({
  left: '0px'  // Đặt bên trái màn hình
});

const RightImage = styled(ImageContainer)({
  right: "0px",  // Đặt bên phải màn hình
});

export const Service = ({ footerRef }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the Footer is in view
        if (footerTop <= windowHeight) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Container cho toàn bộ content chính */}
      <Container
        sx={{
          position: "relative",  // Make the container relative to anchor the absolute images
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

        {/* Hình ảnh bên trái */}
        <LeftImage
          style={{
            position: isFooterVisible ? "absolute" : "fixed",  // Change to absolute when Footer is visible
            top: isFooterVisible ? "auto" : "",           // Adjust top position
            left: isFooterVisible ? "-160px" : "",           // Adjust left position
            bottom: isFooterVisible ? "0px" : "",        // Ensure it doesn't overlap at the bottom
          }}
          sx={{
            // Hide the left image on small screens and below (like <600px)
            display: { xs: "none", sm: "none", md: "block" }
          }}
        >
          <img
            src={leftImage}
            alt="Left Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </LeftImage>

        {/* Nội dung chính giữa */}
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
              maxWidth: "990px",
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
        </Box>{/* Hình ảnh bên phải */}
        <RightImage
          style={{
            position: isFooterVisible ? "absolute" : "fixed",  // Change to absolute when Footer is visible
            top: isFooterVisible ? "auto" : "",           // Adjust top position
            right: isFooterVisible ? "-160px" : "",           // Adjust left position
            bottom: isFooterVisible ? "0px" : "",        // Ensure it doesn't overlap at the bottom
          }}
          sx={{
            // Hide the left image on small screens and below (like <600px)
            display: { xs: "none", sm: "none", md: "block" }
          }}
        >
          <img
            src={rightImage}
            alt="Right Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </RightImage>
      </Container>
    </Box>
  );
};
export default Service;