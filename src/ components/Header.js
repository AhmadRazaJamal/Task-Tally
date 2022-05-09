import React from 'react'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <header className='header'>
    <h1 variant="h3" gutterBottom component="div">Task Tally</h1>
    <button variant="contained" color="success" className='btn'>
        Add
    </button>
    </header>
  )
}

export default Header