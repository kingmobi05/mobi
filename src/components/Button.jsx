import React from 'react'

const Button = ({write, onClick}) => {
  return (
    <div>
        <button onClick={onClick}>{write}</button>
    </div>
  )
}

export default Button