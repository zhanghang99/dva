import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }

// IndexPage.propTypes = {
// };
@connect(({example,global})=>({
  example,
  global
}))
export default class IndexPage extends React.Component{
  componentDidMount(){
    console.log(this.props);
  }
  jump = () => {
    this.props.history.push('/login');
  }
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li onClick={this.jump}>To get started, edit <code>src/index.js</code> and save to reload.</li>
        </ul>
      </div>
    )
  }
}
