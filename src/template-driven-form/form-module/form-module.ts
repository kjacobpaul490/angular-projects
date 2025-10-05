import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-module',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-module.html',
  styleUrl: './form-module.css'
})
export class FormModule {
  user = {
    name: '',
    email: '',
    age: undefined as number | undefined,
    gender: '',
    termsAccepted: false
  };

  submittedData: any | null = null;

  resetFormModel(): void {
    this.user = {
      name: '',
      email: '',
      age: undefined,
      gender: '',
      termsAccepted: false
    };
    this.submittedData = null;
  }

  onSubmit(): void {
    this.submittedData = { ...this.user };
  }
}
