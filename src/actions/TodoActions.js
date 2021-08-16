import { ADD_ACTION, REMOVE_ACTION, UPDATE_ACTION, COMPLETE_ACTION, PRIORITY_ACTION } from '../constants/ActionTypes';

export const add = ({ completed, id, item }) => {
    return {
        type: ADD_ACTION,
        payload: { completed, id, item }
    };
};

export const remove = (id) => {
    return {
        type: REMOVE_ACTION,
        payload: id,
    };
};


export const update = ({ id, item: value }) => {
    return {
        type: UPDATE_ACTION,
        payload: { id, item: value }
    };
};


export const complete = (id) => {
    return {
        type: COMPLETE_ACTION,
        payload: id,
    };
};

export const priority = ({ level }) => {
    return {
        type: PRIORITY_ACTION,
        payload: { level }
    };
};