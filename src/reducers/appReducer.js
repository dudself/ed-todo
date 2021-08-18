import I from "immutable";
import { CHANGE_MODE, OPEN_BUCKET } from "../constants/ActionTypes";

const INITIAL_STATE = I.fromJS({
    mode: "main",
    activeBucket: false,
});

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return state.set("mode", action.payload).set("activeBucket", false);
        case OPEN_BUCKET:
            return state.set("mode", "priority").set("activeBucket", action.payload);
        default:
            return state;
    }
}

export default appReducer;
