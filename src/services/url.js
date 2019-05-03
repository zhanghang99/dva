/**
 *多服务器联调开发
 *mockjs与代理proxy不同时使用
 *使用mockjs时将DEV中的所有值修改成''空字符串
 *默认使用mockjs，环境变量使用PRO即可
 *非development下测试环境使用SIT，生产环境使用PRO
**/
// 开发环境
const DEV = {
  'API1':'/api1',
  'API2':'/api2',
};
// 测试环境
const sit = 'http://127.0.0.1:8000'
const SIT = {
  'API1': sit,
  'API2': sit,
};
// 生产环境
const pro = ''
const PRO = {
  'API1': pro,
  'API2': pro,
};
// 开发环境或者测试环境
const url = process.env.NODE_ENV === 'development' ? PRO : SIT;
export default url;
console.log('topic/V1.1-10');
