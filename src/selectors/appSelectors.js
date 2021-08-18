import { createSelector } from "reselect"

const getApp = (state) => state.app;

export const getAppMode = createSelector(getApp, app => {
    return app.get("mode", "main");
})

export const getActiveBucket = createSelector(getApp, app => {
    return app.get("activeBucket", false);
})
