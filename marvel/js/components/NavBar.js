import React from 'react';

var NavBar = {
  getInitialState: function () {
    return {
      name: ""
    }
  },

  handleClick: function(name) {
    name = this.state.name
    this.props.onChange(name)
  },

  handleChange: function(e) {
    var name = e.target.value;
    this.setState({
      name: name
    })
  },

  render() {
    return (
      <nav className="navbar navbar-custom navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Marvel</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="http://marvel.com/" target="_blank">Official Website<span className="sr-only">(current)</span></a></li>
              <li><a href="http://marvel.com/universe/Main_Page" target="_blank">Wiki<span className="sr-only">(current)</span></a></li>
            </ul>
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" className="form-control" id="characterName" onChange={this.handleChange} value={this.state.name} placeholder="Search" />
              </div>
              <button type="submit" id="submitButton" className="btn btn-default" onClick={this.handleClick} >Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  },
} 
export default React.createClass(NavBar)