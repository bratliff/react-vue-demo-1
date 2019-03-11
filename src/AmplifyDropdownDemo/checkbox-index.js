import React, { Component } from 'react';
import Vue from 'vue';
import AmplifyRadio from './AmplifyRadio';
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
  }

  render() {
    return <div style={containerStyle}>
        <div style={dropdownStyle}>
             <AmplifyRadio buttons="[{value: 'yes', label: 'yeah'},{value: 'no', label: 'nope'},{ value: 'maybe', label: 'let me think bout it'}]" selected-item-event="radio" group-name="answer" />
        </div>

       </div> 
        
  }
}