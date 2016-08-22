var React = require('react');
var ReactDOM = require('react-dom');
var api = require('marvel-comics-api')

const keys = {
  public: '62b90bff7ee74248f2d2d4717bc4afac',
  private: '9ad87557cac2adae4a2d4870629ee096d2a1c288'
}

api('characters', {
  publicKey: keys.public,
  privateKey: keys.private,
  timeout: 4000,
  query: {
    nameStartsWith: "Jean",
    limit: 50
  }
}, function (err, body) {
  if (err) throw err

  // total # of items
  console.log(body.data.total)

  // array of characters
  console.log(body.data.results)
})

var App = React.createClass({
  render: function(){
    return <div>xD</div>
  }
});

export default App