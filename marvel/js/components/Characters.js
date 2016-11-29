import React from 'react'
var styles = require('./styles')

var style = {
  display: styles.display
}

var Characters = {
  componentWillMount(){
    this.props.paginate({
      limit: 10
    }, function (err) {
      if (err) {
        error.innerText = 'Error: ' + err.message
        error.removeAttribute('hidden')
        throw err
      }
    });
  },

  render() {
    return (
      <div id="images" className="row">
      </div>
    )
  }
}

export default React.createClass(Characters)