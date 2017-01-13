import { Action } from '@ngrx/store';
import { Credentials } from '../../core/models/credentials.model';
import { User } from '../../core/models/user.model';

export const AuthActionTypes = {
  AUTHENTICATE:                   '[Auth] Authenticate',
  USER_AUTHENTICATED:             '[Auth] User Authenticated',
  USER_AUTHENTICATION_FAILED:     '[Auth] User Authentication Failed',
  GET_USER:                       '[Auth] Get User',
  GET_USER_COMPLETE:              '[Auth] Get User Complete',
  GET_USER_FAILED:                '[Auth] Get User Failed',
  GET_USER_PERMISSIONS:           '[Auth] Get User Permissions',
  GET_USER_PERMISSIONS_COMPLETE:  '[Auth] Get User Permissions Complete',
  GET_USER_PERMISSIONS_FAILED:    '[Auth] Get User Permissions Failed'
};

export class AuthenticateAction implements Action {
  type = AuthActionTypes.AUTHENTICATE;

  constructor(public payload: Credentials) { }
}

export class UserAuthenticatedAction implements Action {
  type = AuthActionTypes.USER_AUTHENTICATED;

  constructor(public payload: { user: User }) { }
}

export class UserAuthenticationFailedAction implements Action {
  type = AuthActionTypes.USER_AUTHENTICATION_FAILED;

  constructor(public payload: { error: string }) { }
}

export class GetUserAction implements Action {
  type = AuthActionTypes.GET_USER;
}

export class GetUserCompleteAction implements Action {
  type = AuthActionTypes.GET_USER_COMPLETE;

  constructor(public payload: { user }) {}
}

export class GetUserFailedAction implements Action {
  type = AuthActionTypes.GET_USER_FAILED;
}

export class GetUserPermissionsAction implements Action {
  type = AuthActionTypes.GET_USER_PERMISSIONS;
}

export class GetUserPermissionsCompleteAction implements Action {
  type = AuthActionTypes.GET_USER_PERMISSIONS_COMPLETE;

  constructor(public payload: { permissions }) {}
}

export class GetUserPermissionsFailedAction implements Action {
  type = AuthActionTypes.GET_USER_PERMISSIONS_FAILED;
}

export type Actions
  = AuthenticateAction
  | UserAuthenticatedAction
  | UserAuthenticationFailedAction
  | GetUserAction
  | GetUserCompleteAction
  | GetUserFailedAction
  | GetUserPermissionsAction
  | GetUserPermissionsCompleteAction
  | GetUserPermissionsFailedAction;
