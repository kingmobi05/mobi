import React from 'react'
import Button from './Button'

const Header = ({title, onClick, myDisplay}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1>{title}</h1>
        <Button write={myDisplay ? 'Close' : 'Add'} onClick={onClick} />
    </div>
  )
}

export default Header