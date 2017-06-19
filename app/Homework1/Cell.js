import React from 'react'
import Radium from 'radium'

const Cell = ({value}) => {
  const style = {
    backgroundColor: '#dddddd',
    color: '#000000',
    padding: '0.5',
  };

  return (
    <td style={style}>
      {value}
    </td>
  )
}

export default Radium(Cell)
