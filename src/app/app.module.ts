//import { PhotoBoardComponent } from './shared/components/photo-board/photo-board.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListModule } from './components/photo-list/photo-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PhotoListModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
