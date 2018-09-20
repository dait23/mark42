import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";


import Header from '../Header';
import Footer from '../Footer';
import PreForm from './Form';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Prescreening extends Component {

  constructor(props) {
    super(props);
  }


  render() {
      const { store } = this.props;

    return (
    <Provider appStore = {appStore}>
      <div className="flex-row align-items-center bg-white">
        <Header />

        <main role="main" className="container">

          

          <Row className="justify-content-center">

           <Col md="11" className="d-flex flex-row mt-5">
        
             <Col md="6" className="d-flex flex-column hero">
              <span className="welcome-member mb-2">Hi, Juinal William</span>
                <div className="justify-content-center text-left mb-2" ><img src="assets/img/dot.png" /></div>
               <h1>
                 Kami perlu <br />  mengetahui tentang <br />  kamu.
               </h1>
               <p style={{width:'80%'}}>
               Semakin banyak kamu menjawab pertanyaan screening maka semakin besar juga peluang kamu untuk bisa mengikuti studi dari kami.
                </p>
               <p style={{width:'80%'}}>
                Dengan <mark>minimal 50% kelengkapan</mark> kamu bisa mulai mendapatkan studi.
              </p>

              <div className="d-flex flex-row mt-3">
              <img src="assets/img/lock.png" />
              <span className="term3 ml-3 mt-1">
                Informasi data pribadi kamu aman <br /> bersama kami. <a href="#" >Kebijakan privasi </a>
              </span>
              </div>
              </Col>
              <Col md="6" className="d-flex flex-column hero preline">
               
              <PreForm />
               
              </Col>

          

          </Col>
          </Row>
        
        </main>

 
      </div>
    </Provider>
    );
  }
}

export default Prescreening;
