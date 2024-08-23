import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private httpClient: HttpClient) { }
  code = `
TypeScript
import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html'   

})
export class MyComponent {
  constructor(private myService: MyService)   
 {}
}`;

  code1 = `
TypeScript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  // ...
}`;
  constructorCode = `export class MyComponent {
  constructor(private myService: MyService) { }}`;
}
