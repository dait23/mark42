import React, { Component } from 'react';
import { Progress, Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";
import Select from 'react-styled-select'

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class PreForm extends Component {

  constructor(props) {
    super(props);
  }
  


  render() {
      const { store } = this.props;

      const options = [
        { label: "Sunda", value: 1},
        { label: "Jawa", value: 2},
      ]

      const religi = [
        { label: "Islam", value: 1},
        { label: "Kristen", value: 2},
      ]

    return (
    <Provider appStore = {appStore}>
      <div className="prebox">
        <div className="progressBox">
         <Progress className="preBar" color="warning" value={5} max={100}></Progress>
          <div className="text-right preText mt-2">5% Kelengkapan sebelum mengambil studi</div>
        </div>
        <Form className="mt-4">
         <FormGroup>
            <img src="assets/img/gender.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Saya adalah ...</Label>
            <div className="d-flex flex-row justify-content-around mt-3 ml-4">
           
             <div className="d-flex boxGender justify-content-center align-items-center">
             <img src="assets/img/man.png" />
             </div>
              <div className="d-flex boxGender justify-content-center align-items-center">
              <img src="assets/img/women.png" />

             </div>

            </div>
         </FormGroup>

         <FormGroup>
            <img src="assets/img/baby.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Saya lahir pada ...</Label>
           <Input type="date" name="date" className="preDate ml-4" placeholder="datetime placeholder" />
         </FormGroup>
         
         <FormGroup>
            <img src="assets/img/etnis.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Etnis saya adalah ...</Label>
            <Select
            className="preSelect mt-2"
             placeholder="Pilih"
            options={options}

          />
         
         </FormGroup>

         <FormGroup>
            <img src="assets/img/religi.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Agama / Kepercayaan saya adalah ...</Label>
            <Select
            className="preSelect mt-2"
            placeholder="Pilih"
            options={religi}

          />
         
         </FormGroup>

         <FormGroup>
            <img src="assets/img/imagecity.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Kewarganegaraan saya adalah ...</Label>
            <Select
            className="preSelect mt-2"
            placeholder="Pilih"
            options={religi}

          />
         
         </FormGroup>

         <FormGroup>
            <img src="assets/img/home.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Alamat saya adalah ...</Label>
             <Input type="text" className="preInput ml-4" placeholder="Alamat" />
        </FormGroup>

        <FormGroup>
            <img src="assets/img/kota.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Kota tempat saya tinggal di ...</Label>
              <Select
            className="preSelect mt-2"
            placeholder="Pilih"
            options={religi}

          />
        </FormGroup>
         <FormGroup>
            <img src="assets/img/imageprov.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Provinsi tempat saya tinggal di ...</Label>
              <Select
            className="preSelect mt-2"
            placeholder="Pilih"
            options={religi}

          />
        </FormGroup>


        <FormGroup className="flex-column">
            <img src="assets/img/ktp.png" style={{marginTop:'-2px'}}/><Label className="ml-3 mt-2 preLabel">Informasi KTP saya ...</Label>
              
        </FormGroup>

         <FormGroup className="flex-column ml-3">
            
              <div className="upload-btn-wrapper">
              <button className="btn"><img src="assets/img/upload.png" style={{marginTop:'-5px'}}/> &nbsp;Pilih File</button>
              <input type="file" name="myfile" /><br />
              <Label className="ml-3 mt-2 preLabelx">Maksimal file <strong>1</strong> Mb.</Label>
            </div>

        </FormGroup>
         
      

        </Form>
      </div>
    </Provider>
    );
  }
}

export default PreForm;
