import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Route, Link, withRouter } from "react-router-dom";
import { inject, observer, Provider } from "mobx-react";

import Fot from './Fot';
import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

//@inject("AppStore")
//@observer
class Splash extends Component {
 
  constructor(props) {
    super(props);
  }


  render() {

      const { store } = this.props;
      //console.log(store)

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
              <Fot />
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
    );
  }
}

export default Splash;
