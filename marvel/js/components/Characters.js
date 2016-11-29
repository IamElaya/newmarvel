import React from 'react'
var styles = require('./styles')

var style = {
  display: styles.display
}

var Characters = {
  render() {
    return (
      <div id="images" className="row">
        <figure className='col-xs-12 col-md-1'>
          <div className='marvelCharacter'>
            <img src={this.props.uri} />
            <hr className='white' />
            <h1>{this.props.name}</h1>
            <a style={style} href={this.props.link}></a>
          </div>
        </figure>
      </div>
    )
  }
}

export default React.createClass(Characters)