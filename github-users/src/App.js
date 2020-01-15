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
      user: 'alexisdavalos',
      followers: [],
      searchUser: ''
    }
  }
  componentDidMount(){
    this.fetchGithubUser(this.state.user);
    this.fetchGithubFollowers(this.state.user);
  }
  handleSubmit = e =>{
    e.preventDefault()
    if(this.state.searchUser !== ''){
      this.fetchGithubUser(this.state.searchUser);
      this.fetchGithubFollowers(this.state.searchUser);
    }
  }
  proxy = 'https://cors-anywhere.herokuapp.com/';
  //fetches github followers
  fetchGithubFollowers = (user) =>{
    axios.get(this.proxy + `https://api.github.com/users/${user}/followers`)
    .then(response =>{
        this.setState({
            followers: response.data //set api response to followers state
        })
        console.log('The State is: ', this.state.GithubData.login)
        console.log(`${this.state.GithubData.login}'s Followers Are:`, this.state.followers) 
    })
    .catch(error=>{
      console.log(error)
    })
  }
  //fetches github user
  fetchGithubUser = (user) => {
    axios.get(this.proxy + `https://api.github.com/users/${user}`)
    .then(response =>{
      console.log(`Github User Data For: ${user}`, response);
      this.setState({
        GithubData: response.data
      })
    })
    .catch(error =>{
      console.log('Get Error:', error);
    })
  }
  //handle Changes
  handlesChanges = e =>{
    this.setState({
      searchUser: e.target.value
    })
  }
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <h1>Github Current User: {this.state.user}</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            onChange={(e) => this.handlesChanges(e)}
            value={this.state.searchUser}
            placeholder='Search User'
          />
          <button>submit</button>
          </form>
        </div>
      </header>
        <GithubUser setState={this.setState} followers={this.state.followers} GithubData={this.state.GithubData}/>
       
      </div>
    )
  }
}

export default App;
