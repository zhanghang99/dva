import axios from '../utils/axios';

export async function queryGet() {
  return axios('/queryget');
}
export async function queryPost(params) {
  console.log(params,'params');
  return axios('/querypost', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}