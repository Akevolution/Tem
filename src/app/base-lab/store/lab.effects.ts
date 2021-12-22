import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { LabActions } from "./lab.action-types";
import { LabApiService } from '../../service/lab-api.service';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class LabEffects {

    // addLab$ = createEffect(() => this.actions$.pipe(
    //     ofType(LabActions.addLab),
    //     switchMap(action => this.labApi.add(action.Lab).pipe(
    //         map(lab => {
    //             this.toastr.success('Lab Added Successfully', 'Success', { timeOut: 4000 });
    //             return LabActions.labAdded({lab });
    //         }),
    //         catchError(err => {
    //             this.toastr.error('Error while creating lab, Please try again', 'Error', { timeOut: 4000 });
    //             return of(LabActions.labAddFail());
    //         })
    //     )),
    // ),{ useEffectsErrorHandler: false });
    

    loadLab$ = createEffect(() => this.actions$.pipe(
        ofType(LabActions.loadLabs),
        switchMap(action => this.labApi.getLog().pipe(
            map(labs => {
                return LabActions.labLoaded({ labs });
            }),
            catchError(err => {
                return of(LabActions.labError());
            })
        )),
    ));

    // updateLab$ = createEffect(() => this.actions$.pipe(
    //     ofType(LabActions.updateLab),
    //     switchMap(action => this.labApi.editLog(action.lab, action.id).pipe(
    //         map(lab => {
    //             this.toastr.success('Lab Updated Successfully', 'Success', { timeOut: 4000 });
    //             return LabActions.labUpdated({ lab, loadedState: action.loadedState });
    //         }),
    //         catchError(err => {
    //             this.toastr.success('Error on Update Lab , please try again ', 'Error', { timeOut: 4000 });
    //             return of(LabActions.labAddFail());
    //         })
    //     )),
    // ));

    constructor(
        private actions$: Actions,
        private labApi: LabApiService,
        private toastr: ToastrService
    ) { }



}


