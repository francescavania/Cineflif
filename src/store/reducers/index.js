import { combineReducers } from 'redux';

import authReducer from './AuthReducer';
import movieReducer from './MovieReducer';
import userReducer from './UserReducer';

export const rootReducer = combineReducers({
    authReducer,
    movieReducer,
    userReducer
});
  