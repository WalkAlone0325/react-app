import React, { Component } from "react";
import Header from "../../components/header";
import "./login.scss";

export default class Login extends Component {
  gotoHome() {
    this.props.history.push("/home");
  }

  render() {
    return (
      <div className="P-login">
        <Header />
        <h2>Login page</h2>
        <button onClick={this.gotoHome.bind(this)}>跳转到Home页</button>
        {/* <button onClick={() => this.gotoHome()}>跳转到Home页</button> */}
      </div>
    );
  }
}
