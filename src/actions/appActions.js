import { CHANGE_MODE, OPEN_BUCKET } from "../constants/ActionTypes";

export const changeMode = (mode) => {
    return {
        type: CHANGE_MODE,
        payload: mode,
    }
}

export const openBucket = (priority) => {
    return {
        type: OPEN_BUCKET,
        payload: priority,
    }
}
