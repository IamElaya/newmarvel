import React from 'react';

var Body = {
  render() {
    return (
      <div id="characters" className="container">
        <div id="images" className="row"></div>
        <div className="modal fade imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <img src="" className="col-md-8 imagepreview" />
                  <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                  <h1 className="imagetext modal-title" id="myModalLabel"></h1>
                  <span className="bottomtext">
                    <a className="imagelink" href="" target="_blank"><h1>Learn More</h1></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default React.createClass(Body)