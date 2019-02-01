import React from 'react';
import { Switch, Route, Redirect } from "dva/router";
import styles from './App.css';
import route from './routerLink'
import Head from "./components/head/head";

export default class App extends React.Component{
  render(){
    return (
      <div className={styles.App}>
        {/* 公共组件头部 */}
        <Head />
        <Switch>
          {route.map(({ path, component }) => {
            return (
              <Route key={path} path={path} exact component={component()} />
            );
          })}
          <Redirect path="/" exact to="Index" />
        </Switch>
      </div>
    );
  }
}
