import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  //creates constructor function
  constructor(){
    super()
    this.state = {
      GithubUser: []
    }
  }
  componentDidMount(){

  }

  fetchGithubUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
  
}

export default App;
