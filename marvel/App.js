var React = require('react');
var ReactDOM = require('react-dom');
var api = require('marvel-comics-api')
const keys = {
  public: '62b90bff7ee74248f2d2d4717bc4afac',
  private: '9ad87557cac2adae4a2d4870629ee096d2a1c288'
}

jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});


// $('#submitButton').on('click', function(){
$('#characterName').on('focusout', function(){
  $('#images').empty();
  var name = $('#characterName').val();
  console.log(name);
  paginate({
    limit: 10
  }, function (err) {
    if (err) {
      error.innerText = 'Error: ' + err.message
      error.removeAttribute('hidden')
      throw err
    }
  });

  function paginate (query, cb) {
    var noop = function () {}
    var pages = 2
    var numPages = 0
    var images = []
    var names = []
    cb = cb || noop
    query = query || {} 
    api('characters', {
      publicKey: keys.public,
      privateKey: keys.private,
      timeout: 4000,
      query: {
        'nameStartsWith': name
      }
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
          var uri = thumb.path + '/portrait_uncanny.' + thumb.extension
          images.push(uri)
          names.push(name)
          // $("#images").append("<figure class='col-md-1' style='background-image:url(" + uri + ")' data-lightbox=" + name + "><h1><span>" + name +"</span></h1></figure>")
          $("#images").append("<figure class='col-md-1'><img src='" + uri + "'><h1><span>" + name +"</span></h1></img></figure>")

        });
        // $("figure").on('click', function(){

        // })

      var offset = data.offset
      var count = data.count
      numPages++
      if (numPages < pages && offset + count < data.total) {
        query.offset = offset + count
        paginate(query, cb)
      } else {
        cb(null)
      }
    });

    function validItem (item) {
      var ignores = [
        'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
      ]
      if (!item.thumbnail || !item.thumbnail.path) {
        return false
      }
      var thumb = item.thumbnail
      return thumb.path.indexOf('image_not_available') === -1
        && ignores.indexOf(thumb.path) === -1
    }
  }
}); 



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