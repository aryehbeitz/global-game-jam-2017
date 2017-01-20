import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RoutingModule } from './routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { ShellEffects } from './effects/shell.effect';


@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    RoutingModule,
    EffectsModule.run(ShellEffects)
  ],
  bootstrap: [ShellComponent]
})
export class ShellModule {}
