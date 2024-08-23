import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
code = `
html
<form [formGroup]="myForm">
<input type="text" formControlName="username">
<input type="password" formControlName="password">
<button type="submit">Submit</button>
</form>

Binding to HTML:

- [formGroup]: Binds the form group to the HTML element.
- formControlName: Binds a form control to an HTML input element.


Validating form data:
typescript
this.myForm = this.fb.group({
  username: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(6)]]
});

TypeScript
this.myForm.value.username // Accesses the value of the username control`;

reactiveForms = `
TypeScript
import { Component, OnInit, FormBuilder, Validators } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']   

})
export class ReactiveFormComponent implements OnInit   
 {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]   

    });
  }
}`;

templateDrivenForms = `
HTML
<form #myForm="ngForm">
  <input type="text" name="name" required>
  <input type="email" name="email" required email>
  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>`;
}
