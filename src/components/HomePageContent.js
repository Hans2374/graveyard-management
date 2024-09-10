import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  styled, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  IconButton,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'; 
import CircularProgress from '@mui/material/CircularProgress';

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
});

const Dot = styled('span')({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: '#ddd',
  cursor: 'pointer',
  margin: '0 5px',
});

const ActiveDot = styled(Dot)({
  backgroundColor: 'var(--secondary-color)',
});

const NewsCard = styled(Card)(({ theme }) => ({
  width: 'calc(33.33% - 20px)',
  margin: '0 10px',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  width: 'calc(50% - 20px)',
  margin: '0 10px',
}));

const CustomerCard = styled(Card)(({ theme }) => ({
  width: 'calc(33.33% - 20px)',
  margin: '0 10px',
}));

const HomePage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeNews, setActiveNews] = useState(0);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const handleNewsClick = (index) => {
    setActiveNews(index);
  };

  return (
    <Box align='center' >
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

          <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 2, alignItems: 'center' }}>
            {/* Sử dụng Grid để tạo 3 cột */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton aria-label="previous" sx={{ position: 'relative', top: '-5px', left: '10px' }}>
                <ArrowBackIos />
              </IconButton>
              <ImageItem sx={{ flex: 1, ml: 1 }} onClick={() => handleImageClick(0)}>
                  {/*  Thay thế phần này bằng hình ảnh thực tế  */}
                  <CircularProgress size={50} /> {/* Placeholder for image loading */}
                </ImageItem>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <ImageItem sx={{ flex: 1 }} onClick={() => handleImageClick(1)}>
                  {/*  Thay thế phần này bằng hình ảnh thực tế  */}
                  <CircularProgress size={50} /> {/* Placeholder for image loading */}
                </ImageItem>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <ImageItem sx={{ flex: 1, mr: 1 }} onClick={() => handleImageClick(2)}>
                  {/*  Thay thế phần này bằng hình ảnh thực tế  */}
                  <CircularProgress size={50} /> {/* Placeholder for image loading */}
                </ImageItem>
              <IconButton aria-label="next" sx={{ position: 'relative', top: '-5px', right: '10px' }}>
                <ArrowForwardIos />
              </IconButton>
            </Grid>
          </Grid>

          {/* Phần dot indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Dot className={activeImage === 0 ? 'active' : ''} onClick={() => handleImageClick(0)} />
            <Dot className={activeImage === 1 ? 'active' : ''} onClick={() => handleImageClick(1)} />
            <Dot className={activeImage === 2 ? 'active' : ''} onClick={() => handleImageClick(2)} />
          </Box>
        </StyledContainer>

        {/* TIN TỨC */}
        <StyledContainer>
          <Typography align="center" gutterBottom sx={{ color: 'var(--secondary-color)', mb: 2, fontSize: '1.5rem' }}>
            TIN TỨC
          </Typography>

          <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 2, alignItems: 'center' }}>
            {/* Sử dụng Grid để tạo 3 cột */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton aria-label="previous" sx={{ position: 'relative', top: '-5px', left: '10px' }}>
                <ArrowBackIos />
              </IconButton>
              <NewsCard sx={{ flex: 1, ml: 1 }} onClick={() => handleNewsClick(0)}>
                  <CardContent>
                    <CircularProgress size={50} /> {/* Placeholder for image loading */}
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Tiêu đề</Button>
                  </CardActions>
                </NewsCard>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <NewsCard sx={{ flex: 1 }} onClick={() => handleNewsClick(1)}>
                  <CardContent>
                    <CircularProgress size={50} /> {/* Placeholder for image loading */}
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Tiêu đề</Button>
                  </CardActions>
                </NewsCard>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <NewsCard sx={{ flex: 1, mr: 1 }} onClick={() => handleNewsClick(2)}>
                  <CardContent>
                    <CircularProgress size={50} /> {/* Placeholder for image loading */}
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Tiêu đề</Button>
                  </CardActions>
                </NewsCard>
              <IconButton aria-label="next" sx={{ position: 'relative', top: '-5px', right: '10px' }}>
                <ArrowForwardIos />
              </IconButton>
            </Grid>
          </Grid>

          {/* Phần dot indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Dot className={activeNews === 0 ? 'active' : ''} onClick={() => handleNewsClick(0)} />
            <Dot className={activeNews === 1 ? 'active' : ''} onClick={() => handleNewsClick(1)} />
            <Dot className={activeNews === 2 ? 'active' : ''} onClick={() => handleNewsClick(2)} />
          </Box>
        </StyledContainer>

        {/* DỊCH VỤ */}
        <StyledContainer>
          <Typography align="center" gutterBottom sx={{ color: 'var(--secondary-color)', mb: 2, fontSize: '1.5rem' }}>
            DỊCH VỤ
          </Typography>

          <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 2, alignItems: 'center' }}>
            {/* Sử dụng Grid để tạo 2 cột */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton aria-label="previous" sx={{ position: 'relative', top: '-5px', left: '10px' }}>
                <ArrowBackIos />
              </IconButton>
              <ServiceCard sx={{ flex: 1, ml: 1 }}>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)', mb: 1 }}>
                      Mai táng
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Cung cấp các dịch vụ liên quan đến việc tổ chức bằng kỉ niệm, lễ long người ốm khỏe." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Chọn bộ quần áo, dịch vụ hóa trang, chọn clip, vị trí các nghi lễ giao hỏa quyên." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Giúp gia đình giải quyết các thủ tục pháp lý, lựa chọn địa điểm chọn cất, và tổ chức tang lễ." />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Mai táng</Button>
                  </CardActions>
                </ServiceCard>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <ServiceCard sx={{ flex: 1, mr: 1 }}>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)', mb: 1 }}>
                      Cúng đình kỳ
                    </Typography>
                    <Typography variant="body2" gutterBottom align="center" sx={{ color: '#777', fontStyle: 'italic', mb: 1 }}>
                      để hình nền chìm ở đây
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Thực hiện các nghi lễ cúng bái nhằm tưởng nhớ và cầu siêu cho người đã khuất." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Tổ chức vào các ngày lễ lớn hoặc các dịp đặc biệt trong năm." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Cung cấp dịch vụ chuẩn bị mâm cỗ, hoa, hương, và các vật phẩm cần thiết cho lễ cúng." />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: 'var(--secondary-color)' }}>Cúng đình kỳ</Button>
                  </CardActions>
                </ServiceCard>
              <IconButton aria-label="next" sx={{ position: 'relative', top: '-5px', right: '10px' }}>
                <ArrowForwardIos />
              </IconButton>
            </Grid>
          </Grid>

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

          <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 2, alignItems: 'center' }}>
            {/* Sử dụng Grid để tạo 3 cột */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton aria-label="previous" sx={{ position: 'relative', top: '-5px', left: '10px' }}>
                <ArrowBackIos />
              </IconButton>
              <CustomerCard sx={{ flex: 1, ml: 1 }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'var(--secondary-color)', margin: 'auto' }} />
                  <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)' }}>
                    Tên người dùng
                  </Typography>
                  <Typography variant="body2" gutterBottom align="center">
                    It is a long established fact that a reader will be distracted by the readable content of a page when look
                  </Typography>
                </CardContent>
              </CustomerCard>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomerCard sx={{ flex: 1 }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'var(--secondary-color)', margin: 'auto' }} />
                  <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)' }}>
                    Tên người dùng
                  </Typography>
                  <Typography variant="body2" gutterBottom align="center">
                    It is a long established fact that a reader will be distracted by the readable content of a page when look
                  </Typography>
                </CardContent>
              </CustomerCard>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomerCard sx={{ flex: 1, mr: 1 }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'var(--secondary-color)', margin: 'auto' }} />
                  <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: 'var(--secondary-color)' }}>
                    Tên người dùng
                  </Typography>
                  <Typography variant="body2" gutterBottom align="center">
                    It is a long established fact that a reader will be distracted by the readable content of a page when look
                  </Typography>
                </CardContent>
              </CustomerCard>
              <IconButton aria-label="next" sx={{ position: 'relative', top: '-5px', right: '10px' }}>
                <ArrowForwardIos />
              </IconButton>
            </Grid>
          </Grid>

          {/* Phần dot indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </Box>
        </StyledContainer>

      </Box>
    </Box>
  );
};

export default HomePage;
