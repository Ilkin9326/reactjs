import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';

export default class About extends Component{
    state={
        persons: [],
    };

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users').then(res=>{
            this.setState({ persons: res.data })
        })
    }

    render(){
        return(
            <div>
                <Jumbotron>
                    <h2>Welcome About jsx page</h2>
                    <p>{this.state.persons.map(person => <li>{person.name}</li>)}</p>
                </Jumbotron>
                <Link to="/">
                    <Button variant="primary">Login</Button>
                </Link>
            </div>
        )
    }
}

