import Box from '@mui/material/Box';
import slider2 from '../assets/logo3.png';
const FooterDetails = () => { 
return (
    <>
     <Box
            sx={{
              width: '100%',
             display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'gray',
                color: 'white',
                }}        
        >
            <Box
                sx={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
            <Box >
                    <ul>
                        <h2>OUR HISTORY</h2>
                        <li>CAREERS</li>
                        <li>LICENSES</li>
                        <li>PROJECTS</li>
                        <li>CONTACT</li>
                </ul>
                </Box>
                <Box >
                <ul>
                        <h2>SERVICES</h2>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                </ul>
                </Box>
                <Box >
                <ul>
                        <h2>LOCATION</h2>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                </ul>
                </Box>
                <Box >
                 <img src={slider2} alt="Company Logo" style={{ maxWidth: '300px',
    maxHeight: '300px',
    objectFit: 'cover',  }} />
              
                </Box>
            </Box>
          
    </Box>
    </>
)
};
export default FooterDetails;