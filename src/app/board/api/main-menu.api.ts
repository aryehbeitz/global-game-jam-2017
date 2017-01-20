import { ConnectorService } from './../../core/services/connector.service';
import { SecurityService } from './../../core/services/security.service';
import { CachingService } from './../../core/services/caching.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../models/app-user.model';

export interface UsersResponse {
  users: {[key: string]: AppUser };
}

@Injectable()
export class MainMenuAPI {

  constructor(
    private connector: ConnectorService,
    private cache: CachingService
  ) {}

  getSomeCall(): Observable<Array<any>> {
    return this.getCachedResponse('', null, this.deserializeAppUsers);
  }

  getUsers(): Observable<UsersResponse> {
    return this.connector.post('', {})
      .map(this.deserializeAppUsers);
  }

  private getCachedResponse(url: string, params: {} = null, deserializer: (value: Response, index)=>{}) {
    return this.cache.get(url)
      .catch(err => this.cache.store(url, this.connector.get(url, params)).map(deserializer));
  }
  
  private deserializeAppUsers(res: Response): UsersResponse {
    let body = res.json();
    return {
      users: body.results.reduce((acc, user) => {
        acc[user.id] = {
          id: user.id,
          username: user.username,
          name: user.name,
        };
        return acc;
      }, {})
    };
  }
}