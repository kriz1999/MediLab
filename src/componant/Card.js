import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './Card.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



function Card({doctor}) {
  
  return (  
<Box >

    <div className='card'>
        <div className='imgCard'>
            <img src={doctor.img} alt={doctor.name}></img>
        </div>
        <div className='Text'>
            <Typography variant='h6'>{doctor.name}</Typography>
            <Typography color='gray'>{doctor.position}</Typography>
        </div>
        <div className='links'>
            <Button ><FacebookIcon fontSize='small' color='myColor'></FacebookIcon></Button>
            <Button><TwitterIcon fontSize='small' color='myColor'></TwitterIcon></Button>
            <Button><EmailIcon fontSize='small' color='myColor'></EmailIcon></Button>
            
        </div>
    </div>

</Box>




  )
}

export default Card
