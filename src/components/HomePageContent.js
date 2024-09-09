import React, { useState } from 'react';
import { Box, Typography, Container, Button, styled } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Import Grid2 correctly

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
    <Box align='center' >
      <Box sx={{ backgroundColor: 'white', padding: 2, marginTop: '65px', maxWidth: '1000px' }}>
        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Typography align="center" gutterBottom sx={{ color: '#D3B023', mb: 2, scale: 2 }}>
            VỀ CHÚNG TÔI
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam"
          </Typography>
        </Container>

        <StyledContainer>
          <Typography align="center" gutterBottom sx={{ color: '#D3B023', mb: 2, scale: 1.5 }}>
            HÌNH ẢNH
          </Typography>

          <Grid2 container spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
            {[0, 1, 2].map((index) => (
              <Grid2 xs={12} md={4} key={index}>
                <ImageItem onClick={() => handleImageClick(index)}>
                  {/*  Thay thế phần này bằng hình ảnh thực tế  */}
                </ImageItem>
              </Grid2>
            ))}
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
    </Box>
  );
};

export default HomePage;