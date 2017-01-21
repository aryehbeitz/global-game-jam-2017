import { MainEffects } from './effects/main.effect';
import { IntroContainer } from './containers/intro/intro.container';
import { LogoPageContainer } from './containers/logo-page/logo-page.container';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MainMenuContainer } from './containers/main-menu/main-menu.container';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  providers: [
  ],
  declarations: [
    LogoPageContainer,
    MainMenuContainer,
    IntroContainer
  ]
})
export class MainModule { }
