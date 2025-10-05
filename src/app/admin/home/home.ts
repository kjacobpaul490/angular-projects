import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  name: string = '';
  email: string = '';
  age: number = 0;

  constructor(private router: Router) {}

  onSubmit() {
    // Navigate to about page with query parameters
    this.router.navigate(['/admin/about'], {
      queryParams: {
        name: this.name,
        email: this.email,
        age: this.age
      }
    });
  }

  onReset() {
    this.name = '';
    this.email = '';
    this.age = 0;
  }
}
