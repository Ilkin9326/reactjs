import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';

export default class Home extends React.Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    
      render() {
        const { index, direction } = this.state;
    
        return (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://4.bp.blogspot.com/-o3_WoF7bfFU/VjVqZN_2FCI/AAAAAAAAW_c/pNbLHwU9i_g/s1600/Deardra%2BFarnum%2Bin%2Bfront%2Bof%2Bmangaler.JPG"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>React</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.lhsparker.org/hs-fs/hubfs/Blog_Images/banner3.jpg?t=1532017756906&width=1366&name=banner3.jpg"
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>React</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.licdn.com/dms/image/C4E1BAQHR-NS_Aon58A/company-background_10000/0?e=2159024400&v=beta&t=IKvwjbVVoulY2NyaCAXgZrsDiJ2CNwlg6bclmCSkUSQ"
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>React</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
    
}