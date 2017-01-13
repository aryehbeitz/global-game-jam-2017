import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class AppUsersResolver implements Resolve<Observable<any>> {
  constructor(
    private store: Store<any>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.store.dispatch(new LoadAppUsersAction({
      
    }));
    return this.store.select('admin', 'users', 'list')
      .filter(list => !!list)
      .first();
  }
}