import { Room } from './../models/room.model';
import { Character } from './../models/character.model';
import { ArrayExtensionsService } from './../../core/services/array-extensions.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
  private chars: any[] = [
    {
      id:'character1',
      displayName: 'Shlomo'
    },
    {
      id:'character2',
      displayName: 'Yeruham'
    },
    {
      id:'character3',
      displayName: 'Revital'
    },
    {
      id:'character4',
      displayName: 'Avi'
    },
    {
      id:'character5',
      displayName: 'Snoop'
    }
  ];

  constructor(private arrExtensions: ArrayExtensionsService) { }

  generateCharacters(numberOfRooms: number, rooms: Room[]): Character[] {
    return this.arrExtensions.shuffle(this.chars)
      .slice(0, numberOfRooms)
      .map((char: any, i: number): Character => ({
          id: char.id,
          displayName: char.displayName,
          roomId: rooms[Math.floor(Math.random() * rooms.length)].id,
          disQualified: false
      }));
  }
}
