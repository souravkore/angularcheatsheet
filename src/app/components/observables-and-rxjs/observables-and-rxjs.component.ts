import { Component } from '@angular/core';

@Component({
  selector: 'app-observables-and-rxjs',
  templateUrl: './observables-and-rxjs.component.html',
  styleUrl: './observables-and-rxjs.component.css'
})
export class ObservablesAndRxjsComponent {
code = `
TypeScript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector:   
 'app-my-component',
  templateUrl: './my-component.html'
})
export class MyComponent implements OnInit {
  users$: Observable<any>;

  constructor(private   
 http: HttpClient) {}

  ngOnInit() {
    this.users$ = this.http.get('https://api.example.com/users');
  }
}`;
}
