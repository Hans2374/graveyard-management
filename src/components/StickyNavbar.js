import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { routes } from "../routes";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  transition: theme.transitions.create(["box-shadow", "background-color"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  "&.sticky": {
    backgroundColor: "#F9F9F9",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  top: "74px",
  [theme.breakpoints.down("lg")]: {
    top: "63px",
  },
  [theme.breakpoints.down("md")]: {
    top: "63px",
  },
  [theme.breakpoints.down("sm")]: {
    top: "58px",
  },
}));

const Indicator = styled("div")({
  height: "5px",
  backgroundColor: "var(--primary-color)",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  transition: "left 0.3s ease, width 0.3s ease",
});

const ActiveIndicator = styled("div")({
  height: "5px",
  backgroundColor: "var(--secondary-color)",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: 0,
  transition: "left 0.3s ease, width 0.3s ease",
});

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
  gap: "10px",
});

const ResponsiveButton = styled(Button)(({ theme }) => ({
  color: "var(--secondary-color)",
  width: "100%",
  padding: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "9px",
    marginBottom: "5px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "10px",
  },
}));

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const buttonRefs = useRef([]);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    // Lấy giá trị từ localStorage khi trang load lại
    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(Number(storedActiveButton));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    // Lưu giá trị activeButton vào localStorage
    localStorage.setItem("activeButton", index);
  };

  const getActiveIndicatorStyle = () => {
    if (activeButton !== null && buttonRefs.current[activeButton]) {
      const button = buttonRefs.current[activeButton];
      return {
        left: `${button.offsetLeft}px`,
        width: `${button.offsetWidth}px`,
      };
    }
    return {
      left: "0",
      width: "0",
    };
  };

  const navItems = [
    { label: "Trang Chủ", path: "/" },
    { label: "Dịch Vụ", path: routes.name },
    { label: "Tin tức", path: "/news" },
    { label: "Khách hàng", path: "/" },
    { label: "Liên Hệ", path: "/" },
  ];

  return (
    <StyledAppBar
      position="fixed"
      elevation={0}
      className={isSticky ? "sticky" : ""}
      sx={{ bgcolor: "white", top: "68px", p: 0 }}
    >
      <Toolbar sx={{ p: 0 }}>
        <GridContainer>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                textDecoration: "none",
                color: "var(--secondary-color)",
              }}
            >
              <ResponsiveButton
                color="inherit"
                onClick={() => handleButtonClick(index)}
                ref={(el) => (buttonRefs.current[index] = el)}
              >
                {item.label}
              </ResponsiveButton>
            </Link>
          ))}
        </GridContainer>
      </Toolbar>
      <Indicator />
      <ActiveIndicator style={getActiveIndicatorStyle()} />
    </StyledAppBar>
  );
};

export default StickyNavbar;
