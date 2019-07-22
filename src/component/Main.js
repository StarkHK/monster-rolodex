import React from 'react';
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import './../css/style.css'
import './../index.css'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className='main'>
                <button class="button button--ujarak"><Link className='link' to ='/user' >Show Users</Link></button>
            </div>
        )
    }
}

export default Main;