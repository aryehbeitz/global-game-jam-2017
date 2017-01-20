import { NavToIntroAction } from './../../actions/main-menu.action';
import { InputValidator } from './../../../controls/validators/input-validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppUser } from './../../models/app-user.model';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GoToAppUsersQueryAction } from '../../actions/main-menu.action';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class MainMenuContainer {
  usersForm: FormGroup;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.usersForm = new FormGroup({
      
    })

  }

  startGame() {
    this.store.dispatch(new NavToIntroAction());
  }

  get foundRecordsMapping() {
    return {
      '=0': 'No Users Found',
      '=1': '1 User Found',
      'other': '# Users Found'
    }
  }

  get tableDefs() {
    return [
      {
        name: 'username',
        dislpayName: 'Username'
      },
      {
        name: 'name',
        dislpayName: 'Name'
      },
      {
        name: 'status',
        dislpayName: 'Status'
      },
      {
        name: 'lastLogin',
        dislpayName: 'Last Login'
      },
      {
        name: 'isAdmin',
        dislpayName: 'Admin'
      }
    ];
  }

}
