import { CharacterActionTypes } from './../actions/character.action';
import { Character } from './../models/character.model';
import { Room } from './../models/room.model';
import { Action } from '@ngrx/store';
import { BoardActionTypes } from '../actions/board.action';

export interface State {
    rooms: Room[];
    characters: Character[];
    murdererId: string;
    eliminatedCharacter: Character;
    lives: number;
};

const initialRooms = [];
const initialCharacters = [];

const initialState: State = {
   rooms: initialRooms,
   characters: initialCharacters,
   murdererId: null,
   eliminatedCharacter: null,
   lives: 0
};

export function boardReducer(state: State = initialState, action): State {
    switch (action.type) {
        case BoardActionTypes.SETUP_BOARD:
            return Object.assign({}, state);
        case BoardActionTypes.SETUP_BOARD_COMPLETE:
            return Object.assign({}, state, {
                rooms: action.payload.rooms,
                characters: action.payload.characters,
                murdererId: action.payload.murdererId,
                lives: action.payload.lives
            });
        case CharacterActionTypes.CHANGE_ROOM:
            let changingCharacter = state.characters.find((char: Character) => char.id === action.payload.characterId);
            changingCharacter.roomId = action.payload.targetRoomId;
            return Object.assign({}, state);
        case BoardActionTypes.START_SESSION:
            return Object.assign({}, state, {
                eliminatedCharacter: null
            });
        case BoardActionTypes.ELIMINATE_CHARACTER:
            let eliminatedCharacter = state.characters.find((char: Character) => char.id === action.payload.eliminatedCharacterId);
            eliminatedCharacter && (eliminatedCharacter.disQualified = true);
            return Object.assign({}, state, {
                eliminatedCharacter
            });
        case BoardActionTypes.GUESS_MURDERER:
            state.lives = state.lives - 1;
        case BoardActionTypes.END_SESSION:
            let characterToRemoveIndex = state.characters.findIndex((char: Character) => char.disQualified);
            if (characterToRemoveIndex !== -1) {
                return Object.assign({}, state, {
                    characters: state.characters.slice(0, characterToRemoveIndex).concat(state.characters.slice(characterToRemoveIndex+1))
                });
            }
            return state;
    }
    return state;
};
