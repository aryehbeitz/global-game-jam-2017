import { MainEffects } from './../main/effects/main.effect';
import { MainMenuComponent, MenuItem } from './components/main-menu/main-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FrameComponent } from './components/frame/frame.component';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RoutingModule } from './routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { ShellEffects } from './effects/shell.effect';


@NgModule({
  declarations: [
    ShellComponent,
    FrameComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    MenuItem
  ],
  imports: [
    SharedModule,
    CoreModule,
    RoutingModule,
    EffectsModule.run(ShellEffects),
    EffectsModule.run(MainEffects)
  ],
  bootstrap: [ShellComponent]
})
export class ShellModule {}
