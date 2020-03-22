import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";

//import Action
import { postRegister } from "../_actions/registerA";
import { getSpecies } from "../_actions/speciesA";
import { withRouter } from "react-router";

class ModalRegister extends Component {
  componentDidMount() {
    this.props.getSpecies();
  }
  constructor(props) {
    super(props);
    this.state = {
      name_user: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      name_pet: "",
      gender: "",
      about: "",
      photo: "",
      speciesId: "",
      message: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const {
      name_user,
      email,
      password,
      phone,
      address,
      name_pet,
      gender,
      age,
      about,
      photo,
      speciesId
    } = this.state;
    const data = {
      name_user,
      email,
      password,
      phone,
      address,
      pet: {
        name_pet,
        gender,
        age,
        about,
        photo,
        species_id: Number(speciesId)
      }
    };
    // console.log(data);
    this.props.postRegister(data);
  };
  // handleAfterPost = register => {
  //   // return "loading";
  //   let message = "";
  //   //konditional
  //   if (register.isLoading) {
  //     message = "wait for a minutes";
  //   }
  //   if (register.islogin) {
  //     localStorage.setItem("token", register.data.token);
  //     localStorage.getItem("token");
  //     message = "register success";
  //   }
  //   if (register.error) {
  //     message = "error";
  //   }
  //   // return message;
  //   this.setState({ message });
  // };
  render() {
    //properti species from reducer species
    const species = {
      data: this.props.species.data,
      isLoading: this.props.species.isLoading,
      error: this.props.species.error
    };
    // properti register from reduser register
    const register = {
      data: this.props.register.data,
      isLoading: this.props.register.isLoading,
      error: this.props.register.error,
      isLogin: this.props.register.isLogin
    };

    if (register.isLogin) {
      this.props.history.push("/home");
    }
    if (register.data.token) {
      localStorage.setItem("token", register.data.token);
      // localStorage.getItem("token");
    }
    const {
      name_user,
      email,
      password,
      phone,
      address,
      name_pet,
      gender,
      age,
      about,
      photo,
      speciesId
    } = this.state;
    return (
      <Modal
        show={this.props.visibleRegister}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          onClick={this.props.hideRegister}
          className="bg-image-default"
        >
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}
        >
          {/* <h6 onChange={() => this.handleAfterPost(register)}>{message}</h6> */}
          <Form onSubmit={this.submitHandler}>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="nameUser">
                <Form.Label>Breednder</Form.Label>
                <Form.Control
                  type="text"
                  name="name_user"
                  value={name_user}
                  onChange={this.changeHandler}
                  placeholder="Breeder"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                  placeholder="Enter email"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.changeHandler}
                  placeholder="Password"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.changeHandler}
                  placeholder="Phone Breeder"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={address}
                  onChange={this.changeHandler}
                  placeholder="Address Breeder"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="formBasicNamePet">
                <Form.Label>Your Pet</Form.Label>
                <Form.Control
                  type="text"
                  name="name_pet"
                  value={name_pet}
                  onChange={this.changeHandler}
                  placeholder="Name Pet"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="formBasicGenderPet">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={gender}
                  onChange={this.changeHandler}
                >
                  <option value="" selected disabled>
                    Gender Pet
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="formBasicAgePet">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  as="select"
                  name="age"
                  value={age}
                  onChange={this.changeHandler}
                  placeholder="Age Pet"
                >
                  <option value="" selected disabled>
                    Age
                  </option>
                  <option value="Little">Little</option>
                  <option value="Young">Young</option>
                  <option value="Adult">Adult</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="SpesiesPet">
                <Form.Label>Species</Form.Label>
                <Form.Control
                  as="select"
                  name="speciesId"
                  value={speciesId}
                  onChange={this.changeHandler}
                >
                  {species.isLoading ? <option>loading data</option> : null}
                  {species.error ? <option>data NotFound</option> : null}
                  <option value="" selected disabled>
                    Species
                  </option>
                  {species.data.map((species, index) => (
                    <option key={index} value={species.id}>
                      {species.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="formBasicAbout">
                <Form.Label>About Your Pet</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  type="text"
                  name="about"
                  value={about}
                  onChange={this.changeHandler}
                  placeholder="Address Breeder"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group controlId="formBasicPhoto">
                <Form.Label>Photo your pet</Form.Label>
                <Form.Control
                  type="text"
                  name="photo"
                  value={photo}
                  onChange={this.changeHandler}
                  placeholder="Name File Image"
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="text-center">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
}
//change state  global in reducer to prop
const mapStateToProps = state => {
  console.log(state.register);
  return {
    register: state.register,
    species: state.species
  };
};
//change action to prop
const mapDispatchToProps = dispatch => {
  return {
    postRegister: data => dispatch(postRegister(data)),
    getSpecies: () => dispatch(getSpecies())
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ModalRegister);
// export default withRouter(ModalRegister);
