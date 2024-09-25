import React from 'react'

const Item = ({x, a}) => {
  return (
    <div>
    <h1>{x.name}<span style={{marginLeft:'200px'}} onClick={() => a(x.id)}>X</span>
    </h1>
    <h6>{x.stateOrigin}</h6>
    <p>{x.profession}</p>
  </div>
  )
}

export default Item