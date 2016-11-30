var React = require('react');
var ReactDOM = require('react-dom');

import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Body from './components/Body.js'
import Header from './components/Header.js'
import Characters from './components/Characters.js'

var App = React.createClass({

  getInitialState: function () {
    return {
      characterName: 'Jean',
    };
  },

  changeName: function (newName) {
    console.log(newName);
    this.setState({
      characterName: newName
    })
  },

  render: function () {
    return (
      <div id="container">
        <NavBar characterName={this.state.characterName} onChange={this.changeName} />
        <Header />
        <div id="characters" className="container">
          <Body />
          <Characters characterName={this.state.characterName}/>
        </div>
        <Footer />
      </div>
    )
  }
  
});


ReactDOM.render(<App />, document.getElementById('app')); 

export default App