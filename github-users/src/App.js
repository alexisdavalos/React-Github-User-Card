import React from 'react';
import axios from 'axios';
import {token} from './auth';
import './App.css';
//components
import GithubUser from './components/GithubUser/GithubUser'

let options = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

class App extends React.Component {
  //creates constructor function
  constructor(){
    super()
    this.state = {
      GithubData: [],
      user: 'alexisdavalos',
      followers: [],
      searchUser: '',
      valid: true
    }
  }
  componentDidMount(){
    this.fetchGithubUser(this.state.user);
    this.fetchGithubFollowers(this.state.user);
  }
  //handles user search
  handleUserChange = e =>{
    e.preventDefault()
    if(this.state.searchUser !== ''){
      this.fetchGithubUser(this.state.searchUser);
      this.fetchGithubFollowers(this.state.searchUser);
      this.setState({
        ...this.state,
        user: this.state.searchUser,
        searchUser: '',
        valid: true
      })
    }else{
      this.setState({
        ...this.state,
        valid: false
      })
    }
  }
  //fetches github followers
  fetchGithubFollowers = (user) =>{
    axios.get(`https://api.github.com/users/${user}/followers`, options)
    .then(response =>{
        this.setState({
            followers: response.data //set api response to followers state
        })
        console.log(`${this.state.GithubData.login}'s Followers Are:`, this.state.followers) 
    })
    .catch(error=>{
      console.log(error)
    })
  }
  //fetches github user
  fetchGithubUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`, options)
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
    console.log('The State is: ', this.state)
    return (
      <div className="App">
      <header className="App-header">
        <div>
          <h1>Github User App</h1>
        </div>
        <div>
          <form onSubmit={this.handleUserChange}>
            { (!this.state.valid) ?
            
            <input
            type="text"
            onChange={(e) => this.handlesChanges(e)}
            value={this.state.searchUser}
            placeholder='Field Cannot Be Blank'
            />
            :
            <input
            type="text"
            onChange={(e) => this.handlesChanges(e)}
            value={this.state.searchUser}
            placeholder='Search User'
          /> 
            }
          <button>submit</button>
          </form>
        </div>
      </header>
        <GithubUser followers={this.state.followers} GithubData={this.state.GithubData}/>
       
      </div>
    )
  }
}

export default App;
