import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';


export default class Login extends Component{
    constructor(props) {
        super(props);
    
        this.state = { show: true };
      }
    
      render() {
        return (
            <Alert variant="dark" className="ml-5 mr-5 mt-3">
            <Alert.Heading>Oh snap! Page not found</Alert.Heading>
            </Alert>
        );
      }
    }