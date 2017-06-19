import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import color from 'color'

import postData from './postData.js'
import Table from './Table.js'

/*
   Homework 1: Rendering Data

   Requirements:
   1. Render the list of post data (hint: use map)
   2. Style the posts using at least 2 css selectors and at least 10 styles
   3. Make sure there are no warnings/errors in the console
   4. Choose one (or more) of the following additional tasks:
     i.   Make the page responsive (rows when on desktop, column when on mobile)
     ii.  Sort the posts by title, alphabetically
     iii. Add a header above the posts with a creative title (style it nicely)
*/

const Homework1 = () => {
  const headers = {
    userId: "User Id",
    id: "Record Id",
    title: "Title",
    body: "Body",
  };

  const style = {
    border: '3px solid #bb8855'
  };

  return (
    <div>
      <Table headers={headers} data={postData.sort(e => e.title)} />
    </div>
  )
}

Homework1.propTypes = {
}

export default Radium(Homework1)
