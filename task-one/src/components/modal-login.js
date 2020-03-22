import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { BASE_URL } from "../config/index";
import { withRouter } from "react-router";

class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      response: {},
      redirect: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const dataLogin = {
      email,
      password
    };
    this.postLogin(dataLogin);
  };

  postLogin = async dataLogin => {
    try {
      console.log(dataLogin);
      const res = await Axios.post(`${BASE_URL}/auth/login`, dataLogin);
      const users = { data: res.data };
      this.checkedToken(users);
    } catch (error) {
      console.log(error);
    }
  };

  checkedToken = users => {
    // console.log(users.data.token);
    const checkToken = localStorage.getItem("token");
    // this.setState(checkToken)
    if (users.data) {
      if (!checkToken) {
        localStorage.setItem("token", users.data.token);
        this.setState({ redirect: true });
        // this.props.push.history("/home");
        // return <Redirect to="/home" />;
      } else {
        localStorage.removeItem("token");
        localStorage.setItem("token", users.data.token);
        this.setState({ redirect: true });
        // return <Redirect to="/home" />;
      }
    } else {
      alert("you not login");
    }
  };

  render() {
    console.log(this.state.redirect);

    const { email, password, redirect } = this.state;
    return (
      <>
        {redirect ? <Redirect to="/home" /> : null}
        <Modal show={this.props.visibleLogin} size="sm">
          <Modal.Header closeButton onClick={this.props.hideLogin}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitHandler}>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicEmail">
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
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Col>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalLogin;
