import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  styled,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
} from '@mui/material';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';

import Service from "../components/Service";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'var(--primary-color)',
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  textAlign: 'center',
  width: '100%',
  maxWidth: 'none',
}));

const ImageItem = styled('div')({
  width: 'calc(33.33% - 10px)',
  height: 150,
  backgroundColor: 'var(--primary-color)',
  border: '1px solid #ddd',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 10px', 
});

const Dot = styled('span')({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: '#ddd',
  cursor: 'pointer',
  margin: '0 5px',
});

const NewsCard = styled(Card)(({ theme }) => ({
  width: 'calc(33.33% - 20px)',
  margin: '0 10px',
}));

const CustomerCard = styled(Card)(({ theme }) => ({
  width: 'calc(33.33% - 20px)',
  margin: '0 10px',
}));

const HomePage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeNews, setActiveNews] = useState(0);
  const [activeCustomer, setActiveCustomer] = useState(0);

  const [currentPageImage, setCurrentPageImage] = useState(0);
  const [currentPageNews, setCurrentPageNews] = useState(0);
  const [currentPageCustomer, setCurrentPageCustomer] = useState(0);

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
    setCurrentPageImage((currentPageImage + 1) % Math.ceil(imageData.length / 3));
  };

  const handleImagePrev = () => {
    setCurrentPageImage((currentPageImage - 1 + Math.ceil(imageData.length / 3)) % Math.ceil(imageData.length / 3));
  };

  const handleNewsNext = () => {
    setCurrentPageNews((currentPageNews + 1) % Math.ceil(newsData.length / 3));
  };

  const handleNewsPrev = () => {
    setCurrentPageNews((currentPageNews - 1 + Math.ceil(newsData.length / 3)) % Math.ceil(newsData.length / 3));
  };

  const handleCustomerNext = () => {
    setCurrentPageCustomer((currentPageCustomer + 1) % Math.ceil(customerData.length / 3));
  };

  const handleCustomerPrev = () => {
    setCurrentPageCustomer((currentPageCustomer - 1 + Math.ceil(customerData.length / 3)) % Math.ceil(customerData.length / 3));
  };

  const imageData = [
    {
      // ... thông tin hình ảnh 1
    },
    {
      // ... thông tin hình ảnh 2
    },
    {
      // ... thông tin hình ảnh 3
    },
    {
      // ... thông tin hình ảnh 4
    },
    {
      // ... thông tin hình ảnh 5
    },
    {
      // ... thông tin hình ảnh 6
    },
  ];

  const newsData = [
    {
      // ... thông tin tin tức 1
    },
    {
      // ... thông tin tin tức 2
    },
    {
      // ... thông tin tin tức 3
    },
    {
      // ... thông tin tin tức 4
    },
    {
      // ... thông tin tin tức 5
    },
    {
      // ... thông tin tin tức 6
    },
  ];

  const customerData = [
    {
      name: "Tên khách hàng 1",
      content: "Nội dung về khách hàng 1"
    },
    {
      name: "Tên khách hàng 2",
      content: "Nội dung về khách hàng 2"
    },
    {
      name: "Tên khách hàng 3",
      content: "Nội dung về khách hàng 3"
    },
    {
      name: "Tên khách hàng 4",
      content: "Nội dung về khách hàng 4"
    },
    {
      name: "Tên khách hàng 5",
      content: "Nội dung về khách hàng 5"
    },
    {
      name: "Tên khách hàng 6",
      content: "Nội dung về khách hàng 6"
    },
  ];

  return (
    <Box align='center' sx={{ overflow: 'hidden' }}>
      <Box sx={{ backgroundColor: 'white', padding: 2, marginTop: '65px', maxWidth: '1000px' }}>

        {/* VỀ CHÚNG TÔI */}
        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Typography align="center" gutterBottom sx={{ color: 'var(--secondary-color)', mb: 2, fontSize: '2rem' }}>
            VỀ CHÚNG TÔI
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam"
          </Typography>
        </Container>

        {/* HÌNH ẢNH */}
        <StyledContainer>
          <Typography align="center" gutterBottom sx={{ color: 'var(--secondary-color)', mb: 2, fontSize: '1.5rem' }}>
            HÌNH ẢNH
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <IconButton aria-label="previous" sx={{ position: 'relative', top: '-5px', left: '10px' }} onClick={handleImagePrev}>
              <ArrowBackIos />
            </IconButton>
            <ImageItem onClick={() => handleImageClick(currentPageImage * 3)}>
              <CircularProgress size={50} /> {/* Placeholder for image loading */}
            </ImageItem>
            <ImageItem onClick={() => handleImageClick((currentPageImage * 3) + 1)}>
              <CircularProgress size={50} /> {/* Placeholder for image loading */}
            </ImageItem>
            <ImageItem onClick={() => handleImageClick((currentPageImage * 3) + 2)}>
              <CircularProgress size={50} /> {/* Placeholder for image loading */}
            </ImageItem>
            <IconButton aria-label="next" sx={{ position: 'relative', top: '-5px', right: '10px' }} onClick={handleImageNext}>
              <ArrowForwardIos />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Dot className={currentPageImage === 0 ? 'active' : ''} onClick={() => setCurrentPageImage(0)} />
            <Dot className={currentPageImage === 1 ? 'active' : ''} onClick={() => setCurrentPageImage(1)} />
          </Box>
        </StyledContainer>

        {/* TIN TỨC */}
        <StyledContainer>
          <Typography align="center" gutterBottom sx={{ color: 'var(--secondary-color)', mb: 2, fontSize: '1.5rem' }}>
            TIN TỨC
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <IconButton aria-label="previous" sx={{ position: 'relative', top: '-5px', left: '10px' }} onClick={handleNewsPrev}>
              <ArrowBackIos />
            </IconButton>
            <NewsCard sx={{ flex: 1, ml: 1 }} onClick={() => handleNewsClick(currentPageNews * 3)}>
              <CardContent>
                <CircularProgress size={50} /> {/* Placeholder for image loading */}
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Tiêu đề</Button>
              </CardActions>
            </NewsCard>
            <NewsCard sx={{ flex: 1 }} onClick={() => handleNewsClick((currentPageNews * 3) + 1)}>
              <CardContent>
                <CircularProgress size={50} /> {/* Placeholder for image loading */}
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Tiêu đề</Button>
              </CardActions>
            </NewsCard>
            <NewsCard sx={{ flex: 1, mr: 1 }} onClick={() => handleNewsClick((currentPageNews * 3) + 2)}>
              <CardContent>
                <CircularProgress size={50} /> {/* Placeholder for image loading */}
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Tiêu đề</Button>
              </CardActions>
            </NewsCard>
            <IconButton aria-label="next" sx={{ position: 'relative', top: '-5px', right: '10px' }} onClick={handleNewsNext}>
              <ArrowForwardIos />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Dot className={currentPageNews === 0 ? 'active' : ''} onClick={() => setCurrentPageNews(0)} />
            <Dot className={currentPageNews === 1 ? 'active' : ''} onClick={() => setCurrentPageNews(1)} />
          </Box>
        </StyledContainer>

        {/* DỊCH VỤ */}
        <StyledContainer>
          <Typography align="center" gutterBottom sx={{ color: '#FFFFFF', mb: 2, fontSize: '1.5rem' }}>
            DỊCH VỤ
          </Typography>

          <Service />

          {/* Phần dot indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Dot className={activeImage === 0 ? 'active' : ''} onClick={() => handleImageClick(0)} />
            <Dot className={activeImage === 1 ? 'active' : ''} onClick={() => handleImageClick(1)} />
          </Box>
        </StyledContainer>


        {/* KHÁCH HÀNG */}
        <StyledContainer>
          <Typography align="center" gutterBottom sx={{ color: 'var(--secondary-color)', mb: 2, fontSize: '1.5rem' }}>
            KHÁCH HÀNG
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <IconButton aria-label="previous" sx={{ position: 'relative', top: '-5px', left: '10px' }} onClick={handleCustomerPrev}>
              <ArrowBackIos />
            </IconButton>
            <CustomerCard sx={{ flex: 1, ml: 1 }} onClick={() => handleCustomerClick(currentPageCustomer * 3)}>
              <CardContent>
                <Avatar sx={{ bgcolor: 'var(--secondary-color)', margin: 'auto' }} />
                <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)' }}>
                  {customerData[currentPageCustomer * 3].name}
                </Typography>
                <Typography variant="body2" gutterBottom align="center">
                  {customerData[currentPageCustomer * 3].content}
                </Typography>
              </CardContent>
            </CustomerCard>
            <CustomerCard sx={{ flex: 1 }} onClick={() => handleCustomerClick((currentPageCustomer * 3) + 1)}>
              <CardContent>
                <Avatar sx={{ bgcolor: 'var(--secondary-color)', margin: 'auto' }} />
                <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)' }}>
                  {customerData[(currentPageCustomer * 3) + 1].name}
                </Typography>
                <Typography variant="body2" gutterBottom align="center">
                  {customerData[(currentPageCustomer * 3) + 1].content}
                </Typography>
              </CardContent>
            </CustomerCard>
            <CustomerCard sx={{ flex: 1, mr: 1 }} onClick={() => handleCustomerClick((currentPageCustomer * 3) + 2)}>
              <CardContent>
                <Avatar sx={{ bgcolor: 'var(--secondary-color)', margin: 'auto' }} />
                <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)' }}>
                  {customerData[(currentPageCustomer * 3) + 2].name}
                </Typography>
                <Typography variant="body2" gutterBottom align="center">
                  {customerData[(currentPageCustomer * 3) + 2].content}
                </Typography>
              </CardContent>
            </CustomerCard>
            <IconButton aria-label="next" sx={{ position: 'relative', top: '-5px', right: '10px' }} onClick={handleCustomerNext}>
              <ArrowForwardIos />
            </IconButton>
          </Box>

          {/* Phần dot indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Dot className={currentPageCustomer === 0 ? 'active' : ''} onClick={() => setCurrentPageCustomer(0)} />
            <Dot className={currentPageCustomer === 1 ? 'active' : ''} onClick={() => setCurrentPageCustomer(1)} />
          </Box>
        </StyledContainer>

      </Box>
    </Box>
  );
};

export default HomePage;