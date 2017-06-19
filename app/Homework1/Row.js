import React from 'react'
import Radium from 'radium'

import Cell from './Cell.js'
import Header from './Header.js'

const Row = ({entry, header = false}) => {
  const cell = header ? Header : Cell;

  return (
    <tr key={entry.id}>
      {cell(entry.userId)}
      {cell(entry.id)}
      {cell(entry.title)}
      {cell(entry.body)}
    </tr>
  )
}

export default Radium(Row)
