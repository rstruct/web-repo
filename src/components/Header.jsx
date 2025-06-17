import React, { useState, useEffect } from 'react';
import { styled, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/updatedLogo.png';
import homeIcon from '../assets/logo2.png'; // Import the home icon image


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Checks if the screen is mobile-sized

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Services', link: '/services' },
    { text: 'Projects', link: '/projects' },
    { text: 'Contact', link: '/contact' },
  ];

  const AnimatedButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transition: 'width 0.3s ease',
    },
    '&:hover': {
      color: theme.palette.primary.dark,
      backgroundColor: 'transparent',
      '&:before': {
        width: '100%',
      },
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  }));

  const HoverBorderButton = ({ children, ...props }) => {
    return (
      <AnimatedButton variant="text" {...props}>
        {children}
      </AnimatedButton>
    );
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      label="appbar"
      sx={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)',
        flexWrap: 'wrap',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Toolbar label="Header" color="primary" sx={{ justifyContent: 'space-between', width: '100%' }}>
        <img
          src={logo}
          alt="R-struct"
          style={{
            height: isMobile ? '30px' : '70px',
            margin: '15px 15px 15px 15px',
            marginLeft: isMobile ? '10px' : '100px',
          }}
        />

        {isMobile && (
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {isMobile && (
          <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} style={{ paddingRight: '50px' }}>
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} component="a" href={item.link}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}

        {!isMobile && (
          <div style={{ marginLeft: 'auto', paddingLeft: '100px' }}>
            {menuItems.map((item) => (
              item.text === 'Home' ? (
                <IconButton
                  key={item.text}
                  component="a"
                  href={item.link}
                  sx={{
                    padding: '10px',
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    background: 'none',
                    '&:hover': {

                      textDecoration: 'none',
                      color: theme.palette.primary.main,
                      background: 'rgba(255, 153, 0, 0.5)',
                    },
                  }}
                >
                  <img src={homeIcon} alt="Home" style={{ height: '30px' }} />
                </IconButton>
              ) : (

                <HoverBorderButton
                  key={item.text}
                  component="a"
                  href={item.link}
                  sx={{
                    padding: '10px',
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    background: 'none',
                    '&:hover': {
                      textDecoration: 'none',
                     
                    },
                  }}
                >
                  {item.text}
                </HoverBorderButton>
                // <Button
                //   key={item.text}
                //   component="a"
                //   href={item.link}
                //   sx={{
                //     padding: '10px',
                //     color: 'black',
                //     textDecoration: 'none',
                //     background: 'none',
                //     '&:hover': {
                //       textDecoration: 'none',
                //       color: theme.palette.primary.main,
                //       background: 'rgba(255, 255, 255, 0.5)',
                //     },
                //   }}
                // >
                //   {item.text}
                // </Button>
              )
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;