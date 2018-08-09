import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      searchField:"", robots:""
    }
  }

  componentWillMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>{ return response.json()})
    .then(data => {
        this.setState({robots:  data})
     })
    .catch(err => {
        console.log("ERROR:",err)
    });

  }

  onSearchChange = (event) =>{
    this.setState({ searchField: event.target.value})

  }

  render() {
    
    var filterRobots ="";
    if(this.state.robots !== ""){
      filterRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      console.log(filterRobots);
    }

    return (
      <div className="tc">
        <h2 className="f1">Robo Friends</h2>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots}/>
      </div>
    );
  }
}

export default App;
