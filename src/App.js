import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  render() {
   const flat ={
    "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    "price": 164,
    "priceCurrency": "EUR",
    "lat": 48.884211,
    "lng": 2.346890,
  };

    const flats = [ flat, flat, flat, flat, flat ];

    return (
     <div className="app">
       <div className="main">
        <div className="search">
        </div>
       <div className="flats">
        {flats.map(function(flat){
         return <Flat flat={flat} />
          })}

       </div>
      </div>
       <div className="map">
       </div>
     </div>
    );
  }
}

export default App;
