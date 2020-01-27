import RestUtils from '../utils/RestUtils';
import * as ACTION_TYPES from '../constants/actionTypes';
import * as loadingActions from './loadingAction';

export let getRepository = value => {
  return dispatch => {
    dispatch(loadingActions.loadingStart());
    RestUtils.get(`/search/repositories?q=${value}`)
      .then(response => {
        dispatch(loadRepositorySuccess(response));
        dispatch(loadingActions.loadingStop());
      })
      .catch(error => {
        dispatch(loadingActions.loadingStop());
      });
  };
};

export let loadRepositorySuccess = data => {
  return {
    type: ACTION_TYPES.GET_REPOSITORY,
    data,
  };
};
