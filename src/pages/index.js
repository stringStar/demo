import styles from "./index.less";
import router from "umi/router";
import React, { Component } from "react";
import Link from "umi/link";
import { Picker, InputItem, Button, Checkbox, List, Toast } from "antd-mobile";
import { createForm } from "rc-form";

import * as API from "../service";

const CheckboxItem = Checkbox.CheckboxItem;

@createForm()
export default class Home extends Component {
  state = {
    card: [],
    loan: [],
    courseList: [
      { id: "1", name: "课程1" },
      { id: "2", name: "课程2" },
      { id: "3", name: "课程3" },
      { id: "4", name: "课程4" },
      { id: "5", name: "课程5" },
      { id: "6", name: "课程6" }
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
        if (course.length === 0) {
          Toast.info("请选择课程", 2, () => {}, false);
        } else {
          API.enroll({
            ...value,
            edu: value.edu.join(""),
            course
          }).then(
            res => {
              router.push("/success");
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
              {...getFieldProps("name", {
                rules: [{ required: true, message: "请输入姓名" }]
              })}
              placeholder="请输入学员名"
              clear
            />
          </div>
          <div className={styles.formItem}>
            <label>公司</label>
            <InputItem
              {...getFieldProps("company", {
                rules: [{ required: true, message: "请输入公司名" }]
              })}
              clear
              placeholder="请输入公司名"
            />
          </div>
          <div className={styles.formItem}>
            <label>学员手机</label>
            <InputItem
              clear
              {...getFieldProps("mobile", {
                rules: [{ required: true, message: "请输入手机号" }]
              })}
              placeholder="请输入手机号"
            />
          </div>

          <div className={styles.formItem}>
            <label>学历</label>
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
          <div className={styles.courseTitle}>报名课程</div>
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
        <div className={styles.sumbit}>
          <Button onClick={this.submit} className={styles.sumbitBtn}>
            提交
          </Button>
        </div>
      </div>
    );
  }
}
