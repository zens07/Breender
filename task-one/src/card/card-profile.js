import React, { Component } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
// import {  } from "react-router-dom";

class CardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: 0,
      petId: 0,
      speciesId: 0,
      redirect: false,
      statusToken: false
    };
  }

  // componentWillMount() {
  //   const tokenkey = localStorage.getItem("token");
  //   if (tokenkey) {
  //     this.Authentication(true);
  //   } else {
  //     this.Authentication(false);
  //   }
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDetailPet = e => {
    this.setState(
      {
        petId: e.target.value
      },
      () => {
        const id = this.state.petId;
        this.props.getPet(id);
      }
    );
  };

  logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      this.setState({ redirect: true });
    } else {
      this.setState({ redirect: true });
    }
  };

  // Authentication = status => {
  //   console.log("heyy", status);
  //   this.setState({ statusToken: status });
  // };

  render() {
    const user = {
      name: this.props.dataProfile.name,
      email: this.props.email,
      phone: this.props.dataProfile.phone,
      address: this.props.dataProfile.address
    };

    const species = {
      data: this.props.species
    };
    const authPets = this.props.authPets.data;
    // console.log({ authPets });
    const { range, petId, speciesId, redirect, statusToken } = this.state;

    return (
      <>
        {redirect ? <Redirect to="/" /> : null}
        <Card style={{ maxHeight: "100%", overflowY: "auto" }}>
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
              <Col
                lg={4}
                md={4}
                sm={4}
                xs={4}
                className="pr-2 pl-0 m-0 text-left"
              >
                <Link to="/home" className="text-white">
                  <Image
                    src={
                      this.props.photo ? this.props.photo : authPets[0].photo
                    }
                    className="img-fit-rounded my-2 ml-2"
                  />
                </Link>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="p-0 my-auto">
                <h1 style={{ fontSize: "2.5vw" }}>Profile Pet</h1>
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
                      <label for="email">Email</label>
                    </Col>
                    <Col lg={10} md={10} sm={10} xs={10} className="p-0">
                      <input
                        type="text"
                        id="disabledTextInput"
                        class="form-control-plaintext text-right p-0"
                        placeholder={user.email}
                        disabled
                      />
                    </Col>
                  </Row>
                  <hr />
                  <Row className="m-0 px-1">
                    <Col lg={2} md={2} sm={2} xs={2} className="p-0">
                      <label for="phone">Phone</label>
                    </Col>
                    <Col lg={10} md={10} sm={10} xs={10} className="p-0">
                      <input
                        type="text"
                        id="disabledTextInput"
                        class="form-control-plaintext text-right p-0"
                        placeholder={user.phone}
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
                      <h6 className="text-right">{range} km</h6>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="pt-2">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        name="range"
                        value={range}
                        className="custom-range"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="pt-2">
                      <label for="customRange1">Status Account: Premium</label>
                      <select
                        className="custom-select"
                        name="petId"
                        value={petId}
                        onChange={this.handleDetailPet}
                      >
                        <option value="0" selected disabled>
                          Select Pet
                        </option>
                        {authPets.map((authPet, index) => (
                          <option key={index} value={authPet.id}>
                            {authPet.name}
                          </option>
                        ))}
                      </select>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="pt-2">
                      <label for="customRange1">Age</label>
                      <select className="custom-select">
                        <option selected disabled>
                          Adult
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="pt-3">
                      <label for="customRange1">Species</label>
                      <select
                        className="custom-select"
                        name="speciesId"
                        value={speciesId}
                        onChange={this.handleChange}
                        placeholder="chosee species"
                      >
                        <option value="0" selected disabled>
                          Species
                        </option>
                        {species.data.map((species, index) => (
                          <option key={index} value={species.id}>
                            {species.name}
                          </option>
                        ))}
                      </select>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="pt-3 text-center"
                    >
                      <Button
                        className="btn-sm btn-danger mb-2"
                        style={{ width: "100px" }}
                        onClick={this.logout}
                      >
                        logout
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Card.Body>
            </Row>
          </Container>
        </Card>
      </>
    );
  }
}
export default CardProfile;
