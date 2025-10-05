import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  name: string = '';
  email: string = '';
  age: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // Get query parameters
    this.route.queryParams.subscribe(params => {
      debugger;
      this.name = params['name'] || '';
      this.email = params['email'] || '';
      this.age = params['age'] || 0
    });
  }
}
