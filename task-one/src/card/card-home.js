import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";

import dataDummy from "../components/datadummy";
import ContentImage from "../components/contentImage";

class CardHome extends Component {
  constructor() {
    super();
    this.state = {
      indexPet: 0
    };
  }
  changeLookPet = indexPet => {
    console.log(indexPet);
    this.setState({
      indexPet
    });
  };
  render() {
    const { indexPet } = this.state;
    const authPets = this.props.authPets.data;
    console.log("ini pet kamu hal card home", authPets);
    return (
      <Card style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <Container fluid className="p-0">
          <Row className="justify-content-center bg-image-default py-auto mx-0 my-auto">
            <Col lg={4} md={4} sm={4} xs={4} className="p-0 my-auto text-right">
              <Link to="/profile" className="text-white">
                <Image
                  src={
                    authPets[indexPet]
                      ? authPets[indexPet].photo
                      : this.props.authPet.photo
                  }
                  roundedCircle
                  className="img-fit-rounded my-2 ml-3"
                />
              </Link>
            </Col>
            <Col
              lg={8}
              md={8}
              sm={8}
              xs={8}
              className="pr-2 my-auto text-right"
            >
              <DropdownButton
                id="dropdown-basic-button"
                title={
                  authPets[indexPet]
                    ? authPets[indexPet].name
                    : this.props.authPet.name
                }
                onSelect={this.changeLookPet}
              >
                <div className="container">
                  {authPets.map((authPet, index) => (
                    <Dropdown.Item eventKey={index} className="p-0">
                      <div className="row p-2">
                        <div className="col-6 text-left p-0">
                          <Image
                            src={authPet.photo}
                            roundedCircle
                            className="img-fit-rounded my-0 ml-0 p-0"
                            style={{ width: "50px", height: "auto" }}
                          />
                        </div>
                        <div
                          className="col-6 text-right p-0"
                          style={{ textTransform: "uppercase" }}
                        >
                          {authPet.name}
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </DropdownButton>
              {/* <select
                style={{
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                  textTransform: "uppercase"
                }}
                className="form-control"
                name="petId"
                value={petId}
                onChange={this.handleChange}
                placeholder="chosee species"
              >
                {authPets.map((authPet, index) => (
                  <option key={index} value={authPet.id}>
                    <Image
                      src="assets/images-content/1.jpg"
                      roundedCircle
                      className="img-fit-rounded my-2 ml-3"
                    />
                    {authPet.name}
                  </option>
                ))}
              </select> */}
            </Col>
          </Row>
          <Row
            className="py-auto mx-0 my-auto"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <Card.Body style={{ height: "100vh" }} className="p-0">
              <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                <div className="nav-link text-left">
                  <a href="#home" className="active">
                    <strong>Match</strong>
                  </a>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="p-1">
                <div className="container-fluid">
                  <div className="row">
                    {dataDummy.dataImage.map((item, index) => {
                      return (
                        <>
                          <ContentImage
                            key={index + 1}
                            nameUrl={`${item.image}`}
                            name={item.name}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Card.Body>
          </Row>
        </Container>
      </Card>
    );
  }
}
export default CardHome;
