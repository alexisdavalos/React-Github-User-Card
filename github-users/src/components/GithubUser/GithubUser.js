import React from 'react';
import axios from 'axios';
import '../../App.css'

//import components
import FollowerCard from '../GithubFollowers/FollowersCard';

const GithubUser = (props) => {
    const ImgStyles ={
        width:'150px',
        objectFit: 'cover',
        borderRadius:'50%',
        objectPosition: 'center',
        margin: '0px'
    }
    return(
    <div className='Wrapper'>
        <div className='UserCard'>
            <div className='UserCardWrapper'>
            <img style={ImgStyles} alt={props.GithubData.login} src={props.GithubData.avatar_url}/>
            <h2>Name: {props.GithubData.login}</h2>
            <p>Location: {props.GithubData.location}</p>
            <p><a href={props.GithubData.blog}>Blog</a></p>
            <p>Bio: {props.GithubData.bio}</p>
            <p>Followers: {props.GithubData.followers}</p>
            <p>Following: {props.GithubData.following}</p> 
            </div>
        </div>
        <div className='Followers'>
            <div className='FollowersWrapper'>
            {props.followers.map(item =>{
                return <FollowerCard key={item.id} name={item.login} profile={item.html_url} img={item.avatar_url}/>
            })}
            </div> 
        </div>
    </div>
    );
    

}

export default GithubUser