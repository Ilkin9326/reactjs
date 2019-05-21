import React, { Component } from "react";
import { Button, Form,  Navbar, FormControl, Nav } from 'react-bootstrap';

export default class Login extends Component{
    constructor(props) {
        super(props);
    
        this.state = { show: true };
      }
    
      render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">React proje</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/registr">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        );
      }
    }
    