import React, { useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const NewsItemContainer = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '30px',
    borderBottom: '1px solid #88888888',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
        backgroundColor: '#f5f6fa',
        transform: 'scale(1.02)',
    }
});

const NewsImage = styled('img')({
    width: '150px',
    height: 'auto',
    marginRight: '15px',
});

//Các tin tức
const newsData = [
    {
        title: 'Khám phá nét đẹp văn hóa và tâm linh trong mùa Vu Lan báo hiếu',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Đọc kinh Vu Lan tại nhà: Hướng dẫn 5 bước đọc kinh Vu Lan đơn giản',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Ý nghĩa sâu sắc của việc ăn chay mùa Vu Lan. Tại sao nên ăn chay vào tháng Vu Lan?',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Ý nghĩa bông hồng cài áo mùa Vu Lan: Tình yêu và hiếu thảo',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Công viên nghĩa trang Sài Gòn Thiên Phúc kỷ niệm 77 năm ngày Thương binh liệt sĩ Việt Nam (27/7/1947-27/7/2024)',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '6',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '7',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '8',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '9',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '10',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '11',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '12',
        image: 'https://via.placeholder.com/150',
    },
];


const NewsContent = () => {

    const [visibleCount, setVisibleCount] = useState(5);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };
    return (
        <Box align="center">
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                padding: 2,
                marginTop: '65px',
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
                        color: '#D3B023',
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
                                    color: '#D3B023',
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
                            backgroundColor: '#D3B023',
                            textTransform: 'none'
                        }}
                    >
                        Xem thêm
                    </Button>
                )}

            </Container>
        </Box>
    </Box>
);
};

export default NewsContent;