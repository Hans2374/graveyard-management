import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  styled,
  Card,
  CardContent,
  IconButton,
  Avatar,
} from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import leftImage from "../assets/pexels-arina-krasnikova-6907774.jpg";
import rightImage from "../assets/pexels-koolshooters-6495751.jpg";

import Service from "../components/Service";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "var(--primary-color)",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  textAlign: "center",
  width: "100%",
  maxWidth: "none",
}));

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

const ImageItem = styled("div")({
  width: "calc(33.33% - 10px)",
  height: 150,
  backgroundColor: "var(--primary-color)",
  border: "1px solid #ddd",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 10px",
});

const Dot = styled("span")({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "#ddd",
  cursor: "pointer",
  margin: "0 5px",
});

const NewsCard = styled(Card)(({ theme }) => ({
  width: "calc(33.33% - 20px)",
  margin: "0 10px",
}));

const CustomerCard = styled(Card)(({ theme }) => ({
  width: "calc(33.33% - 20px)",
  margin: "0 10px",
}));

const HomePage = ({ footerRef }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeNews, setActiveNews] = useState(0);
  const [activeCustomer, setActiveCustomer] = useState(0);

  const [currentPageImage, setCurrentPageImage] = useState(0);
  const [currentPageNews, setCurrentPageNews] = useState(0);
  const [currentPageCustomer, setCurrentPageCustomer] = useState(0);

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

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const handleNewsClick = (index) => {
    setActiveNews(index);
  };

  const handleCustomerClick = (index) => {
    setActiveCustomer(index);
  };

  const handleImageNext = () => {
    setCurrentPageImage(
      (currentPageImage + 1) % Math.ceil(imageData.length / 3)
    );
  };

  const handleImagePrev = () => {
    setCurrentPageImage(
      (currentPageImage - 1 + Math.ceil(imageData.length / 3)) %
      Math.ceil(imageData.length / 3)
    );
  };

  const handleNewsNext = () => {
    setCurrentPageNews((currentPageNews + 1) % Math.ceil(newsData.length / 3));
  };

  const handleNewsPrev = () => {
    setCurrentPageNews(
      (currentPageNews - 1 + Math.ceil(newsData.length / 3)) %
      Math.ceil(newsData.length / 3)
    );
  };

  const handleCustomerNext = () => {
    setCurrentPageCustomer(
      (currentPageCustomer + 1) % Math.ceil(customerData.length / 3)
    );
  };

  const handleCustomerPrev = () => {
    setCurrentPageCustomer(
      (currentPageCustomer - 1 + Math.ceil(customerData.length / 3)) %
      Math.ceil(customerData.length / 3)
    );
  };

  const imageData = [
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/toan%20canh%20cong%20vien%20vinh%20hang%20long%20thanh.jpg", // Thay bằng URL thực tế của ảnh
      alt: "Image 1 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/truc-than-dao-223.jpg", // Thay bằng URL thực tế của ảnh
      alt: "Image 2 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/vuon-nhi-thap-tu-hieu.jpg", // Thay bằng URL thực tế của ảnh
      alt: "Image 3 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/GD100-IMG_0787-2020.jpg", // Thay bằng URL thực tế của ảnh
      alt: "Image 4 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/goc%20canh%20quan%20khu%20gia%20toc%20dep%20tai%20hoa%20vien%20vinh%20hang%20long%20thanh.jpg", // Thay bằng URL thực tế của ảnh
      alt: "Image 5 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/6%20(2).jpg", // Thay bằng URL thực tế của ảnh
      alt: "Image 6 description",
    },
  ];

  const newsData = [
    {
      title: "Tin tức 1",
      description:
        "CHƯƠNG TRÌNH TỪ THIỆN: TRIỆU TRÁI TIM CÙNG HƯỚNG VỀ NGƯỜI DÂN MIỀN BẮC",
      url: "https://congvienvinhhanglongthanh.com/public/uploads/1726822725-web%201-min.jpg",
    },
    {
      title: "Tin tức 1",
      description: "YÊU MÃI HƯƠNG VỊ QUÊ HƯƠNG",
      url: "https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg",
    },
    {
      title: "Tin tức 1",
      description: "NÉT ĐẸP TÂM LINH TẠI THIỀN VIỆN TRÚC LÂM LONG ĐỨC",
      url: "https://congvienvinhhanglongthanh.com/public/uploads/1699320953-211-CVVHLT.jpg",
    },
    {
      title: "Tin tức 1",
      description:
        "CHƯƠNG TRÌNH TỪ THIỆN: TRIỆU TRÁI TIM CÙNG HƯỚNG VỀ NGƯỜI DÂN MIỀN BẮC",
      url: "https://congvienvinhhanglongthanh.com/public/uploads/1724212947-dat-duong-sanh.jpg",
    },
    {
      title: "Tin tức 1",
      description:
        "CHƯƠNG TRÌNH TỪ THIỆN: TRIỆU TRÁI TIM CÙNG HƯỚNG VỀ NGƯỜI DÂN MIỀN BẮC",
      url: "https://congvienvinhhanglongthanh.com/public/uploads/1696494145-z4755542867848_29ba2b7fa56120d493e9d847a1de61de.jpg",
    },
    {
      title: "Tin tức 1",
      description:
        "CHƯƠNG TRÌNH TỪ THIỆN: TRIỆU TRÁI TIM CÙNG HƯỚNG VỀ NGƯỜI DÂN MIỀN BẮC",
      url: "https://congvienvinhhanglongthanh.com/public/uploads/1693298072-371062455_711663264317209_7355812465677581051_n.jpg",
    },
  ];

  const customerData = [
    {
      name: "Tên khách hàng 1",
      content: "Nội dung về khách hàng 1",
    },
    {
      name: "Tên khách hàng 2",
      content: "Nội dung về khách hàng 2",
    },
    {
      name: "Tên khách hàng 3",
      content: "Nội dung về khách hàng 3",
    },
    {
      name: "Tên khách hàng 4",
      content: "Nội dung về khách hàng 4",
    },
    {
      name: "Tên khách hàng 5",
      content: "Nội dung về khách hàng 5",
    },
    {
      name: "Tên khách hàng 6",
      content: "Nội dung về khách hàng 6",
    },
  ];

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
        <Box align="center" sx={{ overflow: "hidden", flexGrow: 1 }}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 2,
              marginTop: "65px",
              maxWidth: "1000px",
            }}
          >
            {/* VỀ CHÚNG TÔI */}
            <Container maxWidth="md" sx={{ mb: 4 }}>
              <Typography
                align="center"
                gutterBottom
                sx={{ color: "var(--secondary-color)", mb: 2, fontSize: "2rem" }}
              >
                VỀ CHÚNG TÔI
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam"
              </Typography>
            </Container>

            {/* HÌNH ẢNH */}
            <StyledContainer>
              <Typography
                align="center"
                gutterBottom
                sx={{ color: "#FFFFFF", mb: 2, fontSize: "1.5rem" }}
              >
                HÌNH ẢNH
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <IconButton
                  aria-label="previous"
                  sx={{ position: "relative", top: "-5px", left: "10px" }}
                  onClick={handleImagePrev}
                >
                  <ArrowBackIos />
                </IconButton>
                <ImageItem onClick={() => handleImageClick(currentPageImage * 3)}>
                  <img
                    src={imageData[currentPageImage * 3].url}
                    alt={imageData[currentPageImage * 3].alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </ImageItem>
                <ImageItem
                  onClick={() => handleImageClick(currentPageImage * 3 + 1)}
                >
                  <img
                    src={imageData[currentPageImage * 3 + 1]?.url}
                    alt={imageData[currentPageImage * 3].alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </ImageItem>
                <ImageItem
                  onClick={() => handleImageClick(currentPageImage * 3 + 2)}
                >
                  <img
                    src={imageData[currentPageImage * 3 + 2]?.url}
                    alt={imageData[currentPageImage * 3].alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </ImageItem>
                <IconButton
                  aria-label="next"
                  sx={{ position: "relative", top: "-5px", right: "10px" }}
                  onClick={handleImageNext}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Dot
                  className={currentPageImage === 0 ? "active" : ""}
                  onClick={() => setCurrentPageImage(0)}
                />
                <Dot
                  className={currentPageImage === 1 ? "active" : ""}
                  onClick={() => setCurrentPageImage(1)}
                />
              </Box>
            </StyledContainer>

            <StyledContainer>
              <Typography
                align="center"
                gutterBottom
                sx={{ color: "#FFFFFF", mb: 2, fontSize: "1.5rem" }}
              >
                TIN TỨC
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <IconButton
                  aria-label="previous"
                  sx={{ position: "relative", top: "-5px", left: "10px" }}
                  onClick={handleNewsPrev}
                >
                  <ArrowBackIos />
                </IconButton>

                {/* News Cards */}
                {[0, 1, 2].map((index) => (
                  <NewsCard
                    key={index}
                    sx={{ flex: 1, ml: index !== 0 ? 1 : 0 }}
                    onClick={() => handleNewsClick(currentPageNews * 3 + index)}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: 200, // Thiết lập chiều cao cố định cho hình ảnh
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {newsData[currentPageNews * 3 + index]?.url ? (
                        <img
                          src={newsData[currentPageNews * 3 + index]?.url}
                          alt="News"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // Đảm bảo ảnh vừa khung
                          }}
                        />
                      ) : (
                        <CircularProgress size={50} /> // Placeholder nếu không có ảnh
                      )}
                    </Box>
                    <CardContent
                      sx={{
                        height: 100, // Thiết lập chiều cao cố định cho phần mô tả
                        overflow: "hidden", // Để ngăn văn bản quá dài tràn ra ngoài
                        display: "flex",
                        alignItems: "center", // Căn giữa nội dung theo chiều dọc
                        justifyContent: "center",
                        textAlign: "center", // Căn giữa văn bản
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "var(--secondary-color)",
                          display: "-webkit-box",
                          WebkitLineClamp: 3, // Giới hạn 3 dòng
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis", // Hiển thị dấu "..."
                        }}
                      >
                        {newsData[currentPageNews * 3 + index]?.description ||
                          "Mô tả không có sẵn"}
                      </Typography>
                    </CardContent>
                  </NewsCard>
                ))}

                <IconButton
                  aria-label="next"
                  sx={{ position: "relative", top: "-5px", right: "10px" }}
                  onClick={handleNewsNext}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Dot
                  className={currentPageNews === 0 ? "active" : ""}
                  onClick={() => setCurrentPageNews(0)}
                />
                <Dot
                  className={currentPageNews === 1 ? "active" : ""}
                  onClick={() => setCurrentPageNews(1)}
                />
              </Box>
            </StyledContainer>

            {/* DỊCH VỤ */}
            <StyledContainer>
              <Typography
                align="center"
                gutterBottom
                sx={{ color: "#FFFFFF", mb: 2, fontSize: "1.5rem" }}
              >
                DỊCH VỤ
              </Typography>

              <Service />

              {/* Phần dot indicator */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Dot
                  className={activeImage === 0 ? "active" : ""}
                  onClick={() => handleImageClick(0)}
                />
                <Dot
                  className={activeImage === 1 ? "active" : ""}
                  onClick={() => handleImageClick(1)}
                />
              </Box>
            </StyledContainer>

            {/* KHÁCH HÀNG */}
            <StyledContainer>
              <Typography
                align="center"
                gutterBottom
                sx={{ color: "#FFFFFF", mb: 2, fontSize: "1.5rem" }}
              >
                KHÁCH HÀNG
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <IconButton
                  aria-label="previous"
                  sx={{ position: "relative", top: "-5px", left: "10px" }}
                  onClick={handleCustomerPrev}
                >
                  <ArrowBackIos />
                </IconButton>
                <CustomerCard
                  sx={{ flex: 1, ml: 1 }}
                  onClick={() => handleCustomerClick(currentPageCustomer * 3)}
                >
                  <CardContent>
                    <Avatar
                      sx={{ bgcolor: "var(--secondary-color)", margin: "auto" }}
                    />
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      align="center"
                      sx={{ color: "var(--secondary-color)" }}
                    >
                      {customerData[currentPageCustomer * 3].name}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="center">
                      {customerData[currentPageCustomer * 3].content}
                    </Typography>
                  </CardContent>
                </CustomerCard>
                <CustomerCard
                  sx={{ flex: 1 }}
                  onClick={() => handleCustomerClick(currentPageCustomer * 3 + 1)}
                >
                  <CardContent>
                    <Avatar
                      sx={{ bgcolor: "var(--secondary-color)", margin: "auto" }}
                    />
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      align="center"
                      sx={{ color: "var(--secondary-color)" }}
                    >
                      {customerData[currentPageCustomer * 3 + 1].name}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="center">
                      {customerData[currentPageCustomer * 3 + 1].content}
                    </Typography>
                  </CardContent>
                </CustomerCard>
                <CustomerCard
                  sx={{ flex: 1, mr: 1 }}
                  onClick={() => handleCustomerClick(currentPageCustomer * 3 + 2)}
                >
                  <CardContent>
                    <Avatar
                      sx={{ bgcolor: "var(--secondary-color)", margin: "auto" }}
                    />
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      align="center"
                      sx={{ color: "var(--secondary-color)" }}
                    >
                      {customerData[currentPageCustomer * 3 + 2].name}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="center">
                      {customerData[currentPageCustomer * 3 + 2].content}
                    </Typography>
                  </CardContent>
                </CustomerCard>
                <IconButton
                  aria-label="next"
                  sx={{ position: "relative", top: "-5px", right: "10px" }}
                  onClick={handleCustomerNext}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Box>

              {/* Phần dot indicator */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Dot
                  className={currentPageCustomer === 0 ? "active" : ""}
                  onClick={() => setCurrentPageCustomer(0)}
                />
                <Dot
                  className={currentPageCustomer === 1 ? "active" : ""}
                  onClick={() => setCurrentPageCustomer(1)}
                />
              </Box>
            </StyledContainer>
          </Box>
        </Box>
        {/* Hình ảnh bên phải */}
        <RightImage
          style={{
            position: isFooterVisible ? "absolute" : "fixed",  // Change to absolute when Footer is visible
            top: isFooterVisible ? "auto" : "",           // Adjust top position
            right: isFooterVisible ? "-160px" : "",           // Adjust left position
            bottom: isFooterVisible ? "0px" : "",        // Ensure it doesn't overlap at the bottom
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

export default HomePage;
