import React, { Component } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';

class ModalAdd extends Component {
    render() {
        return (
            <Modal show={this.props.visibleAdd} size="sm">
                <Modal.Header closeButton onClick={this.props.hideAdd}>
                    <Modal.Title>Add your Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ 'max-height': 'calc(100vh - 300px)', 'overflow-y': 'auto' }}>
                    <form>
                        <div className="form-group">
                            <label for="namePet">Name Pet</label>
                            <input type="text" className="form-control" id="namePet" placeholder="Masukkan Name Pet" />
                        </div>
                        <div className="form-group">
                            <label for="breeder">Breeder</label>
                            <input type="text" className="form-control" id="breeder" placeholder="Masukkan breeder" />
                        </div>
                        <div className="form-group">
                            <label for="customRange1">Gender</label>
                            <select className="custom-select">
                                <option selected>Gender</option>
                                <option value="1">male</option>
                                <option value="2">female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="customRange1">Species</label>
                            <select className="custom-select">
                                <option selected>Species</option>
                                <option value="1">Cat</option>
                                <option value="2">bird</option>
                                <option value="2">dog</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="namePet">About Pet</label>
                            <textarea type="text" className="form-control" id="namePet" placeholder="akkadkankladnlan" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ModalAdd;