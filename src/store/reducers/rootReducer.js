import {combineReducers} from 'redux';
import dataListReducer from './dataList'

export default combineReducers({
  dataList: dataListReducer
})