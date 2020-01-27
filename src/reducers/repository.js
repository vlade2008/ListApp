import update from 'react-addons-update';
import * as ACTION_TYPES from '../constants/actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_REPOSITORY:
      return update(state, {
        data: {
          $set: action.data.data,
        },
      });
    default:
      return state;
  }
};
