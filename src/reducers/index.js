import {combineReducers} from 'redux';

import app from './app';
import repository from './repository';

export default combineReducers({
  app,
  repository,
});
