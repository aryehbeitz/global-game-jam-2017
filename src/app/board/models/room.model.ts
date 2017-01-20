import { Character } from './character.model';

export interface Room {
    id: string;
    displayName: string;
    characters?: Character[];
}