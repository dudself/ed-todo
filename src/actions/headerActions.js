import { DATE_ACTION } from '../constants/actionTypes';
import { TIME_ACTION } from '../constants/actionTypes';

export const dateAction = () => {
    return {
        type: DATE_ACTION,
        payload: {
            datePayload: new Date().toLocaleDateString(),
        }
    }
}

export const timeAction = () => {
    return {
        type: TIME_ACTION,
        payload: {
            datePayload: new Date().toLocaleTimeString(),
        }
    }
}
