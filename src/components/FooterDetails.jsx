import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import updatedLogo from '../assets/updatedLogo.png';

const FooterDetails = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: 'grey.900',
        color: 'white',
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
          <img
            src={updatedLogo}
            alt="Company Logo"
            style={{
              maxWidth: '300px',
              maxHeight: '150px',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Social Icons and Career */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
            mb: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Visit Us
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <IconButton
              component="a"
              href="https://facebook.com/"
              target="_blank"
              rel="noopener"
              sx={{ color: 'secondary.main' }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener"
              sx={{ color: 'secondary.main' }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
              sx={{ color: 'secondary.main' }}
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2, mb: 1, }}>
            Career
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              component="a"
              href="mailto:rstruct.engr@rstruct.com.ph"
              sx={{ color: 'secondary.main', p: 0 }}
              aria-label="Email for Career"
            >
              <EmailIcon />
            </IconButton>
            <Typography variant="body2" sx={{ ml: 1, color: 'secondary.main' }}>
              rstruct.engr@rstruct.com.ph
            </Typography>
          </Box>
        </Box>

        {/* Contact & Address */}
        <Box sx={{ maxWidth: 350 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            +63 952 488 0481
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Fabrication & Warehouse
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Brgy. Palat, Porac, Pampanga
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Main Office
          </Typography>
          <Typography variant="body2">
            MA 205 Global Plaza, Brgy. Panipuan, Mexico, Pampanga
          </Typography>
        </Box>
      </Box>
      
    </Box>
  );
};

export default FooterDetails;