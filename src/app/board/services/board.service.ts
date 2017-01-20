import { Room } from './../models/room.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
  private displayNames: string[] = ['Room 1', 'Room 2' ,'Room 3', 'Room 4', 'Room 5', 'Room 6', 'Room 7', 'Room 8', 'Room 9', 'Room 10'];

  constructor() { }

  private shuffle(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generateRooms(numberOfRooms: number): Room[] {
    return this.shuffle(this.displayNames)
      .slice(0, numberOfRooms)
      .map((name: string, i: number): Room => ({
          id: i.toString(),
          displayName: name
      }));
  }

}
