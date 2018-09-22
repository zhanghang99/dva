import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

@connect(({error,example,global})=>({
  error,
  example,
  global
}))
export default class IndexPage extends React.Component{
  componentDidMount(){
    console.log(this.props,111222333);
  }
  jump = () => {
    this.props.history.push('/login');
  }
  triggerError = (code) => {
    console.log(code);
    this.setState({
      isloading: true,
    });
    this.props.dispatch({
      type: 'error/query',
      payload: {
        code,
      },
    });
  };
  trigger = () => {
    this.props.dispatch({
      type:'global/user',
      payload:{
        name:'zhang'
      }
    })
  }
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li onClick={this.jump}>To get started, edit <code>src/index.js</code> and save to reload.</li>
        </ul>
        <button type="danger" onClick={() => this.triggerError(401)}>
            触发401
        </button>
        <button type="danger" onClick={() => this.trigger()}>
            请求数据
        </button>
      </div>
    )
  }
}
