import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderTwoSide = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // CSS nội tuyến cho slider
  const sliderContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    marginTop: "80px", // Đảm bảo slider không chồng lên sticky navbar
    flexDirection: "row",
  };

  // Responsive style
  const responsiveContainerStyle = {
    "@media (max-width: 768px)": {
      flexDirection: "column", // Chuyển đổi sang dạng cột trên màn hình nhỏ
    },
  };

  const sliderLeftStyle = {
    flex: 1,
    marginRight: "10px",
  };

  const sliderRightStyle = {
    flex: 1,
    marginLeft: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "300px", // Chiều cao cố định để hình ảnh đồng nhất
    objectFit: "cover", // Đảm bảo hình ảnh không bị méo
    borderRadius: "8px",
  };

  return (
    <div style={{ ...sliderContainerStyle, ...responsiveContainerStyle }}>
      {/* Slider bên trái */}
      <div style={sliderLeftStyle}>
        <Slider {...settings}>
          {images.left.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`left-slider-${index}`} style={imageStyle} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider bên phải */}
      <div style={sliderRightStyle}>
        <Slider {...settings}>
          {images.right.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`right-slider-${index}`} style={imageStyle} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderTwoSide;
