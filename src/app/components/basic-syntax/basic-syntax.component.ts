import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-syntax',
  templateUrl: './basic-syntax.component.html',
  styleUrl: './basic-syntax.component.css'
})
export class BasicSyntaxComponent {
  message: string = "Hello, Angular!";
  name: string = "Welcome Dost";
  curlybraces = `'{{ }}'`;

  handleClick() {
    alert('Button Clicked!');
  }
}
