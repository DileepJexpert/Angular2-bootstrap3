import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftShopComponent } from './gift-shop.component';

describe('GiftShopComponent', () => {
  let component: GiftShopComponent;
  let fixture: ComponentFixture<GiftShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
