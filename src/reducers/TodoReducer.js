import I from 'immutable';
import { ADD_ACTION, REMOVE_ACTION, UPDATE_ACTION, COMPLETE_ACTION } from '../constants/ActionTypes';

const stateObject = {
    filter: ``,
    allTodos: [],
};

const INITIAL_STATE_IMMUTABLE = I.fromJS(stateObject);

const TodoReducer = (state = INITIAL_STATE_IMMUTABLE, action) => {
    switch (action.type) {

        case ADD_ACTION:
            const newTodos = state.get('allTodos').push(action.payload);
            return state.set('allTodos', newTodos);

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

        // case PRIORITY_ACTION:
        //     return state.set(state.priority, action.payload);

        default:
            return state;
    }
};

export default TodoReducer;
