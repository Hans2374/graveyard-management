import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  styled,
  Card,
  CardContent,
  IconButton,
  Avatar,
  useTheme,
  useMediaQuery
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Service from "../components/Service";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "var(--primary-color)",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  textAlign: "center",
  width: "100%",
  maxWidth: "none",
}));

const ImageItem = styled("div")(({ theme }) => ({
  width: "100%",
  height: 150,
  backgroundColor: "var(--primary-color)",
  border: "1px solid #ddd",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
}));

const Dot = styled("span")(({ theme }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "#ddd",
  cursor: "pointer",
  margin: "0 5px",
  "&.active": {
    backgroundColor: "#555",
  },
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  '& .swiper-pagination-bullets': {
    bottom: '-3px !important',
  },
  '& .swiper-pagination-bullet': {
    backgroundColor: theme.palette.primary.main,
  },
  '& .swiper-button-next, & .swiper-button-prev': {
    color: theme.palette.primary.main,
  },
  paddingBottom: '30px',
  paddingLeft: '30px',
  paddingRight: '30px',
}));

const NewsCard = styled(Card)(({ theme }) => ({
  width: "100%",
  border: "1px solid #ddd",
  borderRadius: "5px",
  transform: "scale(1)",
  transition: "transform 0.3s ease-in-out",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const CustomerCard = styled(Card)(({ theme }) => ({
  width: "100%",
  border: "1px solid #ddd",
  borderRadius: "5px",
  transform: "scale(1)",
  transition: "transform 0.3s ease-in-out",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeImage, setActiveImage] = useState(0);
  const [activeNews, setActiveNews] = useState(0);
  const [activeCustomer, setActiveCustomer] = useState(0);

  const swiperProps = {
    modules: [Pagination, Autoplay, ...(isSmallScreen ? [] : [Navigation])],
    pagination: {
      clickable: true,
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: !isSmallScreen,
    spaceBetween: 33,
    slidesPerView: isSmallScreen ? 1 : 3,
    loop: true,
  };

  const imageData = [
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/toan%20canh%20cong%20vien%20vinh%20hang%20long%20thanh.jpg",
      alt: "Image 1 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/truc-than-dao-223.jpg",
      alt: "Image 2 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/vuon-nhi-thap-tu-hieu.jpg",
      alt: "Image 3 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/GD100-IMG_0787-2020.jpg",
      alt: "Image 4 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/goc%20canh%20quan%20khu%20gia%20toc%20dep%20tai%20hoa%20vien%20vinh%20hang%20long%20thanh.jpg",
      alt: "Image 5 description",
    },
    {
      url: "https://congvienvinhhanglongthanh.com/public/ckeditor/uploads/6%20(2).jpg",
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

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const handleNewsClick = (index) => {
    setActiveNews(index);
  };

  const handleCustomerClick = (index) => {
    setActiveCustomer(index);
  };


  const handleSlideClick = (type, index) => {
    switch (type) {
      case 'image':
        handleImageClick(index);
        break;
      case 'news':
        handleNewsClick(index);
        break;
      case 'customer':
        handleCustomerClick(index);
        break;
      default:
        break;
    }
  };

  return (
    <Box align="center" sx={{
      overflow: "hidden", flexGrow: 1,
      backgroundImage: 'url(https://cdn.vjshop.vn/tin-tuc/cach-chup-anh-phong-canh/cach-chup-anh-phong-canh-dep-15.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
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
          <StyledSwiper {...swiperProps}>
            {imageData.map((image, index) => (
              <SwiperSlide key={index}>
                <ImageItem onClick={() => handleSlideClick('image', index)}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </ImageItem>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </StyledContainer>

        {/* TIN TỨC */}
        <StyledContainer>
          <Typography
            align="center"
            gutterBottom
            sx={{ color: "#FFFFFF", mb: 2, fontSize: "1.5rem" }}
          >
            TIN TỨC
          </Typography>
          <StyledSwiper {...swiperProps}>
            {newsData.map((news, index) => (
              <SwiperSlide key={index}>
                <NewsCard onClick={() => handleSlideClick('news', index)}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 200,
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {news.url ? (
                      <img
                        src={news.url}
                        alt={news.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <CircularProgress size={50} />
                    )}
                  </Box>
                  <CardContent
                    sx={{
                      height: 100,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--secondary-color)",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {news.description || "Mô tả không có sẵn"}
                    </Typography>
                  </CardContent>
                </NewsCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>
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
          <StyledSwiper {...swiperProps}>
            {customerData.map((customer, index) => (
              <SwiperSlide key={index}>
                <CustomerCard onClick={() => handleSlideClick('customer', index)}>
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
                      {customer.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="center">
                      {customer.content}
                    </Typography>
                  </CardContent>
                </CustomerCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </StyledContainer>
      </Box>
    </Box>
  );
};

export default HomePage;