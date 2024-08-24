import React, { useState } from 'react'
import Square from './Square'

function Board() {

  // const a = [1,2,3,4,5,6,7,8,9]
  const [state, setstate] = useState(Array(9).fill(null))
  const [xturn, setXturn] = useState(true)

  const checkwinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let logic of winnerlogic) {
      const [a, b, c] = logic
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
      
    }
    return false;
  }

  const iswinner = checkwinner()

  const handleclick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copystate = [...state];
    copystate[index] = xturn ? 'X' : 'O'
    setstate(copystate)
    setXturn(!xturn)

  }

  const whoturn = () => {
    if (xturn === true) {
      return "The Winner is : O"
    }
    return "The Winner is : X"
  }


  const handlereset = () => {
    setstate(Array(9).fill(null))
  }


  return (


    <div className='Board-Container'>
      {iswinner == true ? (<><h1>{whoturn()}</h1> <button id='btnrest' onClick={handlereset}>'Reset'</button></>) :
        <>
          <div className='rows'>
            <Square onClick={() => handleclick(0)} value={state[0]} />
            <Square onClick={() => handleclick(3)} value={state[3]} />
            <Square onClick={() => handleclick(6)} value={state[6]} />
          </div>
          <div className='rows'>
            <Square onClick={() => handleclick(1)} value={state[1]} />
            <Square onClick={() => handleclick(4)} value={state[4]} />
            <Square onClick={() => handleclick(7)} value={state[7]} />
          </div>
          <div className='rows'>
            <Square onClick={() => handleclick(2)} value={state[2]} />
            <Square onClick={() => handleclick(5)} value={state[5]} />
            <Square onClick={() => handleclick(8)} value={state[8]} />
          </div>
          <button id='btnrest' onClick={handlereset}>'Reset'</button>
      </>}
        </div>
      )
}
      export default Board