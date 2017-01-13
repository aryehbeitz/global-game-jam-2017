import { ShellActionTypes, ToggleMenuAction, ToggleMenuCompleteAction, LogoutAction } from './../actions/shell.action';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import { go } from '@ngrx/router-store';
import { SessionService } from '../../core/services/session.service';
import { AuthAPI } from '../../core/api/auth.api';
import { SystemAPI } from '../../core/api/system.api';
import { AuthActionTypes, GetUserAction, 
         GetUserCompleteAction, GetUserFailedAction,
         GetUserPermissionsAction, GetUserPermissionsCompleteAction, GetUserPermissionsFailedAction } from '../../core/actions/auth.action';
import { SystemActionTypes, SystemGetInfoAction, 
         SystemGetInfoCompleteAction, SystemGetInfoFailedAction } from '../../core/actions/system.action';


@Injectable()
export class ShellEffects {
  @Effect()
  toggleMenu$: Observable<Action> = this.actions$
    .ofType(ShellActionTypes.TOGGLE_MENU)
    .withLatestFrom(this.store.select('shell'), (event, shell) => shell)
    .map((shell: any) => new ToggleMenuCompleteAction({ isThinMenu: !shell.isThinMenu }));

  @Effect()
  getUser$: Observable<any> = this.actions$
    .ofType(AuthActionTypes.GET_USER)
    .switchMap(_ => {
      return this.auth.getUser()
        .map(user => new GetUserCompleteAction({ user }))
        .catch(_ => Observable.of(new GetUserFailedAction()));
    })

  @Effect()
  getSystemInfo$: Observable<any> = this.actions$
    .ofType(SystemActionTypes.SYSTEM_GET_INFO)
    .switchMap(_ => {
      return this.system.getSystemInfo()
        .map(system => new SystemGetInfoCompleteAction({ system }))
        .catch(_ => Observable.of(new SystemGetInfoFailedAction()));
    })

  @Effect()
  getUserPermissions$: Observable<any> = this.actions$
    .ofType(AuthActionTypes.GET_USER_PERMISSIONS)
    .switchMap(_ => {
      return this.auth.getUserPermissions()
        .map(permissions => new GetUserPermissionsCompleteAction({ permissions }))
        .catch(_ => Observable.of(new GetUserPermissionsFailedAction()));
    })

  @Effect({ dispatch: false })
  logout$: Observable<any> = this.actions$
    .ofType(ShellActionTypes.LOGOUT)
    .switchMap(_ => this.auth.logout())
    .do(_ => {
        this.session.unAuthenticate();
        this.store.dispatch(go(['/public']))
    });

  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private session: SessionService,
    private auth: AuthAPI,
    private system: SystemAPI
  ) { }
}
