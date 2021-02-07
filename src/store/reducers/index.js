import { combineReducers } from 'redux';

import authReducer from './AuthReducer';
import movieReducer from './MovieReducer';
import userReducer from './UserReducer';
import reviewReducer from './ReviewReducer'

export const rootReducer = combineReducers({
    authReducer,
    movieReducer,
    userReducer,
    reviewReducer
});
  