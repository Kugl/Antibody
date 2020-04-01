import { Component, OnInit, Inject, Optional } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EventMessage } from "../core/body";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  eventM: EventMessage = {
    description: "",
    picture: "",
    text: ""
  };

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: EventMessage
  ) {
    this.eventM = data;
  }

  ngOnInit() {}

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
