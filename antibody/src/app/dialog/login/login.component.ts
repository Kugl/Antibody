import { Component, OnInit, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  inputData: any = {};

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //Prevents closing by clicking outside the dialog
    dialogRef.disableClose = true;
    //this.inputData = data;
    //Close immidiately for Testing
    //this.close();
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
