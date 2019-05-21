import React, { Component } from "react";
import {Button, Form, Row, Container } from 'react-bootstrap';

export default class Login extends Component{
    constructor(props) {
        super(props);
    
        this.state = { show: true };
      }
    
      render() {
        return (
            <Container className="m-5">
               <Row className="justify-content-md-center" >
                    <h3>Login</h3>
               </Row>
               <Row className="justify-content-center">
               <Form method="POST" style={{width: '30%'}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg" block>
                        Submit
                    </Button>
                </Form>
               </Row>
            </Container>
        );
      }
    }
    