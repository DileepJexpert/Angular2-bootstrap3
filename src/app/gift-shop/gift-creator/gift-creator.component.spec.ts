import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCreatorComponent } from './gift-creator.component';

describe('GiftCreatorComponent', () => {
  let component: GiftCreatorComponent;
  let fixture: ComponentFixture<GiftCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
