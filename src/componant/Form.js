import { Button,   Grid,  TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './/form.css'

import SendIcon from '@mui/icons-material/Send';


function Form() {
  const handle =(e) => {
    e.preventDefault() 
    setDataError(false)
    setTimeError(false)
    setNumError(false)

    if (data && time  && num) {

    setGrid(
     <div className=''> 
      <Typography variant='h5' color='Green'>sent succesfully</Typography>

    </div>
     )  }
     else{ 
      setGrid(
      <Typography  color='red'> Please enter correct information  </Typography>)
     }

  
    if (data ===""){
      setDataError(true)
    }
    if (time ===""){
      setTimeError(true)
    }
    if (num ===""){
      setNumError(true)
    }
  }
   const [data, setData] =useState('')
   const [time, setTime] =useState('')
   const [num, setNum] =useState('')

   const [dataError, setDataError] =useState(false)
   const [timeError, setTimeError] =useState(false)
   const [numError, setNumError] =useState(false)

   const [grid , setGrid] = useState('')
  return (
    <div>

      <Grid container spacing={2}   
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="formapp"
           >
      
        <Grid item xs={8} sm={10} md={12} lg={12} xl={12} >
         <Typography  color='text.main' variant='h6' fontWeight='bold'>Having Any Query! Or Book An Appointmet</Typography>
        </Grid>
        <Grid item xs={8} sm={10} md={12} lg={12} xl={12} className='formGrid' p={3}>
        <form noValidate autoComplete='off' onSubmit={handle} className='form'>
                    <TextField className='formInput'   
                    label=<Typography color='text.main'>Your Name</Typography>
                    variant="filled"
                    color="text" 
                    sx={{ backgroundColor: "switchnav.main"}}
                    fullWidth={true}
                    
                    onChange={(e)=>{
                      setData(e.target.value)
                    }}

                    error={dataError}
                    />
              
                    <TextField className='formInput' 
                    type="email"   
                    variant="filled"
                    color='text'
                    label=<Typography color='text.main'>Your Email</Typography>
                    sx={{ backgroundColor: "switchnav.main"}}
                    
                     fullWidth={true}
                    
                     onChange={(e)=>{
                      setTime(e.target.value)
                    }}
   
                    error={timeError}
                    />
                    <TextField 
                        variant="filled"
                    className='formInput' 
                    label=<Typography color='text.main'>Subject</Typography>
                    color="text" 
                      sx={{ backgroundColor: "switchnav.main"}}
                      fullWidth={true}
                      onChange={(e)=>{
                      setNum(e.target.value)
                    }}
         
                    error={numError}
                      />
                      <TextField 
                        variant="filled"
                      className='formInput' 
                    label=<Typography color='text.main'>Message</Typography>
                    multiline
                    rows={4}
                    sx={{ backgroundColor: "switchnav.main" ,
                   }}
                    
          
              
                   
                    color="text" 
                      fullWidth={true}
          
    
                      />

                    <Button className='formBtn'
                     type='submit' 
                     color='myColor'
                     variant="contained" endIcon={<SendIcon color='text'/>}
                 ><Typography   color='text.main'> Submit</Typography>
                </Button>
                  </form>
        </Grid>
        <Grid item xs={8} sm={10} md={12} lg={12} xl={12} >
          {grid}
        </Grid>
      
      </Grid>

        
  
    </div>
  )
}

export default Form

