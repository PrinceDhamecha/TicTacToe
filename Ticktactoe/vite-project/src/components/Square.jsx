import React from 'react'

function Square(props) {
  return (
    <div onClick={props.onClick} className='square'>{props.value}</div>
  )
}

export default Square 