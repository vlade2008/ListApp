import {ACTION_TYPES} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING_SCREEN:
      return {
        ...state,
      };
    default:
      return state;
  }
};
