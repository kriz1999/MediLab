import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import photo1 from "../img/doctor1.jpg"
import photo2 from "../img/doctor2.jpg"
import photo3 from "../img/doctor3.jpg"
import photo4 from "../img/doctor4.jpg"
import Card from './Card'
import Feed from './Feed'
import Script from './Script'
import Accord from './Accordion'

import { Slide } from "react-awesome-reveal";






function About() {

    const doctors = [
        {
         
            name: 'Jessica Wally',
            position: 'Doctor',
            img: photo1,
            Link: ''
        },
        {
         
            name: 'Iai Donas',
            position: 'Doctor',
            img: photo2,
            Link: ''
        },
        {
        
            name: 'Amanda Denyl',
            position: 'Doctor',
            btntit: 'order',
            img: photo3,
            Link: ''
        },
        {
        
            name: 'Jason Davis',
            position: 'Doctor',
            btntit: 'order',
            img: photo4,
            Link: ''
        },
    ]

  return (
    <div className='About'>
    <Container>
        <Grid container maxWidth='lg' spacing={1} pt={5} pl={2}>
            <Grid item xs={12}  >   
                <Typography  sx={{ fontSize: { xs: "20px" , md : "30px"}}} 
                fontWeight={600} mb={4}
                 color='text.main'>MEET OUR DOCTOR</Typography>
            </Grid>
            {doctors.map((doctor)=>{
                return (
                    
            <Grid  key={doctor.name} item xs={12} sm={6} md={3} lg={3} 
            sx={{  display: { xs: 'none', md: 'flex' }}}
             className='cardGrid'>     
                       <Slide left>

                <Card doctor={doctor}></Card>
                </Slide>  
            </Grid>
      )} )}

      {doctors.map((doctor)=>{
                return (
          
             
            <Grid  key={doctor.name} item xs={12} sm={6} md={3} lg={3}  pr={2}
            sx={{  display: { xs: 'flex', md: 'none' }}}
            >             <Slide right>
                <Accord doctor={doctor}></Accord>
                </Slide>  
            </Grid>
    
      )} )}
            
                
     </Grid>
    </Container>
    <Feed></Feed>
    <Script></Script>


    </div>
  )
}

export default About
