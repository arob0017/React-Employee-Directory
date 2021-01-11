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
    API.search().then((response) => { this.setState({ employees: response.data.results }) })
  }
  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };
  refreshPage = event => {
    event.preventDefault();
    window.location.reload();
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <EmpTable employees={this.state.employees} />
        <Footer />
      </div>
    );
  }
}

export default App;
