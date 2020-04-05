import { Component, OnInit, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-game-over",
  templateUrl: "./game-over.component.html",
  styleUrls: ["./game-over.component.scss"],
})
export class GameOverComponent implements OnInit {
  inputData: any = {};
  constructor(
    private dialogRef: MatDialogRef<GameOverComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //this.inputData = data;
  }

  ngOnInit(): void {}

  reset() {
    //Attention this is palin Javascript
    location.reload();
  }

  close() {
    this.dialogRef.close();
  }
}
