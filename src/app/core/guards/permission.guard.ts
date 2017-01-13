import { Injectable } from '@angular/core';
import { SecurityService } from '../../core/services/security.service';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionGuard implements CanActivate, CanActivateChild {
    constructor(private security: SecurityService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.security.isUserAuthorized(route.data['permissions']);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.security.isUserAuthorized(route.data['permissions']);
    }
}