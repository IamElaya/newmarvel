import React from 'react';

var Footer = {
  render() {
    return (
      <footer id="footer">
        <hr className="red" />
        <div id="socialmedia">
          <a href="#">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="#">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="#">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="#">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-youtube fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </div>
        <p id="footertext">This is an unofficial website which is neither endorsed nor supported by Marvel Comics.<br />All Images and Names are the property of Marvel Comics<br />©2016 Marvel</p>
      </footer>
    )
  }
}

export default React.createClass(Footer)