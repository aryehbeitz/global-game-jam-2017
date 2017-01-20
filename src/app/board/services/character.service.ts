import { Room } from './../models/room.model';
import { Character } from './../models/character.model';
import { ArrayExtensionsService } from './../../core/services/array-extensions.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
  private roomIds: string[] = ['ilan', 'yael', 'tom', 'chen' ,'shay', 'ziv', 'ben', 'zroob', 'yaela', 'sharon', 'ran', 'anonymous'];

  constructor(private arrExtensions: ArrayExtensionsService) { }

  generateCharacters(numberOfRooms: number, rooms: Room[]): Character[] {
    return this.arrExtensions.shuffle(this.roomIds)
      .slice(0, numberOfRooms)
      .map((name: string, i: number): Character => ({
          id: name,
          displayName: name,
          roomId: rooms[Math.floor(Math.random() * rooms.length)].id
      }));
  }
}
