import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isVisible: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  isActive: boolean = true;
  textColor: string = 'blue';
  code = `*ngIf="expression"`;
  ngfor = `*ngFor="let item of items"`;
  ngclass = `[ngClass]="{'class-name': condition}"`;
  ngstyle = `[ngStyle]="{'style-property': expression}"`;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  changeColor() {
    this.textColor = this.textColor === 'blue' ? 'green' : 'blue';
  }
}
