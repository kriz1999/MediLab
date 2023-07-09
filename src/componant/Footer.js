import { Box, Button, Container, Grid, Typography } from '@mui/material'

import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLocation, useNavigate } from 'react-router';

function Footer() {
  const navigate = useNavigate();
const location = useLocation();


  return (
    <div >
    <Box sx={{ backgroundColor: "navColor.main"}}>
    <Container maxWidth='lg'>
      <Grid container pl={2} pt={5} pb={5} >
        <Grid item xs={12} md={4}  p={1}  mb={5}  pr={5}>
            <Typography  variant='h4' mb={3}  color='white'  > About Us</Typography>
            <Typography color='white' fontSize='15px' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio dolores quasi quae consequuntur accusamus.</Typography>
        </Grid>

        <Grid item xs={12} md={4} p={1} mb={5}>
            <Typography  variant='h4' mb={3} color='white'  >Quick Link</Typography>
        
            <Box ml={-1}>
            <Button 
                size='large'
                onClick={() => navigate('/MediLab')}
                sx={{ my: 2, color: 'text.main'}}>
                <Typography color='white'  className={ location.pathname === '/MediLab' ? 'navLocationFooter' : null }>Home</Typography>
            </Button>
            <Button  
                  size='large'
                  onClick={() => navigate('/About')}
                sx={{ my: 2, color: 'text.main' }}>
                <Typography color='white'  className={ location.pathname === '/About' ? 'navLocationFooter' : null }>About</Typography>
            </Button>
            <Button  
                size='large'
               onClick={() => navigate('/Contact')}
                sx={{ my: 2, color: 'text.main'}}> 
                <Typography color='white'  className={ location.pathname === '/Contact' ? 'navLocationFooter' : null }>Contact</Typography></Button>
       

          
            </Box>
        </Grid>

        <Grid item xs={12}  md={4}  p={1} mb={5} > 
            <Typography  color='white'   mb={3}  variant='h4'>Follow Us</Typography>
           <Box ml={-2.5}>
            <Button> <FacebookIcon color='icony'></FacebookIcon></Button>
            <Button><InstagramIcon color='icony'></InstagramIcon></Button>
            <Button><TwitterIcon color='icony'></TwitterIcon></Button>
            <Button> <LinkedInIcon  color='icony'></LinkedInIcon></Button>
            </Box>
        </Grid>
        
      </Grid>
      </Container>
      </Box>
    </div>
  )
}

export default Footer
