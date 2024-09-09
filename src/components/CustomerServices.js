import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Hàm tạo phần mô tả dịch vụ
const ServiceDescription = ({ image, description }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Service Image"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Hàm tạo phần đánh giá khách hàng
const CustomerReview = ({ name, content }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent>
          <Box textAlign="center">
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {content}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const CustomerServices = () => {
  return (
    <Container maxWidth="md">
      {/* Phần tiêu đề */}
      <Box textAlign="center" my={4} sx={{ paddingTop: 7 }}>
        <Typography variant="h4" color="#D3B023">
          TÊN GÓI DỊCH VỤ
        </Typography>
      </Box>

      {/* Phần mô tả dịch vụ */}
      <Grid container spacing={4}>
        <ServiceDescription 
          image="https://via.placeholder.com/150" 
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature." 
        />
        <ServiceDescription 
          image="https://via.placeholder.com/150" 
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature." 
        />
      </Grid>

      {/* Phần nút */}
      <Box textAlign="center" my={4}>
        <Button variant="contained" sx={{ backgroundColor: 'var(--secondary-color)' }} size="large">
          Đặt gói dịch vụ
        </Button>
      </Box>

      {/* Phần đánh giá khách hàng */}
      <Box my={4}>
        <Typography variant="h5" align="center" gutterBottom>
          ĐÁNH GIÁ CỦA KHÁCH HÀNG
        </Typography>
        <Grid container spacing={4}>
          <CustomerReview 
            name="Tên người dùng 1"
            content="It is a long established fact that a reader will be distracted by the readable content." 
          />
          <CustomerReview 
            name="Tên người dùng 2"
            content="It is a long established fact that a reader will be distracted by the readable content." 
          />
          <CustomerReview 
            name="Tên người dùng 3"
            content="It is a long established fact that a reader will be distracted by the readable content." 
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default CustomerServices;