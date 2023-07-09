import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Feed.css"

function Script() {
  return (
    <div className='Script'>
        <Container maxwidth="lg">
            <Grid container p={2} pb={6} >
                <Grid item xs={12} md={3} pt={5} >
                    <Typography color='text.main' fontWeight='bold' variant='h5' >" A FEW WORDS ABOUT US "</Typography>
                </Grid>
                <Grid item xs={10} md={7} pt={6}>
                    <Typography color='text.main'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad consectetur qui eligendi, laudantium perferendis nisi tempore sit repellat tempora ut, unde iure suscipit aut. Distinctio temporibus aspernatur suscipit tempore voluptatem.</Typography>
                </Grid>
                <Grid item xs={2} md={2} alignSelf='end' position='relative'>
                <Typography className='ScriptWords' ml={-1}> _Medilap Healthcare</Typography>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Script
