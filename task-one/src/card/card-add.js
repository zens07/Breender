import React, { Component } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueRange: 0
    };
  }
  handleChange = event => {
    this.setState({
      valueRange: event.target.value
    });
  };
  render() {
    return (
      <Card style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <Container fluid className="p-0">
          <Row className="justify-content-center bg-image-default py-auto mx-0 my-auto">
            <Col
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className="p-0 my-auto text-center"
              style={{ fontSize: "2vw" }}
            >
              <Link to="/home" className="text-white">
                <i className="fa fa-chevron-left fa-lg" />
              </Link>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4} className="p-0 m-0 text-center">
              <Link to="/home" className="text-white">
                <Image
                  src="assets/images-content/1.jpg"
                  roundedCircle
                  className="img-fit-rounded my-2 ml-2"
                />
              </Link>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className="p-0 my-auto text-center"
              style={{ fontSize: "4vw" }}
            >
              <h4>Add Pet</h4>
            </Col>
          </Row>
          <Row
            className="py-auto mx-0 my-auto"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <Card.Body style={{ height: "100vh" }} className="p-0">
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="font-gradient1 p-3"
              >
                <h4>Account Setting</h4>
              </Col>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="bg-white text-dark p-0"
              >
                <Row className="m-0 px-1">
                  <Col lg={2} md={2} sm={2} xs={2} className="p-0">
                    <label>Email</label>
                  </Col>
                  <Col lg={10} md={10} sm={10} xs={10} className="p-0">
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control-plaintext text-right p-0"
                      placeholder="zezen07@gmail.com"
                      disabled
                    />
                  </Col>
                </Row>
                <hr />
                <Row className="m-0 px-1">
                  <Col lg={2} md={2} sm={2} xs={2} className="p-0">
                    <label>Phone</label>
                  </Col>
                  <Col lg={10} md={10} sm={10} xs={10} className="p-0">
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control-plaintext text-right p-0"
                      placeholder="081772891204"
                      disabled
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="font-gradient1 p-3"
              >
                <h4>Discovery Setting</h4>
              </Col>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="bg-white text-dark p-0"
                style={{ height: "100vh" }}
              >
                <Row className="m-0 px-1">
                  <Col lg={8} md={8} sm={8} xs={8} className="pt-3">
                    <h6 className="text-left" style={{ fontSize: "0.9em" }}>
                      Maximum Distance<strong>10 km</strong>
                    </h6>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={4} className="pt-3">
                    <h6 className="text-right">{this.state.valueRange} km</h6>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12} className="pt-2">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={this.state.valueRange}
                      className="custom-range"
                      onChange={this.handleChange}
                      id="customRange1"
                    />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12} className="pt-2">
                    <form>
                      <label>Age</label>
                      <select className="custom-select">
                        <option value="">Adult</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </form>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12} className="pt-3">
                    <label>Species</label>
                    <select className="custom-select">
                      <option value="">species</option>
                      <option value="1">cat</option>
                      <option value="2">kucing</option>
                      <option value="3">meong</option>
                    </select>
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="pt-3 text-center"
                  >
                    <Link to="/">
                      <Button
                        className="btn-sm btn-danger mb-2"
                        style={{ width: "100px" }}
                      >
                        logout
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Card.Body>
          </Row>
        </Container>
      </Card>
    );
  }
}
export default CardAdd;
