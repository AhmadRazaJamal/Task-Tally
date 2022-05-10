import React from 'react'

const Button = ({label, color, onClick}) => {
  return (
    <button 
        variant="contained"
        color="success" 
        className='btn' 
        style={{backgroundColor: color}}
        onClick={onClick}
    >
        {label}
    </button>
  )
}

Button.defaultProps = {
    color: "blue"
}

export default Button