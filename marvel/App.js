var React = require('react');
var ReactDOM = require('react-dom');
var api = require('marvel-comics-api')
const keys = {
  public: '62b90bff7ee74248f2d2d4717bc4afac',
  private: '9ad87557cac2adae4a2d4870629ee096d2a1c288'
}
var noop = function () {}
var pages = 2
var numPages = 0
var images = []
var ignores = [
  'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
]

var container = document.querySelector('.images')
var error = document.querySelector('.error')

paginate({
  limit: 1
}, function (err) {
  if (err) {
    error.innerText = 'Error: ' + err.message
    error.removeAttribute('hidden')
    throw err
  }
  
  console.log('Total images:', images.length)
})

function paginate (query, cb) {
    cb = cb || noop
    query = query || {} 
    api('characters', {
      publicKey: keys.public,
      privateKey: keys.private,
      timeout: 4000,
      query: query
    }, function (err, body, resp) {
        if (err) {
          throw err
        }
        var data = body.data
        data.results
          .forEach(function (item){
            var name = item.name
            var description = item.description
            var thumb = item.thumbnail
            var uri = thumb.path + '/standard_medium.' + thumb.extension
            images.push(uri)

            var figure = document.createElement('figure')
            figure.style.backgroundImage = 'url(' + uri + ')'
            container.appendChild(figure)
          })

          var offset = data.offset
          var count = data.count
          numPages++
          if (numPages < pages && offset + count < data.total) {
            query.offset = offset + count
            paginate(query, cb)
          } else {
            cb(null)
          }

        // var name = body.data.results[0].name
        // var description = body.data.results[0].description
        // console.log(body)
        // console.log(resp)
        // return name
        // return description
        // console.log(name)
        // // total # of items
        // console.log(body.data.total)
        // // array of characters
        // console.log(body.data.results)
    });
  }


var App = React.createClass({

  getInitialState: function() {
    return {
      currentCharName: "",
      currentCharDescription: "",
      currentCharPath: "",
      currentCharExtension: ""
    };
  },



  render: function() {
    return <div>{this.state.name}</div>
  }

});

export default App