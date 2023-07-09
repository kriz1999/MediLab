import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import FeedCom from './FeedCom'
import "./Feed.css"
import { Slide } from "react-awesome-reveal";


function Feed() {
  return (
    <div className='Feed'>
    <Container maxWidth='lg'>
        <Grid container spacing={2} pt={5} pl={2}   pb={5}>
            <Grid item xs={12} sm={12}  p={3} >
                <Typography variant='h4' fontWeight='400' color='text.main' >SEE WHAT PATIENTS ARE SAYING</Typography>
                <hr className='FeedLine'></hr>
            </Grid>
            
            <Grid item xs={12} sm={12} md={4}><Slide right ><FeedCom></FeedCom> </Slide></Grid>
            <Grid item xs={12} sm={12} md={4}><Slide right ><FeedCom></FeedCom> </Slide></Grid>
            <Grid item xs={12} sm={12} md={4}><Slide right ><FeedCom></FeedCom> </Slide></Grid>

            
            </Grid>
    </Container>         
      
    </div>
  )
}

export default Feed
