import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewaybidingComponent } from './onewaybiding/onewaybiding.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [OnewaybidingComponent],
  exports:[OnewaybidingComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class OneWayBidingModule { }
