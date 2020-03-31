import { Component, OnInit } from "@angular/core";
import { interval, timer } from "rxjs";
import { NewsMessage } from "../core/newsTicker";
import { CentralService } from "../services/central.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-newsticker",
  templateUrl: "./newsticker.component.html",
  styleUrls: ["./newsticker.component.scss"]
})
export class NewstickerComponent implements OnInit {
  news: NewsMessage[] = [];

  readonly MINIMUM_OPCAITY = 0.3;
  readonly OPACITY_DECREASE_FACTOR = 10.0;

  constructor(centralService: CentralService, private dialog: MatDialog) {
    this.news = centralService.getGame().newsTicker.news;
  }

  ngOnInit(): void {}

  max = Math.max;

  //Just for testing needs to go elsewhere
  /*openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogComponent, dialogConfig);
  }*/
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        description: "New Outbreak!",
        picture: "aaa",
        Text: "This is the Text!"
      }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
