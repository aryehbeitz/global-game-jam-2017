import { GuessMurdererAction } from './../../actions/board.action';
import { Store } from '@ngrx/store';
import { Character } from './../../models/character.model';
import { Room } from './../../models/room.model';
import { Observable } from 'rxjs';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-board',
  templateUrl: './board.container.html',
  styleUrls: ['./board.container.scss']
})
export class BoardContainer implements OnInit {
  @HostBinding('style.height') roomHeight: string = '100%';
  rooms: Observable<Room[]>;
  characters: Observable<Character[]>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.rooms = this.store.select('board', 'rooms');
    this.characters = this.store.select('board', 'characters');
  }

  getRoomCharacters(roomId) {
    return this.characters
      .map(characters => characters.filter(character => character.roomId === roomId));
  }

  characterChoose(characterId) {
    this.store.dispatch(new GuessMurdererAction({ guessedId: characterId }))
  }

}
