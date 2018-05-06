import React, { Component } from 'react';
import logo from '../assets/miles-branch.png';
import './App.css';

import WishListComponent from './WishListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Bird Wishlist</h1>
        </header>
        <WishListComponent wishList={this.props.wishList} />
      </div>
    );
  }
}

export default App;
