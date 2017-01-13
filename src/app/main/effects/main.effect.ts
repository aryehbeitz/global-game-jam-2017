import { MainActionTypes } from './../actions/main.action';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { go } from '@ngrx/router-store';

@Injectable()
export class MainEffects {

  @Effect({ dispatch: false })
  goToAppUsersQuery$: Observable<any> = this.actions$
    .ofType(MainActionTypes.DELAYED_NAVIGATION)
    .map(action => action.payload)
    .switchMap(payload => {
      return Observable.of(payload.navigateTo)
        .delay(payload.delay)
        .do(navigateTo => {
          this.store.dispatch(go(navigateTo));
        });
    })

  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private router: Router
  ) { }
}
