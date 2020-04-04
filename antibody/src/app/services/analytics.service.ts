import { Injectable } from "@angular/core";

declare let ga: Function; // Declare ga as a function

@Injectable({ providedIn: "root" })
export class GoogleAnalyticsService {
  constructor() {}

  gtag(event: Object) {
    (<any>window).dataLayer.push(event);
  }
}
