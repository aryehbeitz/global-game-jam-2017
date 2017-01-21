import { Character } from './../../models/character.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @HostBinding('style.position') position: string = 'absolute';
  // @HostBinding('style.height') height: string = '100%';
  @Input() character: Character;

  constructor() { }

  ngOnInit() {
    this.character.top = (20 + Math.random()*60) + '%';
    this.character.left = (20 + Math.random()*60) + '%';
  }

}
