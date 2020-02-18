import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TrangdangnhapComponent } from './trangdangnhap/trangdangnhap.component'
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  declarations: [TrangDangKyComponent, TrangdangnhapComponent],
  exports:[TrangDangKyComponent,TrangdangnhapComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,PipeModule
  ]
})
export class HomeModule { }
