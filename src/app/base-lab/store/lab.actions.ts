import { createAction, createSelector, props } from '@ngrx/store';
import { Lab } from 'src/app/models/lab.model';


export const addLab = createAction(
    '[Lab Component] Add Lab',
    props<{ lab: Lab }>()
)
export const labAdded = createAction(
    '[Lab Component] Lab Added',
    props<{ lab: Lab }>()
)
export const loadLabs = createAction(
    '[Lab Component] Load Labs' ,

);
export const labLoaded = createAction(
    '[Lap Component] Lab Loaded',
    props<{ labs: Lab[] }>()
);
export const updateLab = createAction(
    '[Lab Component] Update Lab',
    props<{ lab: Partial<Lab>, id: string; loadedState: boolean }>()
);
export const labUpdated = createAction(
    '[Lab Component] Lab Updated',
    props<{ lab: Lab, loadedState: boolean }>()
);
export const resetLabAdded = createAction(
    '[Lab Component] Reset Lab Added'
);

export const resetLabAddedFailed = createAction(
    '[Lab Component] Reset Lab Added Failed'
);

export const labAddFail = createAction(
    '[Lab Component] Lab Added Failed'
)
export const editLab = createAction(
    '[Lab Component] Edit Lab ',
    props<{ lab: Lab }>()
);
export const clearEditLab = createAction(
    '[Lab Component] Clear Edit Lab',
);

export const labError = createAction(
    '[Lab Component] Lab Error'
);

