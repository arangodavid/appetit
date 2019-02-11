import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, searchBy) {
    Yelp.search(term, location, searchBy).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }
  render() {
    return (
      <div className="App">
      <h1>Appétit</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
