import React, { Component } from "react";
import { Card } from 'react-bootstrap';

export default class Login extends Component{
    constructor(props) {
        super(props);
    
        this.state = { show: true };
      }
    
      render() {
        return (
            <Card className="text-center">
                <Card.Footer className="text-muted">{(new Date().getFullYear())}</Card.Footer>
            </Card>
        );
      }
    }
    