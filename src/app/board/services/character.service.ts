import { Room } from './../models/room.model';
import { Character } from './../models/character.model';
import { ArrayExtensionsService } from './../../core/services/array-extensions.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
  private roomIds: string[] = ['character1', 'character2', 'character3', 'character4' ,'character5'];

  constructor(private arrExtensions: ArrayExtensionsService) { }

  generateCharacters(numberOfRooms: number, rooms: Room[]): Character[] {
    return this.arrExtensions.shuffle(this.roomIds)
      .slice(0, numberOfRooms)
      .map((name: string, i: number): Character => ({
          id: name,
          displayName: name,
          roomId: rooms[Math.floor(Math.random() * rooms.length)].id,
          disQualified: false
      }));
  }
}
