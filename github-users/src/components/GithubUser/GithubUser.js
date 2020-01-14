import React from 'react';
import axios from 'axios';
import '../../App.css'

//import components
import FollowerCard from '../GithubFollowers/FollowersCard';

class GithubUser extends React.Component{
    constructor(){
        super()
        this.state ={
            followers: []
        }
    }
    //when component mounts get user's followers
    componentDidMount(){
        this.fetchGithubFollowers();
      }
    fetchGithubFollowers = () =>{
        axios.get(`https://api.github.com/users/${this.props.GithubData.login}/followers`)
        .then(response =>{
            this.setState({
                followers: response.data //set api response to followers state
            })
            console.log(`${this.props.GithubData.login}'s Followers Are:`, this.state.followers) 
        })
        .catch()
    }
    render(){
        const ImgStyles ={
            width:'100%',
            objectFit: 'cover',
            objectPosition: 'center',
            margin: '0px'
        }
        console.log(this.props)
        return(
        <div className='Wrapper'>
            <div className='UserCard'>
                <div className='UserCardWrapper'>
                <img style={ImgStyles} alt={this.props.GithubData.login} src={this.props.GithubData.avatar_url}/>
                <h2>Name: {this.props.GithubData.login}</h2>
                <p>Location: {this.props.GithubData.location}</p>
                <p><a href={this.props.GithubData.blog}>Blog</a></p>
                <p>Bio: {this.props.GithubData.bio}</p>
                <p>Followers: {this.props.GithubData.followers}</p>
                <p>Following: {this.props.GithubData.following}</p> 
                </div>
            </div>
            <div className='FollowersWrapper'>
            {this.state.followers.map(item =>{
                return <FollowerCard key={item.id} name={item.login} img={item.avatar_url}/>
            })}
               
            </div>
        </div>
        )
    }

}

export default GithubUser