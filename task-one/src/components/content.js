import React, { Component } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

import ModalLogin from "./modal-login";
import Navigation from "./navigation";
import ModalRegister from "./modal-register";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      modalLogin: false,
      modalRegister: false
    };
  }

  openLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  };
  openRegister = () => {
    this.setState({
      modalRegister: !this.state.modalRegister
    });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row d-flex justify-content-center>
            <Col className="p-0" lg={12} md={12} sm={12} xs={12}>
              <Card className="text-white custom-font">
                <Card.Img
                  src="assets/images-content/bg-cat.jpg"
                  alt="background image"
                  style={{ height: "100vh", backgroundSize: "cover" }}
                />
                <Card.ImgOverlay>
                  <Col className="full" lg={12} md={12} sm={12} xs={12}>
                    <Navigation popupLogin={this.openLogin} />
                  </Col>
                  <Col className="p-0" lg={12} md={12} sm={12} xs={12}>
                    <Card.Body>
                      <Col className="spacing" md="auto">
                        <Card.Title
                          className="text-center"
                          style={{ color: "white" }}
                        >
                          <h1 className="size-lg-responsive">
                            Swipe{" "}
                            <strong style={{ color: "darkred" }}>right.</strong>
                            <br />
                            Make your pet{" "}
                            <strong style={{ color: "cyan" }}>happy</strong>
                          </h1>
                        </Card.Title>
                      </Col>
                      <Col md={{ span: 6, offset: 3 }}>
                        <Card.Text className="size-md-responsive text-center">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Col>
                      <Col className="text-center">
                        <Button
                          className="responsive-width rounded"
                          onClick={this.openRegister}
                          style={{ width: "100px" }}
                        >
                          Register
                        </Button>
                      </Col>
                    </Card.Body>
                  </Col>
                </Card.ImgOverlay>
                <div className="bg-image-default text-center m-0 p-0">
                  <h1>FIND YOUR PET'S MATCH</h1>
                </div>
              </Card>
            </Col>
          </Row>
          <Row></Row>
          <ModalRegister
            visibleRegister={this.state.modalRegister}
            hideRegister={this.openRegister}
          />
          <ModalLogin
            visibleLogin={this.state.modalLogin}
            hideLogin={this.openLogin}
          />
        </Container>
      </div>
    );
  }
}

export default Content;
