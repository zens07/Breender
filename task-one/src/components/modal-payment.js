import React, { Component } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";

class ModalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalConfirmation: false,
      sec: 3
    };
  }

  openConfirmation = () => {
    console.log(this.props)
    this.setState({
      modalConfirmation: !this.state.modalConfirmation
    }, () => {
      const myTimer = setInterval(() => this.setState({ sec: this.state.sec - 1 }), 1000);
      setTimeout(() => {
        clearInterval(myTimer);
        this.props.history.push('/add');
      }, 3000)
    });
  };

  render() {
    return (
      <>
        <Modal show={this.props.visiblePayment} size="sm" centered>
          <Modal.Header
            closeButton
            onClick={this.props.hidePayment}
            className="imageBackground"
            style={{ height: "40px" }}
          />
          <Container>
            <Row>
              <Col className="p-0">
                <Modal.Body className="imageBackground">
                  <p className=" text-justify">
                    Update Fitur premium mu dan dapatkan fitur-fitur yang
                    menarik
                  </p>
                  <div className=" text-center">
                    <h6>Rekening : 81830810801</h6>
                    <input type="text" className="form-control rounded" />
                    <h6 className="text-dark m-4">
                      <strong>Bukti Transfer</strong>
                    </h6>
                    <i
                      className="fa fa-camera fa-4x p-3"
                      style={{
                        backgroundColor: "lightgrey",
                        borderRadius: "20px"
                      }}
                    />
                  </div>
                  {/* <Link to='/Add'>  */}
                  <Button
                    className="w-100 mt-4"
                    style={{ backgrounColor: "gba(0,65,255,1)" }}
                    onClick={() => {
                      this.openConfirmation()
                      this.props.hidePayment()
                    }}
                  >
                    Kirim
                  </Button>
                  {/* </Link> */}
                </Modal.Body>
              </Col>
            </Row>
          </Container>
        </Modal>
        <Modal show={this.state.modalConfirmation} centered>
          <Modal.Body>
            <h6>Menunggu Konfirmasi pembayaran, redirect dalam {this.state.sec} detik</h6>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default withRouter(ModalPayment);
