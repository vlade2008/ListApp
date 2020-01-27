import * as ACTION_TYPES from '../constants/actionTypes';

export let loadingStart = () => {
  return {
    type: ACTION_TYPES.LOADING_START,
  };
};

export let loadingStop = () => {
  return {
    type: ACTION_TYPES.LOADING_STOP,
  };
};
