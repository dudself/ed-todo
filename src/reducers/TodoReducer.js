import I from 'immutable';
import { combineReducers } from 'redux';
import { ADD_ACTION, REMOVE_ACTION, UPDATE_ACTION, COMPLETE_ACTION, PRIORITY_ACTION } from '../constants/ActionTypes';

const stateObject = {
    filter: ``,
    priority: ['high', 'medium', 'low'],
    allTodos:
    {
        completed: false,
        item: ``,
        id: ``,
    },
};

const INITIAL_STATE_IMMUTABLE = I.fromJS(stateObject);

const TodoReducer = (state = INITIAL_STATE_IMMUTABLE, action) => {
    switch (action.type) {

        case ADD_ACTION:
            return state.set(state.allTodos, action.payload);

        case REMOVE_ACTION:
            return state.map((item) => {
                return {
                    ...state,
                    allTodos: {
                        ...state.allTodos,
                        item: action.payload,
                    }
                };
            });


        case UPDATE_ACTION:
            return state.map((state) => {
                if (state.allTodos.id === action.payload.id) {
                    return {
                        ...state,
                        allTodos: {
                            ...state.allTodos,
                            item: action.payload.item,
                        }
                    };
                }
                return state;
            });

        case COMPLETE_ACTION:
            return state.map((state) => {
                if (state.allTodos.id === action.payload.id) {
                    return {
                        ...state,
                        allTodos: {
                            ...state.allTodos,
                            completed: true,
                        }
                    };
                }
                return state;
            });

        case PRIORITY_ACTION:
            return state.set(state.priority, action.payload);

        default:
            return state;
    }
};

const TodoReducerFin = combineReducers({
    obj: stateObject,
    todo: TodoReducer,
});

export default TodoReducerFin;
