import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer} from "mobx-react";

@inject("appStore")
@observer
class Footer extends Component {
  render() {
    const store = this.props.appStore;
    return (
        <footer className="footer">
          <div className="container">
            <span className="text-muted d-flex justify-content-center">&copy; {store.footer}</span>
          </div>
        </footer>
    );
  }
}

export default Footer;
