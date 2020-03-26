import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HandComponent } from './hand/hand.component';
import { MainViewComponent } from './main-view/main-view.component';
import { StatusComponent } from './main-view/status/status.component';
import { NewstickerComponent } from './newsticker/newsticker.component';
import { CardComponent } from './hand/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    MainViewComponent,
    StatusComponent,
    NewstickerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
