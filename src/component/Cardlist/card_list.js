import React from 'react';
import './card_style.css';
import {Link} from 'react-router-dom';

class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
           <div className='card-container'>   
            <div className='card-list'>
              
              Name = `{this.props.userData.first_name} {this.props.userData.last_name}`
                <Link to={`user/${this.props.userData.id}/`}>CLICK HERE TO KNOW MORE</Link>
                
            </div></div>
            
        )
    }
}

export default CardList;