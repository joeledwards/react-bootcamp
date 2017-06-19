import React from 'react'
import Radium from 'radium'

const Header = ({value}) => {
  const style = {
    backgroundColor: '#444444',
    color: '#ffffff',
    padding: '0.5',
  };

  return (
    <th style={style}>
      {value}
    </th>
  )
}

export default Radium(Header)
