import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Welcome2 extends Component {

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
                 Silahkan masukkan <br />nomor handphone kamu.
               </h1>
               <p style={{width:'80%'}}>
               Kami akan memberitahukan kamu lewat SMS jika ada studi yang tersedia untuk kamu ambil.
                </p>
              </Col>
              <Col md="6" className="d-flex flex-column hero">
               
               <Form className="mt-5">
                   <FormGroup>
                    <Label className="label">Nomor handphone aktif</Label>
                    <Input type="email" className="input-form" name="email" placeholder="Contoh: 08126252728" />
                  </FormGroup>
                  
               </Form>
               <div className="d-flex justify-content-between mb-4" style={{width:'100%'}}>
                <button type="button" className="btn button btn-login btn-block">Lanjut &nbsp;&nbsp;<i className="fas fa-arrow-right button-arrow"></i></button>
               </div>
       
              <span className="term2 mt-2"><a href="#">Kirim ulang email konfirmasi</a></span>
               
              </Col>

          

          </Col>
          </Row>
        
        </main>

       <Footer />
      </div>
    </Provider>
    );
  }
}

export default Welcome2;
