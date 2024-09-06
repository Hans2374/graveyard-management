import React, { useState } from 'react';
import { Box, Typography, Grid2, Container, Button, styled } from '@mui/material';

// Nhập các component StyledContainer, ImageItem, Dot, ActiveDot
const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#E6D189',
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
  backgroundColor: '#E6D189',
  border: '1px solid #ddd',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Dot = styled('span')({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: '#ddd',
  cursor: 'pointer',
});

const ActiveDot = styled(Dot)({
  backgroundColor: '#D3B023',
});

const HomePage = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  return (
    <Box sx={{ paddingTop: '70px' }}>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#D3B023', mb: 2 }}>
          VỀ CHÚNG TÔI
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam"
        </Typography>
      </Container>

      <StyledContainer>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: '#D3B023', mb: 2 }}>
          HÌNH ẢNH
        </Typography>

        <Grid2 container spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
          <Grid2 item xs={12} md={4}>
            <ImageItem onClick={() => handleImageClick(0)}>
              {/*  Thay thế phần này bằng hình ảnh thực tế  */}
            </ImageItem>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <ImageItem onClick={() => handleImageClick(1)}>
              {/*  Thay thế phần này bằng hình ảnh thực tế  */}
            </ImageItem>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <ImageItem onClick={() => handleImageClick(2)}>
              {/*  Thay thế phần này bằng hình ảnh thực tế  */}
            </ImageItem>
          </Grid2>
        </Grid2>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {Array.from({ length: 3 }, (_, i) => (
            <Dot 
              key={i}
              className={activeImage === i ? 'active' : ''}
              onClick={() => handleImageClick(i)}
            />
          ))}
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default HomePage;