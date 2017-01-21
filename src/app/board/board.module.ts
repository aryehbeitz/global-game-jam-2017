import { LoosePageContainer } from './containers/loose-page/loose-page.container';
import { SuccessPageContainer } from './containers/success-page/success-page.container';
import { CharacterService } from './services/character.service';
import { RoomService } from './services/room.service';
import { BoardService } from './services/board.service';
import { CommonModule } from '@angular/common';
import { BoardContainer } from './containers/board/board.container';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { RoomComponent } from './components/room/room.component';
import { CharacterComponent } from './components/character/character.component';
import { SessionEndContainer } from './containers/session-end/session-end.container';

@NgModule({
  imports: [
    SharedModule,
    RoutingModule,
    CommonModule,
  ],
  declarations: [
    BoardContainer,
    RoomComponent,
    CharacterComponent,
    SessionEndContainer,
    SuccessPageContainer,
    LoosePageContainer
  ],
  providers: [
    // BoardService,
    // RoomService,
    // CharacterService
  ]
})
export class BoardModule { }
