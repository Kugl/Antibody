import { Component } from "@angular/core";
import { DebugViewComponent } from "./debug-view/debug-view.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoginComponent } from "./dialog/login/login.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  debug = false;
  title = "antibody";
  logedIn = false;

  constructor(private dialog: MatDialog) {
    this.openDialog();
  }

  enableDebug() {
    this.debug = !this.debug;
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.logedIn = true;
    });
  }
}
