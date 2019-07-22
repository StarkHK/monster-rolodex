import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CardList from './Cardlist/card_list'
import './../css/style_button.css'
import './../css/style.css'

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {'data': [
            {
              "id": 1,
              "first_name": "Isabelle",
              "last_name": "Di Francecshi",
              "email": "idifrancecshi0@gov.uk",
              "gender": "Female",
              "ip_address": "129.25.39.100"
            },
            {
              "id": 2,
              "first_name": "Jamima",
              "last_name": "Thrustle",
              "email": "jthrustle1@ycombinator.com",
              "gender": "Female",
              "ip_address": "39.54.4.77"
            },
            {
              "id": 3,
              "first_name": "Silvanus",
              "last_name": "Hessing",
              "email": "shessing2@rediff.com",
              "gender": "Male",
              "ip_address": "120.21.56.98"
            },
            {
              "id": 4,
              "first_name": "Vida",
              "last_name": "Skeath",
              "email": "vskeath3@php.net",
              "gender": "Female",
              "ip_address": "56.210.240.33"
            },
            {
              "id": 5,
              "first_name": "Finlay",
              "last_name": "Caveau",
              "email": "fcaveau4@taobao.com",
              "gender": "Male",
              "ip_address": "33.196.130.202"
            }]}
    }

    render() {
        return (
            <div>
            <div>{this.state.data.map((user) =>   <ul>
              
                
                {/* <li>{user.first_name}</li>
                <li>{user.last_name}</li>
                <li>{user.gender}</li>
                <li>{user.email}</li>
                <li>{user.ip_address}</li> */}
                 <CardList userData={user}/>
                 {/* <li><Link to={`user/${user.id}/`}>CLICK HERE TO KNOW MORE</Link></li> */}
                </ul>)}

                </div>
                <button class="button button--ujarak main--btn"><Link className='link' to ='/' >HOME</Link></button>
          </div>
        )
    }
}


export default Users;
