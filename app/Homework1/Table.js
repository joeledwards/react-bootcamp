import React from 'react'
import Radium from 'radium'

import Row from './Row.js'

const Table = ({headers, data}) => {
  const style = {
    border: '3px solid #bb8855'
  };

  return (
    <table style={style}>
      <thead>
        <Row entry={headers} header={true} />
      </thead>
      <tbody>
        {data.map(entry => Row(entry))}
      </tbody>
    </table>
  )
}

export default Radium(Table)
