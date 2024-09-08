import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#F9F9F9',
  boxShadow: 'none',
  transition: theme.transitions.create(['box-shadow', 'background-color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&.sticky': {
    backgroundColor: '#F9F9F9',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
}));

const Indicator = styled('div')({
  height: '5px',
  backgroundColor: 'var(--primary-color)',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  transition: 'background-color 0.3s ease, left 0.3s ease, width 0.3s ease',
});

const GridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  width: '100%',
  gap: '10px',
});

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const buttonRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (index, path) => {
    setActiveButton(index);
    if (path === '/home') {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === "/service") {

      navigate(path);
    } else if (path === "/info") {

      navigate(path);
    } else if (path === "/customer") {

      navigate(path);
    } else if (path === "/contact") {

      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

  };

  const getIndicatorStyle = () => {
    if (activeButton !== null && buttonRefs.current[activeButton]) {
      const button = buttonRefs.current[activeButton];
      return {
        backgroundColor: 'var(--secondary-color)',
        left: `${button.offsetLeft}px`,
        width: `${button.offsetWidth}px`,
      };
    }
    return {
      backgroundColor: 'var(--primary-color)',
      left: '0',
      width: '100%',
    };
  };

  const navItems = [
    { label: 'Trang Chủ', path: '/home' },
    { label: 'Dịch Vụ', path: '/service' },
    { label: 'Tin tức', path: '/info' },
    { label: 'Khách hàng', path: '/customer' },
    { label: 'Liên Hệ', path: '/contact' },
  ];

  return (
    <div>
      <StyledAppBar position="fixed" elevation={0} className={isSticky ? 'sticky' : ''} sx={{ top: '70px' }}>
        <Toolbar>
          <GridContainer>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={{ textDecoration: 'none', color: 'var(--secondary-color)' }}
              >
                <Button
                  color="inherit"
                  sx={{ color: 'var(--secondary-color)', width: '100%' }}
                  onClick={() => handleButtonClick(index)}
                  ref={(el) => buttonRefs.current[index] = el}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </GridContainer>
        </Toolbar>
        <Indicator style={getIndicatorStyle()} />
      </StyledAppBar>
    </div>
  );
};

export default StickyNavbar;