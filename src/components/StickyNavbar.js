import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  boxShadow: "none",
  transition: theme.transitions.create(["box-shadow", "background-color"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  "&.sticky": {
    backgroundColor: "#F9F9F9",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
}));

const Indicator = styled("div")({
  height: "5px",
  backgroundColor: "var(--primary-color)",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  transition: "background-color 0.3s ease",
});

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const buttonRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handleServicesClick = () => {
    navigate("/services");
  };

  const getButtonWidth = (index) => {
    if (index >= 0 && index < buttonRefs.current.length) {
      return buttonRefs.current[index].offsetWidth;
    }
    return 0;
  };

  const getIndicatorPosition = (index) => {
    if (index >= 0 && index < buttonRefs.current.length) {
      return buttonRefs.current[index].offsetLeft;
    }
    return 0;
  };

  return (
    <div>
      <StyledAppBar
        position="fixed"
        elevation={0}
        className={isSticky ? "sticky" : ""}
        sx={{ top: "70px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "var(--secondary-color)" }} // Loại bỏ đường link
          >
            <Button
              color="inherit"
              sx={{ color: "var(--secondary-color)", margin: "0 10px" }}
              onClick={() => handleButtonClick(0)}
              ref={(el) => (buttonRefs.current[0] = el)}
            >
              Trang Chủ
            </Button>
          </Link>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "var(--secondary-color)" }} // Loại bỏ đường link
          >
            <div style={{ position: "relative" }}>
              <Button
                color="inherit"
                sx={{ color: "var(--secondary-color)", margin: "0 10px" }}
                ref={(el) => (buttonRefs.current[1] = el)}
                onClick={handleServicesClick}
              >
                Dịch Vụ
              </Button>
            </div>
          </Link>
          <Button
            color="inherit"
            sx={{ color: "var(--secondary-color)", margin: "0 10px" }}
            onClick={() => handleButtonClick(2)}
            ref={(el) => (buttonRefs.current[2] = el)}
          >
            Tin tức
          </Button>
          <Button
            color="inherit"
            sx={{ color: "var(--secondary-color)", margin: "0 10px" }}
            onClick={() => handleButtonClick(3)}
            ref={(el) => (buttonRefs.current[3] = el)}
          >
            Khách hàng
          </Button>
          <Button
            color="inherit"
            sx={{ color: "var(--secondary-color)", margin: "0 10px" }}
            onClick={() => handleButtonClick(4)}
            ref={(el) => (buttonRefs.current[4] = el)}
          >
            Liên Hệ
          </Button>
        </Toolbar>
        <Indicator
          style={{
            backgroundColor:
              activeButton !== null
                ? "var(--secondary-color)"
                : "var(--primary-color)",
            left:
              activeButton !== null
                ? `${getIndicatorPosition(activeButton)}px`
                : "0",
            width:
              activeButton !== null
                ? `${getButtonWidth(activeButton)}px`
                : "100%",
          }}
        />
      </StyledAppBar>
    </div>
  );
};

export default StickyNavbar;
