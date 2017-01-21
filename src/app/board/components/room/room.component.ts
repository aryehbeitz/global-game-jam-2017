import { Character } from './../../models/character.model';
import { Room } from './../../models/room.model';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'ggj-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  animations: [
    trigger('characterEnterLeave', [
      // transition(':leave', [style({ transform: 'scale(1)', 'transition-origin': 'center center' }), animate(1000)]),
      transition(':enter', [style({ transform: 'scale(0)', 'transition-origin': 'center center' }), animate(1000)])
    ])
  ]
})
export class RoomComponent implements OnInit {
  @Input() room: Room;
  @Input() characters: Character[];

  constructor() { }

  ngOnInit() {
  }

}
