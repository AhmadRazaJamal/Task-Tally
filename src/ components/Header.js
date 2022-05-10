import React from 'react'
import Button from './Button'

const Header = ({onAdd, formShown}) => {

  const onClick = () => {

  }

  return (
    <header className='header'>
    <h1 variant="h3" gutterBottom component="div">Task Tally</h1>
    <Button label={formShown ? "X" : "Add a task"} color={formShown ? "red" : "royalblue"} onClick={onAdd}/>
    </header>
  )
}

export default Header