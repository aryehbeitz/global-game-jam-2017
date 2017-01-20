import { SvgUseComponent } from './components/svg-use/svg-use.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { ControlsModule } from '../controls/controls.module';


const declarations: any = [
  SvgUseComponent
];

const reexports: any = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MomentModule,
  ControlsModule
]

const combinedExports: any = reexports.concat(declarations);

@NgModule({
  imports: reexports,
  declarations: declarations,
  exports: combinedExports
})
export class SharedModule { }
