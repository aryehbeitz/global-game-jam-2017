import { Credentials } from '../models/credentials.model';
import { ConnectorService } from './../../core/services/connector.service';
import { SecurityService } from './../../core/services/security.service';
import { CachingService } from './../../core/services/caching.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../core/models/user.model';
import { PERMISSIONS } from '../../core/constants/permissions';

@Injectable()
export class AuthAPI {

  constructor(
    private connector: ConnectorService,
    private security: SecurityService,
    private cache: CachingService
  ) {}

  /**
   * Authenticates a user by credentials
   */
  authenticate(credentials: Credentials): Observable<any> {
    return this.connector.get(`/user/username/${credentials.username}`)
      .map(this.deserializeUser)
  }

  getUser(): Observable<User> {
    return this.connector.get('/user/username/check')
      .map(this.deserializeUser);
  }

  getUserPermissions(): Observable<any> {
    return this.connector.get('/roles/getUserPermissions')
      .map(this.deserializePermissions);
  }

  logout(): Observable<any> {
    return this.connector.get('application/logout')
  }
  
  private deserializeUser(res: Response) {
    let body = res.json();
    return body;
  }

  private deserializePermissions(res: Response) {
    let permissions = res.json();
    return permissions.reduce((permissionsObj, permission: string) => {
      const perArr = permission.split('_'),
            permissionKey = perArr[0];
      if (permissionsObj[permissionKey] !== PERMISSIONS.UPDATE) {
        permissionsObj[permissionKey] = perArr[1];
      }
      return permissionsObj;
    }, {});
  }

}