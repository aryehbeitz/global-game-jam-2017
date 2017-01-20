import { Room } from './../models/room.model';
import { Action } from '@ngrx/store';
import { BoardActionTypes } from '../actions/board.action';

export interface State {
    rooms: Room[];
};

const initialRooms = [
    {
        id: '1',
        displayName: 'Room 1',
        characters: [
            {
                id: 'character1',
                displayName: 'Chaaracter 1'
            },
            {
                id: 'character2',
                displayName: 'Chaaracter 2'
            }
        ]
    },
    {
        id: '2',
        displayName: 'Room 2',
        characters: [
            {
                id: 'character3',
                displayName: 'Chaaracter 3'
            },
            {
                id: 'character4',
                displayName: 'Chaaracter 4'
            }
        ]
    },
    {
        id: '3',
        displayName: 'Room 3',
        characters: [
            {
                id: 'character5',
                displayName: 'Chaaracter 5'
            }
        ]
    },
    {
        id: '4',
        displayName: 'Room 4',
        characters: [
            
        ]
    },
    {
        id: '5',
        displayName: 'Room 5',
        characters: [
            {
                id: 'character6',
                displayName: 'Chaaracter 6'
            },
            {
                id: 'character7',
                displayName: 'Chaaracter 7'
            },
            {
                id: 'character8',
                displayName: 'Chaaracter 8'
            }
        ]
    },
    {
        id: '6',
        displayName: 'Room 6',
        characters: [
            
        ]
    }
];

const initialState: State = {
   rooms: initialRooms
};

export function boardReducer(state: State = initialState, action): State {
    switch (action.type) {
        case BoardActionTypes.SETUP_BOARD:
            return Object.assign({}, state, {});
    }
    return state;
};
