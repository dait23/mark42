import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Route, Link, withRouter } from "react-router-dom";
import { inject, observer, Provider } from "mobx-react";

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Splash extends Component {

  render() {
     const { store } = this.props;
    return (
     <Provider appStore = {appStore}>
      <div className="app flex-row align-items-center bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col md="4" style={{textAlign:'center'}}>
              <img src='assets/img/logo.png' alt='logo populix' width='200'/>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="4" style={{textAlign:'center'}}>
              <div className='footer mt-2'>&copy;2018, Populix, all right reversed.</div>
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
    );
  }
}

export default Splash;
