import { Component, OnInit, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CentralService } from "src/app/services/central.service";
import { Game } from "src/app/core/game";

@Component({
  selector: "app-game-over",
  templateUrl: "./game-over.component.html",
  styleUrls: ["./game-over.component.scss"],
})
export class GameOverComponent implements OnInit {
  inputData: any = {};
  game: Game;
  constructor(
    private dialogRef: MatDialogRef<GameOverComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //this.inputData = data;
  }

  ngOnInit(): void {
    this.game = this.data.game;
  }

  reset() {
    //Attention this is palin Javascript
    location.reload();
  }

  close() {
    this.dialogRef.close();
  }
}
