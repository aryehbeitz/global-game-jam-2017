import { BoardEffects } from './effects/board.effect';
import { RoomService } from './services/room.service';
import { BoardService } from './services/board.service';
import { CommonModule } from '@angular/common';
import { BoardContainer } from './containers/board/board.container';
import { IntroContainer } from './containers/intro/intro.container';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RoutingModule } from './routing.module';
import { RoomComponent } from './components/room/room.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  imports: [
    SharedModule,
    RoutingModule,
    CommonModule,
    EffectsModule.run(BoardEffects)
  ],
  declarations: [
    IntroContainer,
    BoardContainer,
    RoomComponent,
    CharacterComponent
  ],
  providers: [
    BoardService,
    RoomService
  ]
})
export class BoardModule { }
