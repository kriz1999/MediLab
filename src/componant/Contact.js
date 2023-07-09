import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import Form from './Form';

function Contact() {
  return (
    <div>
        <Container maxWidth='lg'>
            <Typography pt={5} pl={2} variant='h5' fontWeight="600" color='text.main'>CONTACT US</Typography>
            <hr className='FeedLine'></hr>
            <Grid container direction='row' pl={2} >
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Typography variant='h6' fontWeight="600" color='text.main'>Contact Info</Typography>
                    <Grid container  p={2}>
                        <Grid item textAlign='end' xs={2}  md={2} lg={2}><Button> <AddLocationAltIcon fontSize='large'  color="myColor"></AddLocationAltIcon></Button></Grid>
                        <Grid item pt={1.2} xs={10}  md={10}  lg={10}> <Typography color='gray' pl={1}>321 awesome street new york NY 17022</Typography></Grid>
                        <Grid item textAlign='end'xs={2}  md={2} lg={2}><Button><AddIcCallIcon fontSize='large'  color="myColor"></AddIcCallIcon></Button></Grid>
                        <Grid item  pt={1.2} xs={10}  md={10}  lg={10}> <Typography color='gray'  pl={1} >info@companyname.com</Typography></Grid>
                        <Grid item  textAlign='end' xs={2}  md={2} lg={2}><Button><EmailIcon fontSize='large'  color="myColor"></EmailIcon></Button></Grid>
                        <Grid item pt={1.2}  textAlign='start' xs={10}  md={10}  lg={10} color='gray'> <Typography  pl={1}>+1 800 123 1234</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}  mb={5}>
                    <Form></Form>
                </Grid>
            </Grid>

        </Container>
      
    </div>
  )
}

export default Contact
