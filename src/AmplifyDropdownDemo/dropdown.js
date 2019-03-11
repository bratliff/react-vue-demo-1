import React, { Component } from 'react';
import Vue from 'vue';
import AmplifyDropdown from './AmplifyDropdown';
//import AmplifyDropdown from './amplify-dropdown.js';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

const dropdownStyle = {
    display: 'flex',
    width: '500px',
    justifyContent: 'space-between',
    marginBottom: '50px'
  }

const spanStyle = {
  fontWeight: 'bold'
}

export default class AmplifyDropdownDemo extends Component {
  componentDidMount() {
  	var body = document.querySelector('body');
  	
  	body.addEventListener('wines', function(event) {
      var item = event.detail.item;
      var result = document.querySelector('.wines');
      result.innerHTML = item;
    });
    body.addEventListener('cars', function(event) {
      var item = event.detail.item;
      var result = document.querySelector('.cars');
      result.innerHTML = item;
    });
    body.addEventListener('colors', function(event) {
      var item = event.detail.item;
      var result = document.querySelector('.colors');
      result.innerHTML = item;
    });
  }

  render() {
    return <div style={containerStyle}>
        <div style={dropdownStyle}>
            <AmplifyDropdown buttonText="Wines" selectedItemEvent="wines" items="Chardonnay, Riesling, Merlot, Chianti, Cabernet"></AmplifyDropdown>
            <AmplifyDropdown buttonText="Cars" selectedItemEvent="cars" items="Chevy, Ford, VW, Audi, Toyota"></AmplifyDropdown>
            <AmplifyDropdown buttonText="Colors" selectedItemEvent="colors" items="Blue, Yellow, Red, Green, Gray, Puce"></AmplifyDropdown>
        </div>
        <div>
          <h4>React App Field</h4>
          <div>Wine selection: <span className="wines" style={spanStyle}></span></div>
          <div>Car selection: <span className="cars" style={spanStyle}></span></div>
          <div>Colors selection: <span className="colors" style={spanStyle}></span></div>
        </div>
       </div> 
        
  }
}