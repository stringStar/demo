import styles from "./loan.less";
import router from "umi/router";
import React, { Component } from "react";
import * as API from "../service";
import { goToGoods } from "./index";
export default class Home extends Component {
  state = {
    loan: []
  };
  componentDidMount() {
    API.getLoanList().then(res => {
      console.log(res);
      this.setState({
        loan: res
      });
    });
  }
  render() {
    const { loan } = this.state;
    return (

      <div className={styles.contentList}>
        <div className={styles.pageTitle}>贷款申请</div>
        {loan &&
          loan.map((v, i) => (
            <a
              href={v.productUrl}
              onClick={e => {
                e.preventDefault();
                goToGoods({
                  productType: "loan",
                  productId: v.productId,
                  href: v.productUrl
                });
              }}
              key={v.productId}
            >
              {i < 3 && <div className={styles.rate}>热度{i + 1}</div>}
              <div className={styles.listItem}>
                <div className={styles.listItemContent}>
                  <div className={styles.listItemImg}>
                    <img src={v.productImg} />
                  </div>

                  <div className={styles.listItemTitle}>
                    <h5>{v.productName}</h5>
                    <p>{v.productFeature}</p>
                    <span>{v.productDec}</span>
                  </div>
                </div>
                {/* <div className={styles.listItemText}>
                  <p>今日申请</p>
                  <span>{v.productPers}</span>
                </div> */}
              </div>
            </a>
          ))}
      </div>
    );
  }
}
