import React, { Component } from 'react';
import ContactList from './ContactList.js';
import SearchBar from './SearchBar';
import axios from 'axios';

/* eslint max-len: [1, {"ignoreUrls": true}] */
class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      contacts: []

    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/contacts')
        .then(resp => {
          this.setState({
            contacts: resp.data
          });
        })
        .catch(err => console.log(`Error! ${err}`));
  }
  componentWillMount() {
    console.log('componentWillMount');
    debugger;
  }
  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  getFilteredContacts() {
    const term = this.state.searchText.trim().toLowerCase();
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(term) >= 0;
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}


export default App;
