import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Forgot extends Component {

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
               <h1>
                 Lupa kata sandi ?  <br />Tetap tenang.
               </h1>
               <p style={{width:'80%'}}>
               Silahkan masukan email yang kamu gunakan untuk akun Populix  dan kami akan mengirimkan instruksi selanjutnya.
                </p>
              </Col>
              <Col md="6" className="d-flex flex-column hero">
               
               <Form>
                   <FormGroup>
                    <Label className="label">Alamat Email</Label>
                    <Input type="email" className="input-form" name="email" placeholder="" />
                  </FormGroup>
                  
               </Form>
               <div className="d-flex mt-2 justify-content-between mb-4" style={{width:'100%'}}>
                <button type="button" className="btn button btn-login btn-block">Kirim Ulang Kata Sandi</button>
               </div>
       

               
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

export default Forgot;
