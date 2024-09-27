import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import leftImage from "../assets/pexels-arina-krasnikova-6907774.jpg";
import rightImage from "../assets/pexels-koolshooters-6495751.jpg";

const NewsItemContainer = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '30px',
    marginBottom: '30px',
    border: '1px solid var(--secondary-color)',
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
        backgroundColor: '#fff8dc',
        transform: 'scale(1.02)',
    },
});

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

const NewsImage = styled('img')({
    borderTopLeftRadius: '5px',
    borderbottomLeftRadius: '5px',
    width: '150px',
    height: 'auto',
    marginRight: '15px',
});

//Các tin tức
const newsData = [
    {
        title: 'Khám phá nét đẹp văn hóa và tâm linh trong mùa Vu Lan báo hiếu',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg',
    },
    {
        title: 'Đọc kinh Vu Lan tại nhà: Hướng dẫn 5 bước đọc kinh Vu Lan đơn giản',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699320953-211-CVVHLT.jpg',
    },
    {
        title: 'Ý nghĩa sâu sắc của việc ăn chay mùa Vu Lan. Tại sao nên ăn chay vào tháng Vu Lan?',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg',
    },
    {
        title: 'Ý nghĩa bông hồng cài áo mùa Vu Lan: Tình yêu và hiếu thảo',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699320953-211-CVVHLT.jpg',
    },
    {
        title: 'Công viên nghĩa trang Sài Gòn Thiên Phúc kỷ niệm 77 năm ngày Thương binh liệt sĩ Việt Nam (27/7/1947-27/7/2024)',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg',
    },
    {
        title: '6',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg',
    },
    {
        title: '7',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699320953-211-CVVHLT.jpg',
    },
    {
        title: '8',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg',
    },
    {
        title: '9',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699320953-211-CVVHLT.jpg',
    },
    {
        title: '10',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg',
    },
    {
        title: '11',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699320953-211-CVVHLT.jpg',
    },
    {
        title: '12',
        image: 'https://congvienvinhhanglongthanh.com/public/uploads/1699323667-511-lt.jpg',
    },
];


const NewsContent = ({ footerRef }) => {

    const [visibleCount, setVisibleCount] = useState(8);

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <Box align="center" sx={{ overflow: "hidden", flexGrow: 1 }}>
                    <Box
                        sx={{
                            backgroundColor: '#FFFFFF',
                            padding: 2,
                            marginTop: '55px',
                            maxWidth: '1000px'
                        }}
                    >
                        <Container maxWidth="md" sx={{ mb: 4 }}>
                            {/* TIN TỨC */}
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
                                TIN TỨC
                            </Typography>

                            {newsData.slice(0, visibleCount).map((news, index) => (
                                <Link to="/news-detail" key={index} style={{ textDecoration: 'none', marginBottom: '40px' }}>
                                    <NewsItemContainer>
                                        <NewsImage src={news.image} alt={news.title} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'var(--secondary-color)',
                                                marginTop: '10px',
                                                textAlign: 'left',
                                                fontSize: {
                                                    xs: '12px',
                                                    sm: '16px',
                                                    md: '20px',
                                                    lg: '20px'
                                                }
                                            }}
                                        >
                                            {news.title}
                                        </Typography>
                                    </NewsItemContainer>
                                </Link>
                            ))}

                            {visibleCount < newsData.length && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleLoadMore}
                                    sx={{
                                        marginTop: '20px',
                                        backgroundColor: 'var(--secondary-color)',
                                        textTransform: 'none'
                                    }}
                                >
                                    Xem thêm
                                </Button>
                            )}

                        </Container>
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

export default NewsContent;