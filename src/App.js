import React from 'react';
import axios from 'axios';
// import {token} from './auth';
import './App.css';
//components
import GithubUser from './components/GithubUser/GithubUser';
import {FaGithub} from 'react-icons/fa';

// let options = {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// }

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
  handleUserChange = (e, newUser) =>{
    console.log('changing user to...', newUser)
    e.preventDefault()
    if((this.state.searchUser !== '' || newUser)){
      this.fetchGithubUser(newUser);
      this.fetchGithubFollowers(newUser);
      this.setState({
        ...this.state,
        user: newUser,
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
    console.log('fetching github followers:..', user)
    axios.get(`https://api.github.com/users/${user}/followers`)
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
    axios.get(`https://api.github.com/users/${user}`)
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
  //handle Changes and updates SearchUser State
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
        <div className='Logo'>
          <FaGithub size='3em'/><h1>Github User Search</h1>
        </div>
        <div>
          <form onSubmit={e => this.handleUserChange(e,this.state.searchUser)}>
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
        <GithubUser handleUserChange={this.handleUserChange} followers={this.state.followers} GithubData={this.state.GithubData}/>
       
      </div>
    )
  }
}

export default App;
