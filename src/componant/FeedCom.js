import { Avatar, Typography } from '@mui/material'
import React from 'react'
import "./Feed.css"
import logo from '../img/thumb.png'

function FeedCom() {
  return (
    <div>
        <div className="speech bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit repellat aperiam deserunt ea architecto minus perferendis ratione, quos obcaecati.
        </div>
        <div className='Alex'>
            <Avatar alt="Remy Sharp" src={logo}/>
            <div className='AlexText' >
                <Typography variant='h5' color='text.main' >ALEX</Typography>
                <Typography color='text.main' >TAXAS</Typography>

            </div>
        </div>
    </div>


  )
}

export default FeedCom
