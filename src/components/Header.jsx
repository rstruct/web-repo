import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import slider2 from '../assets/logo3.png';
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
        alignContent: 'center',
        zIndex: 1000,
        // backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Toolbar label="Header" color="primary">
        {/* Logo */}
        <img
          src={slider2}
          alt="R-struct"
          style={{
            height: isMobile ? '50px' : '100px',
            marginRight: 'auto',
            paddingRight: isMobile ? '0' : '100px',
          }}
        />

        {/* Mobile Menu Icon (only shown on mobile) */}
        {isMobile && (
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Drawer (only shown on mobile) */}
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

        {/* Desktop Menu Items (only shown on non-mobile) */}
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
                <Button
                  key={item.text}
                  component="a"
                  href={item.link}
                  sx={{
                    padding: '10px',
                    color: 'black',
                    textDecoration: 'none',
                    background: 'none',
                    '&:hover': {
                      textDecoration: 'none',
                      color: theme.palette.primary.main,
                      background: 'rgba(255, 255, 255, 0.5)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              )
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;