import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Home extends Component {

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

          <Row className="justify-content-center pt-2">
            <Col md="11" className="d-flex justify-content-center">
             <img src='assets/img/hero.png' className='img-responsive mt-4' alt="hero"/>
            </Col>
        
          </Row>

          <Row className="justify-content-center">

           <Col md="11" className="d-flex flex-row mt-5">
        
             <Col md="6" className="d-flex flex-column hero">
               <h1>
                 Mari bergabung <br />dengan Populix
               </h1>
               <p>
               Populix adalah platform kolaborasi bagi peneliti dan partisipan studi yang bertujuan agar memperoleh data yang akurat. Dengan bergabung menjadi partisipan kamu berkesempatan mendapatkan reward-reward dari Populix.
               </p>
              </Col>
              <Col md="6" className="d-flex flex-column hero">
               <h5>
                 Daftar cepat dan aman dengan menggunakan
               </h5>

               <div className="d-flex mt-2 justify-content-between mb-4" style={{width:'100%'}}>
                <button type="button" className="btn btn-social fb"><i className="fab fa-facebook-f"></i> Facebook</button>
                <button type="button" className="btn btn-social google"><img src="assets/img/google.png" width = '15'/> Google</button>
                <button type="button" className="btn btn-social linkedin"><i className="fab fa-linkedin"></i> Linkedin</button>
               
               </div>
               <img src="assets/img/line.png" />

               <div className="d-flex mt-4 flex-column justify-content-between mb-2" style={{width:'100%'}}>
                <a className="btn button btn-register btn-block" href="register" role="button">Daftar dengan email</a>
               
               </div>
               <span className="term">Dengan menekan tombol daftar kamu menyetujui <a href="#">Syarat dan Ketentuan</a> Populix</span>
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

export default Home;
