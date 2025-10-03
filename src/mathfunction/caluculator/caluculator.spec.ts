import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caluculator } from './caluculator';

describe('Caluculator', () => {
  let component: Caluculator;
  let fixture: ComponentFixture<Caluculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caluculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caluculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
