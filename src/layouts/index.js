import styles from "./index.css";
import Helmet from "react-helmet";
import "../global.js";
import React, { Component } from "react";

export default class BasicLayout extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.normal}>
        <Helmet title={"小金桔"} />
        {this.props.children}
      </div>
    );
  }
}
