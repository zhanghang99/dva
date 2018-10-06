import axios from 'axios';
import { message ,Spin} from 'antd';

axios.defaults.timeout = 60000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.interceptors.request.use(
  config => {
    return config
  },
  err => Promise.reject(err),
);
axios.interceptors.response.use(
  (res) => {
    console.log(res);
    // 跳转登录
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
    let status = error.response.status;
    message.error(status);
  },
);
export default axios;
