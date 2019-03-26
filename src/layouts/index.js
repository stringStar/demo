import styles from "./index.css";
import Helmet from "react-helmet";
import "../global.js";
import React, { Component } from "react";

export default class BasicLayout extends Component {
  componentDidMount() {
    // console.log(document.documentElement.clientWidth);
    // if (document.documentElement.clientWidth >= 750) {
    //   vw(100, 375);
    // } else {
    //   flex();
    // }
  }

  render() {
    return (
      <div className={styles.normal}>
        <Helmet title={"中广核检测欧标NDT无损检测2019课程报名"} />
        {this.props.children}
      </div>
    );
  }
}
