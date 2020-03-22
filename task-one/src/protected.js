import React, { Component } from "react";
import { withRouter } from "react-router";

class Protected extends Component {
  authentication = () => {
    // let history = useHistory();
    const token = localStorage.getItem("token");
    const isAuthenticated = false;
    if (token) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
    return isAuthenticated;
  };
  render() {
    if (this.authentication) {
      return this.props.history.push("/");
    } else {
      return this.props.history.push(this.props.path);
    }
  }
}
export default withRouter(Protected);
