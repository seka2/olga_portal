import { combineReducers } from 'redux';
import siteReducer from './siteReducer';

const rootReducer = combineReducers({
  site: siteReducer,
});

export default rootReducer;
