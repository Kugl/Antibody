import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCardComponent } from './choose-card.component';

describe('ChooseCardComponent', () => {
  let component: ChooseCardComponent;
  let fixture: ComponentFixture<ChooseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
