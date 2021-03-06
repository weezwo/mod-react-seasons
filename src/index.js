import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request." />;
  }

  // React forces us to define render!
  render() { // Gets called all the dang time - be judicious
    return (
      <div className="border">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)