import { Character } from './../../models/character.model';
import { Room } from './../../models/room.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ggj-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() room: Room;
  @Input() characters: Character[];

  constructor() { }

  ngOnInit() {
  }

}
