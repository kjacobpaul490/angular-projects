import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderBasedProduct } from './gender-based-product';

describe('GenderBasedProduct', () => {
  let component: GenderBasedProduct;
  let fixture: ComponentFixture<GenderBasedProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderBasedProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderBasedProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
