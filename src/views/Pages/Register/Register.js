import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Register extends Component {

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
                 Mari bergabung  <br />dengan Populix.
               </h1>
               <p style={{width:'90%'}}>
               Populix adalah platform kolaborasi bagi peneliti dan partisipan studi yang bertujuan agar memperoleh data yang akurat. Dengan bergabung menjadi partisipan kamu berkesempatan mendapatkan reward-reward dari Populix.
                </p>
              </Col>
              <Col md="6" className="d-flex flex-column hero">
               
               <Form>
                   <span className=" d-flex flex-row justify-content-between">
                   <FormGroup>
                    <Label className="label">Nama Depan</Label>
                    <Input type="text" className="input-form" name="email" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="label">Nama Belakang</Label>
                    <Input type="text" className="input-form" name="email" placeholder="" />
                  </FormGroup>

                   </span>
                   
                   <FormGroup>
                    <Label className="label">Alamat Email</Label>
                    <Input type="email" className="input-form" name="email" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="label">Kata Sandi</Label><a href="forgot" className="float-right forgot">Lupa Kata sandi ?</a>
                    <Input type="password" className="input-form" name="password"  placeholder="" />
                  </FormGroup>
               </Form>
               <div className="d-flex mt-2 flex-column justify-content-between mb-4" style={{width:'100%'}}>
                <button type="button" className="btn button btn-login btn-block">Daftar</button>
                 <span className="term mt-2">Dengan menekan tombol daftar kamu menyetujui <a href="#">Syarat dan Ketentuan</a> Populix</span>
               </div>
               <div className="justify-content-center text-center " ><img src="assets/img/dot.png" /></div>
               

              
                
                

               <span className="term mt-4">Daftar dengan akun <a href="#">Facebook</a>, <a href="#">Google</a>,  <a href="#">Linkedin</a></span>
               
               
              
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

export default Register;
