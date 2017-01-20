import { Character } from './../models/character.model';
import { Room } from './../models/room.model';
import { Action } from '@ngrx/store';
import { BoardActionTypes } from '../actions/board.action';

export interface State {
    rooms: Room[];
    characters: Character[];
};

const initialRooms = [];
const initialCharacters = [];

const initialState: State = {
   rooms: initialRooms,
   characters: initialCharacters
};

export function boardReducer(state: State = initialState, action): State {
    switch (action.type) {
        case BoardActionTypes.SETUP_BOARD:
            return Object.assign({}, state, {});
        case BoardActionTypes.SETUP_BOARD_COMPLETE:
            return Object.assign({}, state, {
                rooms: action.payload.rooms,
                characters: action.payload.characters
            });
    }
    return state;
};
