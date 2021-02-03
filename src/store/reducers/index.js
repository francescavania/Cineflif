import { combineReducers } from 'redux';

import authReducer from './AuthReducer';
import movieReducer from './MovieReducer';

export default combineReducers({
    authReducer,
    movieReducer
});
  