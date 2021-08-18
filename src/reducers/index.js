import todoReducer from './todoReducer';
import { combineReducers } from 'redux';
import appReducer from './appReducer';

const reducers = combineReducers({
    todo: todoReducer,
    app: appReducer,
});

export default reducers;
