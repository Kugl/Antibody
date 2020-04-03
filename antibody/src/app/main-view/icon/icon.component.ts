import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"]
})
export class IconComponent implements OnInit {
  @Input() theNumber: number;
  emptynumber = 0;

  constructor() {
    this.theNumber = this.emptynumber;
  }

  ngOnInit(): void {}
}
