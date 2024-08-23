import { Component } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css'
})
export class DependencyInjectionComponent {
code = `
TypeScript
// Service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  // ...
}

// Component
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
}
