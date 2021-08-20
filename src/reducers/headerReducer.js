import I from 'immutable';
import { DATE_ACTION } from '../constants/ActionTypes';
import { TIME_ACTION } from '../constants/ActionTypes';

const INITIAL_STATE = I.fromJS({
    storeDate: 'Today',
    storeTime: 'Clock'
});

const headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATE_ACTION:
            return state.state('storeDate', action.payload.datePayload);
        case TIME_ACTION:
            return state.state('storeTime', action.payload.timePayload);
        default:
            return state;
    }
}
export default headerReducer;