import React from 'react'
var styles = require('./styles')

var style = {
  color: styles.color
}

var Header = {
  render() {
    return (
      <div id="header" className="page header">
        <h1>LEARN ABOUT YOUR FAVORITE <span><font style={style}>MARVEL</font></span> CHARACTERS</h1>
      </div>
    )
  }
}

export default React.createClass(Header)