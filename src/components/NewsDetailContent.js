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
    marginTop: '10px',
    marginBottom: '30px',
    border: '1px solid var(--secondary-color)',
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
        backgroundColor: '#fff8dc', 
        transform: 'scale(1.02)',
    },
});

const NewsImage = styled('img')({
    borderTopLeftRadius: '5px',
    borderbottomLeftRadius: '5px',
    width: '150px',
    height: 'auto',
    marginRight: '15px',
});

//Các tin tức khác
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

//Content của bài viết 
const NewsDetail = () => {
    const articleContent = `
    <p>Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản
    Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
    Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
    Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
    Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản Nội dung văn bản 
    Nội dung văn bảnNội dung văn bản Nội dung văn bản Nội dung văn bảnNội dung văn bản Nội dung văn bản</p>
    <img src='https://cdnphoto.dantri.com.vn/XXKeoGI5eHY-594kWEorzcnmSFM=/thumb_w/1920/2024/02/21/chua-dai-tue-nghe-annguyen-duy-1-1708478566537.jpg?watermark=true' alt="Sample Image" class="custom-img" />
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
        <Box align="center" 
        sx={{ 
            backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230902/pngtree-sunrise-above-a-sunrise-in-the-sky-image_13129631.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
            }}>
            <Box
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: 2,
                    marginTop: '55px',
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
    );
};

export default NewsDetail;
