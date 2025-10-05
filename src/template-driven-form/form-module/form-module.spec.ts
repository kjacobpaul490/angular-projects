import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModule } from './form-module';

describe('FormModule', () => {
  let component: FormModule;
  let fixture: ComponentFixture<FormModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
