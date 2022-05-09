// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import TweetsReducer from './tweets_reducer';
import ModalReducer from './modal_reducer';
const RootReducer = combineReducers({
  session, 
  errors,
  tweets: TweetsReducer,
  modal: ModalReducer
});

export default RootReducer;