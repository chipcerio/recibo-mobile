import {
  SET_ACCESS_TOKEN,
  SET_USER_INFO,
  SET_USER_TYPE,
  SET_LONGITUDE,
  SET_LATITUDE,
  SET_RESET,
  SET_CLOVER_TOKEN,
  SET_DIAL_COUNTRY_CODE,
  SET_EXPIRES_IN,
  SET_IS_INTERNET_CONNECTED,
  SET_LAST_LOGIN
} from '../actions/auth/types';

const INITIAL_STATE = {
  token: '',
  expires_in: 0,
  last_login: '',
  user_type: '',
  user: {},
  is_internet_connected: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN: {
      return Object.assign({}, state, {token: action.payload.access_token});
    }
    case SET_RESET: {
      return Object.assign({}, state, {
        token: '',
        expires_in: 0,
        last_login: '',
        user_type: '',
        user: {},
      });
    }
    default:
      return Object.assign({}, state, state);
  }
}
