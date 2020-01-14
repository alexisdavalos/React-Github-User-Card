import React from 'react';
import axios from 'axios';
import '../../App.css'

class Followers extends React.Component{
    componentDidMount(){
        console.log('Followers.js: props:', this.props)
    }
    render(){
        const ImgStyles ={
            width:'100%',
            objectFit: 'cover',
            objectPosition: 'center',
            margin: '0px'
        }
        return(
            <div className='FollowerCard'>
                <img style={ImgStyles} alt={this.props.name} src={this.props.img}/>
                <h2>Name: {this.props.name}</h2>
            </div>
        )
    }
}

export default Followers;