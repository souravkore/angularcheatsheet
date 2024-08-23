import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {
code = `
TypeScript
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html'
})
export class MyComponent implements OnInit, OnChanges, OnDestroy {
  // ...

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}`;
}
