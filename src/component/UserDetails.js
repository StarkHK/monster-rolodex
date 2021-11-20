import React from 'react';

import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './../css/style_button.css'


class UserDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {'data': [{
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
          }],
          'showme':           {
            "id": null,
            "first_name": null,
            "last_name": null,
            "email": null,
            "gender": 'm',
            "ip_address": null
          }
        };
    }

    componentWillMount(){
        let id = this.props.match.params.Id;
        
        for (let i=0; i<this.state.data.length; i++){
            if (this.state.data[i].id == id){
                this.setState({'showme': this.state.data[i]})
            }
            else{
                console.log('not found')
            }
        }
    }

    render() {
        return (
          <div>
            <div className='container user' >
                <Card style={{ width: '30rem' }}  className='jumbotron'>
                <Card.Body>
                <Card.Title>NAME={this.state.showme.first_name} {this.state.showme.last_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">EMAIL={this.state.showme.email}</Card.Subtitle>
                <Card.Text>
                    GENDER={this.state.showme.gender}<br />
                    IP ADDRESS={this.state.showme.ip_address}
                </Card.Text>
                <button class="button button--ujarak"><Link className='link' to ='/' >HOME</Link></button>
              
                  <button class="button button--ujarak"> <Link className='link' to ='/user' >BACK</Link></button>
            
                </Card.Body>
                </Card>              
              </div>

           
       
            </div>
        )
    }

}


export default UserDetails;