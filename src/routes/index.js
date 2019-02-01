import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from "./index.css";

@connect(({example,global})=>({
  example,
  global
}))
export default class Index extends React.Component{
  componentDidMount(){
    console.log(1);
  }
  jump = () => {
    this.props.history.push('/login');
  }
  triggerGet = () => {
    console.log(this.props.dispatch, "this.props.dispatch");
    this.props.dispatch({
      type: 'global/queryGet',
    });
  };
  triggerPost = () => {
    this.props.dispatch({
      type: 'global/queryPost',
      payload: {
        code:'123',
      },
    });
  };
  mobileJump = () => {
    this.props.history.push('/MobileCom');
  }
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li onClick={this.jump}>
            To get started, edit <code>src/index.js</code> and save to
            reload.
          </li>
        </ul>
        <button type="danger" onClick={() => this.triggerGet()}>
          GIT请求数据
        </button>
        <button type="danger" onClick={() => this.triggerPost()}>
          POST请求数据
        </button>
        <Button>PC组件</Button>
        <Button onClick={this.mobileJump}>Mobile组件</Button>
      </div>
    );
  }
}
