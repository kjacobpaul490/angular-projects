import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  isDisabled: boolean = true;
  oddNumber: number = 0;
  
  // Data for *ngFor demonstration
  items: string[] = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
  users: {id: number, name: string, role: string}[] = [
    {id: 1, name: 'John Doe', role: 'Admin'},
    {id: 2, name: 'Jane Smith', role: 'User'},
    {id: 3, name: 'Bob Johnson', role: 'Moderator'},
    {id: 4, name: 'Alice Brown', role: 'User'}
  ];
  
  // Data for *ngSwitch demonstration
  currentView: string = 'home';
  userRole: string = 'Admin';
  
  // Data for *ngIf demonstration
  showDetails: boolean = false;
  hasPermission: boolean = true;
  errorMessage: string = '';

  onBlur(event: Event) {
    this.isDisabled = this.oddNumber % 2 === 0;
  }
  
  // Methods for demonstration
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  
  changeView(view: string) {
    this.currentView = view;
  }
  
  setUserRole(role: string) {
    this.userRole = role;
  }
  
  simulateError() {
    this.errorMessage = 'Something went wrong!';
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  
  // TrackBy function for *ngFor performance optimization
  trackByUserId(index: number, user: any): number {
    return user.id;
  }
}
