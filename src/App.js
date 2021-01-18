import './App.css';
import React, { Component } from 'react';
import API from './utils/API';
import EmpTable from './components/emptable';
import Header from './components/header';
import Footer from './components/footer';
import SearchForm from './components/search.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      employees: [],
      search: ""
    }
  }
  componentDidMount() {
    API.Search().then((response) => { this.setState({ employees: response.data.results }) })
  }
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // refreshPage = event => {
  //   event.preventDefault();
  //   window.location.reload();
  // }
  render() {
    return (
      <div className="App" >
        <Header />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <EmpTable
          employees={this.state.employees.filter(employee => employee.name.last.toLowerCase().includes(this.state.search.toLowerCase()))}
        // refreshPage={this.refreshPage}
        />
        <Footer />
      </div>
    );
  }
}


export default App;
