import React from 'react';
import '../../App.css'

class Followers extends React.Component{
    componentDidMount(){
        console.log('Followers.js: props:', this.props)
    }
    render(){
        const ImgStyles ={
            width:'100px',
            objectFit: 'cover',
            objectPosition: 'center',
            margin: '0px'
        }
        return(
            <div className='FollowerCard'>
                <img onClick={(e => this.props.handleUserChange(e, this.props.name))} style={ImgStyles} alt={this.props.name} src={this.props.img}/>
                <h2>Name: {this.props.name}</h2>
                <p><a href={this.props.profile}  rel="noopener noreferrer"  target='_blank'>Github Profile</a></p>
            </div>
        )
    }
}

export default Followers;