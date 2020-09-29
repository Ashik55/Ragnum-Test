import React from 'react';
import './App.css';
import Map from './components/placeSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      map: {}
    }
  } 

  handleMapLoad = (map) => {
    this.setState({
      map: map
    })
  }
  
  render() {
    return (
      <div className="App">
        <Map id="myMap" options={{center: { lat: 51.501904, lng: -0.115871 }, zoom: 13}} 	onMapLoad = {this.handleMapLoad}/>  
      </div>
      
    );
  }
}

export default App;
