import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { SessionService } from '../../core/services/session.service';
import { AuthAPI } from '../../core/api/auth.api';
import { Observable } from 'rxjs';
import { LOGIN_STATUS } from '../../core/constants/login-status';
import { GetUserAction } from '../../core/actions/auth.action';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/skip';


@Injectable()
export class ProtectedGuard implements CanActivate {
    constructor(
        private store: Store<any>,
        private session: SessionService,
        private auth: AuthAPI
    ) {}

    canActivate() {
        this.store.dispatch(new GetUserAction());
        return this.store.select('auth')
            .pluck('status')
            .filter(status => !!status)
            .map(status => {
                if (status === LOGIN_STATUS.AUTHENTICATED) {
                    return true;
                }
                this.store.dispatch(go(['/public']));
                return false;
            });
    }
}