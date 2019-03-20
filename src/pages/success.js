import React, { Component } from "react";
import { Result, Icon, WhiteSpace } from "antd-mobile";

import styles from "./success.less";

export default class Success extends Component {
  render() {
    return (
      <div className={styles.index}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <img src="https://pub-files.jinshuju.net/hi/20180426153519_0b9af4@himlarge" />
          </div>
          <h1 className={styles.title}>
            德国莱茵欧标美标NDT无损检测2019课程报名
          </h1>
        </div>
        <Result
          img={
            <Icon
              type="check-circle"
              className={styles.spe}
              style={{ fill: "#1F90E6" }}
            />
          }
          title="报名成功"
          message="德国莱茵欧标美标NDT无损检测2019课程报名"
        />
      </div>
    );
  }
}
