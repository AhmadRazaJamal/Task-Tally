import React from 'react'
import Button from './Button'

const Header = () => {

  const onClick = () => {

  }

  return (
    <header className='header'>
    <h1 variant="h3" gutterBottom component="div">Task Tally</h1>
    <Button label="Add" color="royalblue"/>
    </header>
  )
}

export default Header