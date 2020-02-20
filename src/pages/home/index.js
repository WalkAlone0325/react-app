import React, { Component } from "react";
import Header from "../../components/header";
import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <Header param1="abc" param2="c" func1={() => console.log("func1")} />
        <h2>Home Page</h2>
        <button
          onClick={() => {
            this.props.history.push("/login");
          }}
        >
          跳转到login页
        </button>
      </div>
    );
  }
}
