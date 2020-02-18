import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HeaderComponent } from './trang-chu/header/header.component';
import { FooterComponent } from './trang-chu/footer/footer.component';
import { CarosuselComponent } from './trang-chu/carosusel/carosusel.component';
import { IndexComponent } from './trang-chu/index/index.component';
import { IndexTitleComponent } from './trang-chu/index/index-title/index-title.component';
import { IndexItemComponent } from './trang-chu/index/index-item/index-item.component';
import { OneWayBidingModule } from './one-way-biding/one-way-biding.module';
import { DirectiveModule } from './directive/directive.module';
import { MydirectiveModule } from './mydirective/mydirective.module';
import { HomeModule } from './home/home.module';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    HeaderComponent,
    FooterComponent,
    CarosuselComponent,
    IndexComponent,
    IndexTitleComponent,
    IndexItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneWayBidingModule,
    DirectiveModule,
    MydirectiveModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
