import { FrameComponent } from './components/frame/frame.component';
import { ProtectedGuard } from './guards/protected.guard';
import { PermissionGuard } from '../core/guards/permission.guard';
import { UserPermissionsGuard } from './guards/user-permissions.guard';
import { SystemResolver } from './guards/system.resolver';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'main',
        loadChildren: '../main/main.module#MainModule'
      },
      { path: '**', redirectTo: '/main' }
    ])
  ],
  providers: [
    ProtectedGuard,
    UserPermissionsGuard,
    SystemResolver,
  ],
  exports: [
    RouterModule,
  ]
})
export class RoutingModule { }
