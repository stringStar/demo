import router from "umi/router";
import React, { Component } from "react";
import * as API from "../service";
import styles from "./card.less";
import { goToGoods } from "./index";

export default class Home extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    API.getCardList().then(res => {
      console.log(res);
      this.setState({
        data: res
      });
    });
  }
  render() {
    const { data: card } = this.state;
    return (
      <div>
      <div className={styles.pageTitle}>信用卡秒申</div>
        <div className={styles.IDList}>
          {card &&
            card.map((v, i) => (
              <a
                href={v.productUrl}
                onClick={e => {
                  e.preventDefault();
                  goToGoods({
                    productType: "card",
                    productId: v.productId,
                    href: v.productUrl
                  });
                }}
                key={v.productId}
              >
                <div>
                  {i < 3 && <div className={styles.rate}>热度{i + 1}</div>}
                  <div className={styles.IDListImg}>
                    <img src={v.productImg} />
                  </div>
                  <div className={styles.IDListText}>
                    <div className={styles.itemName}>{v.productName}</div>
                    <p>{v.productFeature}</p>
                    <p>
                      <span>{v.productPers}人</span>今日申请
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    );
  }
}
