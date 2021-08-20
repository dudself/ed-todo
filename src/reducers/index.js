import todoReducer from './todoReducer';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import headerReducer from './headerReducer';

const reducers = combineReducers({
    todo: todoReducer,
    app: appReducer,
    header: headerReducer,
});

export default reducers;
