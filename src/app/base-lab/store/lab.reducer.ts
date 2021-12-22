import { createReducer, on } from "@ngrx/store";
import { Lab } from "src/app/models/lab.model";
import { LabActions } from "./lab.action-types";


export interface LabState {
   
    labs: Lab[];
    labsLoaded: boolean;
    labAdded: boolean;
    labAddedError: boolean;
    labAddedFailed: boolean;
    editLab: any;
}

const initialState: LabState = {
    labs : [],
    labAdded: false,
    labsLoaded: false,
    labAddedError: false,
    labAddedFailed: false,
    editLab:null
}

export const reducer = createReducer(
    initialState,
    on(LabActions.labAdded, (state, action) => {
        return {
            ...state,
            labs: [...state.labs, action.lab],
            lapAdded: true
        };
    }),

    on(LabActions.labLoaded, (state, action) => {
        return {
            ...state,
            labs: action.labs,
                labLoaded: true
        };
    }),
    on(LabActions.labUpdated, (state, action) => {
        const clonedLabs = [...state.labs];
        const updateLabIndex = clonedLabs.findIndex(l => l._id === action.lab._id);
        const updateLab = clonedLabs.find(l => l._id === action.lab._id);

        const updatedLab = { ...updateLab, ...action.lab };

        clonedLabs[updateLabIndex] = updatedLab;

        return {
            ...state,
            labs: clonedLabs,
            labAdded: action.loadedState
        };
    }),
    on(LabActions.resetLabAdded, (state, action) => {
        return {
            ...state,
            labAdded: false
        };
    }),

    on(LabActions.resetLabAddedFailed, (state, Action) => {
        return {
            ...state,
            labAddedFailed: false
        };
    }),

    on(LabActions.labAddFail, (state, action) => {
        return {
            ...state,
            labAddedFailed: true
        };
    }),

    on(LabActions.editLab, (state, action) => {
        return {
            ...state,
            editLab: action.lab
        };
    }),

    on(LabActions.clearEditLab, (state, action) => {
        return {
            ...state,
            editLab: null
        };
    }),
);

export function labReducer( state, action) {
    return reducer(state, action);
}