import { SuccessPageContainer } from './containers/success-page/success-page.container';
import { SessionEndContainer } from './containers/session-end/session-end.container';
import { RoomsResolver } from './guards/rooms.resolver';
import { BoardContainer } from './containers/board/board.container';
import { LogoPageContainer } from './containers/logo-page/logo-page.container';
import { MainMenuContainer } from './containers/main-menu/main-menu.container';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppUsersMetaResolver } from './guards/app-users-meta.resolver';
import { PermissionGuard } from '../core/guards/permission.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'rooms',
            resolve: {
              rooms: RoomsResolver
            },
            component: BoardContainer
            
          },
          {
            path: 'session-end',
            component: SessionEndContainer
            
          },
          {
            path: 'success-page',
            component: SuccessPageContainer
            
          }
        ]
      },
      { path: '**', redirectTo: 'rooms' }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RoomsResolver
  ]
})
export class RoutingModule { }
