import { Room } from './../models/room.model';
import { SetupBoardAction } from './../actions/board.action';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class RoomsResolver implements Resolve<Observable<any>> {
  constructor(
    private store: Store<any>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // this.store.dispatch(new SetupBoardAction());
    return this.store.select('board', 'rooms')
      .filter((rooms: Room[]) => !!rooms.length)
      .first();
  }
}