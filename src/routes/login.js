import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

@connect(({example,global})=>({
  example,
  global
}))
export default class Login extends React.Component{
  componentDidMount(){
    console.log(this.props,222);
  }
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>----------To get started, edit <code>src/index.js</code> and save to reload.</li>
        </ul>
      </div>
    )
  }
}
