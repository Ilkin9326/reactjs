import React, { Component } from "react";
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

const initalState = {
    name: "",
    surname: "",
    address: "",
    university: "",
    nameError: "",
    sNameError: "",
    addrError: "",
    uniError: ""
}

export default class Login extends Component{
   
     state = initalState;
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.inputName = React.createRef();
        this.inputsName = React.createRef();
        this.inputAdres = React.createRef();
        this.inputUniversity = React.createRef();
      }

      signUp = () =>{
          let nameError = "";
          let sNameError = "";
          let addrError = "";
          let uniError = "";

          if(!this.state.name){
              nameError = "Adi daxil edin";
              this.inputName.current.focus();
          }
          
          if(!this.state.surname){
              sNameError = "Soyadi daxil edin";
              this.inputsName.current.focus();
          } 

          if(!this.state.address){
            addrError = "Unvani daxil edin";
            this.inputAdres.current.focus();
          }

          if(!this.state.university){
            uniError = "Universiteti daxil edin";
            this.inputUniversity.current.focus();
          }
                    
          if(nameError || sNameError || addrError || uniError){
              this.setState({ nameError, sNameError, addrError, uniError});
              return false;
          }

          return true;
      }

      handleSubmit = event => { 
          event.preventDefault();
          const isValid = this.signUp();
          if(isValid){
              console.log(this.state);
              this.setState(initalState);
          }
      }
    
      handleChange = (e) => {
          this.setState({[e.target.name]: e.target.value})
          this.setState({[e.target.surname]: e.target.value})
          this.setState({[e.target.address]: e.target.value})
          this.setState({[e.target.university]: e.target.value})
      }


      render() {
        return (
            <Container className="mt-5 mb-5">
               <Row className="justify-content-md-center" >
                    <h3>Qeydiyyat</h3>
               </Row>
               <Row className="justify-content-center">
               <Form onSubmit={this.handleSubmit} action="" noValidate method="POST" >
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Ad</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} ref={this.inputName} />
                        {this.state.nameError ? ( <Form.Label style={{color:'red'}}> {this.state.nameError} </Form.Label>) : null}
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Soyad</Form.Label>
                        <Form.Control type="text" name="surname" placeholder="Enter surname" value={this.state.surname} onChange={this.handleChange} ref={this.inputsName} />
                        {this.state.sNameError ? ( <Form.Label style={{color:'red'}}> {this.state.sNameError} </Form.Label>) : null}
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" name="address" value={this.state.address} onChange={this.handleChange} ref={this.inputAdres} />
                    {this.state.addrError ? ( <Form.Label style={{color:'red'}}> {this.state.addrError} </Form.Label>) : null}
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>University</Form.Label>
                    <Form.Control type="text" placeholder="Enter university" name="university" value={this.state.university} onChange={this.handleChange} ref={this.inputUniversity} />
                    {this.state.uniError ? ( <Form.Label style={{color:'red'}}> {this.state.uniError} </Form.Label>) : null}
                </Form.Group>
                {/*<Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" required="required" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Azerbaijan</option>
                        <option>Russian</option>
                        <option>USA</option>
                        <option>Germany</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Enter postal code" required="required" />
                    </Form.Group>
                </Form.Row>*/}
                <Button variant="primary" type="submit" size="lg" block>Submit</Button>
                </Form>
               </Row>
            </Container>
        );
      }
    }
    