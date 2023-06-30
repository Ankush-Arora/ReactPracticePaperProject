import React from 'react'
import { Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../styles/style.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Typography varient="h5" sx={
        { "@media(max-width:600px)": { fontSize: "1rem", } }
      }>All Rights Reserved &copy; Practice Papers Website </Typography>
      <Typography sx={{ m: '1' }}>
        <p>Developed by Ankush Arora</p>
        <sub>   <MailOutlineIcon /> </sub><span>: ankusharora5551@gmail.com</span>
      </Typography>
    </div>
  )
}

export default Footer
