import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-page',
  imports: [],
  templateUrl: './hook-page.html',
  styleUrl: './hook-page.css'
})
export class HookPage  implements 
OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {

@Input() data!: string;

constructor() {
  console.log('Constructor called');
}

ngOnChanges() {
  console.log('ngOnChanges called');
}

ngOnInit() {
  console.log('ngOnInit called');
}

ngDoCheck() {
  console.log('ngDoCheck called');
}

ngAfterContentInit() {
  console.log('ngAfterContentInit called');
}

ngAfterContentChecked() {
  console.log('ngAfterContentChecked called');
}

ngAfterViewInit() {
  console.log('ngAfterViewInit called');
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked called');
}

ngOnDestroy() {
  console.log('ngOnDestroy called');
}
}
