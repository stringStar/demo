import styles from "./index.less";
import router from "umi/router";
import React, { Component } from "react";
import Link from "umi/link";
import { Picker, InputItem, Button, Checkbox, List, Toast } from "antd-mobile";
import { createForm } from "rc-form";

import * as API from "../service";

const CheckboxItem = Checkbox.CheckboxItem;
const logo = require("../assets/logo.png");

@createForm()
export default class Home extends Component {
  state = {
    card: [],
    loan: [],
    courseList: [
      { id: "1", name: "LT 泄漏检测 Level-Ⅱ" },
      { id: "2", name: "ET 涡流检测 Level-Ⅱ" },
      { id: "3", name: "RT 射线检测 Level-Ⅱ" },
      { id: "4", name: "UT 超声检测 Level-Ⅱ" },
      { id: "5", name: "PT 渗透检测 Level-Ⅱ" },
      { id: "6", name: "MT 磁粉检测 Level-Ⅱ" },
      { id: "7", name: "VT 目视检测 Level-Ⅱ" }
    ],
    course: []
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

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      if (!error) {
        const { courseList } = this.state;
        const course = courseList.filter(v => v.checked).map(v => v.name);
        const { others = "" } = value;
        const regOthers = others.trim();
        delete value.others;
        if (course.length === 0 && !regOthers) {
          Toast.info("请选择课程", 2, () => {}, false);
        } else {
          API.enroll({
            ...value,
            edu: value.edu.join(""),
            course: regOthers ? [...course, regOthers] : course
          }).then(
            res => {
              if (res.code == 0) {
                router.push("/success");
              } else {
                Toast.info(res.info, 2, () => {}, false);
              }
            },
            rej => {
              Toast.info(rej.message, 2, () => {}, false);
            }
          );
        }
      } else {
        for (var i in error) {
          Toast.info(error[i].errors[0].message, 2, () => {}, false);
          return false;
        }
      }
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    const { courseList } = this.state;
    const eduList = [
      { value: "专科", label: "专科" },
      { value: "本科", label: "本科" },
      { value: "硕士", label: "硕士" },
      { value: "博士", label: "博士" },
      { value: "其他", label: "其他" }
    ];

    return (
      <div className={styles.index}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <h1 className={styles.title}>
            中广核检测欧标NDT无损检测2019课程报名
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.formItem}>
            <label>
              <span className={styles.require}>*</span>学员姓名
            </label>
            <InputItem
              {...getFieldProps("name", {
                rules: [{ required: true, message: "请输入姓名" }]
              })}
              placeholder="请输入学员名"
              clear
            />
          </div>
          <div className={styles.formItem}>
            <label>
              <span className={styles.require}>*</span>公司
            </label>
            <InputItem
              {...getFieldProps("company", {
                rules: [{ required: true, message: "请输入公司名" }]
              })}
              clear
              placeholder="请输入公司名"
            />
          </div>
          <div className={styles.formItem}>
            <label>
              <span className={styles.require}>*</span>学员手机
            </label>
            <InputItem
              clear
              {...getFieldProps("mobile", {
                rules: [{ required: true, message: "请输入手机号" }]
              })}
              placeholder="请输入手机号"
            />
          </div>

          <div className={styles.formItem}>
            <label>
              <span className={styles.require}>*</span>学历
            </label>
            <div className={styles.eduList}>
              <Picker
                data={eduList}
                extra="请选择"
                title="选择学历"
                cols={1}
                {...getFieldProps("edu", {
                  rules: [{ required: true, message: "请选择学历" }]
                })}
                onOk={e => console.log("ok", e)}
                onDismiss={e => console.log("dismiss", e)}
              >
                <List.Item arrow="horizontal">学历</List.Item>
              </Picker>
            </div>
          </div>
          <div className={styles.courseTitle}>
            <span className={styles.require}>*</span>报名课程
          </div>
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
            <InputItem
              clear
              {...getFieldProps("others")}
              placeholder="其它（自己填写）"
            />
          </div>
        </div>
        <div className={styles.sumbit}>
          <Button onClick={this.submit} className={styles.sumbitBtn}>
            提交
          </Button>
        </div>
      </div>
    );
  }
}
