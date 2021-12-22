import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LabState } from "./lab.reducer";


const labState = createFeatureSelector<LabState>('labState');

export const selectLabs = createSelector(
    labState,
    state => state.labs
);

export const areLabsLoaded = createSelector(
    labState ,
    state => state.labsLoaded
);

export const isLabAdded = createSelector(
    labState,
    state => state.labAdded
);

export const selectLabError = createSelector(
    labState,
    state =>state.labAddedError
);

export const isLabAddedFailed = createSelector(
    labState,
    state =>state.labAddedFailed
);

export const selectEditlab = createSelector(
    labState,
    state => state.editLab
);

