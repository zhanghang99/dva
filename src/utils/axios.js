import axios from 'axios';
import { message } from 'antd';

axios.defaults.timeout = 60000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.interceptors.request.use(
  config => config,
  // if(store.state.global.userToken){
  //   // config.Authorization = `token ${store.state.currentUser.userToken}`;
  //   config.headers["access-token"] = store.state.currentUser.userToken;
  // }
  err => Promise.reject(err),
);
axios.interceptors.response.use(
  (res) => {
    console.log(res);
    // 取消lid对应的loading
    // cas 跳转登录
    if (res && res.data && res.data.status === 'jump') {
      if (res.data.result && res.data.result.redirect) {
        setTimeout(() => {
          window.location.href = res.data.result.redirect;
        }, 200);
      }
      return null;
    }
    // 全局统一出错处理
    if (res && res.data && res.data.status !== 'ok') {
      if (res.data.message) {
        message.error(res.data.message);
      }
      return res.data;
    }
    if (res && res.data && res.data.status === 'ok') {
      return res.data.result;
    }
    return res;
  },
  (error) => {
    console.log(error.response);
    let status = error.response.status;
    if(status === 404){
      message.error('404');//没有实现
    }
    return Promise.reject(error.response);
  },
);
export default axios;
