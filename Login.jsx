import React, { Component } from "react";
import {Button, Form, Row, Container } from 'react-bootstrap';
import axios from "axios";

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            stud_no: '',
            password: ''
         };

      }
      
      dataChange(e){
          this.setState({[e.target.name]: e.target.value});
      }

      postData(e){
          e.preventDefault();

          const stud_no = this.state.stud_no;
          const password = this.state.password;

          const data={
              stud_no,
              password
          }

          axios({
            url: "https://pay.beu.edu.az/rest.php",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            data: data
          }).then(response => {
            /*if(response.data.FAKULTE === 'İqtisadiyyat və İdarəetmə'){
                this.props.history.push('/about/'+response.data.value);
            }*/
            console.log(response);
          }).catch(error => {
            console.log(error);
          });

      }


      render() {
        return (
            <Container className="m-5">
               <Row className="justify-content-md-center" >
                    <h3>Login</h3>
               </Row>
               <Row className="justify-content-center">
               <Form onSubmit={this.postData.bind(this)} style={{width: '30%'}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter stud number" onChange={this.dataChange.bind(this)} name="stud_no" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.dataChange.bind(this)} placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg" block >
                        Submit
                    </Button>
                </Form>
               </Row>
            </Container>
        );
      }
    }
    