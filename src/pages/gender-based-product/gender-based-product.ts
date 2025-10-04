import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gender-based-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './gender-based-product.html',
  styleUrl: './gender-based-product.css'
})
export class GenderBasedProduct {
  selectedGender: string = 'male'; // Default to male
  selectedProduct: string = '';
  constructor() {
    this.selectedGender = 'male';
    this.selectedProduct = '';
 
  }
  
  productList = [
    { Name: 'Shaving kit', Gender: 'male', Category: 'premium' },
    { Name: 'Mens watch', Gender: 'male', Category: 'premium' },
    { Name: 'bike', Gender: 'male', Category: 'premium' },
    { Name: 'Mens perfume', Gender: 'male', Category: 'normal' },
    { Name: 'Kajal', Gender: 'female', Category: 'normal' },
    { Name: 'Hair strigntner', Gender: 'female', Category: 'premium' },
    { Name: 'hand bag', Gender: 'female', Category: 'normal' },
    { Name: 'saree', Gender: 'female', Category: 'normal' }
  ];

  getFilteredProducts() {
    debugger;
    return this.productList.filter(product => product.Gender === this.selectedGender);
  }
}
