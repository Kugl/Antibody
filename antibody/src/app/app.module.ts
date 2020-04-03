import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//Material
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HandComponent } from "./hand/hand.component";
import { MainViewComponent } from "./main-view/main-view.component";
import { StatusComponent } from "./main-view/status/status.component";
import { NewstickerComponent } from "./newsticker/newsticker.component";
import { CardComponent } from "./hand/card/card.component";
import { DebugViewComponent } from "./debug-view/debug-view.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BackdropComponent } from "./backdrop/backdrop.component";
import { RoundPipe } from "./pipes/round.pipe";
import { DialogComponent } from "./dialog/dialog.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    MainViewComponent,
    StatusComponent,
    NewstickerComponent,
    CardComponent,
    DebugViewComponent,
    NavbarComponent,
    RoundPipe,
    BackdropComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
