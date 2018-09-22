import { user } from '../services/example'
export default {

  namespace: 'global',

  state: {
    a:1
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *user({ payload },{ call, put }) {
      yield call(user,payload);
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
