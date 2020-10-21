import * as types from './types';

export const setAccessToken = access_token => {
  return {
    type: types.SET_ACCESS_TOKEN,
    payload: {
      access_token,
    },
  };
};

export const setResetAuth = () => {
  return {
    type: types.SET_RESET,
  };
};
