import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = { lat: null, errorMessage: '' };

  componentDidMount() { // when component is rendered on screen -- good for data loading done once
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }), // success callback
      (err) => this.setState({ errorMessage: err.message }) // failure callback
    );
  }

  componentDidUpdate() { // when component is updated -- AFTER render
    
  }
  // React forces us to define render!
  render() { // Gets called all the dang time - be judicious
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <div> Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>

  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)