window.$ = window.jQuery = require('jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Col, Row, FormControl, FormGroup, InputGroup, ControlLabel, Button, Glyphicon } from 'react-bootstrap';
import Modal from 'react-modal';

class App extends Component {
  state = { modalIsOpen: false }
  _closeModal() {
    this.setState({ modalIsOpen: false });
  }
  _openModal() {
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <Row>
          <Col md={2}>
            <FormGroup bsSize="large">
              <ControlLabel>Min Price</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" placeholder="0.00" />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup bsSize="large">
              <ControlLabel>Min Price</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" placeholder="0.00" />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup bsSize="large">
              <ControlLabel>Min Price</ControlLabel>
                <FormControl type="text" placeholder="0.00" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup bsSize="large">
              <ControlLabel>Min Price</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" placeholder="0.00" />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup bsSize="large">
              <ControlLabel>Min Price</ControlLabel>
                <FormControl type="text" placeholder="0.00" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup bsSize="large">
              <ControlLabel>Min Price</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" placeholder="0.00" />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <center><Button onClick={e => this._openModal()}>Open Modal</Button></center>
        </Row>

        <Modal
          className="Modal__Bootstrap modal-dialog"
          closeTimeoutMS={0}
          isOpen={this.state.modalIsOpen}
          onRequestClose={e => this._closeModal()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={e => this._closeModal()}>
                <Glyphicon glyph="remove" />
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">Test Modal</h4>
            </div>
            <div className="modal-body">
              <br />
              <br />
              <br />
            </div>
            <div className="modal-footer">
              <span className="pull-right">
                <Button bsStyle="default" onClick={e => this._closeModal()}>Close</Button>
              </span>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
