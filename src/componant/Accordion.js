import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './Accord.css'


function Accord({doctor}) {
  return (
    <div>
        <Accordion className='accor'  > 
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    > 
                    <Box>
                    <Typography variant='h6'>{doctor.name}</Typography>
                    <Typography color='gray'>{doctor.position}</Typography>
                    </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid   container spacing={2} p
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item xs={8}>
                            <img className='imgDoctor' src={doctor.img} alt='doctor img'></img>
                        </Grid>
                        <Grid item xs={4} alignSelf='center' justifyItems='end' >
                            <Button  sx={{ my: 2, ml: 3, display: 'block' }}><FacebookIcon fontSize='large' color='myColor'></FacebookIcon></Button>
                            <Button sx={{ my: 2, ml: 3, display: 'block' }}><TwitterIcon fontSize='large' color='myColor'></TwitterIcon></Button>
                            <Button sx={{ my: 2, ml: 3, display: 'block' }}><EmailIcon fontSize='large' color='myColor'></EmailIcon></Button>
                        </Grid>
                    </Grid>
                    </AccordionDetails>
                </Accordion>
           
            
    </div>
  )
}

export default Accord
