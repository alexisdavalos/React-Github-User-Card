import React from 'react';
import axios from 'axios';
import '../App.css'

class GithubUser extends React.Component{
    componentDidMount(){
        this.fetchGithubFollowers();
      }
    fetchGithubFollowers = () =>{
        axios.get()
        .then()
        .catch()
    }
    render(){
        const CardStyles ={
            width:'200px',
            height: '200px',
            objectFit: 'cover',
            objectPosition: 'center',
            margin: '0px'
        }
        console.log(this.props)
        return(
        <div className='Wrapper'>
            <div className='Card'>
                <img style={CardStyles} alt={this.props.GithubData.login} src={this.props.GithubData.avatar_url}/>
                <h2>Name: {this.props.GithubData.login}</h2>
                <p>Location: {this.props.GithubData.location}</p>
                <p><a href={this.props.GithubData.blog}>Blog</a></p>
                <p>Bio: {this.props.GithubData.bio}</p>
                <p>Followers: {this.props.GithubData.followers}</p>
                <p>Following: {this.props.GithubData.following}</p> 
            </div>
        </div>
        )
    }

}

export default GithubUser