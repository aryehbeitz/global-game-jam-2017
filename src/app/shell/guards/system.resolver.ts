import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SystemGetInfoAction } from '../../core/actions/system.action';

@Injectable()
export class SystemResolver implements Resolve<any> {
  constructor(private store: Store<any>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.store.dispatch(new SystemGetInfoAction());
    return true;
    // return this.store.select('system')
    //     .pluck('system')
    //     .skip(1)
    //     .map(system => {
    //       return !!system
    //     });
  }
}