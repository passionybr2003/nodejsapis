import { combineReducers } from 'redux';
import app from './app.reducer';

export default function appReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app,
    ...injectedReducers
  });
  return rootReducer;
}

