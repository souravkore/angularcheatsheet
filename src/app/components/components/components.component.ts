import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {
  parentData: string = 'From Parent';
  childData: string = 'From Child';
  lifecyclehooks = 
  `export class MyComponent implements OnInit, OnDestroy {
    ngOnInit() {
      console.log('Component initialized');
    }

    ngOnDestroy() {
      console.log('Component destroyed');
    }
  }`;
  code = `
TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css']
})
export class MyComponent   
 {
  // ...
}`;

codeHTML = `
<app-my-component></app-my-component>`;

  onNotify(event: any) {
    alert('Notification received: ' + event);
  }
}
