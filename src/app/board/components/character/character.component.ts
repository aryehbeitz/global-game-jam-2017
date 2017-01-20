import { Character } from './../../models/character.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @HostBinding('style.position') position: string = 'relative';
  @HostBinding('style.height') height: string = '100%';
  @Input() character: Character;
  top: string = (20 + Math.random()*60) + '%';
  left: string = (20 + Math.random()*60) + '%';

  constructor() { }

  ngOnInit() {
  }

}
