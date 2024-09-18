import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const ContentContainer = styled('div')({
    textAlign: 'left',
    fontSize: '16px',
    '& img': {
        width: '100%',
        height: 'auto'
    },
});

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

//Các tin tức khác
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
];

//Content của bài viết 
const NewsDetail = () => {
    const articleContent = `
        <p>Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bảnNội dung văn bản Nội dung văn bản Nội dung văn bảnNội dung văn bản Nội dung văn bản</p>
        <img src='https://via.placeholder.com/150' alt="Sample Image" />
        <p>Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
        Nội dung văn bảnNội dung văn bản Nội dung văn bản Nội dung văn bảnNội dung văn bản Nội dung văn bản.</p>
    `;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
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
                    {/* TIÊU ĐỀ BÀI VIẾT */}
                    <Typography
                        align="left"
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
                        CHĂM SÓC NGHĨA TRANG LIỆT SĨ - VIỆC LÀM NHỎ Ý NGHĨA LỚN
                    </Typography>

                    {/* Viết bởi ABC | dd/mm/yyyy */}
                    <Typography
                        variant="body2"
                        align="left"
                        sx={{
                            color: '#888888',
                            fontSize: '14px',
                            mb: 4
                        }}
                    >
                        Viết bởi ABC | thứ 2, 01/09/2024, 10:00
                    </Typography>

                    {/* Thân bài rich text */}
                    <ContentContainer
                        dangerouslySetInnerHTML={{ __html: articleContent }}
                    />

                    {/* Các tin tức khác */}
                    <Typography
                        variant="body1"
                        align="left"
                        sx={{
                            marginTop: '100px',
                            marginBottom: '20px',
                            color: '#888888'
                        }}
                    >
                        Các tin tức khác
                    </Typography>

                    {newsData.slice(0, visibleCount).map((news, index) => (
                        <Link to="#" key={index} style={{ textDecoration: 'none' }}>
                            <NewsItemContainer>
                                <NewsImage src={news.image} alt={news.title} />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'var(--secondary-color)',
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
    );
};

export default NewsDetail;
