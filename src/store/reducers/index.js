import { combineReducers } from 'redux';

import authReducer from './AuthReducer';
import movieReducer from './MovieReducer';

export const rootReducer = combineReducers({
    authReducer,
    movieReducer
});
  