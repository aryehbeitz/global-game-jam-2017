import { Character } from './../../models/character.model';
import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes } from '@angular/core';

@Component({
  selector: 'ggj-character',
  template: `
    <div class="character-container" (click)="characterClick()">
      <svg class="graphics" [icon]="character.id"/>
    </div>
  `,
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @HostBinding('style.position') position: string = 'absolute';
  // @HostBinding('style.height') height: string = '100%';
  @Input() character: Character;
  @Output() choose: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.character.top = (20 + Math.random()*60) + '%';
    this.character.left = (20 + Math.random()*60) + '%';
  }

  characterClick() {
    this.choose.emit(this.character.id);
  }

}
