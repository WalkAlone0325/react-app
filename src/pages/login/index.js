import React, { Component } from "react";
import Header from "../../components/header";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import axios from "axios";
import { API_CODE, API_LIST, API_FAILED } from "../../common/js/api";
import "./login.scss";

class Login extends Component {
  gotoHome() {
    this.props.history.push("/home");
  }

  // 获取数据
  // async getData() {
  //   const res = await axios.get("http://blog.jsw0.top/web/api/skill");
  //   console.log(res.data);
  // }

  getData() {
    axios
      .get(API_LIST.GETDATA)
      .then(res => {
        let result = res.data;
        if (result.code === API_CODE.OK) {
          alert("获取数据成功：" + result.data);
        } else {
          alert(result.message);
        }
      })
      .catch(() => {
        console.log(API_FAILED);
      });
  }

  render() {
    return (
      <div className="P-login">
        <Header />
        <h2>Login page</h2>
        <p>login: myData = {this.props.myData}</p>
        <button
          onClick={() => {
            this.props.getData("123456");
          }}
        >
          更改login的myData
        </button>
        <button onClick={this.getData}>AJAX请求</button>
        <button onClick={this.gotoHome.bind(this)}>跳转到Home页</button>
        {/* <button onClick={() => this.gotoHome()}>跳转到Home页</button> */}
      </div>
    );
  }
}

// 把store中的数据映射到组件的props
const mapStateToProps = state => ({
  myData: state.getIn(["login", "myData"])
});

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = dispatch => ({
  getData(data) {
    const action = actionCreators.setData(data);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
