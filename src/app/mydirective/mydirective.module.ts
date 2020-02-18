import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightDirectiveDirective } from './hight-directive.directive';
import { BetterDirectiveDirective } from './better-directive.directive';



@NgModule({
  declarations: [HightDirectiveDirective, BetterDirectiveDirective],
  exports:[HightDirectiveDirective,BetterDirectiveDirective],
  imports: [
    CommonModule
  ]
})
export class MydirectiveModule { }
