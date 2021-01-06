import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import API from './utils/API'

class App extends Component {
  constructor() {
    super()
    this.state = { employees: [] }
  }
  componentDidMount() {
    API.search().then((response) => { console.log(response) })
  }
  render() {
    return (
      <div className="App" >

      </div>
    );
  }
}

export default App;
