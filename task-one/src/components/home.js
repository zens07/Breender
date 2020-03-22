import React, { Component } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import "../App.css";

import CardHome from "../card/card-home";
import CardHomeLeft from "../card/card-home-left";
import { getUsers } from "../_actions/usersA";
import { getPet, getPetAuth } from "../_actions/petsA";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getPetAuth();
    this.props.getUsers();
    // this.props.getSpecies();
  }

  constructor(props) {
    super(props);
    this.state = {
      defaultAnimated: true,
      actionLeft: false,
      actionRight: false,
      actionRefresh: false
    };
  }
  handleSwipeLeft = () => {
    // console.log('test')
    this.setState({
      actionLeft: true,
      actionRight: false,
      actionRefresh: false
    });
  };

  handleSwipeRight = () => {
    this.setState({
      actionLeft: false,
      actionRight: true,
      actionRefresh: false
    });
  };

  handleRefresh = () => {
    this.setState({
      actionLeft: false,
      actionRight: false,
      actionRefresh: true
    });
  };
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
    // console.log(pet.authPets);
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
          <h1>anda tidak memiliki pet</h1>
        </>
      );
    }
    return user.data.profile || pet.data ? (
      <div className="container-fluid p-0">
        <div className="row bg-image-home m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
            <Row className="m-0">
              <Col lg={4} md={4} sm={4} xs={4} className="p-0">
                <CardHome
                  authPet={pet.authPets.data[0]}
                  authPets={pet.authPets}
                />
              </Col>
              <Col lg={8} md={8} sm={8} xs={8} className="p-0">
                <Container fluid className="p-0 m-0">
                  <Row className="text-dark">
                    <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                      <CardHomeLeft
                        defaultAnimated={this.state.defaultAnimated}
                        refresh={this.state.actionRefresh}
                        nope={this.state.actionLeft}
                        love={this.state.actionRight}
                      />
                    </Col>
                  </Row>
                </Container>
                <div className="container">
                  <Row className="button-action">
                    <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                      <Button
                        className="btn-light btn-sm rounded-circle custom-shadow m-2"
                        onClick={() => {
                          this.handleRefresh();
                        }}
                      >
                        <span>
                          <Image
                            src="assets/images-content/icon-refresh.png"
                            className="img-icon"
                          />
                        </span>
                      </Button>
                      <Button
                        className="btn-light btn-sm rounded-circle custom-shadow m-2"
                        onClick={() => {
                          this.handleSwipeLeft();
                        }}
                      >
                        <span>
                          <Image
                            src="assets/images-content/icon-delete.png"
                            className="img-icon"
                          />
                        </span>
                      </Button>
                      <Button
                        className="btn-light btn-sm rounded-circle custom-shadow m-2"
                        onClick={() => {
                          this.handleSwipeRight();
                        }}
                      >
                        <span>
                          <Image
                            src="assets/images-content/icon-love.png"
                            className="img-icon"
                          />
                        </span>
                      </Button>
                      <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                        <span>
                          <Image
                            src="assets/images-content/icon-petir.png"
                            className="img-icon"
                          />
                        </span>
                      </Button>
                    </Col>
                  </Row>
                  <Row className="information-action">
                    <Col lg={2} md={2} sm={2} xs={2} className="m-auto p-0">
                      <Button
                        className="btn btn-secondary custom-shadow2"
                        style={{ height: "35px", width: "80px" }}
                      >
                        Hide
                      </Button>
                    </Col>
                    <Col lg={1} md={1} sm={1} xs={1} className="m-auto p-0">
                      <i className="fa fa-chevron-left">
                        <span> NO</span>
                      </i>
                    </Col>
                    <Col lg={1} md={1} sm={1} xs={1} className="m-auto p-0">
                      <i className="fa fa-chevron-right">
                        <span> YES</span>
                      </i>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} className="m-auto p-0">
                      <i className="fa fa-chevron-up">
                        <span> Open Profile</span>
                      </i>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} className="m-auto p-0">
                      <i className="fa fa-chevron-down">
                        <span> Close Profile</span>
                      </i>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className="m-auto p-0">
                      <div className="container">
                        <div className="row">
                          <Col
                            lg={6}
                            md={6}
                            sm={6}
                            xs={6}
                            className="m-auto p-0"
                          >
                            <input
                              type="text"
                              className="form-control form-control-sm rounded-pill"
                              id="nextFoto"
                            />
                          </Col>
                          <Col
                            lg={6}
                            md={6}
                            sm={6}
                            xs={6}
                            className="m-auto p-0"
                          >
                            <strong>Next Foto</strong>
                          </Col>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    pet: state.pets
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getPet: id => dispatch(getPet(id)),
    getPetAuth: () => dispatch(getPetAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
