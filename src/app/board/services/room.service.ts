import { Character } from './../models/character.model';
import { Room } from './../models/room.model';
import { ArrayExtensionsService } from './../../core/services/array-extensions.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {
  private roomIds: string[] = ['room1', 'room2', 'room3', 'room4' ,'room5', 'room6', 'room7'];

  constructor(private arrExtensions: ArrayExtensionsService) { }

  generateRooms(numberOfRooms: number): Room[] {
    return this.arrExtensions.shuffle(this.roomIds)
      .slice(0, numberOfRooms)
      .map((name: string, i: number): Room => {
        return {
          id: name,
          displayName: name,
          characters: []
      }});
  }
}
