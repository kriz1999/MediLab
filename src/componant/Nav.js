import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../img/logo.png";
import './nav.css'
import { FormControlLabel } from '@mui/material';



import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import {  useLocation, useNavigate } from 'react-router-dom';







const MaterialUISwitch = styled(Switch)(({ theme }) => ({ 
  
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor:  theme.palette.mode === 'dark' ? '#26c6da' : '#072E51',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));





function Nav({ handlColor}) {


// const classes = useStyles()
const navigate = useNavigate();
const location = useLocation();


  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handlColor2 = () => {
    handlColor() 


  };




  return (

    <AppBar position="sticky" sx={{ backgroundColor: "navColor.main"}}
      >
      <Container maxWidth='lg'>
        <Toolbar disableGutters>



        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
        <img className='imgLogoLarge' src={logo} alt='logo'></img>
        </Box>


        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
           
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
             
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'lift',
              
                
                
         
              }}
      
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
              sx={{
                display: { xs: 'block', md: 'none' }
              
              }}
         
              
            > <Box className='menu' mt={-3} mb={-3} sx={{ backgroundColor: "navColor.main"  }} >
                <div className='menuChild'  sx={{  backgroundColor: "navColor.main"  }}>
                  <Button 
                      size='large'
                      onClick={() => navigate('/MediLab')}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Typography fontWeight='bold' className={ location.pathname === '/MediLab' ? 'navLocation' : null }>Home</Typography>
                  </Button>
                </div>
                <div className sx={{  backgroundColor: "navColor.main" }}>
                    <Button  
                  size='large'
                  onClick={() => navigate('/About')}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Typography fontWeight='bold' className={ location.pathname === '/About' ? 'navLocation' : null }>About</Typography></Button>
             
                </div>
                <div  sx={{  backgroundColor: "navColor.main"  }}>
                <Button 
                size='large'
               onClick={() => navigate('/Contact')}
          
                sx={{ my: 2, color: 'white', display: 'block' }}> 
                <Typography fontWeight='bold'  className={ location.pathname === '/Contact' ? 'navLocation' : null }>Contact</Typography></Button>
                </div>
        
                </Box>
            </Menu>
          </Box>
        

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } , alignContent:'start' }}>
           <img className='imgLogo' src={logo} alt='logo'></img>
            </Box>



          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
             <Button 
             size='large'
             onClick={() => navigate('/MediLab')}
             sx={{ my: 2, color: 'white', display: 'block' }}>
             <Typography className={ location.pathname === '/MediLab' ? 'navLocation' : null }>Home</Typography>
            </Button>
     
       
            <Button  
               size='large'
              onClick={() => navigate('/About')}
            sx={{ my: 2, color: 'white', display: 'block' }}>
             <Typography className={ location.pathname === '/About' ? 'navLocation' : null }>About</Typography></Button>
                
             <Button  
                size='large'
               onClick={() => navigate('/Contact')}
          
                sx={{ my: 2, color: 'white', display: 'block' }}> 
                <Typography   className={ location.pathname === '/Contact' ? 'navLocation' : null }>Contact</Typography></Button>
       

          
          </Box>
          <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label=""
                onClick={ () =>{handlColor2()}}
           
              />



        </Toolbar>
      </Container>
      <div></div>
    </AppBar>
  );
}




export default Nav;




