import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { go } from '@ngrx/router-store';
import { MainMenuActionTypes } from '../actions/main-menu.action';


@Injectable()
export class MainMenuEffects {
  @Effect({ dispatch: false })
  navToIntro$: Observable<any> = this.actions$
    .ofType(MainMenuActionTypes.NAV_TO_INTRO)
    .do(_ => {
      this.store.dispatch(go(['/main/intro']))
    });

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
    private router: Router
  ) { }
}
