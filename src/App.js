import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';


class App extends Component {
  render() {
    return (
      <div className="tc">
        <h2 className="f1">Robo Friends</h2>
        <SearchBox/>
        <CardList/>
      </div>
    );
  }
}

export default App;
