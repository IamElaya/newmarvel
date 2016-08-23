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
var names = []
var ignores = [
  'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
]

var container = document.querySelector('.images')

paginate({
  limit: 50
}, function (err) {
  if (err) {
    error.innerText = 'Error: ' + err.message
    error.removeAttribute('hidden')
    throw err
  }
  
  console.log('Total images:', images.length, images, names)
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
        return cb(new Error('invalid request; Marvel server may have timed out'))
      }
      if (!(/^2/.test(resp.statusCode))) {
        return cb(new Error(body.status || body.message))
      }
        var data = body.data
        data.results
          .filter(validItem)
          .forEach(function (item){
            var name = item.name
            var description = item.description
            var thumb = item.thumbnail
            var uri = thumb.path + '/standard_medium.' + thumb.extension
            images.push(uri)
            names.push(name)

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
      function validItem (item) {
        if (!item.thumbnail || !item.thumbnail.path) {
          return false
        }
        var thumb = item.thumbnail
        return thumb.path.indexOf('image_not_available') === -1
          && ignores.indexOf(thumb.path) === -1
      }
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