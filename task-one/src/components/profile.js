//library
import React, { Component } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//state management redux
import { getUsers } from "../_actions/usersA";
import { getPet, getPetAuth } from "../_actions/petsA";
import { getSpecies } from "../_actions/speciesA";
//component
import ModalPayment from "./modal-payment";
import CardProfile from "../card/card-profile";

import "../App.css";

class Profile extends Component {
  componentDidMount() {
    this.props.getPetAuth();
    this.props.getUsers();
    this.props.getSpecies();
  }

  constructor(props) {
    super(props);
    this.state = {
      modalPayment: false,
      dataUser: "",
      petId: null
    };
  }

  openPayment = () => {
    this.setState({
      modalPayment: !this.state.modalPayment
    });
  };
  // getId = id => {
  //   if (id) {
  //     this.setState({ petId: id });
  //   } else {
  //     this.setState({ petId: 1 });
  //   }
  // };
  render() {
    const user = {
      data: this.props.users.data,
      isLoading: this.props.users.isLoading,
      error: this.props.users.error
    };
    const pet = {
      data: this.props.pet.data.data,
      authPets: this.props.pet.authPets,
      isLoading: this.props.pet.isLoading,
      error: this.props.pet.error
    };
    const species = {
      data: this.props.species.data,
      isLoading: this.props.species.isLoading,
      error: this.props.species.error
    };
    // console.log("ini pet kamu", pet.data);
    if (user.isLoading || pet.isLoading) {
      return (
        <div className="text-center align-center my-auto">
          <h5>wait for a minute</h5>
          <img
            src="assets/images-content/Spinner-1s-200px.gif"
            style={{ height: "100px" }}
            alt="loading"
          />
        </div>
      );
    }
    if (user.error || pet.error) {
      return (
        <>
          <h1>Data Error</h1>
        </>
      );
    }
    return user.data.profile ? (
      <div className="container-fluid p-0">
        <div className="row bg-image-home m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
            <Row className="m-0">
              <Col lg={4} md={4} sm={4} xs={4} className="p-0">
                <CardProfile
                  photo={pet.data ? pet.data.photo : null}
                  getPet={this.props.getPet}
                  authPets={pet.authPets}
                  species={species.data}
                  dataProfile={user.data.profile}
                  email={user.data.email}
                />
              </Col>
              <Col lg={8} md={8} sm={8} xs={8} className="px-0 p-3">
                <Container fluid className="p-0 m-0">
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                      <Button
                        className="btn-sm mb-2 pull-right"
                        style={{ width: "100px" }}
                        onClick={this.openPayment}
                      >
                        Add Item
                      </Button>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                      <Card
                        className="mx-auto"
                        style={{
                          maxHeight: "80vh",
                          maxWidth: "50vh",
                          overflowY: "auto"
                        }}
                      >
                        <Card.Img
                          src={
                            pet.data
                              ? pet.data.photo
                              : pet.authPets.data[0].photo
                          }
                          style={{
                            objectFit: "cover",
                            height: "50vh",
                            width: "auto"
                          }}
                        />
                        <Card.Body className="p-0">
                          <Container>
                            <Row className="text-dark m-0 px-2">
                              <Col lg={8} md={8} sm={8} xs={8} className="p-0">
                                <h3 className="font-weight-bold">
                                  {pet.data
                                    ? pet.data.name
                                    : pet.authPets.data[0].name}
                                </h3>
                              </Col>
                              <Col
                                lg={3}
                                md={3}
                                sm={3}
                                xs={3}
                                className="p-0 text-right"
                              >
                                <p>
                                  {pet.data
                                    ? pet.data.species.name
                                    : pet.authPets.data[0].species.name}
                                </p>
                              </Col>
                            </Row>
                            <Row className="text-dark m-0">
                              <Col
                                lg={12}
                                md={12}
                                sm={12}
                                xs={12}
                                className="p-0 text-left"
                              >
                                <ul className="fa-ul">
                                  <li>
                                    <i className="fa-li fa fa-user fa-sm" />
                                    {pet.data
                                      ? pet.data.user.name
                                      : pet.authPets.data[0].user.name}
                                  </li>
                                  <li>
                                    <i className="fa-li fa fa-map fa-sm" />
                                    10 km dari sini
                                  </li>
                                  <li>
                                    <i className="fa-li fa fa-venus-mars fa-sm" />
                                    {pet.data
                                      ? pet.data.gender
                                      : pet.authPets.data[0].gender}
                                    -
                                    {pet.data
                                      ? pet.data.age
                                      : pet.authPets.data[0].age}
                                  </li>
                                  <li>
                                    <i className="fa-li fa fa-phone fa-sm" />
                                    phonenumber :{user.data.profile.phone}
                                  </li>
                                </ul>
                                <h4>About Pet</h4>
                                <ul>
                                  <li>
                                    {pet.data
                                      ? pet.data.about
                                      : pet.authPets.data[0].about}
                                  </li>
                                </ul>
                              </Col>
                              <Col
                                lg={12}
                                md={12}
                                sm={12}
                                xs={12}
                                className="p-0 text-center"
                              >
                                <Link to="/Edit">
                                  <Button
                                    className="btn-sm mb-2"
                                    style={{ width: "100px" }}
                                  >
                                    Edit
                                  </Button>
                                </Link>
                              </Col>
                            </Row>
                          </Container>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </div>
        </div>
        <ModalPayment
          visiblePayment={this.state.modalPayment}
          hidePayment={this.openPayment}
        />
      </div>
    ) : null;
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    pet: state.pets,
    species: state.species
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getPet: id => dispatch(getPet(id)),
    getSpecies: () => dispatch(getSpecies()),
    getPetAuth: () => dispatch(getPetAuth())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
