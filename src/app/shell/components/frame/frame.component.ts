import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleMenuAction, LogoutAction } from '../../actions/shell.action';
import { menuConfig } from './menu.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  menuToggleState: Observable<string>;
  menu: Array<any>;
  systemInfo: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.menuToggleState = this.store.select('shell')
      .pluck('isThinMenu')
      .map(isThin => isThin ? 'thin' : 'wide');
    this.systemInfo = this.store.select('system')
      .pluck('system');
    this.menu = menuConfig;
  }

  get buildVersion() {
    return this.systemInfo
      .map(system => system ? `${system.buildVersion}-${system.buildRevision}` : '');
  }

  toggleMenu() {
    this.store.dispatch(new ToggleMenuAction());
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

}
