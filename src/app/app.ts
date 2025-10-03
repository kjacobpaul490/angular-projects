import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersList } from '../users/users-list/users-list';
import { Caluculator } from '../mathfunction/caluculator/caluculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    UsersList,Caluculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title:string="First Project";
}
