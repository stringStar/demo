import React, { Component } from 'react';
import styles from './FaqCompelet.less';

export default class FaqCompelet extends Component {
  handle = () => {
    const { callBack } = this.props;
    callBack();
  };
  render() {
    const { type, answered } = this.props;

    return (
      <div className={styles.faqModal}>
        <div className={styles.mask} />
        <div className={styles.content}>
          <div className={type == 1 ? styles.titlesucc : styles.titlefail}>
            {type == 1 ? '挑战成功!' : '挑战失败!'}
          </div>
          <div className={type == 1 ? styles.success : styles.fail} />
          <div className={styles.mark}>
            你的成绩为：<span>{answered}</span>题
          </div>
          <div style={{ opacity: type == 1 ? '0' : '1' }} className={styles.failInfo}>
            成绩必须达到2题以上才能领奖
          </div>
          <div onClick={this.handle} className={styles.btn}>
            {type === 1 ? '赶紧去抽奖' : '再玩一次'}
          </div>
        </div>
      </div>
    );
  }
}
