import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftComboComponent } from './gift-combo.component';

describe('GiftComboComponent', () => {
  let component: GiftComboComponent;
  let fixture: ComponentFixture<GiftComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
