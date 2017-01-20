import { InputValidator } from './../../../controls/validators/input-validator';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DelayedNavigationAction } from '../../actions/main.action';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class LogoPageContainer {
  constructor(
    private store: Store<any>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new DelayedNavigationAction({ 
      delay: 2000,
      navigateTo: ['main', 'main-menu']
    })); 
  }
}
