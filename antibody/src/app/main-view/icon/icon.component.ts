import { Component, OnInit, Input } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent implements OnInit {
  @Input() theNumber: number;
  emptynumber = 0;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.theNumber = this.emptynumber;

    //TODO: Refactor into Icon component
    this.matIconRegistry.addSvgIcon(
      "cust_up",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow-24px.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_up_2x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_up-24px2.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_up_3x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_up-24px3.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_down",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_down-24px.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_down_2x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_down-24px2.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_down_3x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_down-24px3.svg"
      )
    );
  }

  ngOnInit(): void {}
}
