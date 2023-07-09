import { Button, Grid, Table,  TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import "./Service.css"
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import HealingIcon from '@mui/icons-material/Healing';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';






function Service() {

const [more , setMore] = useState("")
const [morebtn , setMorebtn] = useState("read more...")

const handle= () =>{
    if(more=== "") {
    setMore("Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo natus dolorum voluptate br id asperiores?Qui odit explicabo vel sapiente placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo natus dolorum voluptate br id asperiores?Qui odit explicabo vel sapiente placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo natus dolorum voluptate br id asperiores?Qui odit explicabo vel sapiente placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo natus dolorum voluptate br id asperiores?Qui odit explicabo vel sapiente placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo natus dolorum voluptate br id asperiores?Qui odit explicabo vel sapiente placeat.")
    setMorebtn("show less")
    }
    if (more) {
        setMore("")
        setMorebtn("read more...")
    }
}   

    
  return (
    <div>
        <Container maxWidth='lg'>
            <Grid container spacing={2} pt={5} pl={2} >
                <Grid item xs={12} sm={4}  p={3} >
                    
                        <Typography color='text.main' variant='h4' fontWeight='400' >Our Service</Typography>
                        <hr className={'serviceLine'}></hr>
                        <Typography color='text.main' fontSize='18px' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris cillum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris cillum Lorem ipsum dolor sit amet, consectetur adipisicing elit,  </Typography> 
                 
                </Grid>
                <Grid item xs={12} sm={8}   >
                    <Grid container spacing={2} pt={2}>
                        <Grid item sm={12} md={6} p={3}>
                        
                            <MedicalInformationIcon  fontSize='large'  color="myColor"></MedicalInformationIcon>
                            <Typography color='text.main' variant='h5' >24 Hour Support</Typography>
                            <hr className={'serviceLine'}></hr>
                            <Typography  color='text.main' fontSize='15px' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>        
                     
                        </Grid>
                        <Grid item sm={12} md={6} p={3}>
                       
                        <HealingIcon  fontSize='large'  color="myColor"></HealingIcon>
                        <Typography  color='text.main' variant='h5'>Emergency Services</Typography>
                        <hr className={'serviceLine'}></hr>
                        <Typography  color='text.main' fontSize='15px' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>        
                     
                       </Grid>
                        <Grid item sm={12} md={6} p={3}>
                       
                        <VaccinesIcon  fontSize='large'  color="myColor"></VaccinesIcon>

                        <Typography color='text.main' variant='h5'>Medical Counseling</Typography>
                        <hr className={'serviceLine'}></hr>

                        <Typography  color='text.main' fontSize='15px' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>        
                       
                          </Grid>
                        <Grid item sm={12} md={6} p={3}>
                       
                        <MonitorHeartIcon   fontSize='large'  color="myColor"></MonitorHeartIcon>

                        <Typography  color='text.main' variant='h5'>Premium Healthcare</Typography>
                        <hr className={'serviceLine'}></hr>

                        <Typography  color='text.main' fontSize='15px' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>        
                     
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>


            <Grid container  pt={5} pl={2}  >
                <Grid item xs={12} sm={12} md={4}  pr={0.1} >
                  
                    <div className=   'table'>
                        <Typography  variant='h5' color='white'>Emergency case</Typography>
                        <Typography  color='white' fontSize='15px' pr={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates ducimus obcaecati voluptatum possimus quas voluptatem quam sequi tempora consequatur</Typography>
                        <Button ><Typography color='darkblue' textTransform='capitalize'> Read More ....</Typography></Button> 
                    </div>
                 
              </Grid>
                <Grid item xs={12} sm={12} md={4}  pr={0.1}>
                    <div className= 'table'>
                        <Typography  variant='h5' color='white'>Emergency case</Typography>
                        <Typography  color='white' pr={4}  fontSize='15px' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates ducimus obcaecati voluptatum possimus quas voluptatem quam sequi tempora consequatur</Typography>
                        <Button ><Typography color='darkblue' textTransform='capitalize'> Read More ....</Typography></Button>                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
               
                <div className=  'table'>
                    <Typography  variant='h5' color='white'>Opening Hours </Typography>
                    <TableContainer >
                        <Table  aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell> <Typography  color='white'> Monday-Friday</Typography></TableCell>
                                <TableCell> <Typography  color='white'> 8.00-17.00</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> <Typography  color='white'>Saturday</Typography></TableCell>
                                <TableCell> <Typography  color='white'>	9.30 - 17.30</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> <Typography  color='white'>Sunday</Typography></TableCell>
                                <TableCell> <Typography  color='white'> 9.30 - 15.00</Typography></TableCell>
                            </TableRow>
                            </TableHead>
                
                        </Table>
                        </TableContainer>
                    </div>
                 
                </Grid>
            </Grid>


            <Grid container spacing={2} pt={5} pl={2} >
                <Grid item xs={12} sm={4}  p={3} >
                    <Typography  color='text.main' sx={{ fontSize: { xs: "20px" , md : "30px"}}}  fontWeight='400' >THE MEDIJAP UNTIMATE DREAM</Typography>
                    <hr className='serviceLine'></hr>
                    <Typography  color='text.main' >Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo natus dolorum voluptate br id asperiores?Qui odit explicabo vel sapiente placeat.
                    {more}
                    </Typography> 
                    <Button onClick={()=> {handle()}}> <Typography textTransform='capitalize' color='myColor.main'>{morebtn}</Typography></Button>
                </Grid>
                <Grid item xs={12} sm={8}   >
                
                    <Grid container  spacing={2} pt={2}>
                  
                         <Grid item xs={1} sm={1} md={1}  >
                             <ArrowCircleRightIcon   fontSize='large'  color="myColor"></ArrowCircleRightIcon>
                        </Grid>
                        <Grid item xs={11} sm={11} md={11} p={5} >
                            <div className='dream'>
                                <Typography color='text.main'  variant='h5' >It's something important you want to know.</Typography>
                                <Typography color='text.main' fontSize='15px' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>        
                            </div>                 
                        </Grid>
                   
                        <Grid item  xs={1}  sm={1} md={1}  >
                             <ArrowCircleRightIcon    fontSize='large'  color="myColor"></ArrowCircleRightIcon>                        </Grid>
                        <Grid item xs={11} sm={11} md={11}  pb={3}>
                            <div className='dream'>
                                <Typography  color='text.main' variant='h5'>It's something important you want to know.</Typography>
                                <Typography  color='text.main' fontSize='15px' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>        
                            </div>
                        </Grid>
                        
                    </Grid>
                   
                </Grid>
                        
            </Grid>

        </Container>
    </div>
  )
}

export default Service
