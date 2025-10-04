import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersList } from '../users/users-list/users-list';
import { Caluculator } from '../mathfunction/caluculator/caluculator';
import { PropertyBinding } from '../pages/property-binding/property-binding';
import { GenderBasedProduct } from '../pages/gender-based-product/gender-based-product';	

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    UsersList,Caluculator,PropertyBinding,GenderBasedProduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title:string="First Project";
}
