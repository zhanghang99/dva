import request from '../utils/request';

export function user() {
  return request('/api/users');
}
// export async function user(query) {
//   return request.get('api/user',query).then((res)=>{
//     console.log(res);
//   });
// }