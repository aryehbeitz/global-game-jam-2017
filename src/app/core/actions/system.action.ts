import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { System } from '../models/system.model';

export const SystemActionTypes = {
  SYSTEM_GET_INFO:  '[System] Get Info',
  SYSTEM_GET_INFO_COMPLETE:  '[System] Get Info Complete',
  SYSTEM_GET_INFO_FAILED:  '[System] Get Info Failed'
};

export class SystemGetInfoAction implements Action {
  type = SystemActionTypes.SYSTEM_GET_INFO;
}

export class SystemGetInfoCompleteAction implements Action {
  type = SystemActionTypes.SYSTEM_GET_INFO_COMPLETE;

  constructor(public payload: { system: System }) { }
}
export class SystemGetInfoFailedAction implements Action {
  type = SystemActionTypes.SYSTEM_GET_INFO_FAILED;
}

export type Actions
  = SystemGetInfoAction
  | SystemGetInfoCompleteAction
  | SystemGetInfoFailedAction;
