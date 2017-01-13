import { IntroContainer } from './containers/intro/intro.container';
import { LogoPageContainer } from './containers/logo-page/logo-page.container';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MainMenuContainer } from './containers/main-menu/main-menu.container';
import { RoutingModule } from './routing.module';
import { MainMenuAPI } from './api/main-menu.api';
import { MainMenuEffects } from './effects/main-menu.effect';

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  providers: [
    MainMenuAPI,
  ],
  declarations: [
    LogoPageContainer,
    MainMenuContainer,
    IntroContainer
  ]
})
export class MainModule { }
