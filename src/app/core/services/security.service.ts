import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class SecurityService {

  constructor(private store: Store<any>) {}

  isUserAuthorized(reqPermissions: string[]): Observable<boolean> {
    return Observable.of(true);
  }
}
