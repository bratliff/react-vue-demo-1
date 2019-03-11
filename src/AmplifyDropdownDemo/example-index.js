import React, { Component } from 'react';
import Vue from 'vue';
import AmplifyCheckbox from './AmplifyCheckbox';
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

const buttonStyle = {
  width: '120px',
  marginTop: '15px'
}


export default class AmplifyDropdownDemo extends Component {

  constructor(props) {
    super(props); 

    this.state = { selected: 2 };
  }

  componentDidMount() {
    let button = document.querySelector('.changeState');
  }

  clickOne(e) {
      this.setState({selected: 0})
  }

  clickTwo(e) {
      this.setState({selected: 1})
    }

  clickThree(e) {
    this.setState({selected: 2})
  }


  render() {
    return <div style={containerStyle}>
        <div style={dropdownStyle}>
             <AmplifyCheckbox selected={this.state.selected}></AmplifyCheckbox>
        </div>
        <p>These are buttons in the React component that change the state</p>
        <button style={buttonStyle} onClick={this.clickOne.bind(this)}>Click 1st Guy</button>
        <button style={buttonStyle} onClick={this.clickTwo.bind(this)}>Click 2nd Guy</button>
        <button style={buttonStyle} onClick={this.clickThree.bind(this)}>Click 3rd Guy</button>
      </div> 
        
  }
}