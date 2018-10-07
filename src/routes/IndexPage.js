import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.css';

@connect(({example,global})=>({
  example,
  global
}))
export default class IndexPage extends React.Component{
  componentDidMount(){

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  jump = () => {
    this.props.history.push('/login');
  }
  triggerGet = () => {
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
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li onClick={this.jump}>To get started, edit <code>src/index.js</code> and save to reload.</li>
        </ul>
        <button type="danger" onClick={() => this.triggerGet()}>
          GIT请求数据
        </button>
        <button type="danger" onClick={() => this.triggerPost()}>
          POST请求数据
        </button>
        <Button>Default</Button>
      </div>
    )
  }
}
