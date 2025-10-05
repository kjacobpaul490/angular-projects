import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin-module';
import { NavBar } from '../layout/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminModule, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
