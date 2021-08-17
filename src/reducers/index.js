import todoReducer from './todoReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    todo: todoReducer,
});

export default reducers;
