import { Character } from './../../models/character.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ggj-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
