import styles from "./index.less";
import router from "umi/router";
import React, { Component } from "react";
import Link from "umi/link";
import { List, InputItem, WhiteSpace, Checkbox } from "antd-mobile";
import { createForm } from "rc-form";
import moment from "moment";

import * as API from "../service";
import styels from "./index.less";

const CheckboxItem = Checkbox.CheckboxItem;

@createForm()
export default class Home extends Component {
  state = {
    card: [],
    loan: [],
    courseList: [
      { id: "1", name: "DIN EN ISO9712 + SNT MT Level 2" },
      { id: "2", name: "DIN EN ISO9712 + SNT MT Level 3" },
      { id: "3", name: "DIN EN ISO9712 + SNT MT Level 4" },
      { id: "4", name: "DIN EN ISO9712 + SNT MT Level 5" }
    ]
  };
  componentDidMount() {
    // API.getTopImg().then(res => {
    //   this.setState({
    //     data: res
    //   });
    // });
    // API.getIp({
    //   ip: window.returnCitySN["cip"],
    //   datetime: moment().format("YYYY-MM-DD HH_mm_ss")
    // }).then(res => {
    //   console.log(res);
    // });
    // API.getIndexList().then(res => {
    //   console.log(res);
    //   const { card, loan } = res;
    //   this.setState({
    //     card,
    //     loan
    //   });
    // });
  }

  goToLoan = () => {
    router.push("/loan");
  };
  goToCard = () => {
    router.push("/card");
  };

  onChange = (e, id) => {
    const { courseList } = this.state;
    const check = e.target.checked;
    console.log(id, check);
    this.setState(() => ({
      courseList: courseList.map(v =>
        v.id === id ? { ...v, checked: check } : { ...v }
      )
    }));
  };

  render() {
    const { getFieldProps } = this.props.form;
    const { courseList } = this.state;
    return (
      <div>
        <div className={styles.head}>
          <div className={styles.logo}>
            <img src="https://pub-files.jinshuju.net/hi/20180426153519_0b9af4@himlarge" />
          </div>
          <h1 className={styles.title}>
            德国莱茵欧标美标NDT无损检测2019课程报名
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.formItem}>
            <label>学员姓名</label>
            <InputItem
              {...getFieldProps("userName")}
              placeholder="请输入学员名"
            />
          </div>
          <div className={styles.formItem}>
            <label>公司</label>
            <InputItem
              {...getFieldProps("companyName")}
              placeholder="请输入公司名"
            />
          </div>
          <div className={styles.formItem}>
            <label>学员手机</label>
            <InputItem {...getFieldProps("phone")} placeholder="请输入手机号" />
          </div>
          <div className={styles.formItem}>
            <label>学历</label>
            <InputItem
              {...getFieldProps("education")}
              placeholder="请输入学历"
            />
          </div>
          <div>报名课程</div>
          <div className={styles.courseList}>
            {courseList &&
              courseList.map(i => (
                <CheckboxItem
                  key={i.id}
                  checked={!!i.checked}
                  onChange={e => this.onChange(e, i.id)}
                >
                  {i.name}
                </CheckboxItem>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
