import { ChildTemplateDirective } from './directives/child-template.directive';
import { PagerComponent } from './components/pager/pager.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CheckInputComponent } from './components/check-input/check-input.component';
import { ButtonInputComponent } from './components/button-input/button-input.component';

const declarations = [
  GridComponent,
  TextInputComponent,
  CheckInputComponent,
  ButtonInputComponent,
  PagerComponent,
  ChildTemplateDirective
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations,
  exports: declarations
})
export class ControlsModule { }
