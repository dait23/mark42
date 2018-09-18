import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <header>
          <nav className="navbar navbar-expand-md fixed-top  ">
            <div className="container">
           <a className="navbar-brand" href="/">
              <img src="assets/img/image.png" width="108" height="32" alt="logo" />
            </a>
           
           
              <nav className="my-2 my-md-0 mr-md-3">
                <span className="top-nav">Sudah punya akun Populix ?<a className="p-2" href="login">Masuk</a></span>
              </nav>
              
        
            </div>
          </nav>
        </header>
    );
  }
}

export default Header;
