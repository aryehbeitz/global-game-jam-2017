import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

export const animations = [
    trigger('menuToggle', [
        state('thin', style({
            width: '45px'
        })),
        state('wide', style({
            width: '230px'
        })),
        transition('thin <=> wide', animate('100ms ease-in'))
    ])
]