import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCounter } from './math-counter';

describe('MathCounter', () => {
  let component: MathCounter;
  let fixture: ComponentFixture<MathCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
