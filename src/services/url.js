/*
 * @Author: your name
 * @Date: 2019-04-09 16:11:19
 * @LastEditTime: 2020-06-09 15:54:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dva\src\services\url.js
 */ 
/**
 * 
 *多服务器联调开发
 *mockjs与代理proxy不同时使用
 *使用mockjs时将DEV中的所有值修改成''空字符串
 *默认使用mockjs，环境变量使用PRO即可
 *非development下使用DEV，生产环境使用PRO
 *DEV中的代理地址在文件.webpackrc中配置
 * 
**/
// 开发环境
const DEV = {
  'API1':'/api1',
  'API2':'/api2',
};
// 生产环境
const pro = ''
const PRO = {
  'API1': pro,
  'API2': pro,
};
// 开发环境或者测试环境
const url = process.env.NODE_ENV === 'development' ? DEV : PRO;
export default url;
