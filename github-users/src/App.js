import React from 'react';
import axios from 'axios';
import './App.css';

//components
import GithubUser from './components/GithubUser/GithubUser'

class App extends React.Component {
  //creates constructor function
  constructor(){
    super()
    this.state = {
      GithubData: [],
      user: 'alexisdavalos'
    }
  }
  componentDidMount(){
    this.fetchGithubUser();
  }

  fetchGithubUser = (props) => {
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(response =>{
      console.log(`Github User Data For: ${this.state.user}`, response);
      this.setState({
        GithubData: response.data
      })
    })
    .catch(error =>{
      console.log('Get Error:', error);
    })

  }
  render(){
    return (
      <div className="App">
      <header className="App-header">
            <h1>Github User App</h1>
        </header>
        <GithubUser GithubData={this.state.GithubData}/>
       
      </div>
    );
  }
  
}

export default App;
