import React from "react";
import { Box, Button, IconButton, CardMedia, Typography, CardContent, Grid, Card} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Picture() {

  const imageData = [
    {
      src: 'https://via.placeholder.com/300',
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      src: 'https://via.placeholder.com/300',
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      src: 'https://via.placeholder.com/300',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      src: 'https://via.placeholder.com/300',
      title: 'Image 4',
      description: 'Description for Image 4',
    },
    {
      src: 'https://via.placeholder.com/300',
      title: 'Image 5',
      description: 'Description for Image 5',
    },
    {
      src: 'https://via.placeholder.com/300',
      title: 'Image 6',
      description: 'Description for Image 6',
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          marginLeft: "50px",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "var(--primary-color)",
            position: "absolute",
            marginLeft: "970px",
          }}
        >
          <DeleteForeverIcon />
        </IconButton>

        <IconButton
          sx={{
            backgroundColor: "var(--primary-color)",
            position: "absolute",
            marginLeft: "1040px",
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Box
          sx={{
            maxWidth: "100%",
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "50px",
          }}
        >
      <Grid container spacing={2} sx={{ padding: 2 }}>
      {imageData.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={image.src}
              alt={image.title}
            />
            <CardContent>
              <Typography variant="h6">{image.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {image.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Button sx={{backgroundColor: "var(--primary-color)",
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px 100px 5px 100px",
                  textTransform: "none",
                  marginTop:"20px",
                  marginLeft:"10px"
                  }}>
            Lưu
          </Button>
      </Box>
    </>
  );
}

export default Picture;
