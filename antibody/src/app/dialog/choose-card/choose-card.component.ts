import { Component, OnInit, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Game } from "src/app/core/game";
import { Card } from "src/app/core/card";
import { RunnyNoseCard } from "src/app/core/cards/runnyNose";

@Component({
  selector: "app-choose-card",
  templateUrl: "./choose-card.component.html",
  styleUrls: ["./choose-card.component.scss"],
})
export class ChooseCardComponent implements OnInit {
  inputData: any = {};
  cards: Card[] = [];
  game: Game;
  constructor(
    private dialogRef: MatDialogRef<ChooseCardComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //this.inputData = data;
    //add three careds for testing
    this.cards.push(new RunnyNoseCard());
    this.cards.push(new RunnyNoseCard());
    this.cards.push(new RunnyNoseCard());
    //for testing
    //dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.game = this.data.game;
  }

  close() {
    this.dialogRef.close();
  }
}
