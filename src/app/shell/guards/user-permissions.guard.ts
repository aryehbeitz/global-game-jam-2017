import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserPermissionsAction } from '../../core/actions/auth.action';

@Injectable()
export class UserPermissionsGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.store.dispatch(new GetUserPermissionsAction());
    return this.store.select('auth')
        .pluck('permissions')
        .filter(permissions => !!permissions)
        .map(_ => true);
  }
}