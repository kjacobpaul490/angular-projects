import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn, FormArray, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-form-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage {
  profileForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group(
      {
        username: this.formBuilder.control(
          '',
          {
            validators: [Validators.required, Validators.minLength(3)],
            asyncValidators: [this.usernameAvailableValidator()],
            updateOn: 'blur'
          }
        ),
        email: this.formBuilder.control('', [Validators.required, Validators.email]),
        age: this.formBuilder.control<number | null>(null, [Validators.required, Validators.min(1), Validators.max(120)]),
        gender: this.formBuilder.control('', [Validators.required]),
        password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: this.formBuilder.control('', [Validators.required]),
        terms: this.formBuilder.control(false, [Validators.requiredTrue]),
        address: this.formBuilder.group({
          street: this.formBuilder.control('', [Validators.required]),
          city: this.formBuilder.control('', [Validators.required]),
          zip: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[0-9]{5}$/)])
        }),
        skills: this.formBuilder.array<string>([])
      },
      { validators: [this.passwordsMatchValidator()] }
    );
  }

  get username(): AbstractControl | null { return this.profileForm.get('username'); }
  get email(): AbstractControl | null { return this.profileForm.get('email'); }
  get age(): AbstractControl | null { return this.profileForm.get('age'); }
  get gender(): AbstractControl | null { return this.profileForm.get('gender'); }
  get password(): AbstractControl | null { return this.profileForm.get('password'); }
  get confirmPassword(): AbstractControl | null { return this.profileForm.get('confirmPassword'); }
  get terms(): AbstractControl | null { return this.profileForm.get('terms'); }
  get address(): AbstractControl | null { return this.profileForm.get('address'); }
  get street(): AbstractControl | null { return this.profileForm.get('address.street'); }
  get city(): AbstractControl | null { return this.profileForm.get('address.city'); }
  get zip(): AbstractControl | null { return this.profileForm.get('address.zip'); }
  get skills(): FormArray { return this.profileForm.get('skills') as FormArray; }

  addSkill(): void {
    this.skills.push(this.formBuilder.control('', { validators: [Validators.required, Validators.minLength(2)] }));
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    // In a real app, send this.profileForm.value to API
    console.log('Submitted', this.profileForm.value);
  }

  reset(): void {
    this.profileForm.reset();
    while (this.skills.length) {
      this.skills.removeAt(0);
    }
  }

  private passwordsMatchValidator() {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirm = group.get('confirmPassword')?.value;
      if (password && confirm && password !== confirm) {
        return { passwordsMismatch: true };
      }
      return null;
    };
  }

  private usernameAvailableValidator(): AsyncValidatorFn {
    const unavailable = new Set(['admin', 'root', 'test']);
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const value = String(control.value || '').toLowerCase();
      // Simulate server latency
      return of(value).pipe(
        delay(600),
        map(v => (v && unavailable.has(v) ? { usernameTaken: true } : null))
      );
    };
  }
}
