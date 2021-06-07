import employeeReducers from './empreducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    employeeReducers
});

export default rootReducer; 