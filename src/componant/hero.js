
import { Slide } from "react-awesome-reveal";
import 
{ Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import logo from "../img/logo.png"
import './hero.css'
import { useNavigate } from 'react-router'

function Hero() {
  const navigate = useNavigate();


  return (
    <div className='Hero'>
    <div className={'HeroLayer'}>
      <Container maxWidth='lg'>
        <Grid container direction='column'  spacing={3} alignItems='center'   pt={4} paddingBottom={8}>
            <Grid item  xs={12}>
              <Slide>
                <img src={logo} alt="logo"></img>
                </Slide>
            </Grid>  
            <Grid item  xs={12} textAlign='center'>
              <Slide>
                 <Typography variant='h4'color='white' >Healthcare At Your Desk</Typography>
                 </Slide>
            </Grid>  
            <Grid item  xs={12} textAlign='center'>
              <Slide>
                <Typography color='white' pl={4} pr={4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Atque est fuga blanditiis suscipit sequi possimus consequatur sunt </Typography>
              </Slide>
            </Grid>  
            <Grid item  xs={12}>
               <Slide  >
                  <Button variant="contained"      onClick={() => navigate('/Contact')}
                  color="myColor" >
                <Typography color='white'> Make An Appointment</Typography>
                </Button>
               </Slide>
            </Grid>  
                    
  
        </Grid>
      </Container>
      </div>
    </div>
  )
}

export default Hero
