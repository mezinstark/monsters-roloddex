import React, { Component } from 'react';
import './App.css';
import { CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.components';

class App extends Component {
  constructor(){
    super();

    this.state ={
      monsters:[],
      searchfeild:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) => {
  this.setState({searchfeild:e.target.value}, 
  )
  };

  render() {

    const {monsters, searchfeild} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfeild.toLowerCase())
      )

    return (
      <div className="App">

        {/* <input 
        type='search' 
        placeholder = 'search Monsters' 
        onChange={(e) => 
          this.setState({searchfeild:e.target.value}, 
          () => console.log(this.state) //setState is an asynchronous function
          )} // to make the changes affect immediate we add the second parameter
        /> */}

        <h1 className='App-header'>Find Your Monster</h1>

        <SearchBox 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />

        <CardList 
          monsters={filteredMonsters}
        />
        
        
      </div>
    );
  }
}
export default App;
