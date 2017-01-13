import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import { go } from '@ngrx/router-store';
import { AppUser } from '../models/app-user.model';
import { MainMenuAPI, UsersResponse } from '../api/main-menu.api';
import { MainMenuActionTypes, LoadAppUsersAction, 
         LoadAppUsersCompleteAction, LoadAppUsersFailedAction,
         LoadAppUsersMetaAction, LoadAppUsersMetaCompleteAction,
         LoadAppUsersMetaFailedAction } from '../actions/main-menu.action';


@Injectable()
export class MainMenuEffects {
  getAppUsersMeta$: Observable<any> = this.actions$
    .ofType(MainMenuActionTypes.LOAD_APP_USERS_META)
    .switchMap(_ => {
      return Observable.zip(
        )
        .map(meta => new LoadAppUsersMetaCompleteAction({
          info: meta[0]
        }))
        .catch(_ => Observable.of(new LoadAppUsersMetaFailedAction()));
    })

  @Effect()
  getAppUsers$: Observable<any> = this.actions$
    .ofType(MainMenuActionTypes.LOAD_APP_USERS)
    .map(action => action.payload)
    .withLatestFrom(this.store.select('admin', 'users'), (payload, users) => ({payload, users}))
    .switchMap(combined => {
      return this.api.getUsers()
        .map((res: UsersResponse) => {
          return new LoadAppUsersCompleteAction(res);
        })
        .catch(_ => Observable.of(new LoadAppUsersFailedAction()));
    });

  @Effect({ dispatch: false })
  goToAppUsersQuery$: Observable<any> = this.actions$
    .ofType(MainMenuActionTypes.GO_TO_APP_USERS_QUERY)
    .map(action => action.payload)
    .withLatestFrom(this.store.select('admin', 'users'), (payload, users) => ({payload, users}))
    .do(combined => {
      let payload = combined.payload,
          params = this.getReducedParams({});
      
      this.store.dispatch(go(['', params]));
    })

  @Effect({ dispatch: false })
  navToIntro$: Observable<any> = this.actions$
    .ofType(MainMenuActionTypes.NAV_TO_INTRO)
    .do(_ => this.store.dispatch(go(['/main/intro'])));

  private getReducedParams(params) {
    let reducedParams = {};
    for (let paramName in params) {
      let value = params[paramName]
      if (value) {
        reducedParams[paramName] = value;
      }
    }
    return reducedParams;
  }

  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private api: MainMenuAPI,
    private route: ActivatedRoute,
    private router: Router
  ) { }
}
