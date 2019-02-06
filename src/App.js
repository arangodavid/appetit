import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

const businesses = [business, business, business, business, business, business];

class App extends React.Component {
  searchYelp(term, location, searchBy) {
    console.log('Searching Yelp with ' + term, location, searchBy);
  }
  render() {
    return (
      <div className="App">
      <h1>Appétit</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList business={businesses}/>
      </div>
    );
  }
}

export default App;
