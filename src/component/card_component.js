import React from 'react';
import './card_style.css';

class CardComponent extends React.Component {
    constructor(props);{
        super(props);
        this.state={}
    }
    render();{
        return(<div className='card-container' >
              
        Name = `{this.props.userData.first_name} {this.props.userData.last_name}`
          <Link to={`user/${this.props.userData.id}/`}>CLICK HERE TO KNOW MORE</Link>
          
      </div>)
    }
}
export default CardComponent;