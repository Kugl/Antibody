import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NewstickerComponent } from "./newsticker.component";
import { AppComponent } from "../app.component";

describe("NewstickerComponent", () => {
  let component: NewstickerComponent;
  let fixture: ComponentFixture<NewstickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NewstickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
